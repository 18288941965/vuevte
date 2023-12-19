<template>
  <div class="admin-theme">
    <admin-header2
      class="theme-header-ht"
      :module-icon="rootMenu.icon"
      :module-label="rootMenu.label"
      :menu-collapse="menuCollapse"
      :active-menus="activeMenus"
      @set-menu-collapse="setMenuCollapse"
      @push-router="pushRouter"
      @menu-open="menuOpen"
      @clean-history="cleanHistory"
    />
    
    <main
      class="main-grid"
      :class="{'menu-collapse' : menuCollapse}"
    >
      <div class="theme-left-wrapper">
        <admin-menu
          ref="adminThemeMenuRef"
          :collapse="menuCollapse"
          :menu-id="activeMenus.menuId.toString()"
          @push-router="pushRouter"
          @set-parent-menu="setParentMenu"
        />
      </div>

      <div>
        <router-view v-slot="{ Component }">
          <keep-alive :include="keepAliveInclude">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import AdminMenu from './menu/admin-menu.vue'
import {MenuBean, MenuBeanBase} from '../../interface/menuInterface'
import {useRouter} from 'vue-router'
import {MenuStatusContext} from '../../context/menuContext'
import AdminHeader2 from './header/admin-header2.vue'

export default defineComponent({
  name: 'AdminTheme2',
  components: {
    AdminMenu,
    AdminHeader2
  },
  setup () {
    const rootMenu = reactive<MenuBeanBase>({
      id: '',
      icon: '',
      label: ''
    })

    const router = useRouter()
    const adminThemeMenuRef = ref()
    const {
      activeMenus,
      menuCollapse,
      setMenuCollapse,
      updateActiveMenus,
      keepAliveInclude,
      updateKeepAliveInclude
    } = MenuStatusContext()

    const updateBrowserTitle = (menuLabel: string) => {
      window.document.title = `${menuLabel} • ${rootMenu.label}`
    }

    const pushRouter = async (menu: MenuBean) => {
      if (menu.cache && menu.name) {
        updateKeepAliveInclude(menu.name)
      }
      await router.push(menu.url as string)
      updateActiveMenus(menu)
      updateBrowserTitle(menu.label as string)
    }

    const menuOpen = (index: string) => {
      adminThemeMenuRef.value?.menuOpen(index)
    }

    const setParentMenu = (id : string, label: string, icon = '') => {
      Object.assign(rootMenu, { id, label, icon })
      window.document.title = label
    }

    const cleanHistory = () => {
      updateKeepAliveInclude(keepAliveInclude.value[0] as string, true)
      updateActiveMenus(activeMenus.menus[0], true)
    }

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
@use "../../assets/scssscoped/admin/admin-theme2";
</style>