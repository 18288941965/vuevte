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

      <div class="button-star">
        <button>
          <Star />
        </button>
        <span />
        <button>
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
import {computed, defineComponent, PropType} from 'vue'
import AdminLogo from '../logo/admin-logo.vue'
import {ActiveMenus, MenuBean} from '../../../interface/menuInterface'
import AppSearch from '../../../app-search.vue'
import AppTheme from '../../../app-theme.vue'
import UserAvatar from '../../../components/avatar/user-avatar.vue'
import showContext from '../../../context/showContext'
import {
  Star,
  ArrowDropDown
} from '../../../components/svicon/publicIcon'

export default defineComponent({
  name: 'AdminHeader2',
  components: {
    AdminLogo,
    AppSearch,
    AppTheme,
    UserAvatar,
    Star,
    ArrowDropDown
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
  emits: ['push-router'],
  setup (props, {emit}) {

    const {
      panelShow,
      setPanelShow
    } = showContext()

    const getMenuLabel = computed(() => {
      if (!props.activeMenus.menuId || !props.activeMenus.menus) {
        return ''
      }
      const menuBean = props.activeMenus.menus.find(item => item.id === props.activeMenus.menuId)
      return menuBean ? menuBean.label : ''
    })

    const pushRouter = (menu: MenuBean) => {
      setPanelShow(false)
      if (menu.id === props.activeMenus?.menuId) {
        return
      }
      emit('push-router', menu)
    }

    return {
      panelShow,
      setPanelShow,
      getMenuLabel,
      pushRouter
    }
  }
})
</script>

<style scoped lang="scss">
@use "../../../assets/scssscoped/admin/admin-header-public";
@use "../../../assets/scssscoped/admin/admin-header2";
</style>