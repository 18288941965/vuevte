<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :color="color"
    :height="size"
    :width="size"
    viewBox="0 0 1024 1024"
  >
    <path
      fill="currentColor"
      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.5 448-448c0-247.4-200.6-448-448-448z m44.8 803.3V736h-89.6v131.3C305.4 847 177 718.6 156.7 556.8H288v-89.6H156.7C177 305.5 305.4 177.1 467.2 156.7V288h89.6V156.7C718.6 177.1 847 305.5 867.3 467.2H736v89.6h131.3C847 718.6 718.6 847 556.8 867.3z"  />
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