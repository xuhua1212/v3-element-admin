/*
 * @Author: xuhua
 * @Date: 2023-08-23 16:07:27
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-24 17:57:44
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
    url: "/login",
    method: "post",
    data,
  });
}

/**
 * 注销API
 */
export function logoutApi() {
  return request({
    url: "/api/v1/auth/logout",
    method: "delete",
  });
}

/**
 * 获取验证码
 */
export function getCaptchaApi(): AxiosPromise<CaptchaResult> {
  return request({
    url: "/api/v1/auth/captcha",
    method: "get",
  });
}
