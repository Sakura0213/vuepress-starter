call npm run build
call git init
call git add -A
call git commit -m 'deploy'
call git push -f git@github.com:Sakura0213/vuepress-starter.git master
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Sakura0213/Sakura0213.github.io.git master

