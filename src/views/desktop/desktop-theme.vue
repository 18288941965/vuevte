<template>
  <div class="desktop-theme">
    <header style="height: 56px; display: grid;grid-template-columns: 1fr 1fr 1fr;">
      <div style="display: flex;align-items: center">
        <img
          :src="logo"
          style="width: 32px;height: 32px;"
        >

        <app-search>
          <template #button>
            <button
              class="app-search-button mgl-medium"
            >
              <Search :size="20" />
              <span>搜索</span>
              <span>|</span>
              <span>跳转</span>
            </button>
          </template>
        </app-search>
      </div>

      <div class="title-wrapper">
        <img
          :src="top02"
          style="margin-left: 2px;"
        >
      </div>
      
      <div style="display: flex;align-items: center; justify-content: end;padding-right: 20px;">
        <Bell />
        <StarFill />
        <ArrowDropDown />
        <user-avatar
          :user-name="userName"
          class="desktop-theme-avatar"
        >
          <template #summary>
            <el-avatar
              :size="26"
            >
              <template #default>
                <PersonFill />
              </template>
            </el-avatar>
            <span>{{ userName }}</span>
            <ArrowDropDown color="#ffffff" />
          </template>
        </user-avatar>
      </div>
    </header>

    <div style="height: 600px; max-width: 1248px;margin: auto;display: flex;align-items: center;">
      <div style="border: 1px solid #292F36; padding: 5px; display: flex; flex-wrap: wrap; height: 272px;width: 1182px;margin: auto">
        <div
          v-for="item in 5"
          :key="item"
          style="width: 120px;text-align: center;height: 120px;background-color: #161B22;margin: 5px;border: 1px solid #292F36;"
        >
          <i style="width: 56px;height: 56px;display: block;margin: 0 auto 15px; text-align: center;padding-top: 4px;">
            <img
              :src="adobe"
              style="width: 48px;height: 48px;"
            >
          </i>
          <span style="font-size: var(--h4-size);color: white;font-weight: bolder;">adobe</span>
        </div>

        <div
          v-for="item in 2"
          :key="item"
          style="width: 120px;text-align: center;height: 120px;background-color: #161B22;margin: 5px;border: 1px solid #292F36;"
        >
          <i style="width: 56px;height: 56px;display: block;margin: 0 auto 15px; text-align: center;padding-top: 4px;">
            <img
              :src="coub"
              style="width: 48px;height: 48px;"
            >
          </i>
          <span style="font-size: var(--h4-size);color: white;font-weight: bolder;">coub</span>
        </div>

        <div
          v-for="item in 5"
          :key="item"
          style="width: 120px;text-align: center;height: 120px;background-color: #161B22;margin: 5px;border: 1px solid #292F36;"
        >
          <i style="width: 56px;height: 56px;display: block;margin: 0 auto 15px; text-align: center;padding-top: 4px;">
            <img
              :src="igtv"
              style="width: 48px;height: 48px;"
            >
          </i>
          <span style="font-size: var(--h4-size);color: white;font-weight: bolder;">igtv</span>
        </div>
      </div>
    </div>

    <nav style="max-width: 1248px;margin: auto">
      <ul style="color: #6E7673; line-height: 32px; display: grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr">
        <li
          v-for="item in 23"
          :key="item"
        >
          百度一下
        </li>
      </ul>
    </nav>

    <!--    <footer style="min-height: 200px; line-height: 32px;">
      <ul style="max-width: 1248px; margin: auto; color: deepskyblue;line-height: 100px;">
        <li>昆明世科计算机网络有限公司</li>
      </ul>
    </footer>-->
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {getModuleLogoUrl} from '../../util/baseUtil'
import logo from '../../assets/logo.png'
import UserAvatar from '../../components/avatar/user-avatar.vue'
import adobe from '../../assets/image/desktop/adobe.png'
import coub from '../../assets/image/desktop/coub.png'
import igtv from '../../assets/image/desktop/igtv.png'
import left02 from '../../assets/image/button/left-02.png'
import left03 from '../../assets/image/button/left-03.png'
import top02 from '../../assets/image/button/top-02.png'
import top04 from '../../assets/image/button/top-04.png'
import appSearch from '../../app-search.vue'
import {
  Bell,
  StarFill,
  ArrowDropDown,
  Search,
  PersonFill
} from '../../components/svicon/publicIcon'
import LocalStorage from '../../class/LocalStorage'

export default defineComponent({
  name: 'DesktopTheme',
  components: {
    UserAvatar,
    appSearch,
    Bell,
    StarFill,
    Search,
    PersonFill,
    ArrowDropDown
  },
  setup () {
    
    const userName = ref('')

    onMounted(() => {
      const local = new LocalStorage()
      userName.value = local.getUserName()
    })
    
    return {
      userName,
      left02,
      left03,
      top02,
      top04,
      adobe,
      coub,
      igtv,
      logo,
      getModuleLogoUrl
    }
  }
})
</script>


<style lang="scss">
@use "../../assets/scss/mixin/mixin" as *;
.desktop-theme-avatar details{
  @include flex-base();
  height: var(--lh-small);
  border: 0;
  background-color: var(--color-black-4);
  padding: 0 var(--pd-ultra-small);
  border-radius: calc(var(--lh-small)/2);
  & .el-avatar{
    cursor: pointer;
  }
}
</style>

<style scoped lang="scss">
@use "../../assets/scss/mixin/mixin" as *;

  .desktop-theme{
    height: 100vh;
    background: {
      image: url("/public/image/home-bg.png");
      size: cover;
      repeat: no-repeat;
      attachment: fixed;
    };
    overflow: auto;
  }

  header{
    color: white;
  }
  .title-wrapper{
    background-image: url("/public/home/top-01.png");
    background-repeat: no-repeat;
    background-position: top -4px center;
    text-align: center;
  }


  .right-wrapper{
    height: 100%;
    background-image: url("/public/home/right-01.png");
    background-repeat: no-repeat;
    background-position: right center;
    display: flex;
    align-items: center;
  }


  .app-search-button{
    @include grid-base(24px 40px 4px 40px);
    float: right;
    width: 280px;
    height: var(--btn-height);
    color: #a6b0bb;
    font-size: var(--h6-size);
    background-color: #161B22;
    border: 1px solid #292F36;
  }
</style>