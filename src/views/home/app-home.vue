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
          class="header-icon-button mgr-medium"
          @click="sendMessage"
        >
          <Send
            color="var(--color-black-4)"
          />
        </button>

        <app-search>
          <template #button>
            <button
              class="app-home-search-button mgr-medium"
            >
              <Search
                color="var(--color-black-4)"
              />
            </button>
          </template>
        </app-search>

        <a
          href="https://github.com/18288941965/vuevte"
          target="_blank"
          class="header-github mgr-medium"
        >
          <GitHub
            color="var(--color-black-4)"
          />
        </a>

        <user-avatar
          :user-name="userName"
          class="app-home-avatar arrow-down"
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

    <div class="test-module">
      <router-link
        class="mgr-medium"
        to="/desktop/theme"
        target="_blank"
      >
        <span>首页模板（dev）</span>
      </router-link>
      <router-link
        to="/desktop/theme2"
        target="_blank"
      >
        <span>首页模板（dev）</span>
      </router-link>
    </div>

    <main class="home-main">
      <router-link
        class="main-link"
        to="/admin/theme"
        target="_blank"
      >
        <h5>后台管理模板（默认主题）</h5>
        <img
          :src="m1bg"
          class="m-bg"
          alt=" "
        >
        <span class="desc-info">
          左右布局：历史记录通过下拉菜单展示，展示了当前激活菜单面包屑
        </span>
      </router-link>
      <router-link
        class="main-link"
        to="/admin/theme2"
        target="_blank"
      >
        <h5>后台管理模板（主题2）</h5>
        <img
          :src="m2bg"
          class="m-bg"
          alt=" "
        >
        <span class="desc-info">
          左右布局：历史记录以列表展示，超出容器后通过鼠标滚动切换
        </span>
      </router-link>
      <router-link
        class="main-link"
        to="/admin/theme3"
        target="_blank"
      >
        <h5>后台管理模板（主题3）</h5>
        <img
          :src="m3bg"
          class="m-bg"
          alt=" "
        >
        <span class="desc-info">
          上下布局：顶部列表展示菜单，此主题只支持一级菜单并且数量有限
        </span>
      </router-link>

      <router-link
        class="main-link"
        to="/admin/theme4"
        target="_blank"
      >
        <h5>后台管理模板（主题4）</h5>
        <img
          :src="m4bg"
          class="m-bg"
          alt=" "
        >
        <span class="desc-info">
          上下布局：顶部下拉切换菜单，历史记录以列表展示，超出容器后通过鼠标滚动切换
        </span>
      </router-link>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, inject} from 'vue'
import UserAvatar from '../../components/avatar/user-avatar.vue'
import {
  Search,
  GitHub,
  PersonFill,
  Expand,
  Send
} from '../../components/svicon/publicIcon'
import BChannel from '../../BChannel'
import {BCEnum} from '../../enum/enum'
import {ElMessage} from 'element-plus/es'
import AppSearch from '../../app-search.vue'
import LocalStorage from '../../class/LocalStorage'
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
    AppSearch
  },
  setup () {
    const userName = ref('')
    const channel = inject('channel') as BroadcastChannel
    const {
      postMessage
    } = BChannel(channel)
    
    const sendMessage = () => {
      postMessage({ code: BCEnum.OTHER, msg: `系统提示消息他 — ${new Date().getTime()}` })
      ElMessage.success('推送成功！请在其他窗口查阅')
    }

    onMounted(() => {
      const local = new LocalStorage()
      userName.value = local.getUserName()
    })
    
    return {
      m1bg,
      m2bg,
      m3bg,
      m4bg,
      logoText,
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