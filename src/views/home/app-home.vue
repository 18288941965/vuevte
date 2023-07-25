<template>
  <div class="app-home">
    <header class="app-header">
      <app-logo />

      <div class="a-h-menu">
        <div
          class="a-h-menu-title"
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
          class="a-h-menu-card"
        >
          <ul>
            <li>
              <router-link
                to="/admin/theme"
                target="_blank"
                class="a-h-menu-item"
              >
                模板Ⅰ
                <OpenInNew :size="20" />
              </router-link>
            </li>
            <li>
              <router-link
                to="/admin/theme?id=2"
                target="_blank"
                class="a-h-menu-item"
              >
                模板Ⅱ
                <OpenInNew :size="20" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="a-h-menu">
        <div
          class="a-h-menu-title"
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
          class="a-h-menu-card"
        >
          <ul>
            <li>
              <router-link
                to="/desktop/theme"
                target="_blank"
                class="a-h-menu-item"
              >
                模板Ⅰ
                <OpenInNew :size="20" />
              </router-link>
            </li>
            <li>
              <router-link
                to="/desktop/theme2"
                target="_blank"
                class="a-h-menu-item"
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
        class="app-a"
      >
        <GitHub
          color="#FFFFFF"
          :size="24"
        />
      </a>

      <admin-avatar
        style="margin-left: 0"
        icon-color="#0A0A0A"
      />
    </header>

    <main class="app-main">
      <section class="app-snapshot">
        <img
          :src="logo3d"
          alt=" "
        >
        <h1 class="a-s-title">
          前端 开源 框架
        </h1>
        <h4 class="a-s-base">
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
    background: radial-gradient(50% 50% at 50% 50%, rgba(23, 23, 23, 0) 0%, rgba(23, 23, 23, .8) 100%),
    url("../../assets/image/bg/home-bg-black.png") no-repeat fixed top center;
  }
  html, body, #app, .app-home{
    height: 100%;
    width: 100%;
  }
</style>
<style scoped lang="scss">
  .app-header{
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    & .app-a{
      margin-right: 30px;
      margin-left: auto;
      width: 24px;
      height: 24px;
    }
  }

  /*a-h: app-header */
  .a-h-menu{
    margin-left: 30px;
    position: relative;
    &:hover .a-h-menu-title svg{
      transform: translateY(3px);
    }
    & .a-h-menu-title{
      color: #FFFFFF;
      display: flex;
      align-items: center;
      height: 46px;
      cursor: pointer;
      transition: color 0.3s;
      & svg{
        margin-left: 2px;
        transition: transform 0.3s;
      }
      &:hover{
        color: #BBBBBB;
      }
    }
  }

  .a-h-menu-card{
    position: absolute;
    left: 0;
    width: 300px;
    min-height: 200px;
    box-shadow: rgba(31, 35, 40, 0.12) 0 1px 3px, rgba(66, 74, 83, 0.12) 0 8px 24px;
    background-color: #FFFFFF;
    border-radius: 6px;
    padding: 10px 0;
  }

  .a-h-menu-item{
    text-decoration: none;
    color: inherit;
    display: grid;
    padding: 6px 12px;
    font-size: 16px;
    grid-template-columns: 1fr 30px;
    align-items: center;
    overflow: clip;
    & svg{
      color: #999999;
      transition: color 0.2s;
    }
    &:hover{
      background-color: #E3E3E3;
    }
    &:hover svg{
      color: inherit;
    }
  }

  .app-main{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100% - 60px);
  }

  .app-snapshot{
    text-align: center;
    & img{
      width: 200px;
      height: 200px;
    }
    & .a-s-title{
      color: #FFFFFF;
      font-size: 60px;
    }
    & .a-s-base{
      color: #BBBBBB;
      line-height: 100px;
    }
  }
</style>