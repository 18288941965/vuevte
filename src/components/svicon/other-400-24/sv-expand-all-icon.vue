<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :color="color"
       :height="size"
       :width="size"
       viewBox="0 -960 960 960">
    <path
      fill="currentColor"
      d="M480-80 240-320l57-57 183 183 183-183 57 57L480-80ZM298-584l-58-56 240-240 240 240-58 56-182-182-182 182Z"/>
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