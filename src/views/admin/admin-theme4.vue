<template>
  <div class="admin-theme">
    <admin-header
      class="theme-header-ht"
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

    <nav class="history-menu">
      <ul id="theme4-nav-ul-scroll">
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
              class="menu-close-button-base"
              @click="cleanHistory(menu.id)"
            >
              <Close :size="8" />
            </button>
          </li>
        </template>
      </ul>
    </nav>

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
import {defineComponent} from 'vue'
import AdminMenu from './menu/admin-menu.vue'
import {MenuBean} from '../../interface/menuInterface'
import {MenuStatusContext} from '../../context/menuContext'
import AdminHeader from './header/admin-header.vue'
import {themeBaseContext, updateBrowserTitle} from './adminThemeBase'
import adminMenuTop from './menu/admin-menu-top.vue'
import {Close} from '../../components/svicon/publicIcon'
import {useScrollHorizontalMenu} from '../../util/event'

export default defineComponent({
  name: 'AdminTheme4',
  components: {
    AdminMenu,
    AdminHeader,
    adminMenuTop,
    Close,
  },
  setup () {
    const {
      router,
      rootMenu,
      setParentMenu,
    } = themeBaseContext()

    const {
      activeMenus,
      updateActiveMenus,
      cleanActiveMenus,
      keepAliveInclude,
      cleanKeepAliveInclude,
      updateKeepAliveInclude,
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

    useScrollHorizontalMenu('#theme4-nav-ul-scroll', 190)

    return {
      rootMenu,
      keepAliveInclude,
      pushRouter,
      activeMenus,

      setParentMenu,
      cleanHistory,
    }
  },
})
</script>
<style scoped lang="scss">
  @use "@assets/scssscoped/admin/admin-theme4";
</style>