<template>
  <div class="app-login">
    <header class="login-header">
      <a
        href="https://github.com/18288941965/vuevte"
        target="_blank"
      >
        <GitHub color="#6D6D72" />
      </a>
    </header>

    <main class="login-main">
      <img
        :src="logo"
        alt=" "
      >
      <p class="login-message">
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
            <GitHub />
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
            <GitHub />
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
import {defineComponent, inject, reactive} from 'vue'
import {useRouter} from 'vue-router'
import logo from '../../assets/logo.png'
import {
  GitHub
} from '../../components/svicon/publicIcon'
import {LoginBean} from '../../interface/publicInterface'
import {doLogin} from '../../context/signContext'
import {LoginSuccess} from '../../types/baseType'
import BChannel from '../../BChannel'
import {BCEnum} from '../../enum/enum'
import LocalStorage from '../../class/LocalStorage'

export default defineComponent({
  name: 'AppLogin',
  components: {
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

    const local = new LocalStorage()

    const loginSuccess: LoginSuccess = () => {
      local.setLoginStatus(true, loginBean.username)
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
  @use "../../assets/scssscoped/base/app-login";
</style>