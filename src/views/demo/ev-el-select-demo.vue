<template>
  <div class="mg-20">
    <p>基于 Element Plus → Select 二次封装的选择器，对不同的数据选择做统一处理。</p>

    <section>
      <h2>根据字典类型获取数据</h2>
      <div class="ev-comp-demo-grid2">
        <ev-el-select
          v-model="evElSelectValue.value"
          dict-type="ev_dict_demo"
        />
        <span>{{ evElSelectValue.valueText }}</span>
      </div>
    </section>

    <section>
      <h2>根据URL获取数据</h2>
      <div class="ev-comp-demo-grid2">
        <ev-el-select
          v-model="evElSelectValue.value2"
          v-model:select-label="evElSelectValue.value2Text"
          req-url="/api/admin/getDict2"
          :default-attr="{ label: 'mc', value: 'dm' }"
          :label-update="true"
          clearable
        />
        <span>{{ evElSelectValue.value2Text }}</span>
      </div>
    </section>

    <section>
      <h2>根据已有数据加载</h2>
      <div class="ev-comp-demo-grid2">
        <ev-el-select
          v-model="evElSelectValue.value3"
          v-model:select-label="evElSelectValue.value3Text"
          :data-list="evElSelectValue.dataList"
          :default-attr="{ label: 'mc', value: 'dm' }"
          :label-update="true"
          multiple
          clearable
        />
        <span>{{ evElSelectValue.value3Text }}</span>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import EvElSelect from '../../components/evcomp/ev-el-select.vue';

export default defineComponent({
  name: 'EvElSelectDemo',
  components: {
    EvElSelect
  },
  setup () {
    const evElSelectValue = reactive({
      value: '',
      valueText: '',
      value2: '',
      value2Text: '',
      value3: '',
      value3Text: '',
      dataList: [
        { mc: '1号', dm: '01' },
        { mc: '2号', dm: '02' },
        { mc: '3号', dm: '03' },
        { mc: '4号', dm: '04' }
      ]
    })
    return {
      evElSelectValue
    }
  }
})
</script>

<style scoped>
  section{
    background-color: #FFFFFF;
    padding: 20px;
    margin-top: 20px;
  }

  .ev-comp-demo-grid2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>