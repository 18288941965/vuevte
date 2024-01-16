<template>
  <div class="admin-menu-top">
    <details id="admin-menu-top-details">
      <summary class="menu-summary">
        <Menus />
        <span>应用</span>
      </summary>
      <div class="top-menu-panel">
        <nav class="top-menu-nav">
          <ul class="top-menu-column">
            <li
              v-for="(menu, index) in getExcludeChildren"
              :key="'e-t-m-' + index"
            >
              <router-link
                class="nav-item"
                :to="menu.url"
                @click="pushRouter(menu)"
              >
                <span>{{ menu.label }}</span>
              </router-link>
            </li>
          </ul>

          <div
            v-for="(item, index) in getIncludeChildren"
            :key="'i-t-m-' + index"
            class="top-menu-column"
          >
            <section>
              <h5 class="menu-group-title">
                {{ item.label }}
              </h5>
            </section>
            <ul>
              <li
                v-for="(menu, idx) in item.children"
                :key="index + '-i-t-m-c-' + idx"
              >
                <router-link
                  class="nav-item"
                  :to="menu.url"
                  @click="pushRouter(menu)"
                >
                  <span>{{ menu.label }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </details>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, computed} from 'vue'
import {MenuBean} from '../../../interface/menuInterface'
import {MenuContext} from '../../../context/menuContext'
import {useRouter} from 'vue-router'
import {PushRouter} from '../../../types/baseType'
import menuDfs from '../../../algo/menuDfs'
import {Menus} from '../../../components/svicon/publicIcon'
import {closeDetails} from '../../../util/baseUtil'

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
      closeDetails('admin-menu-top-details')
    }

    const loadCallback = (id: string, label: string, icon = '') => {
      emit('set-parent-menu', id, label, icon)
    }

    // 获取有子菜单的菜单
    const getIncludeChildren = computed(() => {
      if (menus.value.length === 0 || !menus.value[0].children) {
        return []
      }
      return (menus.value[0].children as Array<MenuBean>).filter(item => item.children && item.children.length > 0)
    })

    // 获取没有子菜单的菜单
    const getExcludeChildren = computed(() => {
      if (menus.value.length === 0 || !menus.value[0].children) {
        return []
      }
      return (menus.value[0].children as Array<MenuBean>).filter(item => !item.children || item.children.length === 0)
    })

    onMounted(() => {
      const routerPath =  router.currentRoute.value.path

      getMenus(pushRouter, routerPath, loadCallback)
    })

    return {
      menus,
      pushRouter,
      menuDefaultOpeneds,
      adminMenuRef,
      setActivePath,

      closeDetails,
      getIncludeChildren,
      getExcludeChildren
    }
  }
})
</script>
<style lang="scss">
@use "../../../assets/scss/admin/_admin-menu-top.scss";
</style>