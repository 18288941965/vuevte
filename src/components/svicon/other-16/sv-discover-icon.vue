<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :color="color"
    :height="size"
    :width="size"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M8.88889 5.33333V3.55556H11.5556V0H13.3333V3.55556H16V5.33333H8.88889ZM11.5556 16V7.11111H13.3333V16H11.5556ZM2.66667 16V12.4444H0V10.6667H7.11111V12.4444H4.44444V16H2.66667ZM2.66667 8.88889V0H4.44444V8.88889H2.66667Z"
    />
  </svg>
</template>

<script lang="ts" setup>
import { IconProps} from '@utils/types'

withDefaults(defineProps<IconProps>() , {
  color: '',
  size: 16,
})
</script>