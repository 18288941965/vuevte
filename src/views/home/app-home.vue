<template>
  <div class="app-home">
    <header class="home-header">
      <a
        href="https://github.com/18288941965/vuevte"
        target="_blank"
        class="header-github mgl-auto"
      >
        <GitHub
          color="#ffffff"
          :size="32"
        />
      </a>

      <user-avatar
        :user-name="userName"
        class="app-home-avatar"
      >
        <template #summary>
          <el-avatar
            :size="26"
          >
            <template #default>
              <PersonFill />
            </template>
          </el-avatar>
          <span>{{ userName }}</span>
          <ArrowDropDown color="#ffffff" />
        </template>
      </user-avatar>
    </header>

    <img
      :src="logo"
      class="app-home-logo"
      alt=" "
    >

    <main class="home-main">
      <router-link
        class="main-link"
        to="/admin/theme"
        target="_blank"
      >
        <span>后台管理模板 Ⅰ</span>
      </router-link>
      <router-link
        class="main-link"
        to="/admin/theme2"
        target="_blank"
      >
        <span>后台管理模板 Ⅱ</span>
      </router-link>
      <router-link
        class="main-link"
        to="/admin/theme3"
        target="_blank"
      >
        <span>后台管理模板 Ⅲ</span>
      </router-link>

      <router-link
        class="main-link"
        to="/admin/theme4"
        target="_blank"
      >
        <span>后台管理模板 Ⅳ</span>
      </router-link>

      <router-link
        class="main-link"
        to="/desktop/theme"
        target="_blank"
      >
        <span>首页模板 ①</span>
      </router-link>
      <router-link
        class="main-link"
        to="/desktop/theme2"
        target="_blank"
      >
        <span>首页模板 ②</span>
      </router-link>

      <a
        href="#"
        class="main-link"
        @click="sendMessage"
      >
        <span>同域名多标签消息推送 🔆</span>
      </a>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, inject} from 'vue'
import UserAvatar from '../../components/avatar/user-avatar.vue'
import {
  GitHub,
  PersonFill,
  ArrowDropDown
} from '../../components/svicon/publicIcon'
import BChannel from '../../BChannel'
import {BCEnum} from '../../enum/enum'
import {ElMessage} from 'element-plus/es'
import LocalStorage from '../../class/LocalStorage'
import logo from '../../assets/logo.svg'

export default defineComponent({
  name: 'AppHome',
  components: {
    GitHub,
    PersonFill,
    ArrowDropDown,
    UserAvatar
  },
  setup () {
    const userName = ref('')
    const channel = inject('channel') as BroadcastChannel
    const {
      postMessage
    } = BChannel(channel)
    
    const sendMessage = () => {
      postMessage({ code: BCEnum.OTHER, msg: `你收到一条消息，一条系统普通提示消息--${new Date().getTime()}` })
      ElMessage.success('推送成功！请在其他窗口查阅')
    }

    onMounted(() => {
      const local = new LocalStorage()
      userName.value = local.getUserName()
    })
    
    return {
      logo,
      userName,
      sendMessage
    }
  }
})
</script>
<style lang="scss">
@use "../../assets/scss/base/app-home";
</style>
<style scoped lang="scss">
  @use "../../assets/scssscoped/base/app-home";
</style>