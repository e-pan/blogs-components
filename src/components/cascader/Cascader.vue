<template>
  <!-- :props="{ multiple: true, checkStrictly: true }" -->
  <el-cascader v-model="state.selects"
               @change="hanleChange"
               style="width: 100%;"
               placeholder="请选择所属分类..."
               :options="state.options"
               clearable
               :props='categoryProps'
               filterable />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, watch } from 'vue'
import { createTreeData } from '@/utils/util'
// import { basicCategory } from '@/request/apis'

export default defineComponent({
  name: 'TicCascader',
  emits: ['emit:category'],
  props: {
    apiHost: {
      default: '',
      type: String,
    },
    categoryIds: {
      default: () => {},
      type: Array,
    },
    categoryProps: {
      default: () => {},
      type: Object,
    },
  },
  setup(props, { emit }) {
    onMounted(() => {
      qryCategory()
    })
    const state = reactive({
      options: [],
      selects: [],
    })
    let categorySelected = reactive([]) as any

    // 查询类目列表
    const qryCategory = (): void => {
      // basicCategory(
      //   {
      //     parentId: '-1',
      //     busiCode: 'MALL',
      //   },
      //   props.apiHost
      // ).then((res) => {
      //   res.map((v: any) => {
      //     v.value = v.catagoryId
      //     v.label = v.catagoryName
      //   })
      //   state.options = createTreeData(res, 'catagoryId', 'parentId')
      // })
    }
    // 选择类目，返回值给到父组件
    const hanleChange = (value: any): void => {
      let catagoryId = [] as any
      if (value && value.length) {
        if (props.categoryProps.multiple) {
          catagoryId = value.map((v1: any): any => {
            return {
              categoryId: v1.length > 1 ? v1[v1.length - 1] : v1[0],
            }
          })
        } else {
          catagoryId = [
            {
              categoryId: value.length > 1 ? value[value.length - 1] : value[0],
            },
          ]
        }
      }
      emit('emit:category', catagoryId)
    }

    watch(
      props,
      (newvalue: any, oldvalue) => {
        if (newvalue.categoryIds) {
          state.selects = newvalue.categoryIds
        } else {
          state.selects = []
        }
      },
      { deep: true, immediate: true }
    )

    return {
      state,
      hanleChange,
      categorySelected,
    }
  },
})
</script>
