call npm run build

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Sakura0213/vuepress-starter.git master &

cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Sakura0213/Sakura0213.github.io.git master

