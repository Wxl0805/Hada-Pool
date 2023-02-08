<template>
    <div class="main nk-body body-wider mode-onepage">
      <!-- main-content -->
      <div class="content">
        <div class="bg">
            <section class="section">
              <div class="container-xxl">
                <!-- Block @s -->
                <div class="nk-block nk-block-about">
                  <div class="row gutter-vr-30px align-items-center pdb-x">
                    <div class="col-lg-5">
                      <div class="nk-block-img animated" data-animate="fadeInUp" data-delay=".5">
                        <img src="@/images/download/download_bg.gif" alt="" />
                      </div>
                    </div>
                    <div class="col-lg-7">
                      <div class="nk-block-text">
                        <div class="download_title animated" data-animate="fadeInUp" data-delay=".8">{{ $t('download.title') }}</div>
                        <p class="animated p-margin" data-animate="fadeInUp" data-delay=".8">
                          {{ $t('download.download') }}
                        </p>
                        <div class="download_icon animated" data-animate="fadeInUp" data-delay=".8" @click="download"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { nextTick, onMounted, onUpdated, ref } from "vue";
    import { dateChangeFormat } from "../../utils/dateFormatter.js";
    import { useRouter, useRoute } from "vue-router";
    import { ElMessage } from "element-plus";
    import i18n from "../../locales";
  
    const route = useRoute(); //路由参数
    const router = useRouter(); //跳转路由

    const download = () => {
        window.open('https://ghproxy.com/https://github.com/HadaPool/HadaPoolSolo/releases/download/2.0.1/hada_miner.sh','_self')
    }

  </script>
  
  <style scoped lang="scss">
    .main {
      .content {
        position: relative;
        background: rgba(246, 248, 250, 1);
      }
      .bg {
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: 0% -5.625vw;
          margin: 0 auto;
          padding: 7.5rem 0 1.25rem;
      }
      .nk-block {
        background-color: rgba(167, 188, 217, 1);
        padding: 2.5rem 0;
      }
      .section {
        padding-top: 2.5rem !important;
      }
      .pdb-x {
        padding-bottom: 0 !important;
      }
      @media (min-width: 1200px) {
        .bg {
        max-width: 71.25rem;
        }
      }

      @media (min-width: 991px) and (max-width: 1200px) {
        .bg {
          max-width: 60rem;
        }
        .nk-block-img {
          width: 28.75rem !important;
        }
      }

      @media (max-width: 991px) {
        .bg {
          max-width: 45rem;
        }
        .col-lg-7 {
            padding-left: 15px !important;
        }
        .col-lg-5 {
          transform: translateX(0) !important;
        }
        .nk-block-img {
          width: 100% !important;
        }
        .col-lg-7 {
            padding-right: 0.9375rem !important;
            margin-top: -6.25rem;
        }
      }
      @media (max-width: 1200px) {
        .download_title {
          font-size: 1.3rem !important;
        }
        .download_icon {
            width: 9.625rem !important;
            height: 3.0625rem !important;
        }
        .p-margin {
            font-size: 0.8rem !important;
        }
        
      }
      .download_title{
        font-size: 1.8rem;
        font-weight: 500;
        white-space: nowrap;
        background: linear-gradient(to right, rgba(174, 127, 255, 1) 0%, #0ab2ff 50%, rgba(9, 75, 252, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .download_icon{
        width: 14.4375rem;
        height: 4.5938rem;
        background: url('@/images/download/download_linux.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }
      .row {
        margin-left: 0;
        margin-right: 0;
      }
      .gutter-vr-30px {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }
      .gutter-vr-30px > div {
        padding-top: 0 !important;
          padding-bottom: 0 !important;
      }
      .p-margin {
        color: rgba(103, 104, 124, 1);
        font-size: 1rem;
        margin-top: 2.8125rem;
      }
      .col-lg-5 {
        transform: translateX(1.25rem);
      }
      .col-lg-7 {
        padding-right: 40px;
        padding-left: 3.75rem;
        z-index: 10;
      }
      .nk-block-text {
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.4);
        padding: 100px 0 100px 100px;
      }
      .nk-block-img {
        width: 34.375rem;
      }
    }
  </style>
  