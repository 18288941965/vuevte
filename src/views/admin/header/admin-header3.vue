<template>
  <header class="admin-header">
    <admin-logo
      class="theme-header-ht"
      :bottom-border="false"
      :menu-collapse="false"
      :module-icon="moduleIcon"
      :module-label="moduleLabel"
    />

    <div class="empty-flex" />

    <app-search />

    <app-theme class="mgl-medium" />

    <user-avatar
      bg-color="#4385F4"
      icon-color="#ffffff"
    />
  </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AdminLogo from '../logo/admin-logo.vue'
import AppSearch from '../../../app-search.vue'
import AppTheme from '../../../app-theme.vue'
import UserAvatar from '../../../components/avatar/user-avatar.vue'

export default defineComponent({
  name: 'AdminHeader3',
  components: {
    AdminLogo,
    AppSearch,
    AppTheme,
    UserAvatar
  },
  props: {
    moduleIcon: {
      type: String,
      default: undefined
    },
    moduleLabel: {
      type: String,
      default: undefined
    }
  },
  setup () {

  }
})
</script>

<style scoped lang="scss">
@use "../../../assets/scssscoped/admin/admin-header-public";
@use "../../../assets/scssscoped/admin/admin-header3";
</style>