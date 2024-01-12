<template>
  <div class="desktop-logo">
    <a href="/public">
      <img
        :src="logo"
        alt=" "
      >
      <span>
        Vuevte
      </span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import logo from '../../assets/logo.png'
</script>

<style scoped lang="scss">
  @use "../../assets/scssscoped/desktop/desktop-logo";
</style>