<template>
  <div>
    <ev-select-demo style="box-shadow: var(--color-shadow-small); border: var(--color-border-1); padding: 20px;border-radius: var(--border-radius-medium);margin-bottom: 20px;"></ev-select-demo>
    <ev-checkbox-demo style="box-shadow: var(--color-shadow-small); border: var(--color-border-1); padding: 20px;border-radius: var(--border-radius-medium);margin-bottom: 20px;"></ev-checkbox-demo>
    <ev-radio-demo style="box-shadow: var(--color-shadow-small); border: var(--color-border-1); padding: 20px;border-radius: var(--border-radius-medium);margin-bottom: 20px;"></ev-radio-demo>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import EvCheckboxDemo from './ev-checkbox-demo.vue';
import EvRadioDemo from './ev-radio-demo.vue';
import EvSelectDemo from './ev-select-demo.vue';

export default defineComponent({
  name: 'EvDicDemo',
  components: {
    EvCheckboxDemo,
    EvRadioDemo,
    EvSelectDemo
  },
  setup () {
    return {

    }
  }
})
</script>

<style scoped>

</style>