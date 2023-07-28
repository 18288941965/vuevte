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
        <a
          class="banner-tzgg al-hover"
          href="/"
        >
          <span class="icon">
            <Forum />
          </span>
          <span>
            2023年7月26系统消息：页面初始创建
          </span>
          <ArrowLine :size="16" />
        </a>

        <div class="banner-count">
          <div class="count-item">
            <span>组件</span>
            <span>200</span>
            <small>人</small>
          </div>

          <div class="count-item">
            <span>图标</span>
            <span>721</span>
            <small>天</small>
          </div>

          <div class="count-item">
            <span>模板</span>
            <span>16530</span>
            <small>条</small>
          </div>

          <div class="count-item">
            <span>使用人数</span>
            <span>100</span>
            <small>项</small>
          </div>
        </div>
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
                模板Ⅰ
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
                模板Ⅱ
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
                模板Ⅰ
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
                模板Ⅱ
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
  Forum,
  Send,
  Notifications,
  Search,
  GitHub,
  Build,
  Question
} from '../../components/svicon/otherIcon';
import DesktopLogo from '../admin/logo/desktop-logo.vue';
import AdminAvatar from '../../components/avatar/admin-avatar.vue';

export default defineComponent({
  name: 'DesktopTheme',
  components: {
    ArrowLine,
    DesktopLogo,
    Forum,
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
    }
  }
})
</script>

<style scoped lang="scss">
  @import "../../assets/scss/desktop-theme";
</style>