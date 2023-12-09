<template>
  <el-dialog
    v-model="visible"
    title="系统设置"
    width="30%"
    append-to-body
    :before-close="handleClose"
    @open="handleOpen"
  >
    <el-card header="字体大小">
      <el-button
        :type="fontSize === 'small' ? 'primary' : ''"
        @click="setHtmlFont('small')"
      >
        小 Small
      </el-button>
      <el-button
        :type="fontSize === 'medium' ? 'primary' : ''"
        @click="setHtmlFont('medium')"
      >
        中 Medium
      </el-button>
      <el-button
        :type="fontSize === 'large' ? 'primary' : ''"
        @click="setHtmlFont('large')"
      >
        大 Large
      </el-button>

      <p>
        当前字号文本示例 Example of current font size text
      </p>
    </el-card>
  </el-dialog>
</template>

<script lang="ts">
import {defineComponent,ref, watch} from 'vue'
import {appSettingsContext} from './appSettings'

export default defineComponent({
  name: 'AppSettingsDialog',
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

      fontSize,
      setHtmlFont
    }
  }
})
</script>

<style scoped>

</style>