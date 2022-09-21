#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成侧边栏配置
node toc.js

# 生成静态文件
NODE_ENV=production npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'docs: update'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:adjfks/daydayup-website.git master:gh-pages

cd -
