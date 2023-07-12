<template>
  <router-view />
</template>
<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import NProgress from './NProgress';
import BChannel from './BChannel';

export default defineComponent({
  setup() {
    const router = useRouter()
    const {
      NProgressStart,
      NProgressDone
    } = NProgress()

    const {
      postMessage
    } = BChannel()
    
    router.beforeEach((to, from, next) => {
      NProgressStart(to.path)
      next()
    })

    router.afterEach(() => {
      NProgressDone()
    })
  }
})
</script>