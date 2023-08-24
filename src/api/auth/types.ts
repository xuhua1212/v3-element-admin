/*
 * @Author: xuhua
 * @Date: 2023-08-23 16:05:31
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-24 18:22:10
 * @FilePath: /v3-element-admin/src/api/auth/types.ts
 * @Description:
 */

/**
 * 登录请求参数
 */
export interface LoginData {
  // 用户名
  username: string;
  //密码
  password: string;
  //验证码缓存key
  verifyCodeKey?: string;
  //验证码
  verifyCode?: string;
}

/**
 * 登录响应
 */
export interface LoginResult {
  // 访问token
  accessToken?: string;
  // 过期时间(单位：毫秒)
  expires?: number;
  //  刷新token
  refreshToken?: string;
  //  token 类型
  tokenType?: string;
}

/**
 * 验证码响应
 */
export interface CaptchaResult {
  // 验证码缓存key
  verifyCodeKey: string;
  // 验证码图片Base64字符串
  verifyCodeBase64: string;
}
