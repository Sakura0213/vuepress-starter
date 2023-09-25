import { defineUserConfig, defaultTheme } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { externalLinkIconPlugin } from "@vuepress/plugin-external-link-icon";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { searchPlugin } from "@vuepress/plugin-search";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";



export default defineUserConfig({
  lang: "zh-CN",
  title: "猫星的博客",
  description: "猫星的博客站点",
  base: "/", // 这是部署到github相关的配置
  markdown: {
    code: {
      lineNumbers: false, // 代码块显示行号
    },
  },
  theme: defaultTheme({
    lastUpdatedText: "上次更新",
    contributorsText: "贡献者",
    // 默认主题配置
    navbar: [
      {
        text: "HOME",
        link: "/HOME",
      },
      {
        text: "社交平台",
        children: [
          {
            text: "Github",
            link: "https://github.com/sakura0213",
          },
          {
            text: "BiliBili",
            link: "https://space.bilibili.com/35023269",
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "博客手册",
        link: "/vuepressConfig",
      },
      {
        text: "notes",
        link: "/notes", //默认为README.md
        children: [
          {
            text: "2023",
            link: "/notes/2023",
          },
          {
            text: "2024",
            link: "/notes/2024",
          },
        ],
      },
      {
        text: "测试",
        link: "/test",
      },
    ],
  }),
  plugins: [
    //回到开头
    backToTopPlugin(),
    //链接末尾加图标
    externalLinkIconPlugin(),
    //图片放大
    mediumZoomPlugin(),
    //搜索
    searchPlugin(),
    //VScode的代码高亮
    shikiPlugin(),
    //代码复制
    copyCodePlugin(),
  ],
});
