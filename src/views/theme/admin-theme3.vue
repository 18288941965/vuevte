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
                class="menu-group-container arrow-down"
              >
                <summary>
                  <i class="menu-icon">
                    <component
                      :is="menu.icon.toString()"
                      v-if="menu.icon"
                    />
                  </i>
                  {{ menu.label }}
                  <Expand
                    :size="8"
                    class="expand-mg"
                  />
                </summary>
                <div
                  class="global-overlay-base menu-group-overlay menu-scroll"
                  @click="closeDetails('menu-detail-' + index)"
                >
                  <admin-menu-down
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
                <i class="menu-icon">
                  <component
                    :is="menu.icon.toString()"
                    v-if="menu.icon"
                  />
                </i>
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
import {MenuBean} from './menu/menuModels'
import {MenuOptions, MenuStatusContent} from './menu/menuOptions'
import AdminHeader from './header/admin-header.vue'
import {themeBaseContext, updateBrowserTitle} from './adminThemeBase'
import AdminMenuDown from './menu/admin-menu-down.vue'
import {
  Expand,
} from '../../components/svicon/publicIcon'
import {closeDetails} from '@utils/utils'
import menuDfs from '../../algo/menuDfs'

export default defineComponent({
  name: 'AdminTheme3',
  components: {
    Expand,
    AdminMenu,
    AdminHeader,
    AdminMenuDown,
  },
  setup () {
    const {
      router,
      rootMenu,
      setParentMenu,
    } = themeBaseContext()

    const {
      menus,
      getMenus,
    } = MenuOptions()

    // 激活菜单的父菜单ID
    const activeMenuGroupId = ref('')

    const {
      activeMenus,
      updateActiveMenus,
      keepAliveInclude,
      updateKeepAliveInclude,
    } = MenuStatusContent()

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
      activeMenuGroupId,
    }
  },
})
</script>

<style scoped lang="scss">
  @use "@assets/scssscoped/theme/admin-theme3";
</style>