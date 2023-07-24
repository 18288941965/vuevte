<template>
  <div>
    <header class="de-th-he">
      <div style="height: 100%;max-width: 1280px;margin: auto;">
        <p style="font-size: 120px;color: #FFFFFF;margin: 0">
          VUEVTE
        </p>
      </div>
    </header>

    <main class="de-th-ma">
      <div
        style="display: grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr;justify-content: center;
grid-gap: 40px;"
      >
        <section>
          <h2>常用应用</h2>
          <ul>
            <li v-for="(item, index) in 10" class="de-th-ma-apps-item">
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
            <li v-for="(item, index) in 6" class="de-th-ma-apps-item">
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
            <li v-for="(item, index) in 3" class="de-th-ma-apps-item">
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
            <li v-for="(item, index) in 4" class="de-th-ma-apps-item">
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
            <li v-for="(item, index) in 2" class="de-th-ma-apps-item">
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
            <li v-for="(item, index) in 7" class="de-th-ma-apps-item">
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
            <li v-for="(item, index) in 1" class="de-th-ma-apps-item">
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
            <li v-for="(item, index) in 6" class="de-th-ma-apps-item">
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
  ArrowLine
} from '../../components/svicon/otherIcon';

export default defineComponent({
  name: 'DesktopTheme',
  components: {
    ArrowLine
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
  background-color: #18181a;
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(50,55,249,0.4) 0%, rgba(1,4,92, 0.5) 100%), url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='120' height='80' patternTransform='scale(3) rotate(140)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(69,12.1%,43.7%,1)'/><path d='M-50.129 12.685C-33.346 12.358-16.786 4.918 0 5c16.787.082 43.213 10 60 10s43.213-9.918 60-10c16.786-.082 33.346 7.358 50.129 7.685'  stroke-width='0.5' stroke='hsla(60,14.2%,54.3%,1)' fill='none'/><path d='M-50.129 32.685C-33.346 32.358-16.786 24.918 0 25c16.787.082 43.213 10 60 10s43.213-9.918 60-10c16.786-.082 33.346 7.358 50.129 7.685'  stroke-width='0.5' stroke='hsla(39,100%,70.6%,1)' fill='none'/><path d='M-50.129 52.685C-33.346 52.358-16.786 44.918 0 45c16.787.082 43.213 10 60 10s43.213-9.918 60-10c16.786-.082 33.346 7.358 50.129 7.685'  stroke-width='0.5' stroke='hsla(23,47.6%,71.6%,1)' fill='none'/><path d='M-50.129 72.685C-33.346 72.358-16.786 64.918 0 65c16.787.082 43.213 10 60 10s43.213-9.918 60-10c16.786-.082 33.346 7.358 50.129 7.685'  stroke-width='0.5' stroke='hsla(43,72.5%,80%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")
}
html, body, #app{
  height: 100%;
  width: 100%;
}
.de-th-ma-apps-item{
  color: #BBBBBB;
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
.de-th-he{
  height: 360px;
}

  .de-th-ma{
    max-width: 1280px;
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