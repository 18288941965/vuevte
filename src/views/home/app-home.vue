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
  Search,
  GitHub,
  PersonFill,
  Expand
} from '../../components/svicon/publicIcon'
import BChannel from '../../BChannel'
import {BCEnum} from '../../enum/enum'
import {ElMessage} from 'element-plus/es'
import AppSearch from '../../app-search.vue'
import LocalStorage from '../../class/LocalStorage'
import logoText from '../../assets/logo-text.png'

export default defineComponent({
  name: 'AppHome',
  components: {
    Search,
    GitHub,
    PersonFill,
    Expand,
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