---
title: hexo+github+vercel部署静态博客
date: 2024-04-06 14:59:41
tags: 
- hexo
- github
- vercel

categories: 
- 博客搭建
---

> 之前折腾了很久的博客，建了wordpress，vuepress，vitepress，hugo。最后觉得还是返璞归真，考虑用vercel去部署静态站点，这样就可以避免自己服务器天天折腾导致的博客无法访问问题，只需要有个域名就可以了。博客文件用github做存储就行了。至于图床，还是用便宜的七牛云啦，加个防盗链就可以防止流量盗刷啦。

> emmm,这些以后再说，还是开始正事，看看hexo部署到vercel上吧

安装hexo-cli脚手架工具
--- 

这块直接参考 `hexo` 官网即可 [](https://hexo.io/zh-cn/docs/)

建站
-----------------------------------------

这块直接参考 `hexo` 官网即可 [](https://hexo.io/zh-cn/docs/setup)

部署到Vercel
----------------------------------------------------------------------

首先到Github创建一个仓库，public和private都可以，对仓库没有任何要求

然后到`blog/_config.yml`中，找到deploy，修改一下

```
deploy:
 type:git
 repo:仓库地址，https或者ssh地址都可以
 branch: main
```


安装 hexo-deployer-git

```
npm install hexo-deployer-git --save
```

执行以下命令，将生成的静态文件上传到GitHub上

```
hexo clean #清除缓存文件(db.json)和已生成的博客缓存
hexo generate #生成静态文件
hexo deploy #部署网站
```

此时，我们刷新下GitHub该仓库的页面，便可发现仓库里已经上传好了文件

接下来便是Vercel部分

首先需要注册一个Vercel账号，可以直接通过GitHub账号登录
登录后，添加一个新的项目（Project）

ProjectName取个好听的名字，之后给的域名中包含着项目名称

其他的不用管，直接点Deploy即可

部署成功！