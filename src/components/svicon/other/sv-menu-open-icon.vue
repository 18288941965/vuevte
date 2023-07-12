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
      d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"
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