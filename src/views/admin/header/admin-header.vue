<template>
  <header class="admin-header">
    <admin-logo
      class="theme-header-ht"
      :menu-collapse="false"
      :module-icon="moduleIcon"
      :module-label="moduleLabel"
    />

    <slot name="default" />

    <div class="empty-flex" />

    <div class="button-star">
      <button disabled>
        <Star />
      </button>
      <span />
      <button disabled>
        <ArrowDropDown :size="20" />
      </button>
    </div>

    <app-search>
      <template #button>
        <button
          class="app-search-button mgl-medium"
        >
          <Search :size="20" />
          <span>搜索</span>
          <span>|</span>
          <span>跳转</span>
        </button>
      </template>
    </app-search>

    <app-theme class="mgl-medium" />

    <user-avatar
      :user-name="userName"
      class="admin-avatar"
    >
      <template #summary>
        <el-avatar
          :size="26"
        >
          <template #default>
            <PersonFill />
          </template>
        </el-avatar>
        <span />
        <ArrowDropDown color="#ffffff" />
      </template>
    </user-avatar>
  </header>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, PropType, ref} from 'vue'
import AdminLogo from '../../logo/admin-logo.vue'
import {ActiveMenus, MenuBean} from '../../../interface/menuInterface'
import AppSearch from '../../../app-search.vue'
import AppTheme from '../../../app-theme.vue'
import UserAvatar from '../../../components/avatar/user-avatar.vue'
import showContext from '../../../context/showContext'
import {
  Star,
  Search,
  ArrowDropDown,
  PersonFill
} from '../../../components/svicon/publicIcon'
import LocalStorage from '../../../class/LocalStorage'

export default defineComponent({
  name: 'AdminHeader',
  components: {
    AdminLogo,
    AppSearch,
    AppTheme,
    UserAvatar,
    Star,
    Search,
    ArrowDropDown,
    PersonFill
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
    const userName = ref('')
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

    onMounted(() => {
      const local = new LocalStorage()
      userName.value = local.getUserName()
    })

    return {
      userName,
      panelShow,
      setPanelShow,
      getMenuLabel,
      pushRouter
    }
  }
})
</script>

<style lang="scss">
@use "../../../assets/scssscoped/admin/admin-header";
</style>