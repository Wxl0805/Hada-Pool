<template>
    <main class="nk-pages">
      <section class="section bg-light">
        <div class="container header-fixed">
              <div class="row justify-content-center">
                  <div class="col-lg-10">
                    <!-- 顶部灰层 -->
                      <div class="gray-mask"></div>
                      <div>
                        <div class="header-title">{{ $t('tutorial.hadaminer_tutorial_title') }}</div>
                        <ul class="nav tab-nav tab-nav-line tab-nav-center">
                            <li><a class="active tab-4-1">{{ $t('tutorial.menu1_title') }}</a></li>
                            <li><a class="tab-4-2">{{ $t('tutorial.menu2_title') }}</a></li>
                            <li><a class="tab-4-3">{{ $t('tutorial.menu3_title') }}</a></li>
                            <li><a class="tab-4-4">{{ $t('tutorial.menu4_title') }}</a></li>
                        </ul>
                      </div>
                  </div>
              </div>
          </div>

          <div class="container" style="border-top-width: 0;margin-top: 12.8125rem;">
              <div class="row justify-content-center">
                  <div class="col-lg-10">
                      <div class="tab-content">
                          <div id="tab-4-1" ref="tab1">
                              <!-- 前面的虚线 -->
                              <!-- <div class="dashed"></div> -->
                              <!-- 标题前面的点（图标） -->
                              <!-- <div class="position-icon"></div> -->
                              <h3 class="title title-md">{{ $t('tutorial.menu1_title_h') }}<span style="color:rgba(103, 104, 124, 1);">{{ $t('tutorial.menu1_title_h_tip') }}</span></h3>
                              <p class="small-title"><div class="position-icon" ref="icon1start"></div>{{ $t('tutorial.menu1_title1_1') }}</p>
                              <div class="tip-block">
                                <p>{{ $t('tutorial.menu1_title1_1_text1') }}</p>
                                <p>{{ $t('tutorial.menu1_title1_1_text2') }}</p>
                                <p>{{ $t('tutorial.menu1_title1_1_text3') }}</p>
                              </div>
                              <p class="tip-text">{{ $t('tutorial.menu1_title1_1_tip') }}</p>

                              <p class="small-title"><div class="position-icon"></div>{{ $t('tutorial.menu1_title1_2') }}</p>
                              <p>{{ $t('tutorial.menu1_title1_2_text1_cont1') }} <span class="code-block">{{ $t('tutorial.menu1_title1_2_text1_codeblock') }}</span> {{ $t('tutorial.menu1_title1_2_text1_cont2') }}</p>
                              <p>{{ $t('tutorial.menu1_title1_2_text2_cont1') }} <span class="code-block">{{ $t('tutorial.menu1_title1_2_text2_codeblock') }}</span> {{ $t('tutorial.menu1_title1_2_text2_cont2') }}</p>
                              <p>{{ $t('tutorial.menu1_title1_2_text3_cont1') }} <span class="code-block">{{ $t('tutorial.menu1_title1_2_text3_codeblock') }}</span> {{ $t('tutorial.menu1_title1_2_text3_cont2') }}</p>
                              <img src="../../images/tutorial/1.2.3.png" alt="" class="img-style">
                              <p>{{ $t('tutorial.menu1_title1_2_text4_cont1') }} <span class="code-block">{{ $t('tutorial.menu1_title1_2_text4_codeblock') }}</span> {{ $t('tutorial.menu1_title1_2_text4_cont2') }}</p>
                              <img src="../../images/tutorial/1.2.4.png" alt="" class="img-style">
                              <p>{{ $t('tutorial.menu1_title1_2_text5_cont1') }} <span class="code-block">{{ $t('tutorial.menu1_title1_2_text5_codeblock') }}</span> {{ $t('tutorial.menu1_title1_2_text5_cont2') }}</p>
                              <img src="../../images/tutorial/1.2.5.png" alt="" class="img-style">

                              <p class="small-title" style="margin-top: 2.5rem;"><div class="position-icon" ref="icon1end"></div>{{ $t('tutorial.menu1_title1_3') }}</p>
                              <p class="red-tip">{{ $t('tutorial.menu1_title1_3_tip') }}</p>
                          </div>
                          <div id="tab-4-2" ref="tab2">
                            <h3 class="title title-md">{{ $t('tutorial.menu2_title_h') }}</h3>
                              <p class="small-title"><div class="position-icon"></div>{{ $t('tutorial.menu2_title2_1') }}</p>
                              <div class="tip-block">
                                <p>{{ $t('tutorial.menu2_title2_1_text1') }}</p>
                                <p>{{ $t('tutorial.menu2_title2_1_text2') }}</p>
                                <p>{{ $t('tutorial.menu2_title2_1_text3') }}</p>
                                <p>{{ $t('tutorial.menu2_title2_1_text4') }}</p>
                                <p>{{ $t('tutorial.menu2_title2_1_text5') }}</p>
                              </div>
                              <p class="tip-text">{{ $t('tutorial.menu2_title2_1_tip') }}</p>

                              <p class="small-title"><div class="position-icon"></div>{{ $t('tutorial.menu2_title2_2') }}</p>
                              <div class="tip-block">
                                <p>{{ $t('tutorial.menu2_title2_2_text1') }}</p>
                                <p>{{ $t('tutorial.menu2_title2_2_text2') }}</p>
                                <p>{{ $t('tutorial.menu2_title2_2_text3') }}</p>
                              </div>
                          </div>
                          <div id="tab-4-3" ref="tab3">
                            <h3 class="title title-md">{{ $t('tutorial.menu3_title_h') }}</h3>
                              <p class="small-title"><div class="position-icon"></div>{{ $t('tutorial.menu3_title3_1') }}</p>
                              <img src="../../images/tutorial/3.3.1.png" alt="" class="img-style">

                              <p class="small-title" style="margin-top: 2.5rem;"><div class="position-icon"></div>{{ $t('tutorial.menu3_title3_2_cont1') }} <span class="code-block">{{ $t('tutorial.menu3_title3_2_codeblock1') }}</span> {{ $t('tutorial.menu3_title3_2_cont2') }} <span class="code-block">{{ $t('tutorial.menu3_title3_2_codeblock2') }} </span>{{ $t('tutorial.menu3_title3_2_cont3') }}</p>
                              <img src="../../images/tutorial/3.3.2.png" alt="" class="img-style">
                          </div>
                          <div id="tab-4-4" ref="tab4">
                            <h3 class="title title-md">{{ $t('tutorial.menu4_title_h') }}</h3>
                              <p class="small-title" style="color: rgba(233, 35, 35, 1);"><div class="position-icon"></div>{{ $t('tutorial.menu4_title4_1') }}</p>
                              <p class="small-title"><div class="position-icon"></div>{{ $t('tutorial.menu4_title4_2_cont1') }} <span class="code-block">{{ $t('tutorial.menu4_title4_2_codeblock1') }}</span> {{ $t('tutorial.menu4_title4_2_cont2') }}</p>
                              <p class="small-title"><div class="position-icon"></div>{{ $t('tutorial.menu4_title4_3_cont1') }} <span class="code-block">{{ $t('tutorial.menu4_title4_3_codeblock1') }}</span> {{ $t('tutorial.menu4_title4_3_cont2') }}</p>
                              <img src="../../images/tutorial/4.4.3.1.png" alt="" class="img-style">
                              <p class="small-title">{{ $t('tutorial.menu4_title4_3_cont3') }}</p>
                              <img src="../../images/tutorial/4.4.3.2.png" alt="" class="img-style">
                              <p class="small-title">{{ $t('tutorial.menu4_title4_3_cont4') }}</p>
                              <img src="../../images/tutorial/4.4.3.3.png" alt="" class="img-style">
                              <p class="small-title" style="padding-bottom:100px">{{ $t('tutorial.menu4_title4_3_cont5') }}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </main>
  </template>

  <script setup>
    import { nextTick, onMounted, onUpdated, ref, watch, computed, onUnmounted, onBeforeUnmount } from "vue";
    import { dateChangeFormat } from "../../utils/dateFormatter.js";
    import { useRouter, useRoute } from "vue-router";
    import { ElMessage } from "element-plus";
    import i18n from "../../locales";

    const route = useRoute(); //路由参数
    const router = useRouter(); //跳转路由

    $(document).ready(function() {
        $(".tab-4-1").click(function() {
            $(".tab-4-1").addClass('active');
            $(".tab-4-2").removeClass('active');
            $(".tab-4-3").removeClass('active');
            $(".tab-4-4").removeClass('active');
            $("html, body").animate({
                scrollTop: $("#tab-4-1").offset().top - 370 + 'px'}, {duration: 100,easing: "linear"});
                return false;
        });
        $(".tab-4-2").click(function() {
            $(".tab-4-1").removeClass('active');
            $(".tab-4-2").addClass('active');
            $(".tab-4-3").removeClass('active');
            $(".tab-4-4").removeClass('active');
            $("html, body").animate({
            scrollTop: $("#tab-4-2").offset().top - 370 + 'px' }, {duration: 100,easing: "linear"});
            return false;
        });
        $(".tab-4-3").click(function() {
            $(".tab-4-1").removeClass('active');
            $(".tab-4-2").removeClass('active');
            $(".tab-4-3").addClass('active');
            $(".tab-4-4").removeClass('active');
            $("html, body").animate({
            scrollTop: $("#tab-4-3").offset().top - 370 + 'px' }, {duration: 100,easing: "linear"});
            return false;
        });
        $(".tab-4-4").click(function() {
            $(".tab-4-1").removeClass('active');
            $(".tab-4-2").removeClass('active');
            $(".tab-4-3").removeClass('active');
            $(".tab-4-4").addClass('active');
            $("html, body").animate({
            scrollTop: $("#tab-4-4").offset().top - 370 + 'px' }, {duration: 100,easing: "linear"});
            return false;
        });
    });

    const tab1 = ref(null);
    const tab2 = ref(null);
    const tab3 = ref(null);
    const tab4 = ref(null);

    onMounted(() => {
      window.addEventListener('scroll',handleScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll',handleScroll)
    })

    const handleScroll = () => {
      const height1 = tab1.value.getBoundingClientRect().top;
      const height2 = tab2.value.getBoundingClientRect().top;
      const height3 = tab3.value.getBoundingClientRect().top;
      const height4 = tab4.value.getBoundingClientRect().top;
      //  console.log('距离顶部高度',tab1.value.getBoundingClientRect().top)
      //  console.log('距离顶部高度',tab2.value.getBoundingClientRect().top)
      //  console.log('距离顶部高度',tab3.value.getBoundingClientRect().top)
      //  console.log('距离顶部高度',tab4.value.getBoundingClientRect().top)
      //  if( height1 > -625){
      //     $(".tab-4-1").addClass('active');
      //     $(".tab-4-2").removeClass('active');
      //     $(".tab-4-3").removeClass('active');
      //     $(".tab-4-4").removeClass('active');
      //     return;
      //  }
      //  if(height2 > 300){
      //     $(".tab-4-1").removeClass('active');
      //     $(".tab-4-2").addClass('active');
      //     $(".tab-4-3").removeClass('active');
      //     $(".tab-4-4").removeClass('active');
      //     return;
      //  }
      if(height1 > 300 && height2 > 300 && height3 > 300 && height4 > 300) {
        $(".tab-4-1").addClass('active');
        $(".tab-4-2").removeClass('active');
        $(".tab-4-3").removeClass('active');
        $(".tab-4-4").removeClass('active');
      }
      if(height1 < 300 && height2 > 300 && height3 > 300 && height4 > 300) {
        $(".tab-4-1").removeClass('active');
        $(".tab-4-2").addClass('active');
        $(".tab-4-3").removeClass('active');
        $(".tab-4-4").removeClass('active');
      }
      if(height1 < 300 && height2 < 300 && height3 > 300 && height4 > 300) {
        $(".tab-4-1").removeClass('active');
        $(".tab-4-2").removeClass('active');
        $(".tab-4-3").addClass('active');
        $(".tab-4-4").removeClass('active');
      }
      if(height1 < 300 && height2 < 300 && height3 < 300 && height4 > 300) {
        $(".tab-4-1").removeClass('active');
        $(".tab-4-2").removeClass('active');
        $(".tab-4-3").removeClass('active');
        $(".tab-4-4").addClass('active');
      }
    }

    // 动态监听两点之间的距离
    const icon1start = ref(null);
    const icon1end = ref(null);
    // const height = ref(0)
    // height.value = computed(()=>{ 
    //   return icon1end.value.getBoundingClientRect().top - icon1start.value.getBoundingClientRect().top; 
    // })

    const change = async() => {
      await nextTick();
      console.log(icon1end.value.getBoundingClientRect());
      // console.log(icon1start.value.getBoundingClientRect().top);
      document.documentElement.style.setProperty('--height', (icon1end.value.getBoundingClientRect().top - icon1start.value.getBoundingClientRect().top) / 16 + 'rem');
      // document.documentElement.style.setProperty('--height', height.value.value + 'px');
    }

    change();

  </script>

  <style scoped lang="scss">
    .container {
      background-color: rgba(254, 254, 254, 1);
      border: 0.5px solid rgba(233, 235, 248, 1);
    }
    .bg-light {
      background-color: rgba(246, 248, 250, 1) !important;
    }
    .gray-mask {
      background-color: rgba(246, 248, 250, 1) !important;
      width: 101%;
      height: 9.375rem;
      position: fixed;
      left: 50%;
      transform: translate(-50%, -9.4375rem);
    }
    .header-fixed {
      border-bottom-width: 0;
      position: fixed;
      z-index: 5;
      left: 50%;
      transform: translateX(-50%);
    }
    .header-title {
      font-size: 2rem;
      font-weight: bold;
      background: linear-gradient(to right, rgba(174, 127, 255, 1) 0%, rgba(10, 178, 255, 1) 50%, rgba(9, 75, 252, 1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-top: 2.5rem;
    }
    .tab-nav-line {
      margin-top: 3.125rem;
      // margin-bottom: 50px;
    }
    .title {
      color: rgba(0, 14, 72, 1);
      word-break: break-all;
      word-wrap: break-word;
    }
    .title-md {
      margin-top: 3.125rem;
    }
    .small-title {
      color: rgba(0, 14, 72, 1);
      font-size: 1.2rem;
      font-weight: bold;
      position: relative;
    }
    .tip-block {
      width: 100%;
      padding: 1.25rem 2.5rem;
      box-sizing: border-box;
      background-color: rgba(246, 248, 250, 1);
    }
    .tip-text {
      font-size: 0.6rem;
      color: rgba(162, 177, 196, 1);
      margin: 0.625rem 0 2.5rem;
    }
    .code-block {
      background-color: rgba(236, 240, 243, 1);
      word-break: break-all;
    }
    .img-style {
      margin: 0 0 1rem;
    }
    .red-tip {
      color: rgba(233, 35, 35, 1);
      font-size: 0.6rem;
      margin: 0.625rem 0 2.5rem;
      font-weight: bold;
    }
    a {
      text-decoration: none;
      cursor: pointer;
    }
    // 设置顶部切换菜单nowrap
    .nav {
      flex-wrap: nowrap;
    }

    // 顶部切换菜单锚点跳转样式
    .tab-nav-line li a::before {
      content: "";
      position: absolute;
      width: 2.5rem;
      height: 1.75rem;
      z-index: -1;
      left: 26%;
      /* transform: translateX(-50%); */
      top: -8px;
    }
    .tab-nav-line li:nth-child(1) a::before {
      background: url(/src/images/tutorial/title_1_unactive.png) no-repeat;
      background-size: 100% 100%;
    }
    .tab-nav-line li:nth-child(2) a::before {
      background: url(/src/images/tutorial/title_2_unactive.png) no-repeat;
      background-size: 100% 100%;
    }
    .tab-nav-line li:nth-child(3) a::before {
      background: url(/src/images/tutorial/title_3_unactive.png) no-repeat;
      background-size: 100% 100%;
    }
    .tab-nav-line li:nth-child(4) a::before {
      background: url(/src/images/tutorial/title_4_unactive.png) no-repeat;
      background-size: 100% 100%;
    }
    .tab-nav-line li:nth-child(1):hover a::before {
      background: url(/src/images/tutorial/title_1_active.png) no-repeat;
      background-size: 100% 100%;
    }
    .tab-nav-line li:nth-child(2):hover a::before {
      background: url(/src/images/tutorial/title_2_active.png) no-repeat;
      background-size: 100% 100%;
    }
    .tab-nav-line li:nth-child(3):hover a::before {
      background: url(/src/images/tutorial/title_3_active.png) no-repeat;
      background-size: 100% 100%;
    }
    .tab-nav-line li:nth-child(4):hover a::before {
      background: url(/src/images/tutorial/title_4_active.png) no-repeat;
      background-size: 100% 100%;
    }

    // 所有tab往右移45px
    #tab-4-1,#tab-4-2,#tab-4-3,#tab-4-4 {
      padding-left: 2.8125rem;
    }
    // 所有标题往左移45px，保持左对齐
    .title {
      transform: translateX(-2.8125rem);
    }

    // 每个小标题前面的图标
    .position-icon {
      width: 1.25rem;
      height: 1.25rem;
      background: url(/src/images/tutorial/yuan.png) no-repeat;
      background-size: 100% 100%;
      display: inline-block;
      position: absolute;
      transform: translateX(-1.875rem);
      top: 0.375rem;
    }
    // 虚线
    .dashed {
      width: 1px;
      height: var(--height);
      border-left: 1px dashed rgb(197, 213, 232);
      position: absolute;
      transform: translateX(-1.25rem);
      top: 1.4rem;
    }
  </style>
