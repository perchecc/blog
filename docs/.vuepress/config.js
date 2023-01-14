const headConf = require('./config/head.conf')
const pluginsConf = require('./config/plugins.conf')
const navConf = require('./config/nav.conf');
const sidebarConf = require('./config/sidebar.conf');

module.exports = {
    title: "桃子pêche",
    description: "桃子的博客，记录前端成长路",
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        // 网站logo
        logo: "/assets/img/logo.png",
        lastUpdated: "更新时间", // string | boolean
        // 导航栏
        nav: navConf,
        // 侧边栏
        sidebar: sidebarConf,
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: "https://github.com/perchecc/blog",
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: "查看源码",
        // 假如文档不是放在仓库的根目录下：
        docsDir: "docs",
        // 假如文档放在一个特定的分支下：
        docsBranch: "main",
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: "帮助我们改善此页面！",
    },
};
