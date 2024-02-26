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
      d="M1 16V0H9.47059L9.84706 1.88235H15.1176V11.2941H8.52941L8.15294 9.41176H2.88235V16H1ZM10.0824 9.41176H13.2353V3.76471H8.29412L7.91765 1.88235H2.88235V7.52941H9.70588L10.0824 9.41176Z"
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
  size: 16
})
</script>