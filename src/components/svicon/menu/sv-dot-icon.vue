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
      d="M480-480Zm0 259.999q-107.922 0-183.961-76.038Q220.001-372.078 220.001-480q0-107.922 76.038-183.961Q372.078-739.999 480-739.999q107.922 0 183.961 76.038Q739.999-587.922 739.999-480q0 107.922-76.038 183.961Q587.922-220.001 480-220.001ZM480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z"
    />
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