<template>
  <div class="app-home">
    <header class="home-header">
      <DesktopLogo style="color: #FFFFFF" />

      <div class="header-menu">
        <div
          class="menu-title"
          @click="adminSetPanelShow(undefined, $event)"
        >
          <span>后台模板</span>
          <Expand
            color="#BBBBBB"
            :size="20"
          />
        </div>

        <div
          v-show="adminPanelShow"
          class="menu-card"
        >
          <ul>
            <li>
              <router-link
                to="/admin/theme"
                target="_blank"
                class="menu-item"
              >
                模板Ⅰ
                <OpenInNew :size="20" />
              </router-link>
            </li>
            <li>
              <router-link
                to="/admin/theme?id=2"
                target="_blank"
                class="menu-item"
              >
                模板Ⅱ
                <OpenInNew :size="20" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="header-menu">
        <div
          class="menu-title"
          @click="desktopSetPanelShow(undefined, $event)"
        >
          <span>桌面模板</span>
          <Expand
            color="#BBBBBB"
            :size="20"
          />
        </div>

        <div
          v-show="desktopPanelShow"
          class="menu-card"
        >
          <ul>
            <li>
              <router-link
                to="/desktop/theme"
                target="_blank"
                class="menu-item"
              >
                模板Ⅰ
                <OpenInNew :size="20" />
              </router-link>
            </li>
            <li>
              <router-link
                to="/desktop/theme2"
                target="_blank"
                class="menu-item"
              >
                模板Ⅱ
                <OpenInNew :size="20" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <a
        href="https://github.com/18288941965/vuevte"
        target="_blank"
        class="header-github"
      >
        <GitHub
          color="#FFFFFF"
          :size="24"
        />
      </a>

      <admin-avatar
        icon-color="#393939"
      />
    </header>

    <main class="home-main">
      <section class="main-snapshot">
        <h1 class="snapshot-title">
          前端开源框架
        </h1>
        <h4 class="snapshot-base">
          基于 ↘
        </h4>
        <AppAttached />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AdminAvatar from '../../components/avatar/admin-avatar.vue';
import {
  Expand,
  OpenInNew,
  GitHub
} from '../../components/svicon/otherIcon';
import AppAttached from './app-attached.vue'
import showContext from '../../context/showContext';
import DesktopLogo from '../admin/logo/desktop-logo.vue'

export default defineComponent({
  name: 'AppHome',
  components: {
    Expand,
    GitHub,
    AdminAvatar,
    OpenInNew,
    AppAttached,
    DesktopLogo
  },
  setup () {
    const {
      panelShow: adminPanelShow,
      setPanelShow: adminSetPanelShow
    } = showContext()

    const {
      panelShow: desktopPanelShow,
      setPanelShow: desktopSetPanelShow
    } = showContext()

    return {
      adminPanelShow,
      adminSetPanelShow,
      desktopPanelShow,
      desktopSetPanelShow
    }
  }
})
</script>
<style>
  body{
    background-color: #393939;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232d2d2d' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  }
</style>
<style scoped lang="scss">
  @import "../../assets/scss/app-home";
</style>