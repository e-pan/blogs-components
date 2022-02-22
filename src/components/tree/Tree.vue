<template>
  <el-tree ref='refTree'
           :data="treeDatas"
           :props="defaultProps"
           :node-key="nodeKey"
           @check-change="checkChange"
           :default-checked-keys="defaultCheckedKeys"
           show-checkbox />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'TicTree',
  props: {
    // 渲染数据源
    treeDatas: {
      default: () => {
        return []
      },
      type: Array,
    },
    // 基础配置
    defaultProps: {
      default: () => {
        return {}
      },
      type: Object,
    },
    // 获取选中id对应的字段名
    nodeKey: {
      default: '',
      type: String,
    },
    // 默认选中的数据
    defaultCheckedKeys: {
      default: () => {
        return []
      },
      type: Array,
    },
  },
  emits: ['emit:tree'],
  setup(props, { emit }) {
    const state = reactive({
      defaultCheckedKeys: props.defaultCheckedKeys,
    })

    const refTree = ref(null) as any
    // const handleCheck = (): void => {
    //   // console.log(refTree.value.getCheckedNodes())
    //   // console.log(refTree.value.getHalfCheckedNodes())
    //   const halfNodes = refTree.value.getHalfCheckedNodes()
    //   const fullNodes = refTree.value.getCheckedNodes()
    //   // console.log([...halfNodes, ...fullNodes])
    //   emit('emit:tree', [...halfNodes, ...fullNodes])
    // }
    const checkChange=():void=> {
      const halfNodes = refTree.value.getHalfCheckedNodes()
      const fullNodes = refTree.value.getCheckedNodes()
      // console.log([...halfNodes, ...fullNodes])
      emit('emit:tree', [...halfNodes, ...fullNodes])
    }
    const clearCheck = () => {
      refTree.value.setCheckedKeys([]) // 设置选中清空
    }

    return {
      state,
      refTree,
      clearCheck,
      checkChange
    }
  },
})
</script>
