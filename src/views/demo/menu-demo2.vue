<template>
  <div style="margin: 20px">
    menu-demo2
    <el-input-number v-model="value" />
    <ul>
      <li v-for="item in 50" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'MenuDemo2',
  setup () {
    const value = ref(2)
    return {
      value
    }
  }
})
</script>

<style scoped>

</style>