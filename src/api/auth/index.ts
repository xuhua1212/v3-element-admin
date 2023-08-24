/*
 * @Author: xuhua
 * @Date: 2023-08-23 16:07:27
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-23 17:46:35
 * @FilePath: /v3-element-admin/src/api/auth/index.ts
 * @Description:
 */
import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { LoginData, LoginResult } from "./types";

/**
 * 登录api
 * @param data { LoginData}
 * @returns
 */
export function loginApi(data: LoginData): AxiosPromise<LoginResult> {
  return request({
    url: "/login",
    method: "post",
    data,
  });
}
