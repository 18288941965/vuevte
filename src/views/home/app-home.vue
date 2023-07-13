<template>
  <div class="app-home">
    <h1 class="app-home-title">
      网页标题
    </h1>

    <el-button
      type="danger"
      @click="logout"
    >
      退出登录
    </el-button>
    <div style="border-top: 1px solid #30363D;" />

    <div style="display: grid;grid-template-columns: 200px 1fr">
      <div />
      <div />

      <router-link
        to="/admin/theme"
        target="_blank"
      >
        admin模板 v.1.0
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import logo from '../../assets/logo.png'
import {doLogout, logoutContext} from '../../context/signContext';

export default defineComponent({
  name: 'AppHome',
  setup () {
    const {
      logoutSuccess
    } = logoutContext()

    const logout = () => {
      doLogout(logoutSuccess)
    }
    
    return {
      logo,
      logout
    }
  }
})
</script>

<style scoped>
  .app-home{
    min-width: 100vw;
    min-height: 100vh;
    background-color: #0D1117;
    color: #FFFFFF;
    padding: 40px;
  }

  .app-home-title{
    margin-top: 0;
    font-size: 6rem;
    margin-bottom: 40px;
  }
</style>