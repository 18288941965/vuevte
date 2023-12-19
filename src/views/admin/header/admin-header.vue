<template>
  <header class="admin-header">
    <el-tooltip content="展开所有菜单">
      <button
        class="header-btn mgl-medium"
        @click="menuOpen"
      >
        <ExpandAll />
      </button>
    </el-tooltip>

    <el-tooltip content="折叠所有菜单">
      <button
        class="header-btn"
        @click="menuOpen"
      >
        <CollapseAll />
      </button>
    </el-tooltip>

    <el-tooltip content="找到当前菜单">
      <button
        class="header-btn"
        @click="menuOpen"
      >
        <Adjust />
      </button>
    </el-tooltip>

    <button
      class="header-btn menu-collapse-icon"
      @click="setMenuCollapse"
    >
      <MenuOpen
        :size="24"
        :class="{'icon-rotate' : menuCollapse }"
      />
    </button>

    <div
      v-show="activeMenus.menus.length > 0"
      class="header-menu"
    >
      <button
        class="header-menu-btn"
        @click="setPanelShow(undefined, $event)"
      >
        <span>{{ getMenuLabel }}</span>
        <ArrowDropDown />
      </button>

      <div
        v-show="panelShow"
        class="header-menu-panel"
      >
        <nav class="header-menu-panel__body card-scroll">
          <ul>
            <li
              v-for="(menu, index) in activeMenus.menus"
              :key="'li-0-' + index"
            >
              <router-link
                class="nav-item"
                :class="{'header-menu-dot' : menu.cache}"
                :to="menu.url"
                @click.stop="pushRouter(menu)"
              >
                <span>{{ menu.label }}</span>
                <button @click.stop="null">
                  <Close :size="14" />
                </button>
              </router-link>
            </li>
          </ul>
        </nav>

        <footer class="header-menu-panel__footer">
          <button
            v-if="activeMenus.menus.length > 1"
            @click="cleanHistory"
          >
            清空历史
          </button>
        </footer>
      </div>
    </div>

    <div style="flex: 1" />

    <app-search />

    <app-theme class="mgl-medium" />

    <user-avatar
      bg-color="#4385F4"
      icon-color="#ffffff"
    />
  </header>
</template>

<script lang="ts">
import {defineComponent, PropType, computed} from 'vue'
import {ActiveMenus, MenuBean} from '../../../interface/menuInterface'
import UserAvatar from '../../../components/avatar/user-avatar.vue'
import {
  Adjust,
  ArrowDropDown,
  MenuOpen,
  ExpandAll,
  CollapseAll,
  Close
} from '../../../components/svicon/publicIcon'
import showContext from '../../../context/showContext'
import AppTheme from '../../../app-theme.vue'
import AppSearch from '../../../app-search.vue'

export default defineComponent({
  name: 'AdminHeader',
  components: {
    AppTheme,
    Adjust,
    ArrowDropDown,
    MenuOpen,
    AppSearch,
    UserAvatar,
    ExpandAll,
    CollapseAll,
    Close
  },
  props: {
    menuCollapse: {
      type: Boolean,
      default: false
    },
    activeMenus: {
      type: Object as PropType<ActiveMenus>,
      required: true
    }
  },
  emits: ['set-menu-collapse', 'push-router', 'menu-open', 'clean-history'],
  setup (props, {emit}) {
    const {
      panelShow,
      setPanelShow
    } = showContext()

    const setMenuCollapse = () => {
      emit('set-menu-collapse', !props.menuCollapse)
    }

    const getMenuLabel = computed(() => {
      if (!props.activeMenus.menuId || !props.activeMenus.menus) {
        return ''
      }
      const menuBean = props.activeMenus.menus.find(item => item.id === props.activeMenus.menuId)
      return menuBean ? menuBean.label : ''
    })

    const pushRouter = (menu: MenuBean) => {
      setPanelShow(false)
      if (menu.id === props.activeMenus?.menuId) {
        return
      }
      emit('push-router', menu)
    }

    const menuOpen = () => {
      if (props.activeMenus?.menuId) {
        emit('menu-open', props.activeMenus.menuId)
      }
    }

    const cleanHistory = () => {
      emit('clean-history')
    }

    return {
      panelShow,
      setPanelShow,

      cleanHistory,
      
      setMenuCollapse,
      getMenuLabel,
      pushRouter,
      menuOpen
    }
  }
})
</script>

<style scoped lang="scss">
  @use "../../../assets/scssscoped/admin/admin-header-public";
  @use "../../../assets/scssscoped/admin/admin-header";
</style>