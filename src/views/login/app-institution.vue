<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import axios from 'axios'
import {AxiosResult, InstitutionBean} from '@utils/interface'
import LocalStorage from '../../class/LocalStorage'
import {doLogout, logoutContext} from './loginContext'

export default defineComponent({
  name: 'AppInstitution',
  setup() {
    const instList = ref<InstitutionBean[]>([])
    const local = new LocalStorage()
    const userInfoObj = local.getUserInfoObj()

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

    onMounted(() => {
      getInstitutionList()
    })

    return {
      instList,
      userInfoObj,
      logout,
    }
  },
})
</script>

<template>
  <el-button
    type="danger"
    @click="logout"
  >
    退出登录
  </el-button>
  <div>
    {{ instList }}
    <hr>
    {{ userInfoObj }}
  </div>
</template>

<style scoped lang="scss">

</style>