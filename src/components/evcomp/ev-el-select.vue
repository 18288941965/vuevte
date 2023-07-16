<template>
  <el-select
    v-bind="attrs"
    :key="uniqueKey"
    style="width: 100%"
    @change="updateSelectLabel"
  >
    <el-option
      v-for="item in dicList"
      :key="item.value"
      :value="item.value"
      :label="item.label"
    />
  </el-select>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import {ElSelect, ElOption} from 'element-plus/es'
import {defaultProps, LabelValue, uniqueKey, getEvElContent} from './evEl';

export default defineComponent({
  name: 'EvElSelect',
  components: {
    ElSelect,
    ElOption
  },
  props: {
    ...defaultProps,
    selectLabel: {
      type: [Array, String],
      default: undefined
    }
  },
  emits: ['update:selectLabel'],
  setup (props, { attrs, emit }) {

    const {
      dicList,
      getDataByDicType,
      getDataByReqUrl,
      getDataByDataList
    } = getEvElContent()

    const updateSelectLabel = (val: Array<string> | string) => {
      if (!dicList.value || !props.labelUpdate) {
        return
      }
      // 单选
      if (typeof val === 'string') {
        const obj = dicList.value.find(item => item.value === val)
        emit('update:selectLabel', obj ? obj.label : undefined)
        return
      }
      // 多选
      const labels: Array<string> = []
      val.forEach(value => {
        const obj = dicList.value.find(item => item.value === value) as LabelValue
        labels.push(obj.label)
      })
      emit('update:selectLabel', labels)
    }

    onMounted(() => {
      if (props.dicType) {
        return getDataByDicType(props.dicType)
      }

      if (props.reqUrl) {
        return getDataByReqUrl(props.reqUrl, props.defaultAttr as LabelValue)
      }

      if (props.dataList) {
        getDataByDataList(props.dataList, props.defaultAttr as LabelValue)
      }
    })

    return {
      attrs,
      updateSelectLabel,
      dicList,
      uniqueKey
    }
  }
})
</script>
