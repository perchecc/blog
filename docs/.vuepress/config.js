module.exports = {
  title: "桃子pêche",
  description: "桃子的博客，记录前端成长路",
  head: [
    ["link", { rel: "icon", href: "/assets/img/logo.png" }],
    [
      "meta",
      { name: "keywords", content: "桃子，博客，前端，成长，记录，日志" },
    ],
    ["meta", { name: "author", content: "桃子" }],
  ],
  // base: "/blog/",
  themeConfig: {
    // 网站logo
    logo: "/assets/img/logo.png",
    lastUpdated: "更新时间", // string | boolean
    // 导航栏
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        link: "/fontend/",
        items: [
          {
            text: "Vue",
            link: "/fontend/vue/",
            items: [
              { text: "vue-router", link: "/fontend/vue/vue-router/" },
              { text: "vuex", link: "/fontend/vue/vuex/" },
            ],
          },
          { text: "NodeJS", link: "/fontend/node/" },
        ],
      },
      { text: "关于我", link: "/about" },
      // { text: "博客源码", link: "https://github.com/perchecc/blog.git" },
      // {
      //   text: "Languages",
      //   ariaLabel: "Language Menu",
      //   items: [
      //     { text: "Chinese", link: "/" },
      //     { text: "Japanese", link: "/about" },
      //   ],
      // },
    ],
    // 侧边栏
    // sidebar: [
    //   {
    //     title: "前端", // 必要的
    //     path: "/fontend/vue/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1, // 可选的, 默认值是 1
    //     children: ["/fontend/vue/vuex/", "/fontend/vue/vue-router/"],
    //   },
    // ],
    sidebar: {
      "/fontend/vue/vue-router/": [
        "" /* /foo/ */,
        "one" /* /foo/one.html */,
        "two" /* /foo/two.html */,
      ],
      "/fontend/vue/vuex/": [
        "" /* /bar/ */,
        "one" /* /bar/three.html */,
        "two" /* /bar/four.html */,
      ],

      // fallback
      "/": ["" /* / */, "about" /* /about.html */],
    },
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "https://github.com/perchecc/blog",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "查看源码",

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: "vuejs/vuepress",
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
