<!--
 * @Author: xuhua
 * @Date: 2023-08-24 18:05:41
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-24 18:05:47
 * @FilePath: /v3-element-admin/src/views/redirect/index.vue
 * @Description: 
-->
<template>
  <div></div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const { params, query } = route;
const { path } = params;

router.replace({ path: "/" + path, query });
</script>
