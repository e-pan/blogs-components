import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus' // 开发期间全局引用，生产可以按需引用
import 'element-plus/theme-chalk/index.css' // element ui
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文包
// import TicUserComponet from '../dist/serviceComponents.common'

// console.log(TicUserComponet, 'TicUserComponet')
// console.log(ElementPlus, 'ElementPlus')
const app = createApp(App)
// app.use(TicUserComponet)
app.use(ElementPlus, { locale })
app.use(router).mount("#app");
