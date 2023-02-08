import { createI18n } from "vue-i18n";
import zhHant from "./zh-Hant";
import zhHans from "./zh-Hans";
import en from "./en";

// 创建 i18n
const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 全局模式，可以直接使用 $t
  locale: localStorage.getItem("lang") || "zh-TW",
  messages: {
    "zh-TW": zhHant,
    "zh-CN": zhHans,
    en,
  },
});

export default i18n;
