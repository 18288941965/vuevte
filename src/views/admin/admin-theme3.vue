<template>
  <div class="admin-theme">
    <admin-header3
      class="theme-header-ht"
      :module-icon="rootMenu.icon"
      :module-label="rootMenu.label"
    />

    <nav
      v-if="menus && menus.length > 0"
      class="admin-theme__nav"
    >
      <ul>
        <li
          v-for="(menu, index) in menus[0].children"
          :key="'li-3-' + index"
        >
          <router-link
            class="nav-item"
            :to="menu.url"
            @click="pushRouter(menu)"
          >
            <component
              :is="menu.icon.toString()"
              v-if="menu.icon"
            />
            <span>{{ menu.label }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <router-view v-slot="{ Component }">
      <keep-alive :include="keepAliveInclude">
        <component :is="Component" />
      </keep-alive>
    </router-view>
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
      updateBrowserTitle(menu.label as string)
    }

    const loadCallback = (id: string, label: string, icon = '') => {
      Object.assign(rootMenu, { id, label, icon})
      window.document.title = label
    }

    onMounted(() => {
      const routerPath =  router.currentRoute.value.path
      getMenus(pushRouter, routerPath, loadCallback)
    })

    return {
      rootMenu,
      keepAliveInclude,
      pushRouter,
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
@use "../../assets/scssscoped/admin/admin-theme3";
</style>