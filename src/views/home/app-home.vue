<template>
  <div class="app-home">
    <header class="home-header">
      <DesktopLogo style="color: #FFFFFF" />

      <a
        href="https://github.com/18288941965/vuevte"
        target="_blank"
        class="header-github"
      >
        <GitHub
          color="#FFFFFF"
          :size="24"
        />
      </a>

      <admin-avatar
        icon-color="#393939"
      />
    </header>

    <main class="home-main">
      <router-link
        to="/admin/theme"
        target="_blank"
        class="menu-item"
      >
        黑色菜单模板
        <OpenInNew :size="20" />
      </router-link>

      <router-link
        to="/admin/theme?id=2"
        target="_blank"
        class="menu-item"
      >
        白色菜单模板
        <OpenInNew :size="20" />
      </router-link>
      <router-link
        to="/desktop/theme"
        target="_blank"
        class="menu-item"
      >
        白色首页模板
        <OpenInNew :size="20" />
      </router-link>
      <router-link
        to="/desktop/theme2"
        target="_blank"
        class="menu-item"
      >
        黑色首页模板
        <OpenInNew :size="20" />
      </router-link>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AdminAvatar from '../../components/avatar/admin-avatar.vue';
import {
  OpenInNew,
  GitHub
} from '../../components/svicon/publicIcon';
import DesktopLogo from '../admin/logo/desktop-logo.vue'

export default defineComponent({
  name: 'AppHome',
  components: {
    GitHub,
    AdminAvatar,
    OpenInNew,
    DesktopLogo
  },
  setup () {
    return {
      //
    }
  }
})
</script>
<style>
  body{
    background-color: #393939;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232d2d2d' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  }
</style>
<style scoped lang="scss">
  @import "../../assets/scss/app-home";
</style>