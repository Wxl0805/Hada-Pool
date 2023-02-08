<template>
  <div class="nk-body body-wider bg-light mode-onepage">
    <div class="nk-wrap">
      <!-- Banner @s -->
      <div class="header-banner bg-theme-grad hada_header_bg">
        <video autoplay muted loop plays-inline class="back-video nk-header">
          <source src="../../images/hada/home/hadapool_videoBg.mp4" type="video/mp4" />
        </video>
        <div class="nk-banner">
          <div class="banner banner-fs banner-single banner-gap-b2">
            <div class="banner-wrap">
              <div class="container">
                <div class="row align-items-center justify-content-start">
                  <!-- .col -->
                  <div class="col-lg-12 col-sm-12 text-center text-lg-start">
                    <div class="banner-caption tc-light hada_banner_caption">
                      <div class="cpn-head hada_head">
                        <div class="animated" data-animate="fadeInUp" data-delay="1">
                          <h1 class="title titleWidth" style="margin: 0;">{{ $t("home.header.header_title_1") }}</h1> 
                          <h1 class="title">{{ $t("home.header.header_title_2") }}</h1> 
                        </div>
                      </div>
                      <div class="cpn-text">
                        <p class="animated" data-animate="fadeInUp" data-delay="1.1">
                          {{ $t("home.header.header_content_1") }}<br class="d-none d-md-block" />
                          {{ $t("home.header.header_content_2") }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- .col -->
                </div>
                <!-- .row -->
                <div class="row align-items-center justify-content-center">
                  <!-- .col -->
                  <div class="col-lg-7 col-sm-12 text-center text-lg-start">
                    <div class="banner-caption tc-light hada_banner_caption">
                      <div class="cpn-action">
                        <el-form ref="walletFormRef" :model="walletForm" label-width="0px" class="nk-form-submit animated" data-animate="fadeInUp" data-delay="1.2">
                          <el-form-item prop="address">
                            <div class="hada_wallet_input animated" data-animate="fadeInUp" data-delay="1.2">
                              <div class="field-inline field-split bg-white shadow-soft">
                                <div class="field-wrap d-flex align-items-center">
                                  <!-- <label class="label-inline mb-0 d-none d-sm-block"><i class="mt-1 icon fas fa-envelope"></i></label> -->
                                  <input v-model="walletForm.address" class="input-solid input-solid-lg" type="text" @focus="focusEvent()" @blur="blurEvent()" :placeholder="$t('home.header.input_placeholder')" />
                                  <input type="text" class="d-none" name="form-anti-honeypot" value="" />
                                </div>
                                <div class="submit-wrap">
                                  <button type="button" class="btn btn-primary hada_search_btn" @click="onWalletAddressSearch(walletFormRef)">{{ $t("home.header.submit_btn") }}</button>
                                </div>
                              </div>
                            </div>
                          </el-form-item>
                        </el-form>
                      </div>
                      <div class="hada_history_block animated" data-animate="fadeInUp" data-delay=".2" v-show="showSearchHistory">
                        <div class="animated" data-animate="fadeInUp" data-delay="1.2">
                          <p>{{ $t("home.header.history") }}</p>
                          <div class="hada_history_address">
                            <div v-for="(address, index) in userInput" :key="index">
                              <div class="d-flex align-items-center">
                                <span class="text-nowrap overflow-hidden" style="text-overflow: ellipsis;cursor: pointer;" @click="onAddressSearch(address)">{{ address }}</span>
                                <i class="hada_history_delete_icon" style="cursor: pointer;" @click="onAddressDelete(index)"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-5 col-sm-12 text-center text-lg-start"></div>
                  <!-- .col -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- .nk-banner -->
        <div class="nk-ovm mask-a shape-a"></div>
      </div>
      <!-- .header-banner @e -->
      <main class="nk-pages">
        <!-- question -->
        <section class="section bg-light section-question" id="question">
          <div class="container-xxl">
            <!-- Block @s -->
            <div class="nk-block nk-block-about">
              <div class="row gutter-vr-30px align-items-center pdb-x">
                <div class="col-lg-5">
                  <div class="nk-block-img animated" data-animate="fadeInUp" data-delay=".5">
                    <img src="@/images/hada/home/question.png" alt="" />
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="nk-block-text hada_question">
                    <div class="hada_quesion_outer">
                      <h2 class="title animated" data-animate="fadeInUp" data-delay=".1" style="color: #000537 !important;">{{ $t("home.problems.title") }}</h2>
                      <p class="animated hada_question_p" data-animate="fadeInUp" data-delay=".2">
                        {{ $t("home.problems.cont_1") }} <br class="d-none d-md-block" />
                        {{ $t("home.problems.cont_2") }} <br class="d-none d-md-block" />
                        {{ $t("home.problems.cont_3") }}
                      </p>
                      <h2 class="title animated hada_question_linear" data-animate="fadeInUp" data-delay=".3">{{ $t("home.problems.cont_4") }}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- plan -->
        <section class="section bg-light section-plan" id="plan">
          <div class="ui-mask-left ui-mask-s9"></div>
          <div class="ui-mask-right ui-mask-s10"></div>
          <div class="container-xxl">
            <div class="section-head text-center wide-sm animated" data-animate="fadeInUp" data-delay=".1">
              <h3 class="title-s3 text-primary-alt">{{ $t("home.solution.title_1") }} &nbsp;&nbsp; {{ $t("home.solution.title_2") }}</h3>
            </div>
            <!-- Block @s -->
            <div class="nk-block nk-block-features">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-4">
                  <div class="feature feature-s8 feature-center card card-full card-md hada_box_shadow animated" data-animate="fadeInUp" data-delay=".2">
                    <div class="feature-icon feature-icon-xl">
                      <img src="@/images/hada/home/questionIcon1.png" alt="feature" />
                    </div>
                    <div class="feature-text feature-text-s8">
                      <h4 class="title title-md mb-1 title-s7" style="color: #000537;">{{ $t("home.solution.banner_title_1") }}</h4>
                      <p class="mgt-m mgb-s text-start fw-5">
                        {{ $t("home.solution.banner_cont_1") }}
                      </p>
                    </div>
                  </div>
                </div>
                <!-- .col -->
                <div class="col-lg-4 col-md-4">
                  <div class="feature feature-s8 feature-center card card-full card-md hada_box_shadow animated" data-animate="fadeInUp" data-delay=".3">
                    <div class="feature-icon feature-icon-xl">
                      <img src="@/images/hada/home/questionIcon2.png" alt="feature" />
                    </div>
                    <div class="feature-text feature-text-s8">
                      <h4 class="title title-md mb-1 title-s7" style="color: #000537;">{{ $t("home.solution.banner_title_2") }}</h4>
                      <p class="mgt-m mgb-s text-start fw-5">
                        {{ $t("home.solution.banner_cont_2") }}
                      </p>
                    </div>
                  </div>
                </div>
                <!-- .col -->
                <div class="col-lg-4 col-md-4">
                  <div class="feature feature-s8 feature-center card card-full card-md hada_box_shadow animated" data-animate="fadeInUp" data-delay=".4">
                    <div class="feature-icon feature-icon-xl">
                      <img src="@/images/hada/home/questionIcon3.png" alt="feature" />
                    </div>
                    <div class="feature-text feature-text-s8">
                      <h4 class="title title-md mb-1 title-s7" style="color: #000537;">{{ $t("home.solution.banner_title_3") }}</h4>
                      <p class="mgt-m mgb-s text-start fw-5">
                        {{ $t("home.solution.banner_cont_3_1") }}<br class="d-none d-md-block" /><br class="d-none d-md-block" />
                        {{ $t("home.solution.banner_cont_3_2") }}
                      </p>
                    </div>
                  </div>
                </div>
                <!-- .col -->
              </div>
              <!-- .row -->
            </div>
          </div>
        </section>
        <!-- why_us -->
        <section class="section section-features bg-light" id="features">
          <div class="container-xxl">
            <!-- Block @s -->
            <div class="nk-block nk-block-features-s2">
              <div class="row align-items-center flex-row-reverse">
                <div class="col-lg-5">
                  <div class="gfx py-4 animated" data-animate="fadeInUp" data-delay=".1">
                    <img src="@/images/hada/home/planImg.png" alt="gfx" />
                  </div>
                </div>
                <!-- .col -->
                <div class="col-lg-7">
                  <!-- Section Head @s -->
                  <div class="section-head">
                    <h2 class="title animated" style="color: #000537 !important;" data-animate="fadeInUp" data-delay=".2">{{ $t("home.why.title") }}</h2>
                  </div>
                  <!-- .section-head @e -->
                  <div class="features-list me-4 mgb-m30">
                    <div class="feature feature-s2 animated" data-animate="fadeInUp" data-delay=".3">
                      <div class="feature-icon">
                        <img src="@/images/hada/home/planIcon1.png" alt="feature" />
                      </div>
                      <div class="feature-text">
                        <h5 class="title title-sm" style="color: #000537;">{{ $t("home.why.title_1") }}</h5>
                        <p class="fw-5">{{ $t("home.why.cont_1") }}</p>
                      </div>
                    </div>
                    <div class="feature feature-s2 animated" data-animate="fadeInUp" data-delay=".4">
                      <div class="feature-icon">
                        <img src="@/images/hada/home/planIcon2.png" alt="feature" />
                      </div>
                      <div class="feature-text">
                        <h5 class="title title-sm" style="color: #000537;">{{ $t("home.why.title_2") }}</h5>
                        <p class="fw-5">{{ $t("home.why.cont_2") }}</p>
                      </div>
                    </div>
                    <div class="feature feature-s2 animated" data-animate="fadeInUp" data-delay=".5">
                      <div class="feature-icon">
                        <img src="@/images/hada/home/planIcon3.png" alt="feature" />
                      </div>
                      <div class="feature-text">
                        <h5 class="title title-sm" style="color: #000537;">{{ $t("home.why.title_3") }}</h5>
                        <p class="fw-5">{{ $t("home.why.cont_3") }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- .col -->
              </div>
              <!-- .row -->
            </div>
            <!-- .block @e -->
          </div>
        </section>
        <!-- service -->
        <section class="section section-features bg-light" id="roadmap" style="overflow: inherit;">
          <div class="ui-mask-right ui-mask-s10"></div>
          <div class="container-xxl">
            <div class="section-head section-head-s5 wide-auto-sm text-center">
              <h2 class="title animated" style="color: #000537 !important;" data-animate="fadeInUp" data-delay=".1">{{ $t("home.service.title") }}</h2>
            </div>
            <!-- Section Head @s -->
            <!-- Block @s -->
            <div class="nk-block overflow-hidden">
              <div class="row justify-content-center">
                <div class="col">
                  <div class="roadmap-carousel-container text-center animated" data-animate="fadeInUp" data-delay=".2">
                    <div class="has-carousel roadmap-carousel" data-items="5" data-items-mobile-s="1" data-margin="15" data-dots="true">
                      <div class="roadmap roadmap-done roadmap-s3 roadmap-s3-1">
                        <div class="roadmap-step roadmap-step-s3">
                          <div class="roadmap-head roadmap-head-s3">
                            <span class="roadmap-time roadmap-time-s3 fw-5" style="font-size: 1.1rem;">{{ $t("home.service.title_1") }}</span>
                          </div>
                          <p class="fw-5">
                            {{ $t("home.service.cont_1_1") }} <br class="d-none d-md-block" />
                            {{ $t("home.service.cont_1_2") }}
                          </p>
                        </div>
                      </div>
                      <div class="roadmap roadmap-done roadmap-s3 roadmap-s3-1">
                        <div class="roadmap-step roadmap-step-s3">
                          <div class="roadmap-head roadmap-head-s3">
                            <span class="roadmap-time roadmap-time-s3 fw-5" style="font-size: 1.1rem;">{{ $t("home.service.title_2") }}</span>
                          </div>
                          <p class="fw-5">
                            {{ $t("home.service.cont_2_1") }}<br class="d-none d-md-block" />
                            {{ $t("home.service.cont_2_2") }}
                          </p>
                        </div>
                      </div>
                      <div class="roadmap roadmap-s3 roadmap-s3-1">
                        <div class="roadmap-step roadmap-step-s3">
                          <div class="roadmap-head roadmap-head-s3">
                            <span class="roadmap-time roadmap-time-s3 fw-5" style="font-size: 1.1rem;">{{ $t("home.service.title_3") }}</span>
                          </div>
                          <p class="fw-5">
                            {{ $t("home.service.cont_3_1") }} <br class="d-none d-md-block" />
                            {{ $t("home.service.cont_3_2") }}
                          </p>
                        </div>
                      </div>
                      <div class="roadmap roadmap-s3 roadmap-s3-1">
                        <div class="roadmap-step roadmap-step-s3">
                          <div class="roadmap-head roadmap-head-s3">
                            <span class="roadmap-time roadmap-time-s3 fw-5" style="font-size: 1.1rem;">{{ $t("home.service.title_4") }}</span>
                          </div>
                          <p class="fw-5">
                            {{ $t("home.service.cont_4_1") }} <br class="d-none d-md-block" />
                            {{ $t("home.service.cont_4_2") }} <br class="d-none d-md-block" />
                            {{ $t("home.service.cont_4_3") }}
                          </p>
                        </div>
                      </div>
                      <div class="roadmap roadmap-s3 roadmap-s3-1">
                        <div class="roadmap-step roadmap-step-s3">
                          <div class="roadmap-head roadmap-head-s3">
                            <span class="roadmap-time roadmap-time-s3 fw-5" style="font-size: 1.1rem;">{{ $t("home.service.title_5") }}</span>
                          </div>
                          <p class="fw-5">
                            {{ $t("home.service.cont_5_1") }} <br class="d-none d-md-block" />
                            {{ $t("home.service.cont_5_2") }} <br class="d-none d-md-block" />
                            {{ $t("home.service.cont_5_3") }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- .col -->
              </div>
              <!-- .row -->
            </div>
            <!-- .block @e -->
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import api from "../../api/api";
  import { ElMessage } from "element-plus";
  import i18n from "../../locales";
  const route = useRoute(); //路由参数
  const router = useRouter(); //跳转路由

  const walletFormRef = ref();

  // 用于判断输入框失焦后的历史纪录显示
  const judgeShow = ref(true);

  const walletForm = reactive({
    address: "",
  });

  // 用户输入
  let userInput = ref([]);
  // 是否显示近期查询框
  let showSearchHistory = ref(false);
  // 搜索
  const onWalletAddressSearch = (formEl) => {
    console.log("用户输入:", walletForm.address);
    if (!formEl) return;
    formEl.validate(async (valid) => {
      if (valid) {
        console.log("submit!");
        if (!walletForm.address) {
          ElMessage({
            type: "warning",
            message: i18n.global.t("common.pls_input_address"),
          });
          return;
        }
        const table = await api.get1toData(walletForm.address);
        if (table.code == 0) {
          if (userInput.value) {
            if (userInput.value.length >= 6) {
              userInput.value.pop();
            }
            // 如果记录中有用户输入的内容,去掉旧记录
            userInput.value.forEach((address, idx) => {
              if (walletForm.address === address) {
                userInput.value.splice(idx, 1);
              }
            });
            userInput.value.unshift(walletForm.address);
          } else {
            userInput.value = [walletForm.address];
          }

          let userInputArr = JSON.stringify(userInput.value);
          // 存数据到 localStorage
          window.localStorage.setItem("searchHistory", userInputArr);

          // 跳转账户页面
          router.push({
            path: "/account/:address",
            name: "account_has_info",
            params: {
              address: walletForm.address,
            },
          });
        } else {
          ElMessage({
            type: "warning",
            message: i18n.global.t("common.find_not_address"),
          });
        }
      } else {
        console.log("error submit!");
        return false;
      }
    });
  };
  // 近期查询跳转
  const onAddressSearch = (address) => {
    router.push({
      path: "/account/:address",
      name: "account_has_info",
      params: {
        address: address,
      },
    });
    judgeShow.value = false;
  };
  // 删除近期查询
  const onAddressDelete = (index) => {
    console.log(`删除数组下标为${index}的地址`);
    let searchHistory = window.localStorage.getItem("searchHistory");
    let addressArr = JSON.parse(searchHistory);
    addressArr.forEach((address, idx) => {
      if (idx === index) {
        addressArr.splice(idx, 1);
      }
    });
    addressArr = JSON.stringify(addressArr);
    // 存修改好的数据到 localStorage
    window.localStorage.setItem("searchHistory", addressArr);
  };

  // 聚焦显示事件
  const focusEvent = () => {
    if (userInput.value.length !== 0) {
      showSearchHistory.value = true;
    }
  }

  // 失焦隐藏事件
  const blurEvent = () => {
    if(!judgeShow.value) {
      showSearchHistory.value = false;
      judgeShow.value = false;
    }
  }

  onMounted(() => {
    // location.reload();

    let searchHistory = window.localStorage.getItem("searchHistory");
    userInput.value = JSON.parse(searchHistory);
  });
</script>

<style lang="scss" scoped>
  // 修改整体背景颜色
  .bg-light{
    // background-color: #f6fafd !important;
  }
  // 补全某些页面宽度可能出现的左侧漏色问题
  .bg-theme-grad {
    background-image: linear-gradient(to right, #1b1a3f 0%, #000537 100%) !important;
  }
  // Hadapool
  @media (min-width: 992px) {
    .hada_head .title {
      font-size: 3.84rem;
      // font-family: AlibabaPuHuiTiB;
      color: #ffffff;
      line-height: 5.31rem;
      background: linear-gradient(85deg, #ae7fff 0%, #0ab2ff 65%, #09fcf1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      // white-space: nowrap;
      overflow: visible;
    }
    .hada_head .titleWidth{
      width: 20.4rem !important;
    }

    // question小于992px样式
    .hada_question {
      display: flex;
      justify-content: flex-end;
      margin-left: 0 !important;
      .hada_question_outer {
        width: fit-content;
      }
    }

  }

  // 首页视频背景
  @media (min-aspect-ratio: 16 / 9) {
    .back-video {
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 1700px) {
    .back-video {
      top: -130px;
    }
  }

  @media (max-width: 1700px) {
    .back-video {
      top: 0;
    }
  }

  @media (max-width: 1200px) {
    .back-video {
      top: 0;
    }
  }

  // @media (max-width: 1620px) {
  //   .back-video {
  //     top: -80px;
  //   }
  // }

  .hada_header_bg {
    // 背景视频
    .back-video {
      position: absolute;
      right: 0px;
      // z-index: -1;
    }

    .nk-banner {
      padding-bottom: 6.375rem;
      .banner-wrap {
        overflow: visible;
        padding-top: 100px;

        // 地址搜索框
        .hada_banner_caption {
          position: relative;
          max-width: 1296px;
          width: 100%;
          // 搜索按钮
          .hada_search_btn {
            background-color: #000000;
            border-color: #000000;
            border-radius: 4px;
          }
          // 地址input
          .hada_wallet_input {
            // width: 684px;
            flex: 1;

            .el-input__wrapper,
            .el-input__wrapper:hover {
              box-shadow: none;
            }
          }
          .hada_history_block {
            position: absolute;
            width: inherit;
            // background-image: url("@/images/hada/home/1.png");
            // background-repeat: no-repeat;
            // background-size: 100% 100%;

            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 8px;
            border: 1px solid #464664;
            p {
              margin-left: 21px;
              margin-top: 25px;
              font-size: 1.0625rem;
              // font-family: PingFang-SC-Medium, PingFang-SC;
              font-weight: 500;
              color: #ffffff;
              line-height: 1.4375rem;
            }

            .hada_history_address {
              grid-column-gap: 20px;
              margin-bottom: 40px;
              padding: 0px 21px;

              display: grid;
              grid-template-rows: auto;
              grid-template-columns: calc(50% - 10px) calc(50% - 10px);

              span {
                color: #d8d8d8;
                flex-grow: 1;
              }
              div:hover {
                span {
                  color: #ffffff;
                }
                // 删除icon
                .hada_history_delete_icon {
                  background-image: url("@/images/hada/home/delete_icon.png");
                }
              }
              // 删除icon
              .hada_history_delete_icon {
                flex-shrink: 0;
                margin-left: 12px;
                display: inline-block;
                width: 0.8125rem;
                height: 0.8125rem;
                background-image: url("@/images/hada/home/delete_icon_grey.png");
                background-size: cover;
                background-repeat: no-repeat;
              }
            }
          }
        }
      }
    }
  }

  .section-question {
    .hada_question {
      margin-left: 36px;
      @media (min-width: 576px) {
        .title {
          font-size: 2rem;
        }
      }

      .hada_question_p {
        font-size: 0.8125rem;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: #67687c;
        line-height: 1.5rem;
      }

      .hada_question_linear {
        font-size: 1.75rem;
        // font-family: AlibabaPuHuiTiB;
        color: #ffffff;
        line-height: 2.4375rem;
        background: linear-gradient(265deg, #094bfc 0%, #0ab2ff 45%, #ae7fff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  .section-plan {
    .section-head {
      @media (min-width: 576px) {
        .title {
          font-size: 2rem;
        }
      }
    }

    .hada_box_shadow {
      box-shadow: 5px 10px 30px 0px rgba(41, 26, 204, 0.12);
    }
  }

  // 修改顶部搜索框样式
  .field-inline {
    border-radius: 4px;
    .submit-wrap {
      display: flex;
      align-items: center;
      padding: 0 6px;
      .hada_search_btn {
        border-radius: 4px !important;
      }
    }
  }

  .field-inline.field-split .btn:not(.btn-round) {
    height: 86%;
  }

  // .hada_header_bg .nk-banner .banner-wrap .hada_banner_caption .hada_history_block {
  //   border-radius: 2px;
  // }
</style>
