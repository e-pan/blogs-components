import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // 客户端接口错误页
  // {
  //   path: "/client/API",
  //   name: "clientAPI",
  //   component: () => import(/* webpackChunkName: "client" */ "../views/client/API.vue"),
  // },
  // {
  //   path: "/client/Uploadfileimg",
  //   name: "Uploadfileimg",
  //   component: () => import(/* webpackChunkName: "client" */ "../views/client/Uploadfileimg.vue"),
  // },
  // {
  //   path: "/test",
  //   name: "test",
  //   component: () => import(/* webpackChunkName: "test" */ "../views/Test.vue"),
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
