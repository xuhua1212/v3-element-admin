import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import defaultSetting from "@/settings";
// 导入element-plus中英文包
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";

export const useAppStore = defineStore("app", () => {
  const language = useStorage("language", defaultSetting.language);

  /**
   * 根据语言标识获取对应的语言包
   */
  const locale = computed(() => {
    if (language.value === "zh-cn") {
      return zhCn;
    } else {
      return en;
    }
  });

  /**
   * 切换语言
   */
  const changeLanguage = (lang: string) => {
    language.value = lang;
  };

  return {
    language,
    locale,
    changeLanguage,
  };
});
