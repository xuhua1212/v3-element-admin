/*
 * @Author: xuhua
 * @Date: 2023-08-23 16:23:23
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-25 15:03:43
 * @FilePath: /v3-element-admin/src/types/env.d.ts
 * @Description: env环境变量类型声明文件
 */
/// <reference types="vite/client" />
declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  // 应用标题
  VITE_APP_TITLE: string;
  // 应用端口
  VITE_APP_PORT: number;
  // API请求前缀
  VITE_APP_BASE_API: string;
  // API目标路径(反向代理)
  VITE_APP_TARGET_URL: string;
  // API目标路径
  VITE_APP_TARGET_BASE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "lodash-es";
