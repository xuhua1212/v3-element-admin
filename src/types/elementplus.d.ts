/*
 * @Author: xuhua
 * @Date: 2023-08-23 17:35:00
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-23 18:17:33
 * @FilePath: /v3-element-admin/src/types/elementplus.d.ts
 * @Description:
 */
export {};
declare global {
  // const ElMessage: typeof import("element-plus")["ElMessage"];
  const ElLoading: (typeof import("element-plus"))["ElLoading"];
  const ElMessageBox: (typeof import("element-plus"))["ElMessageBox"];
}
