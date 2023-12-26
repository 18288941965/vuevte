<template>
  <div class="admin-theme">
    <admin-header2
      class="layout-base theme-header-ht"
      :module-icon="rootMenu.icon"
      :module-label="rootMenu.label"
      :active-menus="activeMenus"
      @push-router="pushRouter"
    />

    <nav
      v-if="menus && menus.length > 0"
      class="admin-theme__nav"
    >
      <ul>
        <template
          v-for="(menu, index) in menus[0].children"
          :key="'li-3-' + index"
        >
          <li
            v-if="menu.url"
          >
            <router-link
              class="nav-item"
              :to="menu.url"
              @click="pushRouter(menu)"
            >
              <span>{{ menu.label }}</span>
            </router-link>
          </li>
        </template>
      </ul>
    </nav>

    <div class="theme-content">
      <router-view v-slot="{ Component }">
        <keep-alive :include="keepAliveInclude">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import AdminMenu from './menu/admin-menu.vue'
import {MenuBean} from '../../interface/menuInterface'
import {MenuContext, MenuStatusContext} from '../../context/menuContext'
import AdminHeader2 from './header/admin-header2.vue'
import {themeBaseContext, updateBrowserTitle} from './adminThemeBase'

export default defineComponent({
  name: 'AdminTheme3',
  components: {
    AdminMenu,
    AdminHeader2
  },
  setup () {
    const {
      router,
      rootMenu,
      setParentMenu
    } = themeBaseContext()

    const {
      menus,
      getMenus
    } = MenuContext()

    const {
      activeMenus,
      updateActiveMenus,
      keepAliveInclude,
      updateKeepAliveInclude
    } = MenuStatusContext()

    const pushRouter = async (menu: MenuBean) => {
      if (menu.cache && menu.name) {
        updateKeepAliveInclude(menu.name)
      }
      updateActiveMenus(menu)
      updateBrowserTitle(`${menu.label as string} • ${rootMenu.label}`)
    }

    onMounted(() => {
      const routerPath =  router.currentRoute.value.path
      getMenus(pushRouter, routerPath, setParentMenu)
    })

    return {
      rootMenu,
      keepAliveInclude,
      pushRouter,
      menus,
      activeMenus
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
@use "../../assets/scssscoped/admin/admin-theme3";
</style>