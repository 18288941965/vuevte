<template>
  <div class="app-home">
    <header class="home-header">
      <app-logo />

      <div class="header-menu">
        <div
          class="menu-title"
          @click.stop="adminSetPanelShow(undefined)"
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
          @click.stop="desktopSetPanelShow(undefined)"
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
        icon-color="#0A0A0A"
      />
    </header>

    <main class="home-main">
      <section class="main-snapshot">
        <img
          :src="logo3d"
          alt=" "
        >
        <h1 class="snapshot-title">
          前端 开源 框架
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
import AppLogo from '../admin/logo/app-logo.vue';
import AdminAvatar from '../../components/avatar/admin-avatar.vue';
import {
  Expand,
  OpenInNew,
  GitHub
} from '../../components/svicon/otherIcon';
import AppAttached from './app-attached.vue'
import logo3d from '../../assets/logo.png'
import showContext from '../../context/showContext';

export default defineComponent({
  name: 'AppHome',
  components: {
    Expand,
    GitHub,
    AppLogo,
    AdminAvatar,
    OpenInNew,
    AppAttached
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
      logo3d,
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
    background: radial-gradient(50% 50% at 50% 50%, rgba(23, 23, 23, 0) 0%, rgba(23, 23, 23, .8) 100%)
    ,url("../../assets/image/bg/home-bg-black.png") no-repeat fixed top center;
  }
</style>
<style scoped lang="scss">
  @import "../../assets/scss/app-home";
</style>