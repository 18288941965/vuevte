<template>
  <div class="app-home">
    <header class="home-header">
      <DesktopLogo style="color: #FFFFFF" />

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
      <div id="cards">
        <div class="card">
          <div class="card-border" />
          <div class="card-context">
            <router-link
              to="/admin/theme"
              target="_blank"
              class="menu-item"
            >
              黑色菜单模板
              <OpenInNew :size="20" />
            </router-link>
          </div>
        </div>
        <div class="card">
          <div class="card-border" />
          <div class="card-context">
            <router-link
              to="/admin/theme?id=2"
              target="_blank"
              class="menu-item"
            >
              白色菜单模板
              <OpenInNew :size="20" />
            </router-link>
          </div>
        </div>
        <div class="card">
          <div class="card-border" />
          <div class="card-context">
            <router-link
              to="/desktop/theme"
              target="_blank"
              class="menu-item"
            >
              白色首页模板
              <OpenInNew :size="20" />
            </router-link>
          </div>
        </div>
        <div class="card">
          <div class="card-border" />
          <div class="card-context">
            <router-link
              to="/desktop/theme2"
              target="_blank"
              class="menu-item"
            >
              黑色首页模板
              <OpenInNew :size="20" />
            </router-link>
          </div>
        </div>
        <div class="card">
          <div class="card-border" />
          <div class="card-context" />
        </div>
        <div class="card">
          <div class="card-border" />
          <div class="card-context" />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import AdminAvatar from '../../components/avatar/admin-avatar.vue';
import {
  OpenInNew,
  GitHub
} from '../../components/svicon/publicIcon';
import DesktopLogo from '../admin/logo/desktop-logo.vue'

export default defineComponent({
  name: 'AppHome',
  components: {
    GitHub,
    AdminAvatar,
    OpenInNew,
    DesktopLogo
  },
  setup () {
    onMounted(() => {

      document.getElementById('cards').onmousemove = (e) => {
        for (const card of document.getElementsByClassName('card')) {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          card.style.setProperty('--mouse-x', `${x}px`)
          card.style.setProperty('--mouse-y', `${y}px`)
        }
      }
    })
    
    return {
      //
    }
  }
})
</script>
<style lang="scss">
:root{
  --bg-color: rgb(20, 20, 20);
  --card-color: rgb(23,23,23);
}

  body{
    background-color: #393939;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232d2d2d' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  }

  #cards{
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-width: 916px;
    width: calc(100% - 20px);
    margin: 10px;
  }

  .card{
    background-color: rgba(255,255,255,0.1);
    height: 260px;
    width: 300px;
    position: relative;
    &:hover{
      background-color: rgba(255,255,255,0.3);
    }
  }

  #cards:hover > .card > .card-border  {
    opacity: 1;
  }

  .card:hover::before {
    opacity: 1;
  }

  .card::before,
  .card > .card-border {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
    opacity: 0;
    transition: opacity 500ms;
  }

  .card::before{
    background-image: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255,255,255,0.1),
      transparent 40%
    );
    z-index: 3;
    user-select: none;
    pointer-events: none;
  }

  .card > .card-border{
    background-image: radial-gradient(
      400px circle at var(--mouse-x) var(--mouse-y),
      rgba(255,255,255,0.3),
      transparent 40%
    );
    z-index: 1;
  }

  .card > .card-context{
    background-color: var(--card-color);
    height: calc(100% - 2px);
    width: calc(100% - 2px);
    border-radius: inherit;
    margin: 1px ;
    z-index: 2;
    position: relative;
  }
</style>
<style scoped lang="scss">
  @import "../../assets/scss/app-home";
</style>