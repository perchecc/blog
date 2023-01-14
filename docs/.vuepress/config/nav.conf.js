module.exports = [
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
    { text: "关于我2", link: "/about2" },
    // { text: "博客源码", link: "https://github.com/perchecc/blog.git" },
    // {
    //   text: "Languages",
    //   ariaLabel: "Language Menu",
    //   items: [
    //     { text: "Chinese", link: "/" },
    //     { text: "Japanese", link: "/about" },
    //   ],
    // },
];
