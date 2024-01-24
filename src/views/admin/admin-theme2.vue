<template>
  <div class="admin-theme">
    <admin-header
      class="theme-header-ht"
      :module-icon="rootMenu.icon"
      :module-label="rootMenu.label"
      :menu-collapse="menuCollapse"
      :active-menus="activeMenus"
      @push-router="pushRouter"
    />

    <div
      class="layout-fixed theme2-nav theme-header-ht__nav"
    >
      <div
        class="theme2-nav__left"
      >
        <button
          class="button-icon menu-collapse-icon"
          @click="setMenuCollapse(!menuCollapse)"
        >
          <MenuOpen
            :size="24"
            :class="{'icon-rotate' : menuCollapse }"
          />
        </button>

        <el-tooltip
          content="选择打开的菜单"
          placement="bottom-start"
          :enterable="false"
          :show-after="500"
        >
          <button
            class="button-icon"
            @click="menuOpen"
          >
            <Adjust />
          </button>
        </el-tooltip>

        <app-search>
          <template #button>
            <button
              class="button-icon mgl-medium"
            >
              <Search />
            </button>
          </template>
        </app-search>
      </div>

      <nav class="theme2-nav__right">
        <ul>
          <template
            v-for="(menu, index) in activeMenus.menus"
            :key="'header-menu-' + index"
          >
            <li
              v-if="menu.url"
              class="nav-item-li"
            >
              <router-link
                class="nav-item"
                :class="{'green-mark' : menu.cache }"
                :to="menu.url"
                @click.stop="pushRouter(menu)"
              >
                <span>{{ menu.label }}</span>
              </router-link>

              <button
                class="button-menu-close"
                @click="cleanHistory(menu.id)"
              >
                <Close :size="14" />
              </button>
            </li>
          </template>
        </ul>
      </nav>
    </div>
    
    <main
      id="admin-theme-main"
      class="layout-dynamic main-grid"
      style="--sticky-pane-height: calc(100vh - var(--header-nav-height));"
      :class="{'layout-dynamic-collapse' : menuCollapse}"
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

      <router-view
        v-slot="{ Component }"
        class="theme-content"
      >
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
import AdminHeader from './header/admin-header.vue'
import {themeBaseContext, updateBrowserTitle} from './adminThemeBase'
import {
  Adjust,
  MenuOpen,
  Close,
  Search
} from '../../components/svicon/publicIcon'
import {handleMenuScroll} from '../../context/stickyContext'
import AppSearch from '../../app-search.vue'

export default defineComponent({
  name: 'AdminTheme2',
  components: {
    AppSearch,
    AdminMenu,
    AdminHeader,
    Adjust,
    MenuOpen,
    Close,
    Search
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
      cleanActiveMenus,
      keepAliveInclude,
      cleanKeepAliveInclude,
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

    const cleanHistory = (id: string | undefined) => {
      const index = activeMenus.menus.findIndex(item => item.id === id)
      cleanKeepAliveInclude(id)
      cleanActiveMenus(id, index)
      if (activeMenus.menus.length === 0) {
        const rootPath = router.currentRoute.value.matched[0].path
        router.push(rootPath)
        return
      }
      // 关闭当前打开窗口后：先右后左的切换
      if (!activeMenus.menuId) {
        let temp: MenuBean | undefined
        if (activeMenus.menus.length -1  >= index) {
          temp = activeMenus.menus[index]
        } else {
          temp = activeMenus.menus[index - 1]
        }
        pushRouter(temp)
      }
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
<style scoped lang="scss">
  @use "../../assets/scssscoped/admin/admin-theme2";
</style>