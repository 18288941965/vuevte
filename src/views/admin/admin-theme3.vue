<template>
  <div class="admin-theme">
    <admin-header
      class="theme-header-ht"
      :module-icon="rootMenu.icon"
      :module-label="rootMenu.label"
      :active-menus="activeMenus"
      @push-router="pushRouter"
    />

    <nav
      v-if="menus && menus.length > 0"
      class="admin-theme__nav"
    >
      <ul class="menu-wrapper">
        <template
          v-for="(menu, index) in menus[0].children"
          :key="'li-3-' + index"
        >
          <template v-if="menu.children && menu.children.length > 0">
            <li
              id="theme-menu-group"
              class="theme-menu-group"
              :class="{'active-menu-group': activeMenuGroupId === menu.id}"
            >
              <details
                :id="'menu-detail-' + index"
                class="menu-group-details arrow-down"
              >
                <summary>
                  {{ menu.label }}
                  <Expand
                    :size="10"
                    class="expand-mg"
                  />
                </summary>
                <div
                  class="menu-group-details-content menu-scroll"
                  @click="closeDetails('menu-detail-' + index)"
                >
                  <admin-menu-top-child
                    :menus="menu.children"
                    :menu-id="activeMenus.menuId"
                    @push-router="pushRouter"
                  />
                </div>
              </details>
            </li>
          </template>
          <template v-else>
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
import {defineComponent, ref, onMounted} from 'vue'
import AdminMenu from './menu/admin-menu.vue'
import {MenuBean} from '../../interface/menuInterface'
import {MenuContext, MenuStatusContext} from '../../context/menuContext'
import AdminHeader from './header/admin-header.vue'
import {themeBaseContext, updateBrowserTitle} from './adminThemeBase'
import AdminMenuTopChild from './menu/admin-menu-top-child.vue'
import {
  Expand
} from '../../components/svicon/publicIcon'
import {closeDetails} from '../../util/baseUtil'
import menuDfs from '../../algo/menuDfs'

export default defineComponent({
  name: 'AdminTheme3',
  components: {
    Expand,
    AdminMenu,
    AdminHeader,
    AdminMenuTopChild
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

    // 激活菜单的父菜单ID
    const activeMenuGroupId = ref('')

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

      const menuPath = menuDfs(menus.value[0], activeMenus.menuId, false)
      if (menuPath.length === 0 || menuPath[0].id === activeMenus.menuId) {
        activeMenuGroupId.value = ''
      } else {
        activeMenuGroupId.value = menuPath[0].id
      }
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
      activeMenus,
      closeDetails,
      activeMenuGroupId
    }
  }
})
</script>

<style lang="scss">
  @use "@assets/scss/components/base-button";
</style>
<style scoped lang="scss">
  @use "@assets/scssscoped/admin/admin-theme3";
</style>