<template>
  <div class="desktop-theme">
    <header class="header-ht theme-header">
      <DesktopLogo />
    </header>

    <main class="theme-mw theme-main">
      <div class="main-wrapper">
        <ul>
          <li>
            <router-link
              to="/admin/theme"
              target="_blank"
              class="wrapper-menu-item al-hover"
            >
              <img
                :src="getModuleLogoUrl('zeplin.png')"
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
                :src="getModuleLogoUrl('youtube.png')"
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
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {
  ArrowLine
} from '../../components/svicon/publicIcon';
import DesktopLogo from '../admin/logo/desktop-logo.vue';
import {getModuleLogoUrl} from '../../util/baseUtil';

export default defineComponent({
  name: 'DesktopTheme',
  components: {
    ArrowLine,
    DesktopLogo
  },
  setup () {
    return {
      getModuleLogoUrl
    }
  }
})
</script>

<style scoped lang="scss">
  @use "../../assets/scssscoped/desktop/desktop-theme";
</style>