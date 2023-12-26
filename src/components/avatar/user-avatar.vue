<template>
  <div class="user-avatar">
    <details
      id="user-avatar-details"
      class="user-avatar-container"
    >
      <summary>
        <el-avatar
          :size="32"
          :style="{ 'background-color' : bgColor }"
        >
          <template #default>
            <PersonFill
              :size="24"
              :color="iconColor"
            />
          </template>
        </el-avatar>
      </summary>

      <div
        class="user-avatar-panel"
        @click="closeDetails('user-avatar-details')"
      >
        <ul>
          <li class="li-information">
            {{ userName }}
          </li>
          <li
            class="li-action-item"
            @click="dialogOpenSetting"
          >
            <Discover
              :size="20"
            />
            系统设置
          </li>
          <li class="li-divider" />
          <li
            class="li-action-item"
            @click="logout"
          >
            <Logouts
              :size="20"
            />
            退出登录
          </li>
        </ul>
      </div>
    </details>

    <app-settings-dialog
      v-bind="dialogSetting"
      @close-dialog="dialogCloseSetting"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue'
import {doLogout, logoutContext} from '../../context/signContext'
import {
  PersonFill,
  Discover,
  Logouts
} from '../svicon/publicIcon'
import LocalStorage from '../../class/LocalStorage'
import {dialogEmptyContext} from '../../context/dialogContext'
import AppSettingsDialog from '../settings/app-settings-dialog.vue'
import {closeDetails} from '../../util/baseUtil'

export default defineComponent({
  name: 'UserAvatar',
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
      logout,
      userName,
      closeDetails,
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