<template>
  <div class="desktop-logo">
    <a href="/">
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
import logo from '../../../assets/logo.png'
</script>

<style scoped lang="scss">
  .desktop-logo{
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    & a{
      display: inline-flex;
      align-items: center;
      color: var(--menu-text-color);
      cursor: pointer;
      text-decoration: none;
    }
    & img{
      width: 28px;
      margin-right: 8px;
    }
  }
</style>