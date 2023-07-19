<template>
  <div class="app-login">
    <header class="app-login-header">
      <a
        href="https://github.com/18288941965/vuevte"
        target="_blank"
      >
        <GitHub color="#6D6D72" />
      </a>
    </header>

    <main class="app-login-main">
      <img
        :src="logo"
        alt=" "
      >
      <p class="app-login-message">
        登录到 Vuevte
      </p>

      <section>
        <el-input
          v-model.trim="loginBean.username"
          size="large"
          placeholder="账号"
          autofocus
          @keyup.enter="login"
        >
          <template #prefix>
            <Person />
          </template>
        </el-input>

        <el-input
          v-model.trim="loginBean.password"
          placeholder="密码"
          size="large"
          show-password
          type="password"
          @keyup.enter="login"
        >
          <template #prefix>
            <Lock />
          </template>
        </el-input>

        <el-button
          color="#1F2328"
          size="large"
          style="width: 100%"
          @click="login"
        >
          登录
        </el-button>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject, reactive} from 'vue';
import {useRouter} from 'vue-router';
import logo from '../../assets/logo.png'
import {
  Person,
  Lock,
  GitHub
} from '../../components/svicon/otherIcon';
import {LoginBean} from '../../interface/publicInterface';
import {doLogin} from '../../context/signContext';
import {LoginSuccess} from '../../types/baseType';
import BChannel from '../../BChannel';
import {BCEnum} from '../../enum/enum';

export default defineComponent({
  name: 'AppLogin',
  components: {
    Person,
    Lock,
    GitHub
  },
  setup () {
    const router = useRouter()
    const channel = inject('channel') as BroadcastChannel
    const {
      postMessage
    } = BChannel(channel)

    const loginBean = reactive<LoginBean>({
      username: 'admin@163.com',
      password: 'admin'
    })

    const loginSuccess: LoginSuccess = () => {
      localStorage.setItem('vuevte-login-status', '1')
      postMessage({ code: BCEnum.LOGIN, msg: '登录成功' })
      router.replace('/app/home')
    }

    const login = () => {
      doLogin(loginBean, loginSuccess)
    }
    
    return {
      logo,
      loginBean,
      login
    }
  }
})
</script>

<style scoped lang="scss">
  .app-login{
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: #FFFFFF;
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
    & img:first-child{
      width: 48px;
      height: 48px;
    }
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