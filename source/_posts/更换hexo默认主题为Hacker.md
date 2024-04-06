---
title: 更换hexo默认主题为Hacker
date: 2024-04-06 19:49:42
tags:
  - hexo
  - theme
categories:
  - hexo
---

自带的主题不太喜欢，找了半天找到了一款简约的主题，叫 Hacker，效果如下：

![](https://blog.perche.cc/202404062008729.png-blogmask)

<!-- more -->

## 下载主题包

```bash
git clone https://github.com/CodeDaraW/Hacker
```

或者 直接去 github 下载 zip 包解压

## 安装主题包

在 themes 文件夹下新建一个文件夹，命名为 Hacker，把下载的主题包解压到该文件夹下

## 修改配置文件

配置文件最好在根目录新建一份以主题名命名的文件，例如：\_config.Hacker.yml，它会覆盖\_config.yml 文件

添加以下内容：

```
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags

```

## 启用主题

修改\_config.yml 配置文件，将 theme 字段修改为 Hacker

## 为目录添加页面

添加书签页面

```
hexo new page tags
```

然后修改书签页面,添加布局

```
layout: "tags"
```

`分类`和`归档`同理,也处理一下。

然后重新运行`hexo server`就可以了。

:warning: 如果主题没有生效，可以运行`hexo clean`，然后重新启动。