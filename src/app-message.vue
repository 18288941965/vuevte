<template>
  <div
    v-if="systemMessageList.length > 0"
    class="app-message-dialog"
  >
    <div class="app-message-body">
      <header class="app-message-header">
        <div>
          <Sms color="#FFFFFF" />
        </div>
        <span>平台消息</span>
        <button
          @click="closeMessage"
        >
          <Close />
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
  Close,
  Sms
} from './components/svicon/otherIcon';

export default defineComponent({
  name: 'AppMessage',
  components: {
    Close,
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
  .app-message-dialog{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: var(--z-index-z);
    background-color: transparent;
    overflow: auto;
  }

  .app-message-body{
    max-width: 600px;
    min-height: 200px;
    margin: 80px auto 0 auto;
    background-color: #FFFFFF;
    box-shadow: rgba(31, 35, 40, 0.12) 0 1px 3px, rgba(66, 74, 83, 0.12) 0 8px 24px;
    & .app-message-header{
      display: flex;
      position: sticky;
      height: 50px;
      top: 0;
      & div{
        margin: 10px 0 0 10px;
        background-color: #FFC12E;
        width: 36px;
        height: 36px;
        padding: 6px;
        border-radius: 18px;
      }
      & span{
        display: inline-block;
        margin: 16px 0 0 14px;
        font-size: 16px;
        font-weight: bolder;
      }
      & button{
        margin-left: auto;
        background-color: transparent;
        border: 0;
        height: 32px;
        width: 56px;
        cursor: pointer;
        transition: background-color 0.3s;
        &:hover{
          background-color: red;
          color: #FFFFFF;
        }
      }
    }
    & ul {
      margin: 10px 20px 20px 60px;
    }
    & li{
      font-size: 1.2rem;
      margin-bottom: 10px;
        height: 40px;
        display: grid;
        align-items: center;
    }
  }
</style>