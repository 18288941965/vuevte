<template>
  <header class="admin-header">
    <admin-logo
      class="theme-header-ht bd-rt"
      :menu-collapse="menuCollapse"
      :module-icon="moduleIcon"
      :module-label="moduleLabel"
      :bottom-border="false"
    />

    <div class="header-action">
      <details
        id="admin-header-details"
        class="header-menu"
      >
        <summary class="button-history">
          <Schedule />
          <ArrowDropDown :size="20" />
        </summary>
        <div
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
      </details>

      <div class="button-group mgl-medium">
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
    </div>
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
  Star
} from '../../../components/svicon/publicIcon'
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
    Star
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
    
    const pushRouter = (menu: MenuBean) => {
      if (menu.id === props.activeMenus?.menuId) {
        return
      }
      emit('push-router', menu)
    }

    const cleanHistory = () => {
      emit('clean-history')
    }

    return {
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