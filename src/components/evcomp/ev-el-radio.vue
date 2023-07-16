<template>
  <el-radio-group
    v-bind="attrs"
    :key="uniqueKey"
    @change="updateSelectLabel"
  >
    <slot name="custom" />
    <el-radio
      v-for="item in dicList"
      :key="item.value"
      :border="border"
      :label="item.value"
    >
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import {ElRadioGroup, ElRadio} from 'element-plus/es'
import {defaultProps, uniqueKey, getEvElContent, LabelValue} from './evEl';

export default defineComponent({
  name: 'EvElRadio',
  components: {
    ElRadioGroup,
    ElRadio
  },
  props: {
    ...defaultProps,
    border: {
      type: Boolean,
      default: true
    },
    selectLabel: {
      type: String,
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

    const updateSelectLabel = (val: string) => {
      if (!dicList.value || !props.labelUpdate) {
        return
      }
      const obj = dicList.value.find(item => item.value === val)
      emit('update:selectLabel', obj ? obj.label : undefined)
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
