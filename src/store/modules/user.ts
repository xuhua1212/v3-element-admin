/*
 * @Author: xuhua
 * @Date: 2023-08-23 16:02:00
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-24 10:56:10
 * @FilePath: /v3-element-admin/src/store/modules/user.ts
 * @Description:
 */
import { defineStore } from "pinia";
import { store } from "@/store";

import { useStorage } from "@vueuse/core";

import { LoginData } from "@/api/auth/types";
import { loginApi } from "@/api/auth";
export const useUserStore = defineStore("user", () => {
  // state
  const userId = ref();
  const nickname = ref("");
  const token = useStorage("accessToken", "");
  const roles = ref<string[]>([]);
  const permissions = ref<string[]>([]);
  /**
   * 登录调用
   *
   * @param {LoginData}
   * @returns
   */
  function login(loginData: LoginData) {
    return new Promise<void>((resolve, reject) => {
      loginApi(loginData)
        .then((response: any) => {
          const { accessToken } = response.data;
          token.value = accessToken;
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  return {
    userId,
    nickname,
    login,
    token,
    roles,
    permissions,
  };
});

// 非setup
export function useUserStoreHook() {
  return useUserStore(store);
}
