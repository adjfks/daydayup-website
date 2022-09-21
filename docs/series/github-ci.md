# Github CI

## 新建有权限CI过程
1. 创建token
2. 点击你的头像 > Settings > Developer settings > Personal access tokens > Generate new token. 勾选需要的权限
3. 创建secrets
你的vuepress项目源码仓库下 > Settings > Secrets， 创建ACCESS_TOKEN， 值就填写你刚才创建的token，确定。

4. 创建一个任务文件
在项目根目录下，创建.github/workflows，然后再创建一个 .yml文件，名字随便取，例：deploy.yml。
