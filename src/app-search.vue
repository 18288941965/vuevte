<template>
  <div
    class="app-search"
  >
    <button
      class="app-search-button"
      @click.stop="setPanelShow(undefined)"
    >
      <Search :size="20" />
      <span>搜索</span>
      <span>|</span>
      <span>跳转</span>
    </button>

    <div
      v-show="panelShow"
      class="app-search-panel"
      @click.stop="null"
    >
      <header
        class="app-search-panel__header"
        @click.stop="null"
      >
        <Search :size="24" />

        <input
          v-model.trim="searchParams.searchValue"
          placeholder="搜索"
          @focus="setPanelShow(true)"
        >
      </header>

      <div class="app-search-panel__body card-scroll">
        <section class="search-history">
          <h5>最近搜索</h5>
          <ul>
            <li>组件</li>
            <li>图标</li>
            <li>工作台</li>
          </ul>
        </section>

        <section class="search-results">
          <ul>
            <li>
              <a
                href="http://127.0.0.1:5173/admin/theme/ev/dic"
                class="al-hover"
              >
                <span>dic组件</span>
                <ArrowLine
                  :size="16"
                />
              </a>
            </li>
            <li>
              <a
                href="http://127.0.0.1:5173/admin/theme/ev/pagination"
                class="al-hover"
              >
                <span>pagination组件</span>
                <ArrowLine
                  :size="16"
                />
              </a>
            </li>
            <li>
              <a
                href="http://127.0.0.1:5173/desktop/theme2"
                class="al-hover"
              >
                <span>首页2</span>
                <ArrowLine
                  :size="16"
                />
              </a>
            </li>
          </ul>
        </section>
      </div>

      <footer class="app-search-panel__footer">
        <ul>
          <li>
            <kbd class="commands-Key">
              <svg
                width="15"
                height="15"
                aria-label="Enter key"
                role="img"
              ><g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.2"
              ><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" /></g></svg>
            </kbd>
            <span>搜索</span>
          </li>
          <li>
            <kbd class="commands-Key">
              <svg
                width="15"
                height="15"
                aria-label="Escape key"
                role="img"
              ><g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.2"
              ><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" /></g></svg>
            </kbd>
            <span>关闭</span>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import {
  Search,
  ArrowLine
} from './components/svicon/publicIcon'
import showContext from './context/showContext'

export default defineComponent({
  name: 'AppSearch',
  components: {
    Search,
    ArrowLine
  },
  setup () {
    const {
      panelShow,
      setPanelShow
    } = showContext()

    const searchParams = reactive<{ searchValue: string}>({
      searchValue: ''
    })

    return {
      panelShow,
      setPanelShow,

      searchParams
    }
  }
})
</script>

<style scoped lang="scss">
  @use "assets/scssscoped/components/app-search";
  @use "assets/scss/components/common";
</style>