<template>
  <div>
    <el-button @click="dialogBaseOpen(undefined)" type="primary">
      打开菜单编辑
    </el-button>

    <menu-edit-dialog
      v-bind="dialogBase"
      @close-dialog="dialogBaseClose"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {dialogBaseContent} from '@utils/dialogOptions'
import MenuEditDialog from './menu-edit-dialog.vue'

export default defineComponent({
  name: 'MenuIndex',
  components: {
    MenuEditDialog,
  },
  setup () {
    
    const {
      dialogBase,
      dialogBaseClose,
      dialogBaseOpen,
    } = dialogBaseContent()

    return {
      dialogBase,
      dialogBaseClose,
      dialogBaseOpen,
    }
  },
})
</script>

<style scoped>

</style>