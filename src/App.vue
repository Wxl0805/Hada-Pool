<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <router-view v-slot="{ Component }">
        <transition name="router-fade" mode="out-in">
          <!-- <keep-alive> -->
          <component :is="Component" />
          <!-- </keep-alive> -->
        </transition>
      </router-view>
    </el-config-provider>
  </div>
</template>

<script setup>
  import { onMounted, ref, watch } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import zh_Hans from "element-plus/es/locale/lang/zh-cn";
  import zh_Hant from "element-plus/es/locale/lang/zh-tw";
  import en from "element-plus/es/locale/lang/en";
  const route = useRoute(); //路由参数
  const router = useRouter(); //跳转路由

  const locale = ref(zh_Hant);
  const lang = ref('');
  const nowLang = ref('');
  onMounted(() => {
    // 获取浏览器语言
    lang.value = navigator.language || "zh-TW";
    console.log(lang, "website");
    nowLang.value = localStorage.getItem("lang") || null;
    if (nowLang === null) {
      localStorage.setItem("lang", lang);
    }
  });
  watch(lang, newLang => {
    locale.value = localStorage.getItem("lang") === 'zh-CN' ? zh_Hans : (localStorage.getItem("lang") === 'en' ? en : zh_Hant);
  })
</script>

<style>
  /* @font-face {
    font-family: "PingFang-Light";
    src: url("@/assets/font/PingFang Light.ttf");
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: "PingFang-Regular";
    src: url("@/assets/font/PingFang Regular.ttf");
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: "PingFang-Medium";
    src: url("@/assets/font/PingFang Medium.ttf");
    font-weight: normal;
    font-style: normal;
    font-display: block;
  } */
</style>
