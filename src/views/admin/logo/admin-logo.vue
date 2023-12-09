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
import {defineComponent } from 'vue'
import {getModuleIconUrl} from '../../../util/baseUtil'

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
      default: 'Vuevte'
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
  @use "../../../assets/scssscoped/admin/admin-logo";
</style>