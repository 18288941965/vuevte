<template>
  <div>
    <header class="theme-header">
      <DesktopLogo />
    </header>

    <div
      class="scroll-container"
    >
      <div style="border-right: 1px solid red">
        <el-button @click="scrollMenu('left')">
          向左
        </el-button>
      </div>
      <div
        id="flex-main"
        class="flex-main hidden-scroll"
      >
        <div
          v-for="(item, index) in 30"
          :key="index"
        >
          菜单名称-{{ item }}
        </div>
      </div>
      <div style="border-left: 1px solid red">
        <el-button @click="scrollMenu('right')">
          向右
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import DesktopLogo from '../admin/logo/desktop-logo.vue'

export default defineComponent({
  name: 'DesktopTheme2',
  components: {
    DesktopLogo
  },
  setup () {

    const scrollMenu = (direction: string) => {
      const container = document.querySelector('#flex-main')
      if (container) {
        // 根据滚动方向更新滚动位置
        if (direction === 'right') {
          container.scrollLeft += 200 // 每次滚动100像素
        } else {
          container.scrollLeft -= 200
        }
      }
    }

    onMounted(() => {
      const container = document.querySelector('#flex-main')
      if (container) {
        container.addEventListener('wheel', (event) => {
          event.stopPropagation()
          if (event instanceof WheelEvent) {
            if (event.deltaY !== 0) {
              // 阻止纵向滚动
              event.preventDefault()
              // 检查滚动方向
              const scrollDirection = event.deltaY > 0 ? 'right' : 'left'
              scrollMenu(scrollDirection)
            }
          }
        }, { passive: false })
      }
    })
    
    return {
      scrollMenu
    }
  }
})
</script>
<style lang="scss">
.scroll-container{
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  background-color: #E3E3E3;
}
.flex-main{
  padding: 10px 0;
  display: flex;
  overflow: hidden;
  div {
    flex-shrink: 0;
    flex-basis: 200px;
    border: 1px solid;
    background-color: #2BC385;
  }
}
</style>