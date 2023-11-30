<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :color="color"
    :height="size"
    :width="size"
    viewBox="0 -960 960 960"
  >
    <path
      fill="currentColor"
      d="M520-600v-80h120v-160h80v160h120v80H520Zm120 480v-400h80v400h-80Zm-400 0v-160H120v-80h320v80H320v160h-80Zm0-320v-400h80v400h-80Z"/>
  </svg>
</template>

<script lang="ts" setup>
interface Props {
  color?: string
  size?: number
}

withDefaults(defineProps<Props>(), {
  color: '',
  size: 24
})
</script>