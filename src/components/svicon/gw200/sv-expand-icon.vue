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
      d="M480-371.923 267.692-584.231 296-612.539l184 184 184-184 28.308 28.308L480-371.923Z"
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