<template>
  <el-header class="components-header" style="height: 56px">
    <a href="/">
      FUZHONGKUO
    </a>
    <div class="components-header-menus">
      <!-- 菜单 -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router
        @select="handleSelect"
      >
        <template v-for="(menu, index) of menus" :key="index">
          <!-- 一级菜单 -->
          <el-menu-item
            :index="index"
            v-if="!menu.subMenu || !menu.subMenu.length"
            >{{ menu.name }}</el-menu-item
          >
          <!-- 二级菜单 -->
          <el-submenu v-else :index="index">
            <template #title>{{ menu.name }}</template>
            <el-menu-item
              v-for="(subMenu, subIndex) of menu.subMenu"
              :index="subMenu.path"
              :key="subIndex"
              >{{ subMenu.name }}</el-menu-item
            >
          </el-submenu>
        </template>
      </el-menu>
      <!-- 系统集合 -->
      <el-dropdown :hide-on-click="false">
        <span class="components-header-dropdown">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <span>{{ userInfo.userName }}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(system, index) of systems" :key="index">{{
              system.name
            }}</el-dropdown-item>
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Component401",
  props: {
    menus: {
      default: (): void => {},
      type: Array,
    },
    systems: {
      default: (): void => {},
      type: Array,
    },
    userInfo: {
      default: (): void => {},
      type: Object,
    },
  },
  setup(props) {
    const activeIndex = ref(1);
    const handleSelect = (
      index: any,
      indexPath: any,
      item: any,
      routeResult: any
    ) => {
      return "";
    };

    onMounted(() => {});

    return {
      activeIndex,
      handleSelect,
    };
  },
});
</script>


<style lang="scss" scoped>
.components-header {
  height: 56px;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;

  img {
    width: 77px;
    height: 36px;
  }
  .components-header-menus {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .components-header-dropdown {
    cursor: pointer;
    display: flex;
    align-items: center;

    * {
      padding: 0 5px;
    }
  }
}
</style>