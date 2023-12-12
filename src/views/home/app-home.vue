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

      <avatar-card
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
            >
              后台管理模板
            </router-link>
          </div>
        </div>
        <div class="card">
          <div class="card-border" />
          <div class="card-context">
            <router-link
              to="/desktop/theme"
              target="_blank"
            >
              首页模板1
            </router-link>
          </div>
        </div>
        <div class="card">
          <div class="card-border" />
          <div class="card-context">
            <router-link
              to="/desktop/theme2"
              target="_blank"
            >
              首页模板2
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import AvatarCard from '../../components/avatar/avatar-card.vue'
import {
  GitHub
} from '../../components/svicon/publicIcon'
import DesktopLogo from '../admin/logo/desktop-logo.vue'

export default defineComponent({
  name: 'AppHome',
  components: {
    GitHub,
    AvatarCard,
    DesktopLogo
  },
  setup () {
    onMounted(() => {
      /*document.getElementById('cards').onmousemove = (e) => {
        for (const card of document.getElementsByClassName('card')) {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          card.style.setProperty('--mouse-x', `${x}px`)
          card.style.setProperty('--mouse-y', `${y}px`)
        }
      }*/
    })
    return {
      //
    }
  }
})
</script>
<style lang="scss">
  @use "../../assets/scss/base/app-home";
</style>
<style scoped lang="scss">
  @use "../../assets/scssscoped/base/app-home";
</style>