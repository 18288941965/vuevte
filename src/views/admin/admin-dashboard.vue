<template>
  <div class="admin-dashboard">
    <section>
      <h4>项目模块设计建议</h4>
      <ul class="dashboard-ul">
        <li>选择同一种类型采用组件化，可根据参数区分（优先考虑异步树）</li>
        <li>字典选项禁止为了方便存储字典名称</li>
        <li>页面布局既要紧凑又要留足够的空间</li>
        <li>表格展示紧凑为主，列过多可考虑将语义一致的放在一列展示</li>
        <li>模块设计需找准中心，在衍生</li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'AdminDashboard',
  setup() {
    //
  }
})
</script>

<style scoped lang="scss">
.admin-dashboard {
  margin: 0 !important;
  padding: 20px;
  & .dashboard-ul{
    margin: 20px;
    line-height: 40px;
    list-style: circle;
  }
}
</style>