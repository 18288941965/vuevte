<template>
  <div class="login">
    1
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {getModuleLogoUrl} from '../../util/baseUtil'
import logo from '../../assets/logo.png'

export default defineComponent({
  name: 'DesktopTheme',
  components: {
  },
  setup () {
    return {
      logo,
      getModuleLogoUrl
    }
  }
})
</script>

<style scoped lang="scss">
  .login{
    height: 100vh;
    width: 100%;
    background-color: #2388FF;
    background-image: url("/public/home/d-bg.svg");
    background-size: cover;
    background-position: right bottom;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
  }
</style>