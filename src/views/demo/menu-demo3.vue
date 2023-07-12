<template>
  <div style="padding: 20px;">
    menu-demo3
    <h1>页面数据被缓存</h1>
    <el-input-number v-model="value" />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'MenuDemo3',
  setup () {
    const value = ref(3)
    return {
      value
    }
  }
})
</script>

<style scoped>

</style>