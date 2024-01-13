<template>
  <div class="admin-theme">
    <admin-header
      class="layout-fixed theme-header-ht"
      :module-icon="rootMenu.icon"
      :module-label="rootMenu.label"
      :active-menus="activeMenus"
      @push-router="pushRouter"
    >
      <template #default>
        <admin-menu-top
          :menu-id="activeMenus.menuId.toString()"
          @push-router="pushRouter"
          @set-parent-menu="setParentMenu"
        />
      </template>
    </admin-header>

    <router-view
      v-slot="{ Component }"
      class="theme-content"
    >
      <keep-alive :include="keepAliveInclude">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import AdminMenu from './menu/admin-menu.vue'
import {MenuBean} from '../../interface/menuInterface'
import {MenuContext, MenuStatusContext} from '../../context/menuContext'
import AdminHeader from './header/admin-header.vue'
import {themeBaseContext, updateBrowserTitle} from './adminThemeBase'
import adminMenuTop from './menu/admin-menu-top.vue'

export default defineComponent({
  name: 'AdminTheme4',
  components: {
    AdminMenu,
    AdminHeader,
    adminMenuTop
  },
  setup () {
    const {
      router,
      rootMenu,
      setParentMenu
    } = themeBaseContext()

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
    })

    return {
      rootMenu,
      keepAliveInclude,
      pushRouter,
      activeMenus,

      setParentMenu
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
<style scoped lang="scss">
  @use "../../assets/scssscoped/admin/admin-theme4";
</style>