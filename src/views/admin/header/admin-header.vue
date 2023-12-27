<template>
  <header class="admin-header">
    <admin-logo
      class="theme-header-ht"
      :menu-collapse="false"
      :module-icon="moduleIcon"
      :module-label="moduleLabel"
    />

    <div class="header-action">
      <div class="empty-flex" />

      <div class="button-star mgl-medium">
        <button :disabled="true">
          <Star />
        </button>
        <span />
        <button :disabled="true">
          <ArrowDropDown :size="20" />
        </button>
      </div>

      <app-search />

      <app-theme class="mgl-medium" />

      <user-avatar
        bg-color="#4385F4"
        icon-color="#ffffff"
      />
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {ActiveMenus, MenuBean} from '../../../interface/menuInterface'
import UserAvatar from '../../../components/avatar/user-avatar.vue'
import {
  ArrowDropDown,
  Star
} from '../../../components/svicon/publicIcon'
import AppTheme from '../../../app-theme.vue'
import AppSearch from '../../../app-search.vue'
import AdminLogo from '../logo/admin-logo.vue'
import {closeDetails} from '../../../util/baseUtil'

export default defineComponent({
  name: 'AdminHeader',
  components: {
    AppTheme,
    ArrowDropDown,
    AppSearch,
    UserAvatar,
    AdminLogo,
    Star
  },
  props: {
    menuCollapse: {
      type: Boolean,
      default: false
    },
    moduleIcon: {
      type: String,
      default: undefined
    },
    moduleLabel: {
      type: String,
      default: undefined
    },
    activeMenus: {
      type: Object as PropType<ActiveMenus>,
      required: true
    }
  },
  emits: ['push-router', 'clean-history'],
  setup (props, {emit}) {
    
    const pushRouter = (menu: MenuBean) => {
      if (menu.id === props.activeMenus?.menuId) {
        return
      }
      emit('push-router', menu)
    }

    const cleanHistory = (id: string | undefined) => {
      if (props.activeMenus && props.activeMenus.menus.length === 1) {
        closeDetails('admin-header-details')
      }
      emit('clean-history', id)
    }

    return {
      cleanHistory,
      pushRouter,
      closeDetails
    }
  }
})
</script>

<style scoped lang="scss">
  @use "../../../assets/scssscoped/admin/admin-header-public";
  @use "../../../assets/scssscoped/admin/admin-header";
</style>