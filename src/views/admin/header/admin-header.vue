<template>
  <header class="admin-header">
    <button
      class="admin-header-button admin-header-menu-collapse"
      @click="setMenuCollapse"
    >
      <MenuOpen
        :class="{'admin-header-mo' : menuCollapse, 'admin-header-mc' : !menuCollapse }"
      />
    </button>

    <button class="admin-header-button">
      <Search />
    </button>

    <button
      class="admin-header-button"
      @click="menuOpen"
    >
      <Adjust />
    </button>

    <div class="admin-header-menu-card">
      <button
        class="admin-header-button"
        @click.stop="setPanelShow(undefined)"
      >
        <span>{{ getMenuLabel }}</span>
        <ArrowDropDown />
      </button>

      <div
        v-show="panelShow"
        class="admin-header-menu-panel"
      >
        <div class="admin-header-menu-panel-content card-scroll">
          <ul>
            <li
              v-for="(menu, index) in activeMenus.menus"
              :key="'header-menu-' + index"
              class="admin-header-menu-item"
              :class="{'admin-header-menu-active': menu.id === activeMenus.menuId }"
              @click.stop="pushRouter(menu)"
            >
              <i>
                <component
                  :is="menu.icon ? menu.icon : 'Labeled'"
                  color="var(--header-text-color)"
                  :size="20"
                />
              </i>
              <span>{{ menu.label }}</span>
              <span :class="{'admin-header-menu-cache' : menu.cache}" />
            </li>
          </ul>

          <button
            v-if="activeMenus.menus.length > 1"
            class="admin-header-button"
            @click="cleanHistory"
          >
            <Close :size="20" />
            清空历史
          </button>
        </div>
      </div>
    </div>

    <admin-avatar />
  </header>
</template>

<script lang="ts">
import {defineComponent, PropType, computed} from 'vue';
import {ActiveMenus, MenuBean} from '../../../interface/menuInterface';
import adminAvatar from '../../../components/avatar/admin-avatar.vue';
import {
  Adjust,
  ArrowDropDown,
  MenuOpen,
  Search,
  Close
} from '../../../components/svicon/otherIcon';
import showContext from '../../../context/showContext';

export default defineComponent({
  name: 'AdminHeader',
  components: {
    Adjust,
    ArrowDropDown,
    MenuOpen,
    Search,
    Close,
    adminAvatar
  },
  props: {
    menuCollapse: {
      type: Boolean,
      default: false
    },
    activeMenus: {
      type: Object as PropType<ActiveMenus>,
      default: () => {
        return {
          menuId: '',
          menus: []
        }
      }
    }
  },
  emits: ['set-menu-collapse', 'push-router', 'menu-open', 'clean-history'],
  setup (props, {emit}) {
    const {
      panelShow,
      setPanelShow
    } = showContext()

    const setMenuCollapse = () => {
      emit('set-menu-collapse', !props.menuCollapse)
    }

    const getMenuLabel = computed(() => {
      if (!props.activeMenus?.menuId) {
        return ''
      }
      return props.activeMenus?.menus.find(item => item.id === props.activeMenus?.menuId).label
    })

    const pushRouter = (menu: MenuBean) => {
      setPanelShow(false)
      if (menu.id === props.activeMenus?.menuId) {
        return
      }
      emit('push-router', menu)
    }

    const menuOpen = () => {
      if (props.activeMenus?.menuId) {
        emit('menu-open', props.activeMenus.menuId)
      }
    }

    const cleanHistory = () => {
      emit('clean-history')
    }

    return {
      panelShow,
      setPanelShow,

      cleanHistory,
      
      setMenuCollapse,
      getMenuLabel,
      pushRouter,
      menuOpen
    }
  }
})
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/admin-header";
</style>