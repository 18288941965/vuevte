<template>
  <div class="admin-menu-top">
    <details>
      <summary class="menu-summary">
        <Menus />
        <span>应用</span>
      </summary>
      <div class="top-menu-panel">
        {{ menus }}
        <ul>
        </ul>
      </div>
    </details>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {MenuBean} from '../../../interface/menuInterface'
import {MenuContext} from '../../../context/menuContext'
import {useRouter} from 'vue-router'
import {PushRouter} from '../../../types/baseType'
import menuDfs from '../../../algo/menuDfs'
import {Menus} from '../../../components/svicon/publicIcon'

export default defineComponent({
  name: 'AdminMenuTop',
  components: {
    Menus
  },
  props: {
    collapse: {
      type: Boolean
    },
    menuId: {
      type: String,
      required: true
    }
  },
  emits: ['push-router', 'set-parent-menu', 'set-active-menu'],
  setup (props, {emit}) {
    const router = useRouter()
    const adminMenuRef = ref()

    const {
      menus,
      menuDefaultOpeneds,
      getMenus
    } = MenuContext()

    const setActivePath = (menuId: string) => {
      const menuPath = menuDfs(menus.value[0], menuId, false)
      emit('set-active-menu', menuPath)
    }

    const pushRouter: PushRouter = (menu: MenuBean) => {
      if (menu.id === props.menuId) {
        return
      }
      emit('push-router', menu)
      setActivePath(menu.id)
    }

    const loadCallback = (id: string, label: string, icon = '') => {
      emit('set-parent-menu', id, label, icon)
    }

    onMounted(() => {
      const routerPath =  router.currentRoute.value.path

      getMenus(pushRouter, routerPath, loadCallback)
    })

    return {
      menus,
      pushRouter,
      menuDefaultOpeneds,
      adminMenuRef,
      setActivePath
    }
  }
})
</script>
<style lang="scss">
@use "../../../assets/scss/admin/_admin-menu-top.scss";
</style>