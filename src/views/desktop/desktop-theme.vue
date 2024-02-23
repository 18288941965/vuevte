<template>
  <h1>工作台1</h1>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {getModuleLogoUrl} from '../../util/baseUtil'
import logo from '../../assets/logo.png'
import LocalStorage from '../../class/LocalStorage'

export default defineComponent({
  name: 'DesktopTheme',
  setup () {
    const userName = ref('')

    onMounted(() => {
      const local = new LocalStorage()
      userName.value = local.getUserName()
    })
    
    return {
      userName,
      logo,
      getModuleLogoUrl
    }
  }
})
</script>

<style scoped lang="scss">

</style>