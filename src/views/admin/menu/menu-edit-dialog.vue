<template>
  <el-dialog
    v-model="visible"
    title="菜单编辑"
    width="800"
    :before-close="handleClose"
    @open="handleOpen"
  >
    <p>ddddddd</p>
  </el-dialog>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue'

export default defineComponent({
  name: 'MenuEditDialog',
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true,
    },
    dataId: {
      type: String,
      default: undefined,
    },
  },
  emits: ['close-dialog'],
  setup (props, { emit }) {
    const visible = ref(false)
    watch(
      () => props.show,
      () => {
        visible.value = props.show
      },
    )

    const handleOpen = () => {
      //
    }

    // 关闭窗口
    const handleClose = () => {
      emit('close-dialog')
    }
    return {
      visible,

      handleOpen,
      handleClose,
    }
  },
})
</script>

<style scoped>

</style>