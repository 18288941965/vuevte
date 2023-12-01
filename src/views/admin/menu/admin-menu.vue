<template>
  <template v-if="menus.length > 0">
    <admin-logo
      class="header-ht"
      :menu-collapse="collapse"
      :module-icon="menus[0].icon"
      :module-label="menus[0].label"
    />
    <el-menu
      ref="adminMenuRef"
      :collapse="collapse"
      :default-openeds="menuDefaultOpeneds"
      class="admin-el-menu"
      background-color="var(--menu-bg-color)"
      text-color="var(--menu-text-color)"
      active-text-color="var(--menu-text-color)"
    >
      <template
        v-for="(menu, index) in menus[0].children"
        :key="'menu-' + index"
      >
        <el-menu-item
          v-if="!menu.children || menu.children.length === 0"
          :key="menu.id"
          :index="menu.id"
          :class="{'menu-active' : menu.id === menuId }"
          @click="pushRouter(menu)"
        >
          <i class="menu-icon">
            <component
              :is="menu.icon"
              :size="24"
            />
          </i>

          <template #title>
            <span>{{ menu.label }}</span>
          </template>
        </el-menu-item>

        <el-sub-menu
          v-else
          :key="menu.id"
          :index="menu.id"
        >
          <template #title>
            <i class="menu-icon">
              <component
                :is="menu.icon"
                :size="24"
              />
            </i>
            <span>{{ menu.label }}</span>
          </template>
          <admin-menu-child
            :menus="menu.children"
            :menu-id="menuId"
            @push-router="pushRouter"
          />
        </el-sub-menu>
      </template>
    </el-menu>
  </template>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import AdminMenuChild from './admin-menu-child.vue';
import {MenuBean} from '../../../interface/menuInterface';
import {MenuContext} from '../../../context/menuContext';
import {useRouter} from 'vue-router';
import {PushRouter} from '../../../types/baseType';
import AdminLogo from '../logo/admin-logo.vue';
import menuDfs from '../../../algo/menuDfs';

export default defineComponent({
  name: 'AdminMenu',
  components: {
    AdminLogo,
    AdminMenuChild
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    },
    menuId: {
      type: String,
      default: ''
    }
  },
  emits: ['push-router'],
  setup (props, { emit }) {
    const router = useRouter()
    const adminMenuRef = ref()

    const {
      menus,
      getMenus,
      menuDefaultOpeneds
    } = MenuContext()

    // 2、滚动到当前的元素
    const scrollTarget = () => {
      const targetElement = document.getElementsByClassName('menu-active');
      if (targetElement.length > 0) {
        targetElement[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
      }
    }

    // 1、展开当前的菜单
    const menuOpen = (index: string) => {
      const menuPrev = menuDfs(menus.value[0], index);
      if (menuPrev.length > 1) {
        index = menuPrev[menuPrev.length - 2].id
      }
      adminMenuRef.value?.open(index)
      scrollTarget()
    }

    const pushRouter: PushRouter = (menu: MenuBean) => {
      if (menu.id === props.menuId) {
        return
      }
      emit('push-router', menu)
    }

    onMounted(() => {
      const routerPath =  router.currentRoute.value.path;

      getMenus(pushRouter, routerPath)
    })

    return {
      menus,
      pushRouter,
      menuDefaultOpeneds,
      adminMenuRef,
      menuOpen
    }
  }
})
</script>
<style>
  @import "../../../assets/css/admin/admin-menu.css";
</style>