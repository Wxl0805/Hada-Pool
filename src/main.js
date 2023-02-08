import { createApp } from "vue";
import App from "./App.vue";

// import "./assets/js/scripts";
// import "./assets/js/toastr.examples.js";

import i18n from "./locales/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zh_Hans from "element-plus/es/locale/lang/zh-cn";
import zh_Hant from "element-plus/es/locale/lang/zh-tw";
import en from "element-plus/es/locale/lang/en";

import router from "./router/router";

const app = createApp(App);

app.config.globalProperties.$i18n = i18n;
app.use(ElementPlus).use(router).use(i18n).mount("#app");
export default app;