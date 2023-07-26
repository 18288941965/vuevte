<template>
  <div>
    <header class="de-th-he">
      <DesktopLogo />

      <div style="border: 1px solid #DCDFE6; height: 32px; border-radius: 6px;
       width: 320px;margin-left: 20px;cursor: pointer;display: inline-grid; grid-template-columns: 22px 1fr;
align-items: center;padding: 0 10px;grid-gap: 4px;color: #7E7E7E;">
         <Search :size="20" />
         <span>搜索...</span>
      </div>

      <div style="flex: 1;"></div>

      <button class="dt1-hd-bt-tmbj">
        <Send />
      </button>

      <button class="dt1-hd-bt-tmbj">
        <Notifications />
      </button>

      <AdminAvatar />
    </header>

    <section class="de-th-bld">
      <div style="height: 100%;max-width: 1340px;margin: auto;padding-top: 70px;">

        <a style="border: 1px solid #dbdbff; display: inline-grid;
        grid-template-columns: 50px 1fr;
        border-radius: 30px;
        grid-gap: 10px;
        background-color: rgba(255,255,255,0.4);
        cursor: pointer;
        align-items: center;
        height: 60px;
          font-weight: bolder;
         padding: 4px 20px 5px 5px;">
          <span style="background-color: #FFFFFF;text-align: center;height: 50px;
          border: 1px solid #e0e0fd;
          padding-top: 13px;border-radius: 50%;">
            <Forum color="#947BD9" />
          </span>
          <span>
            2023年7月26系统消息：页面初始创建
          </span>
        </a>

        <p style="font-size: 60px;font-weight: bolder;margin: 25px 0;">
          前端开源框架
        </p>
        <p style="font-size: 34px;color: #666666; margin: 0">
          易用易读易扩展
        </p>
      </div>
    </section>

    <main class="de-th-ma">
      <div
        style="display: grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr;justify-content: center;
grid-gap: 40px;"
      >
        <section>
          <h2>常用应用</h2>
          <ul>
            <li
              v-for="(item, index) in 10"
              class="de-th-ma-apps-item"
            >
              <img
                :src="L1"
                style="width: 24px;height: 24px;"
              >
              <span>模拟应用名称</span>
              <ArrowLine :size="16" />
            </li>
          </ul>
        </section>

        <section>
          <h2>收藏应用</h2>
          <ul>
            <li
              v-for="(item, index) in 6"
              class="de-th-ma-apps-item"
            >
              <img
                :src="L2"
                style="width: 24px;height: 24px;"
              >
              <span>模拟应用</span>
              <ArrowLine :size="16" />
            </li>
          </ul>
        </section>

        <section>
          <h2>其他应用</h2>
          <ul>
            <li
              v-for="(item, index) in 3"
              class="de-th-ma-apps-item"
            >
              <img
                :src="L3"
                style="width: 24px;height: 24px;"
              >
              <span>模拟应用</span>
              <ArrowLine :size="16" />
            </li>
          </ul>
        </section>

        <section>
          <h2>分组</h2>
          <ul>
            <li
              v-for="(item, index) in 4"
              class="de-th-ma-apps-item"
            >
              <img
                :src="L4"
                style="width: 24px;height: 24px;"
              >
              <span>模拟应用</span>
              <ArrowLine :size="16" />
            </li>
          </ul>
        </section>

        <section>
          <h2>自定义分组</h2>
          <ul>
            <li
              v-for="(item, index) in 2"
              class="de-th-ma-apps-item"
            >
              <img
                :src="L5"
                style="width: 24px;height: 24px;"
              >
              <span>模拟应用</span>
              <ArrowLine :size="16" />
            </li>
          </ul>
        </section>

        <section>
          <h2>查询</h2>
          <ul>
            <li
              v-for="(item, index) in 7"
              class="de-th-ma-apps-item"
            >
              <img
                :src="L6"
                style="width: 24px;height: 24px;"
              >
              <span>模拟应用</span>
              <ArrowLine :size="16" />
            </li>
          </ul>
        </section>

        <section>
          <h2>分析</h2>
          <ul>
            <li
              v-for="(item, index) in 1"
              class="de-th-ma-apps-item"
            >
              <img
                :src="L7"
                style="width: 24px;height: 24px;"
              >
              <span>模拟应用</span>
              <ArrowLine :size="16" />
            </li>
          </ul>
        </section>

        <section>
          <h2>未分组应用</h2>
          <ul>
            <li
              v-for="(item, index) in 6"
              class="de-th-ma-apps-item"
            >
              <img
                :src="L8"
                style="width: 24px;height: 24px;"
              >
              <span>模拟应用</span>

              <ArrowLine :size="16" />
            </li>
          </ul>
        </section>
      </div>
    </main>

    <footer class="de-th-fo" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import L1 from '../../assets/image/desktop/L1.svg'
import L2 from '../../assets/image/desktop/L2.svg'
import L3 from '../../assets/image/desktop/L3.svg'
import L4 from '../../assets/image/desktop/L4.svg'
import L5 from '../../assets/image/desktop/L5.svg'
import L6 from '../../assets/image/desktop/L6.svg'
import L7 from '../../assets/image/desktop/L7.svg'
import L8 from '../../assets/image/desktop/L8.svg'
import L9 from '../../assets/image/desktop/L9.svg'
import L10 from '../../assets/image/desktop/L10.svg'
import L11 from '../../assets/image/desktop/L11.svg'
import L12 from '../../assets/image/desktop/L12.svg'
import L13 from '../../assets/image/desktop/L13.svg'
import L14 from '../../assets/image/desktop/L14.svg'

import H1 from '../../assets/image/desktop/1.svg'
import H2 from '../../assets/image/desktop/2.svg'
import H3 from '../../assets/image/desktop/3.svg'
import H4 from '../../assets/image/desktop/4.svg'
import H5 from '../../assets/image/desktop/5.svg'
import {
  ArrowLine,
  Forum,
  Send,
  Notifications,
  Search
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
    AdminAvatar
  },
  setup () {
    return {
      L1,
      L2,
      L3,
      L4,
      L5,
      L6,
      L7,
      L8,
      L9,
      L10,
      L11,
      L12,
      L13,
      L14,
      H1,
      H2,
      H3,
      H4,
      H5
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
  background-position: top right;
}
html, body, #app{
  height: 100%;
  width: 100%;
}
.de-th-ma-apps-item{
  color: transparent;
  & span{
    color: initial;
  }
  &:hover {
    & .arrow-line-svg{
      color: initial;
      transform: translateX(4px);
    }
    & .arrow-line-path{
      stroke-dashoffset: 34;
    }
  }
}
</style>
<style scoped lang="scss">

  .de-th-ma{
    max-width: 1340px;
    display: grid;
    margin: 60px auto 0 auto;
    min-height: 600px;

    & section{
      width: 100%;
    }
    & section li{
      display: grid;
      grid-template-columns: 40px 1fr 20px;
      align-items: center;
      line-height: 46px;
      margin-bottom: 10px;
      border: 1px solid var(--border-color);
      padding: 0 20px;
      cursor: pointer;
    }
  }

  .de-th-fo{
    height: 200px;
    text-align: right;
    margin-top: 60px;
    border-top: 2px dotted #666666;
  }
</style>