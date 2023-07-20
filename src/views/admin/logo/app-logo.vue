<template>
  <div class="app-logo">
    <img
      :src="logo"
      alt=" "
    >
  </div>
</template>

<script lang="ts">
import {defineComponent } from 'vue';
import logo from '../../../assets/logo-text-w.svg'

export default defineComponent({
  name: 'AppLogo',
  setup () {
    return {
      logo
    }
  }
})
</script>

<style scoped lang="scss">
  .app-logo{
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #FFFFFF;
    font-size: 16px;
    padding-right: 20px;
    & img{
      height: 16px;
    }
  }
</style>