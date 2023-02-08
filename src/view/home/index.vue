<template>
  <div class="web">
    <Header />

    <router-view :key="$route.fullPath"></router-view>

    <FooterEmail />
  </div>
</template>

<script setup>
  import { loadJavaScript } from "../../utils/loadJsFile";

  import { ref, getCurrentInstance, onMounted, onUpdated } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import Header from "@/components/layout/header.vue";
  import FooterEmail from "@/components/layout/footer_email.vue";
  const route = useRoute(); //路由参数
  const router = useRouter(); //跳转路由
  const { proxy } = getCurrentInstance();

  // const language_value = ref("zh-TW");
  // // 获取local里存的语言设置
  // language_value.value = proxy.$i18n.locale;

  onMounted(() => {
    // 调用script.js文件,获取NioApp
    setTimeout(() => {
      loadJavaScript("src/assets/js/scripts", () => {
        NioApp.Util.preLoader();
        NioApp.Util.scrollAnimation();
        NioApp.Plugins.carousel();
      });
    }, 500);
    // setTimeout(() => {
    //   loadJavaScript("src/assets/js/toastr.examples.js", () => {
    //     NioApp.Toastr.ToastrJs();
    //   });
    // }, 500);
  });

  onUpdated(() => {
    NioApp.Util.scrollAnimation();
  });
</script>

<style scoped lang="scss"></style>
