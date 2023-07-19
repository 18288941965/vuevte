<template>
  <div
    class="admin-theme"
    :class="{'admin-theme-menu-collapse' : menuCollapse}"
  >
    <div
      class="admin-theme-left-panel menu-scroll"
    >
      <admin-menu
        ref="adminThemeMenuRef"
        :collapse="menuCollapse"
        :menu-id="activeMenus.menuId"
        @push-router="pushRouter"
      />
    </div>
    <div class="admin-theme-right-panel">
      <admin-header
        class="admin-theme-header-ht"
        :menu-collapse="menuCollapse"
        :active-menus="activeMenus"
        @set-menu-collapse="setMenuCollapse"
        @push-router="pushRouter"
        @menu-open="menuOpen"
        @clean-history="cleanHistory"
      />

      <main>
        <router-view v-slot="{ Component }">
          <keep-alive :include="keepAliveInclude">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import AdminMenu from './menu/admin-menu.vue';
import AdminHeader from './header/admin-header.vue';
import {MenuStatusContext} from '../../context/menuContext';
import {MenuBean} from '../../interface/menuInterface';
import {useRouter} from 'vue-router';

export default defineComponent({
  name: 'AdminTheme',
  components: {
    AdminMenu,
    AdminHeader
  },
  setup () {
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

    const pushRouter = async (menu: MenuBean) => {
      if (menu.cache && menu.name) {
        updateKeepAliveInclude(menu.name)
      }
      await router.push(menu.url as string)
      updateActiveMenus(menu)
    }

    const menuOpen = (index: string) => {
      adminThemeMenuRef.value?.menuOpen(index)
    }

    const cleanHistory = () => {
      updateKeepAliveInclude(keepAliveInclude.value[0], true)
      updateActiveMenus(activeMenus.menus[0], true)
    }

    return {
      adminThemeMenuRef,
      activeMenus,
      menuCollapse,
      setMenuCollapse,
      keepAliveInclude,

      pushRouter,
      menuOpen,
      cleanHistory
    }
  }
})
</script>

<style>
@import "../../assets/scss/_admin-theme2.scss";
/*
@import "../../assets/scss/_admin-theme2.scss";
*/
</style>
<style scoped lang="scss">
  @import "../../assets/scss/admin-theme-public";
</style>