module.exports = [
    { text: "首页", link: "/" },
    {
        text: "前端",
        link: "/frontend/",
        items: [
            {
                text: "Vue",
                link: "/frontend/vue/",
                items: [
                    { text: "vue-router", link: "/frontend/vue/vue-router/" },
                    { text: "vuex", link: "/frontend/vue/vuex/" },
                ],
            },
            {
                text: "小程序",
                link: "/frontend/miniprogram/",
                items: [
                    { text: "微信小程序", link: "/frontend/miniprogram/weixin/" },
                    { text: "字节小程序", link: "/frontend/miniprogram/byte/" },
                ],
            },
            {
                text: "微信公众号",
                link: "/frontend/miniprogram/offiaccount/",
                items: [{ text: "微信公众号", link: "/frontend/miniprogram/offiaccount/" }],
            },
            {
                text: "CSS",
                link: "/frontend/css/",
                items: [{ text: "CSS", link: "/frontend/css/" }],
            },
            { text: "NodeJS", link: "/frontend/node/", items: [{ text: "NodeJS", link: "/frontend/node/" }] },
        ],
    },
    {
        text: "职业经验",
        link: "/career-experience/",
        items: [
            {
                text: "项目管理",
                link: "/career-experience/pm/",
                items: [{ text: "PMP", link: "/career-experience/pm/pmp/" }],
            },
        ],
    },
    {
        text: "网络运维",
        link: "/OM/",
        items: [
            {
                text: "linux",
                link: "/OM/linux/",
            },
            {
                text: "nginx",
                link: "/OM/nginx/",
                items: [
                    { text: "文档", link: "/OM/nginx/docs/" },
                    { text: "常见问题", link: "/OM/nginx/qa/" },
                ],
            },
            {
                text: "jenkins",
                link: "/OM/jenkins/",
                items: [
                    { text: "jenkins", link: "/OM/jenkins/" },
                ],
            },
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
];
