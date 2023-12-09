<template>
  <div class="app-search">
    <div
      class="app-search-grid"
      :class="{'app-search-open' : panelShow }"
      @click.stop="null"
    >
      <Search :size="24" />
      <input
        v-model.trim="searchParams.searchValue"
        placeholder="搜索"
        @focus="inputFocus"
      >
      <label for="app-search-input2">
        范围
      </label>
      <div class="app-search-select">
        <input
          id="app-search-input2"
          v-model="searchParams.searchText"
          readonly
        >
        <Expand :size="24" />
      </div>
    </div>

    <div
      v-show="panelShow"
      class="app-search-panel"
      @click.stop="null"
    >
      <div
        class="app-search-content card-scroll"
      >
        <ul>
          <li
            v-for="item in 20"
            :key="item"
          >
            {{ item }}、搜索结果条目
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import {
  Search,
  Expand
} from './components/svicon/publicIcon'
import showContext from './context/showContext'

export default defineComponent({
  name: 'AppSearch',
  components: {
    Search,
    Expand
  },
  setup () {
    const {
      panelShow,
      setPanelShow
    } = showContext()

    const searchParams = reactive<{ searchValue: string, searchType: string, searchText: string}>({
      searchValue: '',
      searchType: '01',
      searchText: '当前菜单'
    })

    const searchTypeList = [
      { dm: '01', mc: '当前菜单' },
      { dm: '02', mc: '全部菜单' }
    ]

    const inputFocus = () => {
      setPanelShow(true)
    }
    
    return {
      panelShow,
      setPanelShow,
      searchTypeList,
      searchParams,

      inputFocus
    }
  }
})
</script>

<style scoped lang="scss">
  @use "assets/scssscoped/other/app-search";
</style>