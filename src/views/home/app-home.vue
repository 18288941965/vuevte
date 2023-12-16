<template>
  <div class="app-home">
    <header class="home-header">
      <DesktopLogo style="color: #FFFFFF" />

      <a
        href="https://github.com/18288941965/vuevte"
        target="_blank"
        class="header-github mgl-auto"
      >
        <GitHub
          color="#FFFFFF"
          :size="32"
        />
      </a>

      <user-avatar
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
        to="/admin/theme2"
        target="_blank"
      >
        <img
          :src="adminIcon"
          alt=" "
        >
        <span>后台管理模板2</span>
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

      <a
        href="#"
        class="main-link"
        @click="sendMessage"
      >
        <img
          :src="messageIcon"
          alt=" "
        >
        <span>消息推送</span>
      </a>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue'
import UserAvatar from '../../components/avatar/user-avatar.vue'
import {
  GitHub
} from '../../components/svicon/publicIcon'
import DesktopLogo from '../admin/logo/desktop-logo.vue'
import adminIcon from '../../assets/image/home/admin-icon.png'
import homeIcon from '../../assets/image/home/home-icon.png'
import messageIcon from '../../assets/image/home/message-icon.png'
import BChannel from '../../BChannel'
import {BCEnum} from '../../enum/enum'
import {ElMessage} from 'element-plus/es'

export default defineComponent({
  name: 'AppHome',
  components: {
    GitHub,
    UserAvatar,
    DesktopLogo
  },
  setup () {
    const channel = inject('channel') as BroadcastChannel
    const {
      postMessage
    } = BChannel(channel)
    
    const sendMessage = () => {
      postMessage({ code: BCEnum.OTHER, msg: '你收到一条消息，一条系统普通提示消息！' })
      ElMessage.success('推送成功！请在其他窗口查阅')
    }
    
    return {
      adminIcon,
      homeIcon,
      messageIcon,
      sendMessage
    }
  }
})
</script>
<style scoped lang="scss">
  @use "../../assets/scssscoped/base/app-home";
</style>