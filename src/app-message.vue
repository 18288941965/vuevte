<template>
  <div
    v-if="systemMessageList.length > 0"
    class="app-message"
  >
    <div class="message-body">
      <header class="message-header">
        <span>平台消息</span>
        <button
          class="message-btn"
          @click="closeMessage"
        >
          <Close :size="20" />
        </button>
      </header>

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
  @use "assets/scssscoped/base/app-message";
</style>