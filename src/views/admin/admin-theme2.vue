<template>
  <div class="admin-theme">
    <admin-header2
      class="theme-header-ht"
      :module-icon="rootMenu.icon"
      :module-label="rootMenu.label"
      :menu-collapse="menuCollapse"
      :active-menus="activeMenus"
      @push-router="pushRouter"
    />

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
            class="button-icon"
            @click="menuOpen"
          >
            <Adjust />
          </button>
        </el-tooltip>

        <button
          data-hidden="false"
          class="button-icon menu-collapse-icon"
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
    
    <main
      id="admin-theme-main"
      class="main-grid"
      style="--sticky-pane-height: calc(100vh - var(--header-nav-height));"
      :class="{'menu-collapse' : menuCollapse}"
    >
      <div
        class="theme-left-wrapper"
        style="height: var(--sticky-pane-height);"
      >
        <admin-menu
          ref="adminThemeMenuRef"
          :collapse="menuCollapse"
          :menu-id="activeMenus.menuId.toString()"
          @push-router="pushRouter"
          @set-parent-menu="setParentMenu"
        />
      </div>

      <router-view v-slot="{ Component }">
        <keep-alive :include="keepAliveInclude">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, onUnmounted} from 'vue'
import AdminMenu from './menu/admin-menu.vue'
import {MenuBean} from '../../interface/menuInterface'
import {MenuStatusContext} from '../../context/menuContext'
import AdminHeader2 from './header/admin-header2.vue'
import {themeBaseContext, updateBrowserTitle} from './adminThemeBase'
import {
  Adjust,
  MenuOpen,
  Close
} from '../../components/svicon/publicIcon'
import {handleMenuScroll} from '../../context/stickyContext'

export default defineComponent({
  name: 'AdminTheme2',
  components: {
    AdminMenu,
    AdminHeader2,
    Adjust,
    MenuOpen,
    Close
  },
  setup () {
    const {
      router,
      rootMenu,
      setParentMenu
    } = themeBaseContext()

    const adminThemeMenuRef = ref()
    const {
      activeMenus,
      menuCollapse,
      setMenuCollapse,
      updateActiveMenus,
      keepAliveInclude,
      updateKeepAliveInclude
    } = MenuStatusContext()

    const pushRouter = async (menu: MenuBean) => {
      if (menu.cache && menu.name) {
        updateKeepAliveInclude(menu.name)
      }
      // 刷新页面相同路由页面执行此方法，这里没有做判断，因为同一地址框架默认不会再重复加载
      await router.push(menu.url as string)
      updateActiveMenus(menu)
      updateBrowserTitle(`${menu.label as string} • ${rootMenu.label}`)
    }

    const menuOpen = (index: string) => {
      adminThemeMenuRef.value?.menuOpen(index)
    }

    const cleanHistory = () => {
      updateKeepAliveInclude(keepAliveInclude.value[0] as string, true)
      updateActiveMenus(activeMenus.menus[0], true)
    }

    onMounted(() => {
      window.addEventListener('scroll', handleMenuScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleMenuScroll)
    })

    return {
      rootMenu,
      adminThemeMenuRef,
      activeMenus,
      menuCollapse,
      setMenuCollapse,
      keepAliveInclude,

      setParentMenu,
      pushRouter,
      menuOpen,
      cleanHistory
    }
  }
})
</script>

<style>
@import "../../assets/css/var/theme-dark.css";
@import "../../assets/css/var/theme-light.css";
</style>
<style lang="scss">
@use "../../assets/scss/components/theme-button";
</style>
<style lang="scss">
@use "../../assets/scssscoped/admin/admin-theme2";
</style>