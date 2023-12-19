<template>
  <template v-if="reloadFlag">
    <router-view />

    <app-message
      :system-message-list="systemMessageList"
      @close-message="closeMessage"
    />
  </template>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, provide, onUnmounted} from 'vue'
import {useRouter} from 'vue-router'
import NProgress from './NProgress'
import BChannel from './BChannel'
import {isLogin} from './context/signContext'
import {ReloadApp} from './types/baseType'
import {BCEnum, RUEnum} from './enum/enum'
import AppMessage from './app-message.vue'
import {themeContext} from './AppTheme'
import {appSettingsContext} from './components/settings/appSettings'

export default defineComponent({
  components: {
    AppMessage
  },
  setup() {
    const router = useRouter()
    const reloadFlag = ref(true)
    const channel: BroadcastChannel = new BroadcastChannel('vuevte')

    const {
      systemMessageList,
      postMessage,
      channelOnMessage,
      resetChannel
    } = BChannel(channel)

    const reloadApp: ReloadApp = () => {
      reloadFlag.value = false
      setTimeout(function () {
        reloadFlag.value = true
      }, 100)
    }

    // 接收到广播消息
    const onMessage = (ev: MessageEvent) => {
      channelOnMessage(ev, reloadApp)
    }

    // 关闭消息窗口
    // 根据不同的消息做不同的事
    const closeMessage = () => {
      const codes = systemMessageList.value.map(item => item.code)
      resetChannel()
      if (codes.includes(BCEnum.LOGOUT)) {
        router.replace(RUEnum.LOGIN)
      }
    }

    const {
      NProgressStart,
      NProgressDone
    } = NProgress()

    router.beforeEach((to, from, next) => {
      NProgressStart(to.path)
      const loginStatus = isLogin()
      if (loginStatus) {
        if (to.path === RUEnum.LOGIN) {
          next(RUEnum.HOME)
        } else {
          next()
        }
      } else if (to.path === RUEnum.LOGIN) {
          next()
      } else {
        next(RUEnum.LOGIN)
      }
    })

    router.afterEach(() => {
      NProgressDone()
    })

    // 注入全局对象或方法
    provide('channel', channel)
    provide('reloadApp', reloadApp)

    // 主题
    const {
      initThemeModel
    } = themeContext()
    
    const {
      initFontSize
    } = appSettingsContext()
    
    onMounted(() => {
      initThemeModel()
      initFontSize()

      channel.addEventListener('message', onMessage)
    })

    onUnmounted(() => {
      channel.removeEventListener('message', onMessage)
    })

    return {
      systemMessageList,
      postMessage,
      closeMessage,

      reloadFlag
    }
  }
})
</script>