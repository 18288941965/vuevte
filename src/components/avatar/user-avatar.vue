<template>
  <div class="user-avatar">
    <details
      id="user-avatar-details"
    >
      <summary>
        <slot name="summary" />
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
import {defineComponent} from 'vue'
import {doLogout, logoutContext} from '../../context/signContext'
import {
  Discover,
  Logouts
} from '../svicon/publicIcon'
import {dialogEmptyContext} from '../../context/dialogContext'
import AppSettingsDialog from '../settings/app-settings-dialog.vue'
import {closeDetails} from '../../util/baseUtil'

export default defineComponent({
  name: 'UserAvatar',
  components: {
    Discover,
    Logouts,
    AppSettingsDialog
  },
  props: {
    userName: {
      type: String,
      default: ''
    }
  },
   setup () {
     const {
        dialogEmpty: dialogSetting,
       dialogEmptyOpen: dialogOpenSetting,
       dialogEmptyClose: dialogCloseSetting
     } = dialogEmptyContext()
     
     const {
       logoutSuccess
     } = logoutContext()

     const logout = () => {
      doLogout(logoutSuccess)
     }

    return {
      logout,
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