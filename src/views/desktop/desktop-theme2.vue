<template>
  <div style="color: #FFFFFF;">
    黑色主题 | 首页
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DesktopTheme2',
  setup () {
    return {

    }
  }
})
</script>

<style>
:root{
  --bg-color: rgb(20, 20, 20);
  --card-color: rgb(23,23,23);
}
body{
  background-color: var(--bg-color);
}
</style>
<style scoped lang="scss">

</style>