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

      <admin-avatar />
    </header>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppLogo from '../admin/logo/app-logo.vue';
import AdminAvatar from '../../components/avatar/admin-avatar.vue';
import {
  Expand,
  OpenInNew
} from '../../components/svicon/otherIcon';

export default defineComponent({
  name: 'AppHome',
  components: {
    Expand,
    AppLogo,
    AdminAvatar,
    OpenInNew
  },
  setup () {
    return {
    }
  }
})
</script>

<style scoped lang="scss">
  .app-home{
    min-width: 100vw;
    min-height: 100vh;
    background-color: #0D1117;
  }

  .app-header{
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 30px;
  }

  .app-menu{
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
</style>