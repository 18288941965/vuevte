<template>
  <header class="admin-header">
    <div class="theme2-top theme-header-ht__top">
      <admin-logo
        class="theme-header-ht__top"
        :bottom-border="false"
        :menu-collapse="false"
        :module-icon="moduleIcon"
        :module-label="moduleLabel"
      />

      <div class="empty-flex"></div>

      <app-search />

      <app-theme class="mgl-medium" />

      <user-avatar
        bg-color="#4385F4"
        icon-color="#ffffff"
      />
    </div>
    <div
      class="theme2-nav theme-header-ht__nav"
      :class="{'menu-collapse' : menuCollapse}"
    >
      <div
        class="theme2-nav__left"
        :class="{'theme2-nav__left__hidden' : menuCollapse}"
      >
        <el-tooltip
          content="选择打开的菜单"
          placement="bottom-start"
          :enterable="false"
          :show-after="500"
        >
          <button
            data-hidden="true"
            class="header-btn"
            @click="menuOpen"
          >
            <Adjust />
          </button>
        </el-tooltip>

        <button
          data-hidden="false"
          class="header-btn menu-collapse-icon"
          @click="setMenuCollapse"
        >
          <MenuOpen
            :size="24"
            :class="{'icon-rotate' : menuCollapse }"
          />
        </button>
      </div>

      <nav class="theme2-nav__right">
        <ul>
          <li class="nav-placeholder-prev" />
          <template
            v-for="(menu, index) in activeMenus.menus"
            :key="'header-menu-' + index"
          >
            <li
              v-if="menu.url"
              class="nav-item-li"
              :class="{'header-menu-active': menu.id === activeMenus.menuId }"
              @click.stop="pushRouter(menu)"
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
          
          <li class="nav-placeholder-next" />
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import AdminLogo from '../logo/admin-logo.vue'
import {ActiveMenus, MenuBean} from '../../../interface/menuInterface'
import AppSearch from '../../../app-search.vue'
import AppTheme from '../../../app-theme.vue'
import UserAvatar from '../../../components/avatar/user-avatar.vue'
import {
  MenuOpen,
  Adjust,
  Close
} from '../../../components/svicon/publicIcon'
import showContext from '../../../context/showContext'

export default defineComponent({
  name: 'AdminHeader2',
  components: {
    AdminLogo,
    AppSearch,
    AppTheme,
    UserAvatar,
    MenuOpen,
    Adjust,
    Close
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
@use "../../../assets/scssscoped/admin/admin-header2";
</style>