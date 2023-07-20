<template>
  <div class="desktop-theme">
    <div>
      <img :src="L1" alt=" ">
      应用L1
    </div>

    <div>
      <img :src="L2" alt=" ">
      应用L2
    </div>

    <div>
      <img :src="L3" alt=" ">
      应用L3
    </div>

    <div>
      <img :src="L4" alt=" ">
      应用L4
    </div>

    <div>
      <img :src="L5" alt=" ">
      应用L5
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import L1 from '../../assets/image/desktop/L1.svg'
import L2 from '../../assets/image/desktop/L2.svg'
import L3 from '../../assets/image/desktop/L3.svg'
import L4 from '../../assets/image/desktop/L4.svg'
import L5 from '../../assets/image/desktop/L5.svg'
import L6 from '../../assets/image/desktop/L6.svg'
import L7 from '../../assets/image/desktop/L7.svg'
import L8 from '../../assets/image/desktop/L8.svg'
import L9 from '../../assets/image/desktop/L9.svg'
import L10 from '../../assets/image/desktop/L10.svg'
import L11 from '../../assets/image/desktop/L11.svg'
import L12 from '../../assets/image/desktop/L12.svg'
import L13 from '../../assets/image/desktop/L13.svg'
import L14 from '../../assets/image/desktop/L14.svg'

export default defineComponent({
  name: 'DesktopTheme',
  setup () {
    return {
      L1,
      L2,
      L3,
      L4,
      L5,
      L6,
      L7,
      L8,
      L9,
      L10,
      L11,
      L12,
      L13,
      L14,
    }
  }
})
</script>

<style scoped lang="scss">
  .desktop-theme{
    display: flex;
    flex-wrap: wrap;
    & img{
      width: 72px;
      height: 72px;
    }
  }
</style>