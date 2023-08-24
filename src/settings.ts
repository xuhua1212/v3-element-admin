/*
 * @Author: xuhua
 * @Date: 2023-08-24 11:05:07
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-24 11:10:30
 * @FilePath: /v3-element-admin/src/settings.ts
 * @Description:
 */
interface DefaultSetting {
  // 系统title
  title: string;
  // 是否显示设置
  showSettings: boolean;
  // 是否显示多标签页导航
  tagsView: boolean;
  // 是否固定头部
  fixedHeader: boolean;
  // 是否显示logo
  sidebarLogo: boolean;
  // 导航栏布局
  layout: string;
  // 主题模式
  theme: string;
  // 布局大小
  size: string;
  // 语言
  language: string;
}

const defaultSetting: DefaultSetting = {
  title: "V3 Element Admin",
  showSettings: true,
  tagsView: true,
  fixedHeader: false,
  sidebarLogo: true,
  layout: "side",
  theme: "dark", // 主题模式 dark:暗黑模式 | light: 明亮模式
  size: "default", // default |large |small
  language: "zh-cn", // zh-cn| en
};

export default defaultSetting;
