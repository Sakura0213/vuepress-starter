import { defineUserConfig, defaultTheme } from "vuepress";
import { externalLinkIconPlugin } from "@vuepress/plugin-external-link-icon";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { searchPlugin } from "@vuepress/plugin-search";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { componentsPlugin } from "vuepress-plugin-components";
import { tocPlugin } from "@vuepress/plugin-toc";

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
    themePlugins: {
      backToTop: false,
    },
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
      {
        text: "笔记",
        link: "/technicalNotes",
        collapsible: true,
        children: [
          {
            text: "新理解",
            link: "/technicalNotes/newUnderstand",
            collapsible: true,
            children: [
              {
                text: "HTML",
                link: "/technicalNotes/newUnderstand/HTML",
              },
              {
                text: "CSS",
                link: "/technicalNotes/newUnderstand/CSS",
              },
              {
                text: "JS",
                link: "/technicalNotes/newUnderstand/JS",
              },
            ],
          },
          {
            text: "vuepress",
            link: "/technicalNotes/vuepress",
          },
        ],
      },
    ],
  }),
  plugins: [
    //链接末尾加图标
    externalLinkIconPlugin(),
    //图片放大
    mediumZoomPlugin(),
    //搜索
    searchPlugin(),
    //代码复制
    copyCodePlugin(),
    //组件库
    componentsPlugin({
      components: [
        //集成B站
        "BiliBili",
      ],
      rootComponents: {
        //回到开头
        backToTop: true,
      },
    }),
    //
    tocPlugin(),
  ],
});
