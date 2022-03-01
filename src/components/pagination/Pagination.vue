<template>
  <el-pagination @size-change="handleSizeChange"
                 @current-change="handleCurrentChange"
                 :current-page="pageParams.pageNum"
                 :page-sizes="[10, 20, 30, 50]"
                 :page-size="pageParams.pageRow"
                 layout="total, sizes, prev, pager, next, jumper"
                 :total="pageParams.pageTotal">
  </el-pagination>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from 'vue'

export default defineComponent({
  // 父组件传递进来的分页参数（总条数，当前页码，每页条数）
  props: {
    pageParams: {
      default: () => {},
      type: Object,
    },
  },
  name: 'ComponentPagination',
  setup(props, context) {
    // 父组件接收到的分页参数赋值到变量
    const pageParams = reactive(props.pageParams)
    // 切换每页条数
    const handleSizeChange = (val: number): void => {
      pageParams.pageRow = val
      handleChangePage()
    }
    // 切换分页
    const handleCurrentChange = (val: number): void => {
      pageParams.pageNum = val
      handleChangePage()
    }
    // 通知父附件，传递分页参数给父组件
    const handleChangePage = (): void => {
      context.emit('pageEmit', pageParams)
    }

    return {
      handleSizeChange,
      handleCurrentChange,
      pageParams,
    }
  },
})
</script>


<style lang="scss" scoped>
.el-pagination {
  text-align: right;
  margin-top: 15px;
}
</style>