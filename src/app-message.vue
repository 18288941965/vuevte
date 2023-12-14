<template>
  <div
    v-if="systemMessageList.length > 0"
    class="app-message-container"
  >
    <main class="app-message">
      <header class="app-message__header">
        <span>平台消息</span>
        <button
          @click="closeMessage"
        >
          <Close :size="20" />
        </button>
      </header>
      <div class="app-message__body">
        <ul>
          <li
            v-for="(item, index) in systemMessageList"
            :key="'s-m-l-' + index"
          >
            <Sms color="orange" />
            {{ item.msg }}
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import {ChannelData} from './interface/publicInterface'
import {
  Sms,
  Close
} from './components/svicon/publicIcon'

export default defineComponent({
  name: 'AppMessage',
  components: {
    Sms,
    Close
  },
  props: {
    systemMessageList: {
      type: Array as PropType<Array<ChannelData>>,
      default: () => {
        return []
      }
    }
  },
  emits: ['close-message'],
  setup (props, {emit}) {

    const closeMessage = () => {
      emit('close-message')
    }

    return {
      closeMessage
    }
  }
})
</script>

<style scoped lang="scss">
  @use "assets/scssscoped/components/app-message";
</style>