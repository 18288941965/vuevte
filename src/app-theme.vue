<template>
  <button
    class="app-theme"
    @click="setTheme"
  >
    <Dark
      v-if="model === 'dark'"
      :size="20"
    />
    <Light
      v-else
      :size="20"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import {
  Dark,
  Light
} from './components/svicon/publicIcon';
import {themeContext} from './AppTheme';

export default defineComponent({
  name: 'AppTheme',
  components: {
    Dark,
    Light
  },
  setup () {
    const model = ref('')
    const {
      getThemeModel,
      setThemeModel
    } = themeContext()

    const setTheme = () => {
      const themeModel = model.value === 'dark' ? 'light' : 'dark'
      setThemeModel(themeModel)
      model.value = themeModel
    }

    onMounted(() => {
      model.value = getThemeModel()
    })

    return {
      model,
      setThemeModel,
      setTheme
    }
  }
})
</script>

<style scoped lang="scss">
  .app-theme{
    border: var(--color-border-1);
    background-color: var(--menu-bg-color);
    margin-right: 15px;
    color: var(--header-text-color);
    height: 32px;
    padding: 3px 24px 0 10px;
    border-radius: 16px;
    cursor: pointer;
  }
</style>