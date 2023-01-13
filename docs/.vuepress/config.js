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
  themeConfig: {
    // 网站logo
    logo: "/assets/img/logo.png",
    lastUpdated: '更新时间', // string | boolean
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
      { text: "博客源码", link: "https://github.com/perchecc/blog.git" },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [
          { text: "Chinese", link: "/" },
          { text: "Japanese", link: "/about" },
        ],
      },
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
  },
};
