<template>
  <div style="height: 100%;width: 100%;color: #FFFFFF;">
    <header class="de-th-he">
      项目名称, 在线人数，消息通知，用户信息，搜索功能
    </header>

    <main class="de-th-ma">
      <div>
        <div class="de-th-ma-apps">
          <div>
            <img :src="L1" alt=" ">
            <span>应用L1</span>
          </div>

          <div>
            <img :src="L2" alt=" ">
            <span>应用L1</span>
          </div>

          <div>
            <img :src="L3" alt=" ">
            <span>应用L1</span>
          </div>

          <div>
            <img :src="L4" alt=" ">
            <span>应用L1</span>
          </div>

          <div>
            <img :src="L5" alt=" ">
            <span>应用L1</span>
          </div>
        </div>

        <div style="background-color: rgba(0, 0, 0, 0.1);
        height: 80px;margin-top: 20px;display: flex;justify-content: center;
        column-gap: 20px;
align-items: center">

          <div style="display: flex;align-items: center;">
            <img :src="H1" alt=" " style="width: 32px;height: 32px;">
             <span>首页</span>
          </div>

          <div style="display: flex;align-items: center;">
            <img :src="H3" alt=" " style="width: 32px;height: 32px;">
            <span>首页</span>
          </div>

          <div style="display: flex;align-items: center;background-color: rgba(255,255,255,0.2);
padding: 8px 16px;border-radius: 24px;">
            <img :src="H2" alt=" " style="width: 32px;height: 32px;margin-right: 8px;">
            <span>首页</span>
          </div>

          <div style="display: flex;align-items: center;">
            <img :src="H4" alt=" " style="width: 32px;height: 32px;">
            <span>首页</span>
          </div>

          <div style="display: flex;align-items: center;">
            <img :src="H5" alt=" " style="width: 32px;height: 32px;">
            <span>最近使用</span>
          </div>

        </div>
      </div>

      <div class="de-th-ma-nav">
        <ul>
          <li></li>
          <li>查询</li>
          <li>历史</li>
          <li>场景</li>
          <li>绘制</li>
        </ul>
      </div>
    </main>

    <footer class="de-th-fo">
        <div>实用工具、意见反馈</div>
    </footer>

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

export default defineComponent({
  name: 'DesktopTheme',
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

<style>
body{
  background-color: #18181a;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(50,55,249,0.4) 0%, rgba(1,4,92, 0.5) 100%), url("../../assets/image/bg/home-bg-blue.png");
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;
}
html, body, #app{
  height: 100%;
  width: 100%;
}
</style>
<style scoped lang="scss">
.de-th-he{
  height: 60px;
  border: 1px solid pink;
}

  .de-th-ma{
    max-width: 1280px;
    display: grid;
    grid-template-columns: 1fr 140px ;
    grid-column-gap: 20px;
    margin: 40px auto 0 auto;
    min-height: 600px;
  }
  .de-th-ma-nav{
    border: 1px solid #FFFFFF;
  }
  .de-th-ma-apps{
    border: 1px solid rgba(255,255,255,0.1);
    display: flex;
    flex-wrap: wrap;
    height: calc(100% - 100px);
    border-radius: 12px;
    & img{
      width: 72px;
      height: 72px;
    }
    & div{
      margin: 10px;
      border-radius: 12px;
      width: 102px;
      height: 102px;
      text-align: center;
      background-color: rgba(255,255,255,0.1);
      & span{
        display: block;
      }
    }
  }


  .de-th-fo{
    height: 60px;
    text-align: right;
    margin-top: 40px;
    border: 1px solid yellow;
  }
</style>