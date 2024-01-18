<template>
  <div
    class="admin-logo"
  >
    <a href="/public">
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
import {defineComponent } from 'vue'

export default defineComponent({
  name: 'AdminLogo',
  props: {
    menuCollapse: {
      type: Boolean
    },
    moduleIcon: {
      type: String,
      default: undefined
    },
    moduleLabel: {
      type: String,
      default: undefined
    }
  },
  setup () {
    return {
    }
  }
})
</script>

<style scoped lang="scss">
  @use "../../assets/scssscoped/admin/admin-logo";
</style>