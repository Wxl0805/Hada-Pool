<template>
  <div>
    <header class="nk-header page-header is-transparent is-sticky is-shrink is-light" id="header">
      <!-- Header @s -->
      <div class="header-main">
        <div class="header-container container">
          <div class="header-wrap">
            <!-- Logo @s -->
            <div class="header-logo logo animated" data-animate="fadeInDown" data-delay=".55">
              <a href="./" class="logo-link hada_logo">
                <img :style="logo_style" class="logo-dark" src="@/images/hada/hadapool_dark.png" srcset="@/images/hada/hadapool_dark.png" alt="logo" />
                <img :style="logo_style_light" class="logo-light" src="@/images/hada/hadapool.png" srcset="@/images/hada/hadapool.png" alt="logo" />
              </a>
            </div>
            <!-- Menu Toogle @s -->
            <div class="header-nav-toggle">
              <a href="#" class="navbar-toggle" data-menu-toggle="example-menu-04">
                <div class="toggle-line">
                  <span></span>
                </div>
              </a>
            </div>
            <!-- Menu @s -->
            <div class="header-navbar header-navbar-s3">
              <nav class="header-menu justify-content-between" id="example-menu-04">
                <ul class="menu menu-s2 animated" data-animate="fadeInDown" data-delay=".65">
                  <li class="menu-item">
                    <a class="menu-link nav-link" href="#home" :style="{ '--nav-text-color': nav_text_color }">{{ $t("menus.header.home") }}</a>
                  </li>
                  <li class="menu-item">
                    <a class="menu-link nav-link" href="#account" :style="{ '--nav-text-color': nav_text_color }">{{ $t("menus.header.account") }}</a>
                  </li>
                  <li class="menu-item">
                    <a class="menu-link nav-link" href="#aleo_explorer" :style="{ '--nav-text-color': nav_text_color }">{{ $t("menus.header.explorer") }}</a>
                  </li>
                  <li class="menu-item">
                    <a class="menu-link nav-link" href="#aleo_download" :style="{ '--nav-text-color': nav_text_color }">{{ $t("menus.header.download") }}</a>
                  </li>
                  <li class="menu-item">
                    <a class="menu-link nav-link" href="#aleo_tutorial" :style="{ '--nav-text-color': nav_text_color }">{{ $t("menus.header.tutorial") }}</a>
                  </li>
                  <li class="menu-item has-sub">
                    <a class="toggle-tigger tc-light" href="#" :style="{ '--nav-text-color': nav_text_color }">
                      <img class="language-flag" :src="nowLang === 'en' ? '/src/images/flag-en.png' : (nowLang === 'zh-CN' ? '/src/images/flag-ch.png' : '/src/images/flag-tw.png')" />
                      <span v-for="(lang, index) in language" :key="lang + index" v-show="nowLang === lang.val">{{ lang.name }}</span>
                    </a>
                    <ul class="toggle-class toggle-drop menu-sub menu-drop">
                      <li v-for="(lang, index) in language" :key="lang" @click="onLanguageChange(lang.val)" v-show="nowLang !== lang.val">
                        <a style="cursor:pointer;"><img class="language-flag" :src="lang.img" />{{ lang.name }}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- .header-navbar @e -->
          </div>
        </div>
      </div>
      <!-- .header-main @e -->
    </header>
  </div>
</template>

<script setup>
  import { ref, getCurrentInstance, onMounted, watch } from "vue";
  import { useRouter, useRoute } from "vue-router";
  const { proxy } = getCurrentInstance();

  const route = useRoute(); //路由参数
  const router = useRouter(); //跳转路由

  const logo_style = ref("");
  const logo_style_light = ref("");

  const nav_text_color = ref("");

  if (route.path.includes("/account") === true || route.path.includes("/aleo") === true) {
    logo_style.value = "display: block;";
    logo_style_light.value = "display: none;";

    nav_text_color.value = "#415076";
  } else {
    nav_text_color.value = "#ffffff";
  }

  const language = [
    {
      name: "简体中文",
      val: "zh-CN",
      img: "/src/images/flag-ch.png",
    },
    {
      name: "繁体中文",
      val: "zh-TW",
      img: "/src/images/flag-tw.png",
    },
    {
      name: "English",
      val: "en",
      img: "/src/images/flag-en.png",
    },
  ];

  const onLanguageChange = (lang) => {
    //语言切换
    localStorage.setItem("lang", lang);
    proxy.$i18n.locale = lang;

    window.location.reload();
  };

  const nowLang = ref();
  onMounted(() => {
    nowLang.value = localStorage.getItem("lang") || "zh-TW";
  });


  watch(route, (val) => {
    console.log(val.name);
    if(val.name == 'home') {
      setTimeout(() => {
        document.getElementsByClassName('menu')[0].childNodes[0].childNodes[0].classList.add('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[1].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[2].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[3].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[4].childNodes[0].classList.remove('selectStyle');
      }, 1);
    } else if (val.name == 'account') {
      setTimeout(() => {
        document.getElementsByClassName('menu')[0].childNodes[0].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[1].childNodes[0].classList.add('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[2].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[3].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[4].childNodes[0].classList.remove('selectStyle');
      }, 1);
    } else if (val.name == 'aleo_explorer') {
      setTimeout(() => {
        document.getElementsByClassName('menu')[0].childNodes[0].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[1].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[2].childNodes[0].classList.add('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[3].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[4].childNodes[0].classList.remove('selectStyle');
      }, 1);
    } else if (val.name == 'aleo_download') {
      setTimeout(() => {
        document.getElementsByClassName('menu')[0].childNodes[0].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[1].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[2].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[3].childNodes[0].classList.add('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[4].childNodes[0].classList.remove('selectStyle');
      }, 1);
    } else if (val.name == 'aleo_tutorial') {
      setTimeout(() => {
        document.getElementsByClassName('menu')[0].childNodes[0].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[1].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[2].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[3].childNodes[0].classList.remove('selectStyle');
        document.getElementsByClassName('menu')[0].childNodes[4].childNodes[0].classList.add('selectStyle');
      }, 1);
    }
  },{immediate: true})
</script>
<style lang="scss">
  $nav-text-color: var(--nav-text-color, "");
  @media (min-width: 992px) {
    .hada_logo img {
      height: 33px;
    }
  }

  .logo-dark,
  .is-transparent:not(.has-fixed) .logo-light,
  .is-dark .logo-light {
    display: block;
  }

  .logo-light,
  .is-transparent:not(.has-fixed) .logo-dark,
  .is-dark .logo-dark {
    display: none;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  // 导航栏文字颜色
  @media (min-width: 992px) {
    .menu-item:last-child {
      margin-left: 2.5rem;
    }
    .is-transparent:not(.has-fixed) :not(.is-light) .menu > .menu-item {
      a {
        // color: #fff;
        color: var(--nav-text-color);

        &:hover {
          // 橫綫
          &::after {
            content: "";
            display: block;
            width: calc(60%);
            height: 4px;
            background-color: var(--nav-text-color);
            border-radius: 10px;
            position: absolute;
            bottom: 10px;
            left: 50%;
            right: 50%;
            transform: translateX(-50%);
            animation: fadeIn 0.5s;
          }
        }
      }
    }
    .is-transparent:not(.has-fixed) :not(.is-light) .menu > .menu-item:last-child {
      a {
        // color: #fff;
        color: var(--nav-text-color);
        &:hover {
          // 橫綫
          &::after {
            content: "";
            display: block;
            width: 0px;
          }
        }
      }
    }
  }

  // 导航栏文字hover颜色
  @media (min-width: 992px) {
  .menu-item {
    position: relative;
    a {
      width: 100%;
    }
    a .active,
    a:hover {
      // 橫綫
      &::after {
        content: "";
        display: block;
        width: calc(60%);
        height: 4px;
        background-color: #415076;
        border-radius: 10px;
        position: absolute;
        bottom: 10px;
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
        animation: fadeIn 0.5s;
      }
    }
  }
  }
  .menu-item:last-child {
    a .active,
    a:hover {
      // 橫綫
      &::after {
        content: "";
        display: block;
        width: 0px;
      }
    }
  }
  // 更改语言显示
  .toggle-drop{
    left: 0;
    transform: translateX(0);
  }
  .menu-item > ul, .menu-item .menu-sub{
    display: block;
  }

  //  国际化图标显示
  .language-flag {
    width: 17px;
  }

  // 顶部菜单选中样式
  .selectStyle {
    color: var(--nav-text-color);
    &::after {
      content: "";
      display: block;
      width: calc(60%);
      height: 4px;
      background-color: var(--nav-text-color);
      border-radius: 10px;
      position: absolute;
      bottom: 10px;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
    }
  }

  // 导航栏内边距加宽
  @media (min-width: 1200px) {
    .menu-s2 > .menu-item > a {
      padding: 20px 15px;
    }

  }

</style>
