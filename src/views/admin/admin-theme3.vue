<template>
  <div class="admin-theme admin-theme3">
    <admin-header3
      class="theme-header-ht"
      :module-icon="rootMenu.icon"
      :module-label="rootMenu.label"
    />

    <nav
      v-if="menus && menus.length > 0"
      class="admin-theme3__nav"
    >
      <ul>
        <li
          v-for="(menu, index) in menus[0].children"
          :key="'t-3-m-' + index"
          :class="{'active-menu': menu.id === activeMenus.menuId }"
          @click="pushRouter(menu)"
        >
          <a
            href="#"
          >
            <component
              :is="menu.icon.toString()"
              v-if="menu.icon"
            />
            <span>{{ menu.label }}</span>
          </a>
        </li>
      </ul>
    </nav>

    <main>
      <router-view v-slot="{ Component }">
        <keep-alive :include="keepAliveInclude">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted} from 'vue'
import AdminMenu from './menu/admin-menu.vue'
import {MenuBean, MenuBeanBase} from '../../interface/menuInterface'
import {useRouter} from 'vue-router'
import {MenuContext, MenuStatusContext} from '../../context/menuContext'
import AdminHeader3 from './header/admin-header3.vue'

export default defineComponent({
  name: 'AdminTheme3',
  components: {
    AdminMenu,
    AdminHeader3
  },
  setup () {
    const rootMenu = reactive<MenuBeanBase>({
      id: '',
      icon: '',
      label: ''
    })

    const {
      menus,
      getMenus
    } = MenuContext()

    const router = useRouter()
    const {
      activeMenus,
      keepAliveInclude,
      updateActiveMenus,
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

    const setParentMenu = (id : string, label: string, icon = '') => {
      Object.assign(rootMenu, { id, label, icon })
      window.document.title = label
    }

    const loadCallback = (id: string, label: string, icon = '') => {
      Object.assign(rootMenu, { id, label, icon})
    }

    onMounted(() => {
      const routerPath =  router.currentRoute.value.path

      getMenus(pushRouter, routerPath, loadCallback)
    })

    return {
      rootMenu,
      keepAliveInclude,

      setParentMenu,
      pushRouter,

      activeMenus,
      menus
    }
  }
})
</script>

<style>
@import "../../assets/css/var/theme-dark.css";
@import "../../assets/css/var/theme-light.css";
</style>
<style lang="scss">
@use "../../assets/scssscoped/admin/admin-theme-public";
@use "../../assets/scssscoped/admin/admin-theme3";
</style>