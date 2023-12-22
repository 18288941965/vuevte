<template>
  <header class="admin-header">
    <div style="width: var(--nav-width);border-right: var(--border-1);height: 100%;">
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
      <div class="active-menu-history">
        <button
          @click="setPanelShow(undefined, $event)"
        >
          <Schedule />
          <ArrowDropDown :size="20" />
        </button>
      </div>

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

    <div class="button-group">
      <button>
        <Star />
      </button>
      <span />
      <button>
        <ArrowDropDown :size="20" />
      </button>
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
import {defineComponent, PropType} from 'vue'
import {ActiveMenus, MenuBean} from '../../../interface/menuInterface'
import UserAvatar from '../../../components/avatar/user-avatar.vue'
import {
  Schedule,
  ArrowDropDown,
  Close,
  Star,
  StarFill
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
    Schedule,
    Close,
    AdminLogo,
    Star,
    StarFill
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
      
      pushRouter
    }
  }
})
</script>

<style scoped lang="scss">
  @use "../../../assets/scssscoped/admin/admin-header-public";
  @use "../../../assets/scssscoped/admin/admin-header";
</style>