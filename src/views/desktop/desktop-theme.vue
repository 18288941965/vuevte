<template>
  <div class="desktop-theme">
    <header class="header-ht theme-header">
      <DesktopLogo />

      <div
        class="header-search"
      >
        <Search :size="20" />
        <span>搜索...</span>
      </div>

      <button class="btn-tran mgl-auto">
        <Question />
      </button>

      <button class="btn-tran">
        <Build />
      </button>

      <button class="btn-tran">
        <Send />
      </button>

      <button class="btn-tran">
        <Notifications />
      </button>

      <AdminAvatar />
    </header>

    <section class="theme-banner">
      <div class="theme-mw">
        &nbsp;
      </div>
    </section>

    <main class="theme-mw theme-main">
      <div class="main-wrapper">
        <section>
          <h2>后台模板</h2>
          <ul>
            <li>
              <router-link
                to="/admin/theme"
                target="_blank"
                class="wrapper-menu-item al-hover"
              >
                <img
                  :src="menuA1"
                  alt=" "
                >
                <div>
                  <div class="menu-title">
                    模板Ⅰ
                  </div>
                  <div class="menu-describe">
                    菜单样式为黑色背景
                  </div>
                </div>
                <ArrowLine
                  :size="16"
                />
              </router-link>
            </li>
            <li>
              <router-link
                to="/admin/theme?id=2"
                target="_blank"
                class="wrapper-menu-item al-hover"
              >
                <img
                  :src="menuA1"
                  alt=" "
                >
                <div>
                  <div class="menu-title">
                    模板Ⅱ
                  </div>
                  <div class="menu-describe">
                    菜单样式为白色背景
                  </div>
                </div>
                <ArrowLine
                  :size="16"
                />
              </router-link>
            </li>
          </ul>
        </section>

        <section>
          <h2>桌面模板</h2>
          <ul>
            <li>
              <router-link
                to="/desktop/theme"
                target="_blank"
                class="wrapper-menu-item al-hover"
              >
                <img
                  :src="menuD1"
                  alt=" "
                >
                <div>
                  <div class="menu-title">
                    模板Ⅰ
                  </div>
                  <div class="menu-describe">
                    白色背景首页
                  </div>
                </div>
                <ArrowLine
                  :size="16"
                />
              </router-link>
            </li>
            <li>
              <router-link
                to="/desktop/theme2"
                target="_blank"
                class="wrapper-menu-item al-hover"
              >
                <img
                  :src="menuD1"
                  alt=" "
                >
                <div>
                  <div class="menu-title">
                    模板Ⅱ
                  </div>
                  <div class="menu-describe">
                    黑色背景首页
                  </div>
                </div>
                <ArrowLine
                  :size="16"
                />
              </router-link>
            </li>
          </ul>
        </section>
      </div>
    </main>

    <footer class="theme-footer">
      <section class="theme-mw footer-section">
        <div class="footer-left">
          <a
            href="/"
            class="de-th-xmmc"
          >
            Vuevte
          </a>
        </div>
        <div class="footer-right">
          <a
            href="https://github.com/18288941965/vuevte"
            target="_blank"
            class="github-a"
          >
            <GitHub color="#6D6D72" />
            <span>GitHub</span>
          </a>
        </div>
      </section>
    </footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {
  ArrowLine,
  Send,
  Notifications,
  Search,
  GitHub,
  Build,
  Question
} from '../../components/svicon/otherIcon';
import DesktopLogo from '../admin/logo/desktop-logo.vue';
import AdminAvatar from '../../components/avatar/admin-avatar.vue';
import menuA1 from '../../assets/image/desktop/menu-a1.png'
import menuD1 from '../../assets/image/desktop/menu-d1.png'

export default defineComponent({
  name: 'DesktopTheme',
  components: {
    ArrowLine,
    DesktopLogo,
    Send,
    Notifications,
    Search,
    GitHub,
    Build,
    Question,
    AdminAvatar
  },
  setup () {
    return {
      menuA1,
      menuD1
    }
  }
})
</script>

<style scoped lang="scss">
  @import "../../assets/scss/desktop-theme";
</style>