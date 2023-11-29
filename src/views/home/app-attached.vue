<template>
  <div class="app-attached">
    <div>
      <img
        :src="vueLogo"
        alt=" "
      >
      Vue3
    </div>

    <div>
      <img
        :src="viteLogo"
        alt=" "
      >
      Vite
    </div>

    <div>
      <img
        :src="typescriptLogo"
        alt=" "
      >
      TypeScript
    </div>

    <div>
      <img
        :src="elementLogo"
        alt=" "
      >
      Element Plus
    </div>
  </div>
</template>

<script lang="ts" setup>
import vueLogo from '../../assets/image/other/vue-logo.svg'
import viteLogo from '../../assets/image/other/vite-logo.svg'
import typescriptLogo from '../../assets/image/other/typescript-logo.svg'
import elementLogo from '../../assets/image/other/element-logo.svg'
</script>

<style scoped lang="scss">
  .app-attached{
    color: #BBBBBB;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    & img{
      width: 32px;
      height: 32px;
      vertical-align: text-bottom;
    }
    & div{
      display: grid;
      grid-template-columns: 46px 1fr;
      align-items: center;
    }
    & div:not(:first-child) {
      margin-left: 40px;
    }
  }
</style>