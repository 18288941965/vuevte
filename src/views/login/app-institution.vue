<template>
  <header class="inst-header">
    <div>欢迎你：{{ userInfoObj.userName }}</div>
    <el-button
      type="danger"
      @click="logout"
    >
      退出登录
    </el-button>
  </header>
  <main class="inst-main">
    <div>
      <ul id="institution-ul-scroll">
        <li
          v-for="(inst, index) in instList"
          :key="'inst-' + index"
          class="inst-item-li"
        >
          <span class="name">{{ inst.instName }}</span>
          <span class="code">{{ inst.instCode }}</span>
          <el-button
            plain
            class="inst-sel-btn"
            type="success"
            @click="changeInst(inst)"
          >
            进入
          </el-button>
          <div class="inst-roles">
            <ul>
              <li
                v-for="(role, idx) in inst.roles"
                :key="'inst-role-' + index + idx"
              >
                <span>{{ role.roleName }}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import axios from 'axios'
import {AxiosResult} from '@utils/interface'
import {InstitutionBean, LSEnum} from './loginModels'
import LocalStorage from '../../class/LocalStorage'
import {doLogout, doInstLogin, logoutContext} from './loginContext'
import {useScrollHorizontalMenu} from '@utils/event'
import {LoginSuccess} from '@utils/types'
import {BCEnum} from '@utils/channel/channelModels'
import {RUEnum} from '../../router/routerModels'
import {useRouter} from 'vue-router'

export default defineComponent({
  name: 'AppInstitution',
  setup() {
    const instList = ref<InstitutionBean[]>([])
    const router = useRouter()

    const local = new LocalStorage()
    const userInfoObj = local.getUserInfoObj()
    const tempInst = ref<InstitutionBean>({instCode: '', instName: ''})

    const getInstitutionList = () => {
      axios.get('/admin/getInstitutionList').then((res: { data: AxiosResult }) => {
        if (res.data.code === 200) {
          instList.value = res.data.data
        }
      })
    }

    const {
      logoutSuccess,
    } = logoutContext()

    const logout = () => {
      doLogout(logoutSuccess)
    }

    // 选择任职机构成功的回调函数
    const loginSuccess: LoginSuccess = (data: AxiosResult) => {
      local.setLoginStatus(true, LSEnum.LOG_IN, userInfoObj.userName)
      local.setSelInstitution(tempInst.value)
      // TODO 设置权限相关数据，数据在data中
      postMessage({ code: BCEnum.LOGIN, msg: '登录成功' })
      router.replace(RUEnum.HOME)
    }

    const changeInst = (instBean: InstitutionBean) => {
      Object.assign(tempInst.value, instBean)
      doInstLogin(instBean, loginSuccess)
    }

    useScrollHorizontalMenu('#institution-ul-scroll', 280)

    onMounted(() => {
      getInstitutionList()
    })

    return {
      instList,
      userInfoObj,
      logout,
      changeInst,
    }
  },
})
</script>

<style scoped lang="scss">
@use "@assets/scss/mixin/_mixin.scss" as *;

.inst-header{
  @include flex-base();
  height: var(--header-height);
}

.inst-main{
  display: grid;
  align-items: center;
  height: calc(100vh - var(--header-height));
  margin-top: calc(var(--header-height) * -1);
}

#institution-ul-scroll{
  @include flex-base(true);
  align-items: normal;
  overflow: hidden;

  & .inst-item-li{
    position: relative;
    flex-shrink: 0;
    flex-basis: 280px;
    line-height: var(--size-default);
    border: var(--border-1);
    padding: var(--pd-small);
    margin: 0 var(--mg-small);
    border-radius: var(--border-radius-large);
    background-color: var(--bg-color-header);

    & .name{
      display: block;
      font-weight: bolder;
      font-size: var(--h4-size);
    }

    & .code{
      color: var(--text-color-regular);
    }
  }

  & .inst-sel-btn{
    width: 100%;
    margin: var(--mg-small) 0;
  }

  & .inst-roles{
    padding: var(--pd-ultra-small);
    background-color: var(--bg-color);
    box-shadow: var(--box-shadow-small);
    border-radius: var(--border-radius-medium);
    height: calc(100% - 114px);
  }
}

</style>