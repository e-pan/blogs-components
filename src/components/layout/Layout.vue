<template>
  <el-container>
    <!-- :menus='menus' -->
    <Header :systems='systems'
            :userInfo='userInfo' />
    <el-main>
      <div class="components-main">
        <router-view />
      </div>
    </el-main>
    <Footer :systemInfo='systemInfo' />
  </el-container>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted } from 'vue'
import Header from '../header/Header.vue'
import Footer from '../footer/Footer.vue'
// import { local } from '@/utils/util'

export default defineComponent({
  name: 'ComponentLayout',
  components: {
    Header,
    Footer,
  },
  props: {
    // menus: {
    //   default: (): void => {},
    //   type: Array,
    // },
    systems: {
      default: (): void => {},
      type: Array,
    },
    userInfo: {
      default: (): void => {},
      type: Object,
    },
    systemInfo: {
      default: (): void => {},
      type: Object,
    },
  },
  setup() {
    onMounted(() => {
      nextTick(() => {
        setTimeout(() => {
          // todo
          // local.set('userInfo', {})
        }, 1000)
      })
    })
  },
})
</script>

<style lang="scss" scoped>
.el-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.el-main {
  background: #f5f5f5;
  flex-direction: column;
  padding: 15px;
}
</style>
