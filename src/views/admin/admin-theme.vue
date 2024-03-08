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
    />

    <div
      class="layout-fixed page-header"
    >
      <div
        class="page-header__menu-btn"
      >
        <button
          class="icon-button menu-collapse-icon"
          @click="setMenuCollapse(!menuCollapse)"
        >
          <MenuOpen
            :class="{'icon-rotate' : menuCollapse }"
          />
        </button>

        <el-tooltip
          content="找到当前菜单"
          placement="bottom-start"
          :show-after="500"
          :enterable="false"
        >
          <button
            class="icon-button mgr-medium"
            @click="menuOpen"
          >
            <Adjust />
          </button>
        </el-tooltip>

        <div
          class="mgr-medium"
          style="flex: 1;"
        >
          <app-search>
            <template #button>
              <button
                class="search-button"
              >
                <Search />
                <span>搜索</span>
              </button>
            </template>
          </app-search>
        </div>

        <div class="left-split" />
      </div>

      <div class="page-header__menu">
        <details
          id="admin-header-details"
          class="header-menu mgr-medium"
          :data-disabled="activeMenus.menus.length === 0"
        >
          <summary
            class="drop-down-button arrow-down hv-bg"
          >
            <Schedule />
            <Expand
              :size="10"
              class="expand-mg"
            />
          </summary>
          <div
            class="header-menu-panel"
            @click="closeDetails('admin-header-details')"
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
                      :class="{'green-mark' : menu.cache}"
                      :to="menu.url"
                      @click="pushRouter(menu)"
                    >
                      <span>{{ menu.label }}</span>
                    </router-link>
                    <!-- button 不能放在router-link中，stop无法阻止路由事件-->
                    <button
                      class="menu-close-button-panel"
                      @click.stop="cleanHistory(menu.id)"
                    >
                      <Close :size="8" />
                    </button>
                  </li>
                </template>
              </ul>
            </nav>

            <footer class="header-menu-panel__footer">
              <button
                v-if="activeMenus.menus.length > 1"
                @click="cleanHistory(undefined)"
              >
                清空历史
              </button>
            </footer>
          </div>
        </details>

        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="(item, index) in activeMenuPath"
            :key="'breadcrumb-' + index"
          >
            <span :class="{'active-breadcrumb': activeMenuPath.length === index + 1 }">
              {{ item.label }}
            </span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    
    <div
      id="admin-theme-main"
      class="layout-dynamic"
      :class="{'layout-dynamic-collapse' : menuCollapse}"
      style="--sticky-pane-height: calc(100vh - var(--header-banner-height));"
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
          @set-active-menu="setActiveMenu"
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
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, onUnmounted} from 'vue'
import AdminMenu from './menu/admin-menu.vue'
import AdminHeader from './header/admin-header.vue'
import {MenuStatusContext} from '../../context/menuContext'
import {MenuBean} from '../../interface/menuInterface'
import {themeBaseContext, updateBrowserTitle} from './adminThemeBase'
import {
  Adjust,
  MenuOpen,
  Search,
  Schedule,
  Expand,
  Close
} from '../../components/svicon/publicIcon'
import appSearch from '../../app-search.vue'
import {handleMenuScroll} from '../../context/stickyContext'
import {closeDetails} from '../../util/baseUtil'

export default defineComponent({
  name: 'AdminTheme',
  components: {
    AdminMenu,
    AdminHeader,
    Adjust,
    MenuOpen,
    Search,
    Schedule,
    Expand,
    Close,
    appSearch
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
      cleanActiveMenus,
      keepAliveInclude,
      cleanKeepAliveInclude,
      updateKeepAliveInclude,
      cleanActiveMenuPath
    } = MenuStatusContext()

    const pushRouter = async (menu: MenuBean) => {
      if (menu.cache && menu.name) {
        updateKeepAliveInclude(menu.name)
      }
      // 刷新页面相同路由页面执行此方法，这里没有做判断，因为同一地址框架默认不会再重复加载
      await router.push(menu.url as string)
      updateActiveMenus(menu)
      updateBrowserTitle(`${menu.label as string} • ${rootMenu.label}`)
      adminThemeMenuRef.value?.setActivePath(menu.id)
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
        cleanActiveMenuPath()
        closeDetails('admin-header-details')
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

    const setActiveMenu = (menu: MenuBean[]) => {
      activeMenuPath.value = menu
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
      activeMenuPath,
      activeMenus,
      menuCollapse,
      setMenuCollapse,
      keepAliveInclude,

      setActiveMenu,
      setParentMenu,
      pushRouter,
      menuOpen,
      cleanHistory,
      closeDetails
    }
  }
})
</script>

<style lang="scss">
  @use "@assets/scss/components/base-button";
</style>
<style scoped lang="scss">
  @use "@assets/scssscoped/admin/admin-theme";
</style>