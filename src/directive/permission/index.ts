/*
 * @Author: xuhua
 * @Date: 2023-08-24 10:21:57
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-24 10:58:07
 * @FilePath: /v3-element-admin/src/directive/permission/index.ts
 * @Description:
 */
import { useUserStoreHook } from "@/store/modules/user";
import { Directive, DirectiveBinding } from "vue";

/**
 * 按钮权限
 */
export const hasPerm: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // 超级管理员 拥有所有的按钮权限
    const { roles, permissions } = useUserStoreHook();
    if (roles.includes("admin")) {
      return;
    }
    // 其他角色
    const { value } = binding;
    if (value) {
      const requiredPerms = value;

      const hasPer = permissions?.some((perm: any) => {
        return requiredPerms.includes(perm);
      });
      if (!hasPer) {
        el.parentNode?.removeChild(el);
      }
    } else {
      throw new Error(`need perms! Like v-hasPerm="['sys:user:add','sys:user:edit']"`);
    }
  },
};
