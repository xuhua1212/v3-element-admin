<!--
 * @Author: xuhua
 * @Date: 2023-08-23 14:13:51
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-23 17:39:50
 * @FilePath: /v3-element-admin/src/components/HelloWorld.vue
 * @Description: 
-->
<script setup lang="ts">
import variables from "@/styles/variables.module.scss";
console.log("file: HelloWorld.vue:11 ~ variables:", variables);
console.log(variables.bgColor);
console.log(import.meta.env.VITE_APP_PORT);

const handleMsg = () => {
  ElMessage.success("点我成功");
};
</script>

<template>
  <div class="box" :style="{ 'background-color': variables.bgColor }"></div>
  <span class="text-blue">111</span>
  <el-button @click="handleMsg" type="primary" class="text-emerald">点我</el-button>
</template>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
}
</style>
