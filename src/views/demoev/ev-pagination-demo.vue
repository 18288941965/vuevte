<template>
  <div class="mg-20">
    <p>基于 Element Plus → Pagination 二次封装的分页插件。</p>

    <section>
      <ev-pagination
        :pager="pager"
        @query="query"
      />
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import EvPagination from '../../components/evcomp/ev-pagination.vue';
import {Pagination} from '../../interface/publicInterface';
export default defineComponent({
  name: 'EvPaginationDemo',
  components: {
    EvPagination
  },
  setup () {
    const pager: Pagination = {
      pageNum: 1,
      pageSize: 10,
      total: 0,
      list: []
    }
    const query = () => {
      
    }
    return {
      pager,
      query
    }
  }
})
</script>

<style scoped>
  section{
    background-color: #FFFFFF;
    padding: 20px;
    margin-top: 20px;
    border: var(--color-border-1);
    border-radius: 6px;
  }
</style>