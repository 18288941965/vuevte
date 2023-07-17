<template>
  <div class="icon-demo">
    <div
      v-for="(item, index) in componentIs"
      :key="'c-i-' + index"
      class="icon-demo-item"
    >
      <component
        :is="item"
        :size="48"
      />
      <span>{{ item }}</span>
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
    const componentIs = ref<Array<String>>([])

    for (const name in menuIcon) {
      componentIs.value.push(name)
    }
    
    for (const name in otherIcon) {
      componentIs.value.push(name)
    }
    return {
      componentIs
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