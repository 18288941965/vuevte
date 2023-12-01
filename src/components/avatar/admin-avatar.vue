<template>
  <div class="admin-avatar">
    <button
      class="avatar-base"
      @click="setPanelShow(undefined, $event)"
    >
      <el-avatar
        :size="24"
        :style="{ 'background-color' : bgColor }"
      >
        <template #default>
          <PersonFill
            :size="20"
            :color="iconColor"
          />
        </template>
      </el-avatar>
      <Expand
        class="avatar-expand"
        color="var(--header-text-color)"
      />
    </button>

    <div
      v-show="panelShow"
      class="avatar-card"
    >
      <ul>
        <li class="li-information">
          {{ userName }}
        </li>
        <li
          class="li-btn"
        >
          <Discover
            color="var(--header-text-color)"
            :size="20"
          />
          系统设置
        </li>
        <li class="li-divider" />
        <li
          class="li-btn"
          @click="logout"
        >
          <Logouts
            color="var(--header-text-color)"
            :size="20"
          />
          退出登录
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue';
import showContext from '../../context/showContext';
import {doLogout, logoutContext} from '../../context/signContext';
import {
  PersonFill,
  Expand,
  Discover,
  Logouts
} from '../svicon/publicIcon';
import LocalStorage from '../../class/LocalStorage';

export default defineComponent({
  name: 'AdminAvatar',
  components: {
    PersonFill,
    Expand,
    Discover,
    Logouts
  },
  props: {
    bgColor: {
      type: String,
      default: '#FFFFFF'
    },
    iconColor: {
      type: String,
      default: '#333940'
    }
  },
   setup () {
    const {
      panelShow,
      setPanelShow
    } = showContext()
     
     const userName = ref('')

     const {
       logoutSuccess
     } = logoutContext()

     const logout = () => {
      doLogout(logoutSuccess)
     }

     onMounted(() => {
       const local = new LocalStorage()
       userName.value = local.getLoginStatus(false, true)
     })
     
    return {
      panelShow,
      setPanelShow,
      logout,
      userName
    }
   }
})
</script>

<style scoped lang="scss">
  @use "../../assets/scssscoped/admin/admin-avatar";
</style>