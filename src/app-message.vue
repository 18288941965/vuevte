<template>
  <div
    v-if="systemMessageList.length > 0"
    class="app-message"
  >
    <div class="message-body">
      <header class="message-header">
        <div>
          <Sms color="#FFFFFF" />
        </div>
        <span>平台消息</span>
        <button
          @click="closeMessage"
        >
          <Sms />
        </button>
      </header>

      <ul>
        <li
          v-for="(item, index) in systemMessageList"
          :key="'s-m-l-' + index"
        >
          {{ item.msg }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import {ChannelData} from './interface/publicInterface';
import {
  Sms
} from './components/svicon/publicIcon';

export default defineComponent({
  name: 'AppMessage',
  components: {
    Sms
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