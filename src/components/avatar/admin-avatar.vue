<template>
  <div class="admin-avatar">
    <el-avatar
      :src="avatar"
      :size="32"
      @click.stop="setPanelShow(undefined)"
    />
    <div
      v-show="panelShow"
      class="admin-avatar-card"
    >
      <ul>
        <li class="li-oper">
          管理员
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
import {defineComponent} from 'vue';
import avatar from '../../assets/avatar.png'
import showContext from '../../context/showContext';
import {doLogout, logoutContext} from '../../context/signContext';

export default defineComponent({
  name: 'AdminAvatar',
   setup () {
    const {
      panelShow,
      setPanelShow
    } = showContext()

     const {
       logoutSuccess
     } = logoutContext()

     const logout = () => {
      doLogout(logoutSuccess)
     }
     
    return {
      avatar,
      panelShow,
      setPanelShow,
      logout
    }
   }
})
</script>

<style scoped lang="scss">
  .admin-avatar{
    height: 32px;
    width: 32px;
    margin-left: auto;
    position: relative;
    & .admin-avatar-card{
      position: absolute;
      right: 0;
      width: 180px;
      height: 200px;
      box-shadow: rgba(31, 35, 40, 0.12) 0 1px 3px, rgba(66, 74, 83, 0.12) 0 8px 24px;
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
        background-color: var(--border-color);
      }
    }
  }
</style>