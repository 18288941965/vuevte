<template>
  <div>
    <header class="de-th-he">
      <DesktopLogo />

      <div
        style="height: 36px; border-radius: 18px;
        background-color: #F4F5FB;
       width: 320px;margin-left: 20px;cursor: pointer;display: inline-grid; grid-template-columns: 22px 1fr;
align-items: center;padding: 0 10px;grid-gap: 4px;color: #7E7E7E;"
      >
        <Search :size="20" />
        <span>搜索...</span>
      </div>

      <div style="flex: 1;" />

      <button class="dt1-hd-bt-tmbj">
        <Question />
      </button>

      <button class="dt1-hd-bt-tmbj">
        <Build />
      </button>

      <button class="dt1-hd-bt-tmbj">
        <Send />
      </button>

      <button class="dt1-hd-bt-tmbj">
        <Notifications />
      </button>

      <AdminAvatar />
    </header>

    <section class="de-th-bld">
      <div style="height: 100%;max-width: 1340px;margin: auto;">
        <a
          class="de-th-xtgg al-hover"
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

        <div class="de-th-tjmk">
          <div class="de-th-tjmk-item">
            <span>在线人数</span>
            <span>200</span>
            <small>人</small>
          </div>

          <div class="de-th-tjmk-item">
            <span>使用天数</span>
            <span>721</span>
            <small>天</small>
          </div>

          <div class="de-th-tjmk-item">
            <span>操作日志</span>
            <span>16530</span>
            <small>条</small>
          </div>

          <div class="de-th-tjmk-item">
            <span>系统应用</span>
            <span>100</span>
            <small>项</small>
          </div>
        </div>
      </div>
    </section>

    <main class="de-th-ma">
      <div
        style="display: grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr;justify-content: center;
grid-gap: 40px;"
      >
        <section>
          <h2>后台模板</h2>
          <ul>
            <li>
              <router-link
                to="/admin/theme"
                target="_blank"
                class="d-t-menu-item al-hover"
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
                class="d-t-menu-item al-hover"
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
                class="d-t-menu-item al-hover"
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
                class="d-t-menu-item al-hover"
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

    <footer class="de-th-fo">
      <section class="de-th-wd footer-section">
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

<style lang="scss">
.de-th-he{
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.de-th-bld{
  height: 400px;
  background-image: url("../../assets/image/bg/home-bg-scope.png");
  background-position: top center;
}
html, body, #app{
  height: 100%;
  width: 100%;
}

.d-t-menu-item{
  display: grid;
  grid-template-columns: 1fr 20px;
  align-items: center;
  line-height: 56px;
  margin-bottom: 20px;
  border: 1px solid var(--border-color);
  padding: 0 20px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  border-radius: 12px;
  & svg{
    color: transparent;
  }
  &:hover{
    & svg{
      color: inherit;
    }
  }
}

</style>
<style scoped lang="scss">
  @import "../../assets/scss/desktop-theme";

  .de-th-wd{
    max-width: 1344px;
    margin: auto;
  }

  .de-th-ma{
    max-width: 1340px;
    display: grid;
    margin: 60px auto 0 auto;
  }

  .de-th-fo{
    height: 200px;
    margin-top: 60px;
    border-top: 2px dotted #666666;
  }

  .footer-section{
    display: grid;
    grid-template-columns: 200px 1fr;
    padding: 40px 0;
    & .de-th-xmmc{
      color: #CB84D9;
      text-decoration: none;
      cursor: pointer;
      font-weight: bolder;
      font-size: 20px;
    }
  }

  .footer-right{
    & .github-a{
      color: inherit;
      text-decoration: none;
      display: flex;
      align-items: center;
      & span{
        padding-left: 10px;
      }

      &:hover{
        text-decoration: underline;
      }
    }
  }
</style>