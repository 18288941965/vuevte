<template>
  <div class="app-home">
    <header class="home-header">
      <div class="home-header--container">
        <img
          :src="logoText"
          class="app-home-logo"
          alt=" "
        >

        <div class="empty-flex" />

        <button
          class="icon-button mgr-medium"
          @click="sendMessage"
        >
          <Send />
        </button>

        <app-search>
          <template #button>
            <button
              class="icon-button mgr-medium"
            >
              <Search />
            </button>
          </template>
        </app-search>

        <a
          href="https://github.com/18288941965/vuevte"
          target="_blank"
          class="icon-button"
        >
          <GitHub />
        </a>

        <app-theme class="mgr-medium" />
        
        <user-avatar
          :user-name="userName"
          class="user-avatar-container arrow-down"
        >
          <template #summary>
            <PersonFill />
            <Expand
              :size="10"
              class="expand-mg"
            />
          </template>
        </user-avatar>
      </div>
    </header>

    <main class="home-main">
      <router-link
        class="main-link"
        to="/admin/theme"
        target="_blank"
      >
        <img
          :src="m1bg"
          class="m-bg"
          alt=" "
        >
        <h5>后台管理模板（默认主题）</h5>
        <span class="desc-info">
          左右布局：历史记录通过下拉菜单展示，展示了当前激活菜单面包屑
        </span>
      </router-link>
      <router-link
        class="main-link"
        to="/admin/theme2"
        target="_blank"
      >
        <img
          :src="m2bg"
          class="m-bg"
          alt=" "
        >
        <h5>后台管理模板（主题2）</h5>
        <span class="desc-info">
          左右布局：历史记录以列表展示，超出容器后通过鼠标滚动切换
        </span>
      </router-link>
      <router-link
        class="main-link"
        to="/admin/theme3"
        target="_blank"
      >
        <img
          :src="m3bg"
          class="m-bg"
          alt=" "
        >
        <h5>后台管理模板（主题3）</h5>
        <span class="desc-info">
          上下布局：顶部列表展示菜单，内容区有更多空间展示
        </span>
      </router-link>

      <router-link
        class="main-link"
        to="/admin/theme4"
        target="_blank"
      >
        <img
          :src="m4bg"
          class="m-bg"
          alt=" "
        >
        <h5>后台管理模板（主题4）</h5>
        <span class="desc-info">
          上下布局：顶部下拉展示所有菜单，历史记录以列表展示，超出容器后通过鼠标滚动切换
        </span>
      </router-link>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue'
import UserAvatar from '../../components/avatar/user-avatar.vue'
import {
  Search,
  GitHub,
  PersonFill,
  Expand,
  Send,
} from '../../components/svicon/publicIcon'
import BChannel from '../../utils/channel/BChannel'
import {BCEnum} from '@utils/channel/channelModels'
import {ElMessage} from 'element-plus/es'
import AppSearch from '../../app-search.vue'
import LocalStorage from '../../class/LocalStorage'
import AppTheme from '../../app-theme.vue'
import logoText from '@assets/logo-text.png'
import m1bg from '@assets/image/apphome/m1-bg.png'
import m2bg from '@assets/image/apphome/m2-bg.png'
import m3bg from '@assets/image/apphome/m3-bg.png'
import m4bg from '@assets/image/apphome/m4-bg.png'

export default defineComponent({
  name: 'AppHome',
  components: {
    Search,
    GitHub,
    PersonFill,
    Expand,
    Send,
    UserAvatar,
    AppSearch,
    AppTheme,
  },
  setup () {
    const userName = ref('')
    const {
      postMessage,
    } = BChannel()
    
    const sendMessage = () => {
      postMessage({ code: BCEnum.OTHER, msg: `系统提示消息他 — ${new Date().getTime()}` })
      ElMessage.success('推送成功！请在其他窗口查阅')
    }

    onMounted(() => {
      const local = new LocalStorage()
      userName.value = local.getUserInfoObj().userName
    })
    
    return {
      m1bg,
      m2bg,
      m3bg,
      m4bg,
      logoText,
      userName,
      sendMessage,
    }
  },
})
</script>
<style lang="scss">
@use "@assets/scss/base/app-home";
</style>

<style scoped lang="scss">
  @use "@assets/scssscoped/base/app-home";
</style>