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

      <avatar-card
        icon-color="#393939"
      />
    </header>

    <main class="home-main">
      <router-link
        class="main-link"
        to="/admin/theme"
        target="_blank"
      >
        <img
          :src="adminIcon"
          alt=" "
        >
        <span>后台管理模板</span>
      </router-link>
      <router-link
        class="main-link"
        to="/desktop/theme"
        target="_blank"
      >
        <img
          :src="homeIcon"
          alt=" "
        >
        <span>首页模板1</span>
      </router-link>
      <router-link
        class="main-link"
        to="/desktop/theme2"
        target="_blank"
      >
        <img
          :src="homeIcon"
          alt=" "
        >
        <span>首页模板2</span>
      </router-link>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import AvatarCard from '../../components/avatar/avatar-card.vue'
import {
  GitHub
} from '../../components/svicon/publicIcon'
import DesktopLogo from '../admin/logo/desktop-logo.vue'
import adminIcon from '../../assets/image/home/admin-icon.png'
import homeIcon from '../../assets/image/home/home-icon.png'

export default defineComponent({
  name: 'AppHome',
  components: {
    GitHub,
    AvatarCard,
    DesktopLogo
  },
  setup () {
    onMounted(() => {
    })
    return {
      adminIcon,
      homeIcon
    }
  }
})
</script>
<style scoped lang="scss">
  @use "../../assets/scssscoped/base/app-home";
</style>