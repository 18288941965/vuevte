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
import {defineComponent, ref, onMounted, provide, onUnmounted} from 'vue';
import {useRouter} from 'vue-router';
import NProgress from './NProgress';
import BChannel from './BChannel';
import {isLogin} from './context/signContext';
import {ReloadApp} from './types/baseType';
import {BCEnum, RUEnum} from './enum/enum';
import AppMessage from './app-message.vue';

export default defineComponent({
  components: {
    AppMessage
  },
  setup() {
    const router = useRouter()
    const reloadFlag = ref(true)
    const channel = new BroadcastChannel('vuevte')

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

    function showColorImg() {
      this.style.display = 'none';
      this.nextSibling.style.display = 'inline';
    }

    function showGrayImg() {
      this.previousSibling.style.display = 'inline';
      this.style.display = 'none';
    }
    
    onMounted(() => {
      channel.addEventListener('message', onMessage)

     /*const can: any = document.createElement('canvas')
      can.width = 200
      can.height = 80
      const cans: any = can.getContext('2d')
      cans.rotate(-20 * Math.PI / 180) // 水印旋转角度
      cans.font = '15px Vedana'
      cans.fillStyle = '#FFFF00'
      cans.textAlign = 'center'
      cans.textBaseline = 'Middle'
      cans.userSelect = 'none'
      cans.fillText('1111', can.width / 2, can.height) // 水印在画布的位置x，y轴
      cans.fillText('2222', can.width / 2, can.height + 22)
      const url = `url(${  can.toDataURL('image/png')  }) `
      console.log(url)*/
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