/*
 * @Author: xuhua
 * @Date: 2023-08-23 16:07:27
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-25 15:45:12
 * @FilePath: /v3-element-admin/src/api/auth/index.ts
 * @Description:
 */
import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { LoginData, LoginResult, CaptchaResult } from "./types";

/**
 * 登录api
 * @param data { LoginData}
 * @returns
 */
export function loginApi(data: LoginData): AxiosPromise<LoginResult> {
  return request({
    url: "/api/auth/login",
    method: "post",
    data,
  });
}

/**
 * 注销API
 */
export function logoutApi() {
  return request({
    url: "/api/auth/logout",
    method: "delete",
  });
}

/**
 * 获取验证码
 */
export function getCaptchaApi(): AxiosPromise<CaptchaResult> {
  return request({
    url: "/api/auth/captcha",
    method: "get",
  });
}
