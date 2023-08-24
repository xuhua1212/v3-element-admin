<!--
 * @Author: xuhua
 * @Date: 2023-08-24 11:51:01
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-24 11:56:52
 * @FilePath: /v3-element-admin/src/components/LangSelect/index.vue
 * @Description: 语言选择
-->
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useAppStore } from "@/store/module/app";

const appStore = useAppStore();
const { locale } = useI18n();

function handleLanguageChange(lang: string) {
  locale.value = lang;
  appStore.changeLanguage(lang);

  if (lang === "en") {
    ElMessage.success("Switch Language Success");
  } else {
    ElMessage.success("切换语言成功");
  }
}
</script>
<template>
  <el-dropdown trigger="click" @command="handleLanguageChange">
    <div>
      <svg-icon icon-class="language" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="appStore.language === 'zh-cn'" command="zh-cn"> 中文 </el-dropdown-item>
        <el-dropdown-item :disabled="appStore.language === 'en'" command="en"> English </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
