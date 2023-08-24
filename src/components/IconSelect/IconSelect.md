<!--
 * @Author: xuhua
 * @Date: 2023-08-24 16:07:29
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-24 16:09:47
 * @FilePath: /v3-element-admin/src/components/IconSelect/IconSelect.md
 * @Description: IconSelect组件使用方法
-->
# IconSelect组件使用方法

```
<script setup lang="ts">
const iconName = ref('');
</script>

<template>
  <div class="app-container">
    <icon-select v-model="iconName" />
  </div>
</template>
```

## Props
|props|说明|属性值|默认值|是否必填|
|:-   |:-:| :-: | :-: | :-: |
|value(v-model)|绑定值|string||false|

## Events
|事件名|说明|类型|
|:- |:-:|-:|