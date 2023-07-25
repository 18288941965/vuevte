<template>
  <div class="mg-20">
    <h2>菜单图标</h2>
    <div class="icon-demo">
      <div
        v-for="(item, index) in menuIcons"
        :key="'m-i-' + index"
        class="icon-demo-item"
      >
        <component
          :is="item"
          :size="48"
        />
        <span>{{ item }}</span>
      </div>
    </div>

    <h2>其他图标</h2>
    <div class="icon-demo">
      <div
        v-for="(item, index) in otherIcons"
        :key="'o-i-' + index"
        class="icon-demo-item"
      >
        <component
          :is="item"
          :size="48"
        />
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import * as menuIcon from '../../components/svicon/menuIcon'
import * as otherIcon from '../../components/svicon/otherIcon'

export default defineComponent({
  name: 'IconDemo',
  components: {
    ...menuIcon,
    ...otherIcon
  },
  setup () {
    const menuIcons = ref<Array<String>>([])
    const otherIcons = ref<Array<String>>([])

    for (const name in menuIcon) {
      menuIcons.value.push(name)
    }
    
    for (const name in otherIcon) {
      otherIcons.value.push(name)
    }
    return {
      menuIcons,
      otherIcons
    }
  }
})
</script>

<style scoped>
  .icon-demo{
    display: flex;
    flex-wrap: wrap;
  }
  .icon-demo-item{
    background-color: #FFFFFF;
    margin: 10px;
    width: 108px;
    height: 108px;
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
  }
</style>