---
layout: rufus配合微软官方win11
title: iso最新镜像制作uefi启动盘
date: 2024-04-10 11:08:39
tags:
- rufus
- win11
- uefi
- iso
- 镜像制作
categories:
- 系统
---

昨天不是用了家里的u盘安装了系统吗，但是一直想不起来当时是怎么制作这个启动盘的，好用安装又快。

今天误打误撞，知道了，哈哈。和大家分享一下制作过程

<!--more-->

下载微软官方win11
---

[官网下载地址](https://www.microsoft.com/zh-cn/software-download/windows11)

因为我们是要制作启动u盘，所以去直接下载iso镜像文件就可以了。

找到`下载 Windows 11 磁盘映像 (ISO)`这一栏

![下载 Windows 11 磁盘映像 (ISO)](https://blog.perche.cc/202404101126360.png-blogmask)

下载rufus工具
---

[官网下载地址](https://rufus.ie/)

> 附上快捷安装包（各位自用即可，不要传播，oss下载流量耗不起）
>
> [`rufus-4.4`的安装包](https://blog.perche.cc/202404101128024.exe-blogmask)

执行rufus.exe开始安装
---

iso镜像复制到u盘的速度看你的u盘和主机usb口协议，3.0速度比较快，2.0简直龟速。

启动盘制作完成，开始装系统啦
---

看你的主板，比如华硕主板一般是f8，联想的应该是f12启动u盘。

然后一直下一步就可以啦

最后
---

附上一张安装成功的图哈

![安装成功](https://blog.perche.cc/202404101134753.png-blogmask)
