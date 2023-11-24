<template>
  <div class="admin-avatar">
    <el-avatar
      :size="24"
      style="cursor: pointer;"
      :style="{ 'background-color' : bgColor }"
      @click="setPanelShow(undefined, $event)"
    >
      <template #default>
        <PersonFill
          :size="20"
          :color="iconColor"
        />
      </template>
    </el-avatar>
    <div
      v-show="panelShow"
      class="avatar-card"
    >
      <ul>
        <li class="li-oper">
          {{ userName }}
        </li>
        <li class="li-divider" />
        <li
          class="li-oper"
          @click="logout"
        >
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
  PersonFill
} from '../svicon/publicIcon';
import LocalStorage from '../../class/LocalStorage';

export default defineComponent({
  name: 'AdminAvatar',
  components: {
    PersonFill
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
  .admin-avatar{
    height: 24px;
    width: 24px;
    position: relative;
  }

  .avatar-card{
    position: absolute;
    right: 0;
    width: 180px;
    height: 200px;
    box-shadow: var(--color-shadow-panel);
    background-color: #FFFFFF;
    border-radius: 12px;
    padding: 10px 0;
    & .li-oper{
      line-height: 32px;
      padding-left: 20px;
      margin: 0 1px;
      cursor: pointer;
      &:hover{
        background-color: #2891ff;
        color: #FFFFFF;
      }
    }
    & .li-divider{
      margin: 10px 0;
      height: 1px;
      background-color: var(--color-bd);
    }
  }
</style>