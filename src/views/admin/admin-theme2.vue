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
      id="admin-theme2-main"
      class="main-grid"
      style="--sticky-pane-height: calc(100vh - var(--header-nav-height));"
      :class="{'menu-collapse' : menuCollapse}"
    >
      <div
        class="theme-left-wrapper"
        style="position: sticky; top: 0;height: var(--sticky-pane-height);"
      >
        <admin-menu
          ref="adminThemeMenuRef"
          :collapse="menuCollapse"
          :menu-id="activeMenus.menuId.toString()"
          @push-router="pushRouter"
          @set-parent-menu="setParentMenu"
        />
      </div>

      <div class="theme-right-wrapper2">
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
import {defineComponent, ref, onMounted} from 'vue'
import AdminMenu from './menu/admin-menu.vue'
import {MenuBean} from '../../interface/menuInterface'
import {MenuStatusContext} from '../../context/menuContext'
import AdminHeader2 from './header/admin-header2.vue'
import {themeBaseContext, updateBrowserTitle} from './adminThemeBase'

export default defineComponent({
  name: 'AdminTheme2',
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
      window.addEventListener('scroll', (event: Event) => {
        event.stopPropagation()
        const mainElement: HTMLElement | undefined = document.querySelector('#admin-theme2-main')
        if (mainElement) {
          const styles = getComputedStyle(mainElement)
          let data = styles.getPropertyValue('--header-nav-height')
          let top = 0
          if (data) {
            top =  parseInt(data.replace('px', '')) - window.scrollY
            top = top > 0 ? top : 0
          }
          mainElement.style.setProperty('--sticky-pane-height', `calc(100vh - ${top}px)`)
        }
      }, { passive: false })
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
@use "../../assets/scssscoped/admin/admin-theme2";
</style>