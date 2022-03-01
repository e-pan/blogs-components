<template>
  <el-footer class="components-footer"
             style="height:40px;">
    <span>&copy;{{systemInfo.copyright}}</span>
    <span>版本: {{systemInfo.version}}</span>
    <span>发布时间: {{systemInfo.buildDate}}</span>
  </el-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComponentFooter',
  props: {
    systemInfo: {
      default: (): void => {},
      type: Object,
    },
  },
  setup(props) {
  },
})
</script>


<style lang="scss" scoped>
.components-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #ddd;

  span {
    color: #666;
    font-size: 12px;
    padding-right: 20px;
  }
}
</style>