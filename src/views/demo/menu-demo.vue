<template>
  <div style="margin: 20px">
    menu-demo
    <h1>页面数据被缓存</h1>
    <el-input-number v-model="value" />
    
    <el-card
      style="height: 12vh;margin-top: 40px;"
      header="el-card"
    />

    <el-card
      style="height: 12vh;margin-top: 40px;"
      shadow="never"
      header="el-card"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
export default defineComponent({
  name: 'MenuDemo',
  setup () {
    const value = ref(0)
    return {
      value
    }
  }
})
</script>

<style scoped>

</style>