# life is like a boat ，we need to keep moving
> 生活像一叶扁舟，我们得不断前进的博客

我的博客，欢迎来踩,我会一直更新博客的最新进展，比如插件安装，主题应用...
---
:dog2: [life is like a boat](https://b.perche.cc/)

分支说明
---
一共有2个分支
- main
- hexo

main分支用于存储打包后生成的html文件，方便`hexo deploy`命令行部署

hexo用于存储hexo项目源代码

额外说明
---
基于上面的2个分支，配合vercel，有两种部署方式

- 命令行配合静态html部署
- vercel自带hexo模板部署

命令行配合静态html部署
---
hexo需要做的事情：

配置`_config.yml`文件的git配置

```
deploy:
 type:git
 repo:仓库地址，https或者ssh地址都可以
 branch: main
```

![](https://blog.perche.cc/202404061629734.png-blogmask)

安装`hexo-deployer-git`插件

```
npm install hexo-deployer-git --save
```

自定义部署命令行
> hexo默认模板是没有一体化流程的命令行的。其实只需要将基础命令行整合在一起，分布执行就可以，下面自取。

```
  "scripts": {
    "deploy": "npm run clean && npm run build && hexo deploy",
    "server": "hexo server",
    "build": "hexo generate",
    "clean": "hexo clean"
  },
```

运行`npm run deploy`，就会将编译好的打包html文件推送到前面指定的git仓库地址的指定分支里（我这里用的`main`分支）。所以，这也是我为什么把源码放在另外一个分支，就是源码防止被覆盖掉。当然还有其他作用，这就是部署的第二种方式`vercel自带hexo模板部署`。

vercel自带hexo模板部署
---
这个其实很简单，就是源码写完，或者文章写完，直接把代码推送到源码分支（我这里是`hexo`），然后下一步比较重要

vercel新建project时，选择hexo模板，同时部署分支选择源码对应的分支就可以了。

> 这种方式部署只需要提交代码就可以了，不需要执行命令行。等于推送代码，借助vercel的CI/CD就可以完成网站更新。

总结
---
这两种部署方式任选，反正我的源码里都支持。
