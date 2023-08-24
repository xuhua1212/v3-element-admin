/*
 * @Author: xuhua
 * @Date: 2023-08-23 15:59:47
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-23 16:01:34
 * @FilePath: /v3-element-admin/src/store/modules/index.ts
 * @Description:
 */
import type { App } from "vue";
import { createPinia } from "pinia";

const store = createPinia();

// 全局注册 store
export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
