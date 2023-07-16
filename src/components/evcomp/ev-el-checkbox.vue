<template>
  <el-checkbox-group
    v-if="dicList.length > 0"
    v-bind="attrs"
    :key="uniqueKey"
    @change="updateSelectLabel"
  >
    <el-checkbox
      v-for="item in dicList"
      :key="item.value"
      :border="border"
      :label="item.value"
    >
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import {defaultProps, LabelValue, uniqueKey, getEvElContent} from './evEl';
import {ElCheckboxGroup, ElCheckbox} from 'element-plus';

export default defineComponent({
  name: 'EvElCheckbox',
  components: {
    ElCheckboxGroup,
    ElCheckbox
  },
  props: {
    ...defaultProps,
    selectLabel: {
      type: Array,
      default: undefined
    },
    border: {
      type: Boolean,
      default: true
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

    const updateSelectLabel = (val: Array<string>) => {
      if (!dicList.value || !props.labelUpdate) {
        return
      }

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
      uniqueKey,
      updateSelectLabel,
      dicList
    }
  }
})
</script>
