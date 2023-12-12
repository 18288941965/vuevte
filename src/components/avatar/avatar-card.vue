<template>
  <div class="admin-avatar">
    <div
      class="avatar-base"
    >
      <el-avatar
        :size="32"
        :style="{ 'background-color' : bgColor }"
        class="avatar-btn"
        @click="setPanelShow(undefined, $event)"
      >
        <template #default>
          <PersonFill
            :size="24"
            :color="iconColor"
          />
        </template>
      </el-avatar>
    </div>

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
          @click="dialogOpenSetting"
        >
          <Discover
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
            :size="20"
          />
          退出登录
        </li>
      </ul>
    </div>

    <app-settings-dialog
      v-bind="dialogSetting"
      @close-dialog="dialogCloseSetting"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue'
import showContext from '../../context/showContext'
import {doLogout, logoutContext} from '../../context/signContext'
import {
  PersonFill,
  Discover,
  Logouts
} from '../svicon/publicIcon'
import LocalStorage from '../../class/LocalStorage'
import {dialogEmptyContext} from '../../context/dialogContext'
import AppSettingsDialog from '../settings/app-settings-dialog.vue'

export default defineComponent({
  name: 'AvatarCard',
  components: {
    PersonFill,
    Discover,
    Logouts,
    AppSettingsDialog
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

     const {
        dialogEmpty: dialogSetting,
       dialogEmptyOpen: dialogOpenSetting,
       dialogEmptyClose: dialogCloseSetting
     } = dialogEmptyContext()
     
     const userName = ref('')

     const {
       logoutSuccess
     } = logoutContext()

     const logout = () => {
      doLogout(logoutSuccess)
     }

     onMounted(() => {
       const local = new LocalStorage()
       userName.value = local.getUserName()
     })
     
    return {
      panelShow,
      setPanelShow,
      logout,
      userName,

      dialogSetting,
      dialogOpenSetting,
      dialogCloseSetting
    }
   }
})
</script>

<style scoped lang="scss">
  @use "../../assets/scssscoped/components/avatar-card";
</style>