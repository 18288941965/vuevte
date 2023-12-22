<template>
  <header class="admin-header">
    <div style="min-width: var(--nav-width)">
      <admin-logo
        class="theme-header-ht"
        :menu-collapse="menuCollapse"
        :module-icon="moduleIcon"
        :module-label="moduleLabel"
        :bottom-border="false"
      />
    </div>

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
            <template
              v-for="(menu, index) in activeMenus.menus"
              :key="'li-0-' + index"
            >
              <li
                v-if="menu.url"
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
            </template>
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

    <div class="empty-flex" />

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
  ArrowDropDown,
  Close
} from '../../../components/svicon/publicIcon'
import showContext from '../../../context/showContext'
import AppTheme from '../../../app-theme.vue'
import AppSearch from '../../../app-search.vue'
import AdminLogo from '../logo/admin-logo.vue'

export default defineComponent({
  name: 'AdminHeader',
  components: {
    AppTheme,
    ArrowDropDown,
    AppSearch,
    UserAvatar,
    Close,
    AdminLogo
  },
  props: {
    menuCollapse: {
      type: Boolean,
      default: false
    },
    moduleIcon: {
      type: String,
      default: undefined
    },
    moduleLabel: {
      type: String,
      default: undefined
    },
    activeMenus: {
      type: Object as PropType<ActiveMenus>,
      required: true
    }
  },
  emits: ['push-router', 'clean-history'],
  setup (props, {emit}) {
    const {
      panelShow,
      setPanelShow
    } = showContext()

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

    const cleanHistory = () => {
      emit('clean-history')
    }

    return {
      panelShow,
      setPanelShow,

      cleanHistory,
      
      getMenuLabel,
      pushRouter
    }
  }
})
</script>

<style scoped lang="scss">
  @use "../../../assets/scssscoped/admin/admin-header-public";
  @use "../../../assets/scssscoped/admin/admin-header";
</style>