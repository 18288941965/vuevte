<template>
  <admin-dashboard />
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AdminDashboard from '../admin/admin-dashboard.vue'

export default defineComponent({
  name: 'AdminDashboard3',
  components: {
    AdminDashboard
  }
})

</script>