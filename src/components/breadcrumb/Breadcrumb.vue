<template>
  <div class="components-breadcrumb">
    <span class="components-breadcrumb-postion">当前位置：</span>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: breadcrumb.path ? breadcrumb.path : '' }"
                          v-for='(breadcrumb, index) of breadcrumb.items'
                          :key='index'>{{breadcrumb.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComponentBreadcrumb',
  props: {
    breadcrumb: {
      default: () => {},
      type: Object,
    },
  },
  setup(props) {
  },
})
</script>

<style lang="scss" scoped>
.components-breadcrumb {
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  margin-bottom: 15px;

  .components-breadcrumb-postion {
    font-size: 14px;
  }
}
</style>
