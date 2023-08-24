/*
 * @Author: xuhua
 * @Date: 2023-08-23 14:13:51
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-24 16:04:48
 * @FilePath: /v3-element-admin/src/main.ts
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";

import { setupStore } from "@/store";
import router from "@/router";

import { setupDirective } from "@/directive";

import i18n from "@/lang";

// 本地svg图标注册脚本
import "virtual:svg-icons-register";
// 样式
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/index.scss";
import "uno.css";

const app = createApp(App);
// 全局注册 store
setupStore(app);
// 全局注册 directive
setupDirective(app);

app.use(router).use(i18n).mount("#app");
