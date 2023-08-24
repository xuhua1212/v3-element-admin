<!--
 * @Author: xuhua
 * @Date: 2023-08-24 16:33:09
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-24 17:56:44
 * @FilePath: /v3-element-admin/src/App.vue
 * @Description: 
-->
<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import { useAppStore } from "@/store/modules/app";

const appStore = useAppStore();
</script>

<template>
  <el-config-provider :locale="appStore.locale" :size="appStore.size">
    <router-view />
  </el-config-provider>
</template>
