import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

const alias = {
    "@": path.resolve(__dirname, "./src"),
    "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
};

// https://vitejs.dev/config/
export default defineConfig({
    base: "./", // index.html文件所在位置
    root: "./", // js导入的资源路径，src
    plugins: [vue()],
    resolve: {
        alias,
    },
    server: {
        // 如果使用docker-compose开发模式，设置为false
        host: "0.0.0.0",
        port: 3302,
        open: true,
        hmr: {
            overlay: false,
        },
        // 设置代理(可以存在多个被代理的服务)
        proxy: {
            // 设置访问某个后端服务时使用的前缀
            "/api": {
                // 设置被代理的目标服务地址
                target: "http://192.168.3.22:3300",
                // 设置是否允许修改源(origin)
                changeOrigin: true,
                // 将请求路径中的前缀替换为空串
                rewrite(path) {
                    let regexp = /^\/api/;
                    path = path.replace(regexp, "");
                    return path;
                },
            },
        },
    },
});