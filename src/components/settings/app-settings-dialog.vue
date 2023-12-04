<template>
  <el-dialog
    v-model="visible"
    title="系统设置"
    width="30%"
    append-to-body
    :before-close="handleClose"
    @open="handleOpen"
  >
    {{ fontSize }}


    <el-button
      style="font-size: 13px"
      @click="setHtmlFont('small')"
    >
      小 Small
    </el-button>
    <el-button
      style="font-size: 14px"
      @click="setHtmlFont('medium')"
    >
      中 Medium
    </el-button>
    <el-button
      style="font-size: 16px"
      @click="setHtmlFont('large')"
    >
      大 Large
    </el-button>
  </el-dialog>
</template>

<script lang="ts">
import {defineComponent,ref, watch} from 'vue';
import {appSettingsContext} from './appSettings';

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