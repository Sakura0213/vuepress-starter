# vuepress

```bash
mkdir vuepress-Blog
cd vuepress-Blog
yarn init
yarn add -D vuepress
mkdir docs 
echo '# Hello VuePress' > docs/README.md
yarn vuepress dev docs
```

修改 docs/README.md 文件（否则乱码）

修改 package.json（之后使用 yarn dev）

```json
{
  "scripts": {
    "dev": "vuepress dev docs", 
    "build": "vuepress build docs" 
  }
  //使用17+版本的nodejs时为
  "scripts": {
    "dev": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress dev docs", 
    "build": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress build docs" 
  }   
}
```

.vuepress/config.js

```bash
module.exports = {
  title: '猫星的博客',
  description: '个人网站',
  themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '猫星的博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/sakura0213' },
                    { text: 'B站', link: 'https://space.bilibili.com/35023269' }
                ]
            }
        ],
        sidebar: [
            {
                title: '首页',
                path: '/'
            }
          ]
    },
}
```

deploy.bat脚本

（call npm run build 相当于把npm run build当成一个脚本执行，就算这个脚本结束了，也只是结束了一个call，不会结束call所在的脚本）

```bash
call npm run build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Sakura0213/Sakura0213.github.io.git master
```

