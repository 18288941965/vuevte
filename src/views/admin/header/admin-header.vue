<template>
  <header class="admin-header">
    <button
      class="header-btn-dft menu-collapse-icon"
      @click="setMenuCollapse"
    >
      <MenuOpen
        :size="24"
        :class="{'icon-rotate' : menuCollapse }"
      />
    </button>

    <el-tooltip content="定位菜单">
      <button
        class="header-btn-dft"
        @click="menuOpen"
      >
        <Adjust />
      </button>
    </el-tooltip>

    <div
      v-show="activeMenus.menus.length > 0"
      class="header-menu-card"
    >
      <button
        class="header-btn-down"
        @click="setPanelShow(undefined, $event)"
      >
        <span>{{ getMenuLabel }}</span>
        <ArrowDropDown />
      </button>

      <div
        v-show="panelShow"
        class="header-menu-panel"
      >
        <div class="menu-panel-content card-scroll">
          <ul>
            <li
              v-for="(menu, index) in activeMenus.menus"
              :key="'header-menu-' + index"
              class="menu-item"
              :class="{'header-menu-active': menu.id === activeMenus.menuId }"
              @click.stop="pushRouter(menu)"
            >
              <span>{{ menu.label }}</span>
              <span :class="{'menu-cache' : menu.cache}" />
            </li>
          </ul>

          <button
            v-if="activeMenus.menus.length > 1"
            class="header-menu-clean-btn"
            @click="cleanHistory"
          >
            清空历史
          </button>
        </div>
      </div>
    </div>

    <app-search />

    <app-theme class="mgl-auto" />

    <avatar-card
      bg-color="#4385F4"
      icon-color="#ffffff"
    />
  </header>
</template>

<script lang="ts">
import {defineComponent, PropType, computed} from 'vue'
import {ActiveMenus, MenuBean} from '../../../interface/menuInterface'
import AvatarCard from '../../../components/avatar/avatar-card.vue'
import {
  Adjust,
  ArrowDropDown,
  MenuOpen
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
    AvatarCard
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
  @use "../../../assets/scssscoped/admin/admin-header";
</style>