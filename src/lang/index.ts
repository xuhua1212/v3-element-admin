/*
 * @Author: xuhua
 * @Date: 2023-08-24 11:59:47
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-25 14:24:55
 * @FilePath: /v3-element-admin/src/lang/index.ts
 * @Description:
 */
import { createI18n } from "vue-i18n";
import { useAppStoreHook } from "@/store/modules/app";

// 本地语言包
import zhCnLocale from "./package/zh-cn";
import enLocale from "./package/en";

const appStore = useAppStoreHook();
const messages = {
  "zh-cn": {
    ...zhCnLocale,
  },
  en: {
    ...enLocale,
  },
};

// 创建i18n实例
const i18n = createI18n({
  iegacy: false,
  locale: appStore.language,
  messages: messages,
  globalInjection: true,
});

export default i18n;
