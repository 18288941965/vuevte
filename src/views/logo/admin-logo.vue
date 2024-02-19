<template>
  <div
    class="admin-logo"
  >
    <a href="/public">
      <Home
        :size="18"
        style="color: var(--color-white);"
      />
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
import {getModuleIconUrl} from '../../util/baseUtil'
import {
  Home
} from '../../components/svicon/publicIcon'

export default defineComponent({
  name: 'AdminLogo',
  components: {
    Home
  },
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
      getModuleIconUrl
    }
  }
})
</script>

<style scoped lang="scss">
  @use "../../assets/scssscoped/admin/admin-logo";
</style>