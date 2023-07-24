<template>
  <div class="admin-logo">
    <a href="/">
      <img
        v-if="moduleIcon"
        :src="getModuleIconUrl(moduleIcon)"
        alt=" "
      >
      <Transition name="slide-fade">
        <span
          v-if="!menuCollapse"
          id="admin-logo-text"
        >
          {{ moduleLabel }}
        </span>
      </Transition>
    </a>
  </div>
</template>

<script lang="ts">
import {defineComponent } from 'vue';
import {getModuleIconUrl} from '../../../util/base';

export default defineComponent({
  name: 'AdminLogo',
  props: {
    menuCollapse: {
      type: Boolean,
      default: false
    },
    moduleIcon: {
      type: String,
      default: ''
    },
    moduleLabel: {
      type: String,
      default: ''
    }
  },
  setup () {
    return {
      getModuleIconUrl
    }
  }
})
</script>

<style scoped lang="scss">
  .admin-logo{
    width: 100%;
    z-index: var(--z-index-b);
    font-size: 16px;
    position: relative;
    border-bottom: 1px solid var(--logo-border-color);
    background-color: var(--logo-bg);
    display: flex;
    align-items: center;
    & a{
      display: inline-flex;
      align-items: center;
      color: var(--menu-text-color);
      cursor: pointer;
      text-decoration: none;
      margin-left: 18px;
    }
    & img{
      width: 24px;
      margin-right: 12px;
    }
    & #admin-logo-text{
      margin-right: 16px;
      white-space: nowrap;
      overflow: clip;
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
  }
</style>