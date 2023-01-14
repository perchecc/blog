const secret = require("./secret");
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
            clientId: secret.clientId, // github这个auth app里找 https://github.com/settings/applications/2086455
            clientSecret: secret.clientSecret,
            autoCreateIssue: true, // 自动创建issue
        },
    ],
    ["@vuepress/back-to-top"],
    [
        "@vuepress/google-analytics",
        {
            ga: secret.ga,
        },
    ],
];
