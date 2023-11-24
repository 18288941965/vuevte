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
      d="M481-320q-24 0-40.5-17T426-377q3-42 20-73t54-64q41-36 62.5-62.5T584-637q0-41-27.5-68T480-732q-32 0-54.5 13.5T389-685q-14 20-34.5 27t-39.5-1q-23-10-31.5-33t3.5-43q29-45 78-75t115-30q105 0 161.5 58.5T698-641q0 50-21.5 85.5T609-475q-34 32-48 52t-19 46q-4 25-21 41t-40 16Zm-1 240q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 23.5T560-160q0 33-23.5 56.5T480-80Z"
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