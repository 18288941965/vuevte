<template>
  <el-dialog
    v-model="visible"
    title="系统设置"
    width="50%"
    append-to-body
    :before-close="handleClose"
    @open="handleOpen"
  >
    <main class="app-settings-main">
      <section>
        <h4>系统字体</h4>
        <ev-radio
          v-model="fontSize"
          :data-list="fontSizeType"
          @change="setHtmlFont(fontSize)"
        />
      </section>
    </main>
  </el-dialog>
</template>

<script lang="ts">
import {defineComponent,ref, watch} from 'vue'
import {appSettingsContext} from './appSettings'
import EvRadio from '../evcomp/ev-radio.vue'

export default defineComponent({
  name: 'AppSettingsDialog',
  components: {EvRadio},
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  emits: ['close-dialog'],
  setup (props, {emit}) {
    const visible = ref(false)
    
    const fontSizeType = [
      { label: '小', value: 'small' },
      { label: '中', value: 'medium' },
      { label: '大', value: 'large' }
    ]

    watch(
      () => props.show,
      () => {
        visible.value = props.show
      }
    )
    
    const {
      fontSize,
      initFontSize,
      setHtmlFont
    } = appSettingsContext()

    const handleOpen = () => {
      initFontSize()
    }

    // 关闭窗口
    const handleClose = () => {
      emit('close-dialog')
    }

    return {
      visible,

      handleOpen,
      handleClose,

      fontSizeType,
      fontSize,
      setHtmlFont
    }
  }
})
</script>

<style scoped>
  .app-settings-main{
    min-height: 220px;
  }
</style>