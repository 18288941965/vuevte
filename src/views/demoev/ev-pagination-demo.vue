<template>
  <div class="mg-20">
    <p>基于 Element Plus → Pagination 二次封装的分页插件。</p>

    <section>
      <h2>后端加载数据分页</h2>

      <el-table
        :data="pager.list"
        border
        style="width: 100%"
        height="500px"
      >
        <el-table-column
          prop="name"
          label="name"
          width="180"
        />
        <el-table-column
          prop="date"
          label="date"
        />
      </el-table>

      <ev-pagination
        :pager="pager"
        @query="query"
      />
    </section>

    <section style="margin-top: 20px">
      <h2>前端加载数据分页</h2>

      <el-table
        ref="scrollTable"
        :data="pager2.list"
        border
        style="width: 100%"
        height="500px"
      >
        <el-table-column
          prop="name"
          label="name"
          width="180"
        />
        <el-table-column
          prop="date"
          label="date"
        />
      </el-table>

      <ev-pagination
        :pager="pager2"
        @query="query2"
      />
    </section>


    <section style="margin-top: 20px">
      <h2>数据无限加载</h2>

      <el-table
        :data="pager3.list"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="name"
          label="name"
          width="180"
        />
        <el-table-column
          prop="date"
          label="date"
        />
      </el-table>

      <el-button
        type="primary"
        :disabled="pager3.list.length === pager3.total"
        @click="query3(pager3.pageNum + 1)"
      >
        加载更多
      </el-button>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, reactive} from 'vue';
import EvPagination from '../../components/evcomp/ev-pagination.vue';
import {AxiosResult, Pagination} from '../../interface/publicInterface';
import axios from 'axios';

export default defineComponent({
  name: 'EvPaginationDemo',
  components: {
    EvPagination
  },
  setup () {
    const dataList = ref<Array<any>>([])

    // ================== 后端分页===================== start ===
    const pager = reactive<Pagination>({
      pageNum: 1,
      pageSize: 10,
      total: 0,
      list: []
    })
    const query = (pageNum = pager.pageNum, pageSize = pager.pageSize) => {
      Object.assign(pager, {
        pageNum,
        pageSize
      })
     axios.post('/api/admin/getDataList', { pageNum, pageSize })
       .then((res: { data: AxiosResult }) => {
         if (res.data.code === 200) {
           pager.total = res.data.data.total
           pager.list = res.data.data.list
         }
       })
    }
    // ================== 后端分页===================== end ===

    // ================== 前端分页===================== start ===
    const scrollTable = ref()
    const pager2 = reactive<Pagination>({
      pageNum: 1,
      pageSize: 10,
      total: 0,
      list: []
    })
    const query2 = (pageNum = pager2.pageNum, pageSize = pager2.pageSize) => {
      Object.assign(pager2, {
        pageNum,
        pageSize
      })
      pager2.total = dataList.value.length
      pager2.list = dataList.value.slice((pageNum - 1) * pageSize, pageNum * pageSize)
      scrollTable.value.scrollTo(0, 0)
    }
    // ================== 前端分页===================== end ===

    // ================== 无限加载 ===================== start ===
    const pager3 = reactive<Pagination>({
      pageNum: 1,
      pageSize: 10,
      total: 0,
      list: []
    })
    const query3 = (pageNum = pager3.pageNum) => {
      Object.assign(pager3, {
        pageNum,
        total: dataList.value.length
      })
      const temp = dataList.value.slice((pageNum - 1) * pager3.pageSize, pageNum * pager3.pageSize)
      if (pageNum === 1) {
        pager3.list = temp
        return
      }
      pager3.list =  pager3.list.concat(temp)
    }
    // ================== 无限加载 ===================== end ===

    // 加载测试数据
    const queryDataList = () => {
      axios.post('/api/admin/getAllDataList', {})
        .then((res: { data: AxiosResult }) => {
          if (res.data.code === 200) {
            dataList.value = res.data.data
            query2(1)
            query3(1)
          }
        })
    }

    onMounted(() => {
      query(1)
      queryDataList()
    })

    return {
      pager,
      query,

      scrollTable,
      pager2,
      query2,

      pager3,
      query3
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