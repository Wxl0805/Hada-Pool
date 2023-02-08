import { createRouter, createWebHashHistory } from "vue-router";
import i18n from "../locales";

const routes = [{
        path: "/",
        name: "index",
        redirect: "home",
        meta: {
            title: i18n.global.t("menus.header.home"),
        },
        component: () =>
            import ("@/view/home/index.vue"),
        children: [{
            path: "/home",
            name: "home",
            meta: {
                title: i18n.global.t("menus.header.home"),
            },
            // component: () => import("@/view/home/index-crocus-multi.vue"),
            component: () =>
                import ("@/view/home/index-gentian-pro.vue"),
        }, ],
    },
    {
        path: "/miner",
        name: "miner_index",
        redirect: "account",
        meta: {
            title: i18n.global.t("menus.header.home"),
        },
        component: () =>
            import ("@/view/miner/index.vue"),
        children: [{
                path: "/account",
                name: "account",
                meta: {
                    title: i18n.global.t("menus.header.home"),
                },
                component: () =>
                    import ("@/view/miner/account.vue"),
            },
            {
                path: "/account/:address",
                name: "account_has_info",
                meta: {
                    title: i18n.global.t("menus.header.home"),
                },
                component: () =>
                    import ("@/view/miner/account_has_info.vue"),
            },
            {
                path: "/aleo_explorer",
                name: "aleo_explorer",
                meta: {
                    title: i18n.global.t("menus.header.home"),
                },
                component: () =>
                    import ("@/view/miner/explorer.vue"),
            },
            {
                path: "/aleo_download",
                name: "aleo_download",
                meta: {
                    title: i18n.global.t("menus.header.home"),
                },
                component: () =>
                    import ("@/view/miner/download.vue"),
            },
            {
                path: "/aleo_tutorial",
                name: "aleo_tutorial",
                meta: {
                    title: i18n.global.t("menus.header.home"),
                },
                component: () =>
                    import ("@/view/miner/tutorial.vue"),
            },
            {
                path: "/aleo_address/:address",
                name: "aleo_address",
                meta: {
                    title: i18n.global.t("menus.header.home"),
                },
                component: () =>
                    import ("@/view/miner/address.vue"),
            },
            {
                path: "/aleo_block/:block",
                name: "aleo_block",
                meta: {
                    title: i18n.global.t("menus.header.home"),
                },
                component: () =>
                    import ("@/view/miner/block.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 路由前置守卫
router.beforeEach((to, from, next) => {
    // 修改页面名称
    document.title = `Hada Pool`;
    next();
});

export default router;