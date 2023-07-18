<template>
  <div class="app-home">
    <header class="app-header">
      <app-logo />

      <div class="app-menu">
        <div class="app-menu-title">
          <span>主题</span>
          <Expand
            color="#BBBBBB"
            :size="20"
          />
        </div>

        <div class="app-menu-card">
          <ul>
            <li>
              <router-link
                to="/admin/theme"
                target="_blank"
                class="app-menu-item"
              >
                admin模板
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
          :size="32"
        />
      </a>

      <admin-avatar style="margin-left: 0" />
    </header>

    <section class="app-snapshot">
      <h1 class="a-s-title">
        前端 开源 框架
      </h1>
      <h4 class="a-s-base">
        基于 ↘
      </h4>
      <AppAttached />
    </section>
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
    return {
    }
  }
})
</script>
<style>
  body{
    background-color: #18181a;
  }
</style>
<style scoped lang="scss">
  .app-home{
    background-image: url("../../assets/image/bg/home-bg.png");
    background-repeat: no-repeat;
    background-position: top center;
  }
  .app-header{
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    & .app-a{
      margin-right: 30px;
      margin-left: auto;
      width: 32px;
      height: 32px;
    }
    & .app-menu{
      margin-left: 20px;
      position: relative;
      &:hover {
        & .app-menu-card{
          display: block;
        }
        & .app-menu-title svg{
          transform: translateY(3px);
        }
      }
      & .app-menu-title{
        padding: 0 10px;
        font-size: 16px;
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
      & .app-menu-card{
        display: none;
        position: absolute;
        left: 0;
        width: 300px;
        min-height: 200px;
        box-shadow: rgba(31, 35, 40, 0.12) 0 1px 3px, rgba(66, 74, 83, 0.12) 0 8px 24px;
        background-color: #FFFFFF;
        border-radius: 6px;
        padding: 10px 0;
        & .app-menu-item{
          text-decoration: none;
          color: inherit;
          display: grid;
          padding: 6px 12px;
          font-size: 16px;
          grid-template-columns: 1fr 30px;
          align-items: center;
          overflow: clip;
          & svg{
            transform: translateX(40px);
            transition: all 0.3s;
          }
          &:hover{
            color: #409eff;
            & svg{
              transform: translateX(10px) scale(1.2);
            }
          }
        }
      }
    }
  }

  .app-snapshot{
    height: 420px;
    padding-top: 40px;
    padding-left: 20px;
    width: 1280px;
    margin: auto;
    border-radius: 6px;
    margin-top: 20px;
    & .a-s-title{
      color: #FFFFFF;
      font-size: 60px;
    }
    & .a-s-base{
      color: #737A85;
      line-height: 100px;
    }
  }


</style>