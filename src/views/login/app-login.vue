<template>
  <div class="app-login">
    <header class="app-login-header">
      <a
        href="https://github.com/18288941965/vue-vite-typescript-element"
        target="_blank"
      >
        <img
          :src="github"
          alt=" "
        >
      </a>
    </header>

    <main class="app-login-main">
      <img :src="logo" style="width: 48px;height: 48px;">
      <p class="app-login-message">
        登录到 Vuevte
      </p>

      <section>
        <el-input
          v-model.trim="loginBean.username"
          size="large"
          placeholder="账号"
        >
          <template #prefix>
            <Account />
          </template>
        </el-input>

        <el-input
          v-model.trim="loginBean.password"
          placeholder="密码"
          size="large"
          show-password
          type="password"
        >
          <template #prefix>
            <Lock />
          </template>
        </el-input>

        <el-button
          color="#000000"
          size="large"
          style="width: 100%"
          @click="doLogin"
        >
          登录
        </el-button>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import {ElMessage} from 'element-plus';
import {useRouter} from 'vue-router';
import github from '../../assets/github.svg'
import logo from '../../assets/logo.svg'
import {
  Account,
  Lock
} from '../../components/svicon/other/otherIcon';

export default defineComponent({
  name: 'AppLogin',
  components: {
    Account,
    Lock
  },
  setup () {
    const router = useRouter()

    const loginBean = reactive({
      username: 'admin@163.com',
      password: 'admin'
    })
    
    const doLogin = () => {
      if (!loginBean.username || !loginBean.password) {
        ElMessage.error('用户名或密码不能为空！')
        return
      }
      if (loginBean.username !== 'admin@163.com' || loginBean.password !== 'admin') {
        ElMessage.error('用户名或密码错误！')
        return
      }
      router.replace('/app/home')
    }
    
    return {
      logo,
      github,
      loginBean,
      doLogin
    }
  }
})
</script>

<style scoped lang="scss">
  .app-login{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  .app-login-header{
    display: flex;
    justify-content: flex-end;
    height: 80px;
    align-items: center;
    padding-right: 20px;
  }

  .app-login-main{
    position: absolute;
    width: 320px;
    text-align: center;
    left: 50%;
    margin-left: -160px;
    & section{
      background-color: #F6F8FA;
      border: 1px solid #DBDCDD;
      display: grid;
      grid-gap: 40px;
      padding: 40px 20px;
      border-radius: 6px;
    }
  }

  .app-login-message{
    font-size: 20px;
    line-height: 50px;
  }
</style>