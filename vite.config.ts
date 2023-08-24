/*
 * @Author: xuhua
 * @Date: 2023-08-23 14:13:51
 * @LastEditors: xuhua
 * @LastEditTime: 2023-08-23 17:31:53
 * @FilePath: /v3-element-admin/vite.config.ts
 * @Description:
 */
import vue from "@vitejs/plugin-vue";
import { ConfigEnv, UserConfig, loadEnv, defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import UnoCSS from "unocss/vite";

import path from "path";
const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());

  return {
    resolve: {
      alias: {
        "@": pathSrc,
      },
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `
            @use "@/styles/variables.scss" as *;
          `,
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: Number(env.VITE_APP_PORT),
      open: true,
      // 反向代理
      proxy: {
        [env.VITE_APP_BASE_URL]: {
          target: "http://xxxxx,com",
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_URL}`), ""),
        },
      },
    },
    plugins: [
      vue(),
      UnoCSS({}),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue", "@vueuse/core"],
        eslintrc: {
          enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false
          filepath: "./.eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
          globalsPropValue: true, // 是否自动设置 eslint 规则中的 globals 属性值
        },
        resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
          IconsResolver({}),
        ],
        vueTemplate: true, // 是否自动导入 Vue 模板相关函数，如：defineComponent, ref, reactive, toRef 等
        // 配置文件生成位置(false:关闭自动生成)
        // dts:false
        dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"),
      }),
      Components({
        // 自动导入组件
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            // @iconify-json/ep 是 Element Plus 的图标库
            enabledCollections: ["ep"],
          }),
        ],
        // 是否自动生成组件导入规则，建议生成之后设置 false
        // dts: false,
        dts: path.resolve(pathSrc, "types", "auto-components.d.ts"),
      }),
      Icons({
        // 自动安装图标库
        autoInstall: true,
      }),
      createSvgIconsPlugin({
        // 指定icon文件夹
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]",
      }),
    ],
  };
});
