/*
 * @Author: xuhua
 * @Date: 2023-08-24 11:59:47
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-24 15:43:17
 * @FilePath: /v3-element-admin/src/lang/index.ts
 * @Description:
 */
import { createI18n } from "vue-i18n";
import { useAppStore } from "@/store/modules/app";

const appStore = useAppStore();

// 本地语言包
import zhCnLocale from "./package/zh-cn";
import enLocale from "./package/en";

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
});

export default i18n;
