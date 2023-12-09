<template>
  <div>
    <header class="header-ht theme-header">
      <DesktopLogo />
    </header>

    <h1>首页模板2</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import DesktopLogo from '../admin/logo/desktop-logo.vue'

export default defineComponent({
  name: 'DesktopTheme2',
  components: {
    DesktopLogo
  },
  setup () {
    return {

    }
  }
})
</script>