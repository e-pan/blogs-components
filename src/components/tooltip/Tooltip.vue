<template>
  <el-tooltip :content="content">
    <div :style="{width: width + 'px'}"
         class="tic-tooltip">{{ content }}</div>
  </el-tooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TicTooltip',
  props: {
    content: {
      default: '',
      type: String,
    },
    width: {
      default: 50,
      type: Number,
    },
  },
  setup(props) {},
})
</script>

<style lang="scss" scoped>
.tic-tooltip {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-all;
  height: 22px;
  line-height: 22px;
}
</style>
<style>
.el-popper {
  max-width: 1200px !important;
}
</style>
