<template>
  <template v-if="reloadFlag">
    <div style="min-height: 10px;border: 1px solid ">
      <ul>
        <li
          v-for="(item, index) in systemMessageList"
          :key="'s-m-' + index"
        >
          {{ item.code }} - {{ item.msg }}
        </li>
      </ul>
    </div>
    <router-view />
  </template>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, provide, onUnmounted} from 'vue';
import {useRouter} from 'vue-router';
import NProgress from './NProgress';
import BChannel from './BChannel';
import {isLogin} from './context/signContext';
import {ReloadApp} from './types/baseType';
import {RUEnum} from './enum/enum';

export default defineComponent({
  setup() {
    const router = useRouter()
    const reloadFlag = ref(true)
    const channel = new BroadcastChannel('vuevte')

    const {
      systemMessageList,
      postMessage,
      channelOnMessage
    } = BChannel(channel)

    const reloadApp: ReloadApp = () => {
      reloadFlag.value = false
      setTimeout(function () {
        reloadFlag.value = true
      }, 100)
    }

    const onMessage = (ev: MessageEvent) => {
      channelOnMessage(ev, reloadApp)
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

    onMounted(() => {
      channel.addEventListener('message', onMessage)
    })

    onUnmounted(() => {
      channel.removeEventListener('message', onMessage)
    })

    return {
      systemMessageList,
      postMessage,
      reloadFlag
    }
  }
})
</script>