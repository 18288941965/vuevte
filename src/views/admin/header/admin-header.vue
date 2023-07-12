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
                :is="menu.icon ? menu.icon : 'LabelIcon'"
                color="var(--header-text-color)"
                :size="20"
              />
            </i>
            <span>{{ menu.label }}</span>
            <span :class="{'admin-header-menu-cache' : menu.cache}" />
          </li>
        </ul>
      </div>
    </div>

    <admin-avatar />
  </header>
</template>

<script lang="ts">
import {defineComponent, PropType, computed, onMounted, reactive} from 'vue';
import {ActiveMenus, MenuBean} from '../../../interface/menuInterface';
import adminAvatar from '../../../components/avatar/admin-avatar.vue';
import {
  Adjust,
  ArrowDropDown,
  MenuOpen,
  Search
} from '../../../components/svicon/other/otherIcon';
import showContext from '../../../context/showContext';

export default defineComponent({
  name: 'AdminHeader',
  components: {
    Adjust,
    ArrowDropDown,
    MenuOpen,
    Search,
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
  emits: ['set-menu-collapse', 'push-router', 'menu-open'],
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

    return {
      panelShow,
      setPanelShow,
      
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