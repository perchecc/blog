module.exports = [
    [
        "@vuepress/pwa",
        {
            serviceWorker: true,
            updatePopup: true,
            popupComponent: "MySWUpdatePopup",
        },
    ],
    [
        "@vssue/vuepress-plugin-vssue",
        {
            platform: "github-v4", // platform github-v4 - api 包 @vssue/api-github-v4
            // 其他的 Vssue 配置
            owner: "perchecc",
            repo: "blog",
            clientId: "1be1a6ba4677a1482461", // github这个auth app里找 https://github.com/settings/applications/2086455
            clientSecret: "16176a02f401c4ae49e00ebb48f35237cc10f2f8",
            autoCreateIssue: true, // 自动创建issue
        },
    ],
    ["@vuepress/back-to-top"],
    [
        "@vuepress/google-analytics",
        {
            ga: "G-XFD6NQ1FQ8",
        },
    ],
];
