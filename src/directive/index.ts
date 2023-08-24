/*
 * @Author: xuhua
 * @Date: 2023-08-24 10:57:25
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-24 10:58:48
 * @FilePath: /v3-element-admin/src/directive/index.ts
 * @Description:
 */
import type { App } from "vue";
import { hasPerm } from "./permission";

// 全局注册directive指令
export function setupDirective(app: App<Element>) {
  // 按钮权限 v-hasPerm=["sys:user:add","sys:user:edit"]
  app.directive("hasPerm", hasPerm);
}
