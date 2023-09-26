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
        text: "小记录",
        link: "/notes",
        collapsible: true,
        children: [
          {
            text: "2023.09",
            link: "/notes/202309",
          },
          {
            text: "2023.10",
            link: "/notes/202310",
          },
          {
            text: "2023.11",
            link: "/notes/202311",
          },
          {
            text: "2023.12",
            link: "/notes/202312",
          },
        ],
      },
      {
        text: "小画册",
        link: "/picture",
      },
      {
        text: "小安利",
        link: "/share",
      },
      {
        text: "二次元",
        link: "/AGN",
        collapsible: true,
        children: [
          {
            text: "动漫",
            link: "/AGN/Animation",
          },
          {
            text: "漫画",
            link: "/AGN/Comic",
          },
          {
            text: "轻小说",
            link: "/AGN/Novel",
          },
        ],
      },
      {
        text: "小视频",
        link: "/video",
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
