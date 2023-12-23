<template>
  <div
    class="admin-theme "
  >
    <admin-header
      class="theme-header-ht"
      :module-icon="rootMenu.icon"
      :module-label="rootMenu.label"
      :menu-collapse="menuCollapse"
      :active-menus="activeMenus"
      @push-router="pushRouter"
      @clean-history="cleanHistory"
    />

    <div class="page-header">
      <div
        class="page-header__menu-btn"
        :class="{'page-header__menu-btn-hidden': menuCollapse}"
      >
        <el-tooltip
          content="找到当前菜单"
          :show-after="500"
          :enterable="false"
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
          @click="setMenuCollapse(!menuCollapse)"
        >
          <MenuOpen
            :size="24"
            :class="{'icon-rotate' : menuCollapse }"
          />
        </button>
      </div>
      <div class="page-header__menu">
        <h3 v-if="activeMenuPath.length > 0">
          {{ activeMenuPath[activeMenuPath.length - 1].label }}
        </h3>
        <div class="empty-flex" />
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="(item, index) in activeMenuPath"
            :key="'breadcrumb-' + index"
          >
            {{ item.label }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    
    <div
      id="admin-theme-main"
      class="theme-grid"
      :class="{'menu-collapse' : menuCollapse}"
      style="--sticky-pane-height: calc(100vh - var(--header-height));"
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
          @set-active-menu="setActiveMenu"
        />
      </div>
      <div class="theme-right-wrapper">
        <main>
          <router-view v-slot="{ Component }">
            <keep-alive :include="keepAliveInclude">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, computed} from 'vue'
import AdminMenu from './menu/admin-menu.vue'
import AdminHeader from './header/admin-header.vue'
import {MenuStatusContext} from '../../context/menuContext'
import {MenuBean} from '../../interface/menuInterface'
import {themeBaseContext, updateBrowserTitle} from './adminThemeBase'
import {
  Adjust,
  MenuOpen
} from '../../components/svicon/publicIcon'

export default defineComponent({
  name: 'AdminTheme',
  components: {
    AdminMenu,
    AdminHeader,
    Adjust,
    MenuOpen
  },
  setup () {
    const {
      router,
      rootMenu,
      setParentMenu
    } = themeBaseContext()

    const adminThemeMenuRef = ref()

    const {
      activeMenuPath,
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

    const menuOpen = () => {
      adminThemeMenuRef.value?.menuOpen(activeMenus.menuId)
    }

    const cleanHistory = () => {
      updateKeepAliveInclude(keepAliveInclude.value[0] as string, true)
      updateActiveMenus(activeMenus.menus[0], true)
    }

    const setActiveMenu = (menu: MenuBean[]) => {
      activeMenuPath.value = menu
    }

    onMounted(() => {
      window.addEventListener('scroll', (event: Event) => {
        event.stopPropagation()
        const mainElement: HTMLElement | undefined = document.querySelector('#admin-theme-main')
        if (mainElement) {
          const styles = getComputedStyle(mainElement)
          let data = styles.getPropertyValue('--header-height')
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
      activeMenuPath,
      activeMenus,
      menuCollapse,
      setMenuCollapse,
      keepAliveInclude,

      setActiveMenu,
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
<style scoped lang="scss">
  @use "../../assets/scssscoped/admin/admin-theme";
</style>