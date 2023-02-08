<template>
  <div class="main nk-body body-wider bg-light mode-onepage">
    <!-- main-content -->
    <div class="content">
      <div class="bg">
        <!-- Banner @s -->
        <div class="bg-header justify-content-between animated" data-animate="fadeInUp" data-delay="1">
          <div class="hada_back_btn d-flex align-items-center" style="cursor: pointer;" @click="onBackClick">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
            <span class="ms-1 text-nowrap">{{ $t("common.back") }}</span>
          </div>
          <div class="cpn-action">
            <el-form ref="walletFormRef" :model="walletForm" label-width="0px" class="nk-form-submit">
              <el-form-item prop="address">
                <div class="hada_wallet_input">
                  <div class="field-inline field-split bg-white shadow-soft">
                    <div class="field-wrap d-flex align-items-center">
                      <input v-model="walletForm.inputValue" class="input-solid input-solid-lg" type="text" :placeholder="$t('common.pls_address_block')" />
                    </div>
                    <div class="submit-wrap">
                      <button type="button" class="btn btn-primary hada_search_btn" @click="onWalletAddressSearch(walletFormRef)">{{ $t("explorer.submit_btn") }}</button>
                    </div>
                  </div>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="alert alert-info animated mt-6" data-animate="fadeInUp" data-delay="1">
          <p>{{ $t("explorer.Address.address") }}&nbsp;&nbsp;
            <el-tooltip
              class="box-item"
              effect="dark"
              :content="address"
              placement="top-start"
            >{{ address }}
            </el-tooltip></p>
        </div>

        <div class="information">
          <!-- 总览 -->
          <div class="overview mt-2">
            <div class="head animated" data-animate="fadeInUp" data-delay="1">
              <div class="container bg-light hada_div">
                <div class="row">
                  <div class="col-lg-6 mb-4 px-5 pt-4">
                    <h6 class="hada_div_title">{{ $t("explorer.Address.Overview") }}</h6>
                  </div>
                </div>
                <div class="row hada_row_bg">
                  <div class="col-lg-6 mb-4 px-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Address.Overview_address") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 px-5 pt-4">
                    <h6 class="hada_div_table text-end">
                      <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="overviewAddress"
                        placement="top-start"
                      >{{ overviewAddress }}
                      </el-tooltip>
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 mb-4 px-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Address.Total_incentive_reward") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 px-5 pt-4">
                    <h6 class="hada_div_table text-end">
                      <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="showText"
                        placement="top-start"
                      >{{ totalIncentiveReward }} (Mainnet reward: {{ mainnetReward }})
                      </el-tooltip>
                    </h6>
                  </div>
                </div>
                <div class="row hada_row_bg">
                  <div class="col-lg-6 mb-4 px-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Address.Total_solutions_found") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 px-5 pt-4">
                    <h6 class="hada_div_table text-end">
                      <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="totalSolutionsFound"
                        placement="top-start"
                      >{{ totalSolutionsFound }}
                      </el-tooltip>
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 mb-4 px-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Address.Estimated_speed") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 px-5 pt-4">
                    <h6 class="hada_div_table text-end">
                      <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="estimatedSpeed"
                        placement="top-start"
                      ><span>{{ estimatedSpeed }} <span v-show="showComputingTime">( {{ computingTime }} )</span></span>
                      </el-tooltip>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="tables animated" data-animate="fadeInUp" data-delay="1">
              <div class="container bg-light hada_div">
                <div class="row">
                  <div class="col-lg-6 mb-4 px-5 pt-4">
                    <h6 class="hada_div_title">{{ $t("explorer.Address.Accepted_solutions") }}</h6>
                  </div>
                </div>
                <div class="row">
                  <el-table :data="tableData" :header-cell-style="{background:'rgba(250, 250, 250, 1)',color:'rgba(0, 14, 72, 1)',borderWidth:'0'}">
                    <el-table-column align="left" :label="$t('explorer.Address.block')" min-width="120" prop="block">
                      <template #default="scope">
                        <div class="link-primary" style="cursor: pointer;" @click="onBlockClick(scope.row.block)">{{ scope.row.block }}</div>
                      </template>
                    </el-table-column>
                    <el-table-column align="left" :label="$t('explorer.Address.epoch')" min-width="100">
                      <template #default="scope">
                        <div><div style="font-weight: bold;display: inline-block;">{{ scope.row.epoch1 }}</div> {{ scope.row.epoch2 }}</div>
                      </template>
                    </el-table-column>
                    <el-table-column align="left" :label="$t('explorer.Address.nonce')" min-width="100" prop="nonce" />
                    <el-table-column align="left" :label="$t('explorer.Address.target_totle')" min-width="120">
                      <template #default="scope">
                        <div>{{ scope.row.target }} / {{ scope.row.total }}</div>
                      </template>
                    </el-table-column>
                    <el-table-column align="left" :label="$t('explorer.Address.reward')" min-width="100" prop="reward" />
                    <el-table-column align="left" :label="$t('explorer.Address.date')" min-width="100" prop="times" />
                  </el-table>
                  <div class="gva-pagination">
                    <el-pagination
                      :current-page="page"
                      :page-size="pageSize"
                      :page-sizes="[10, 30, 50, 100]"
                      :total="total"
                      layout="total, sizes, prev, pager, next, jumper"
                      @current-change="handleCurrentChange"
                      @size-change="handleSizeChange"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, onUpdated, ref, reactive, watch } from "vue";
  import { dateChangeFormat } from "../../utils/dateFormatter.js";
  import { useRouter, useRoute } from "vue-router";
  import { getAddressList } from "../../api/address";
  import { getBlockList } from "../../api/block";
  import { getSpeed } from "../../api/getcomputing";
  import { ElMessage } from "element-plus";
  import i18n from "../../locales";

  const route = useRoute(); //路由参数
  const router = useRouter(); //跳转路由
  const body = ref(); //DOM body

  const address = ref("");

  // 顶部数据
  const overviewAddress = ref('');
  const totalIncentiveReward = ref('');
  const mainnetReward = ref('');
  const totalSolutionsFound = ref('');
  const estimatedSpeed = ref('');
  const computingTime = ref('')
  const showText = ref('')

  // 当前语言
  const lang = ref("");
  onMounted(async() => {
    // 获取localStorage里的语言
    lang.value = localStorage.getItem("lang") || "zh-TW";
    address.value = route.params.address;
    overviewAddress.value = route.params.address;

    getTableData();
    getComputing();
  });

  // 监听页面尺寸变化,获取是否是mobile-------(这个东西没用到)
  window.onresize = () => {
    body.value = document.getElementsByTagName("body")[0].className;
    console.log(body.value);
  };

  // 返回按钮
  const onBackClick = () => {
    console.log("返回");
    router.back(1);
  };

  // 地址相关
  const walletFormRef = ref();
  const walletForm = reactive({
    inputValue: "",
  });
  const onWalletAddressSearch = (formEl) => {
    // console.log("用户输入:", walletForm.address);
    if (!formEl) return;
    formEl.validate(async (valid) => {
      if (valid) {
        console.log("submit!");
        if (!walletForm.inputValue) {
          ElMessage({
            type: "warning",
            message: i18n.global.t("common.pls_address_block"),
          });
          return;
        }
        // 输入的是地址
        if(walletForm.inputValue.indexOf('aleo') !== -1){
          judgeAddress();
        }
        // 输入的是区块高度
        if(walletForm.inputValue.indexOf('aleo') == -1){
          judgeBlock();
        }
      } else {
        console.log("error submit!");
        return false;
      }
    });
  };

  // 数据显示
  const page = ref(1);
  const total = ref(0);
  const pageSize = ref(10);
  const tableData = ref([]);

  // 分页
  const handleSizeChange = (val) => {
    pageSize.value = val;
    getTableData();
  };
  const handleCurrentChange = (val) => {
    page.value = val;
    getTableData();
  };

  const getTableData = async () => {
    const table = await getAddressList({address: address.value, page: page.value, pageSize: pageSize.value});
    console.log(table);
    if (table.code == 0) {
      totalIncentiveReward.value = table.data.list.Reward;
      mainnetReward.value = table.data.list.mainnet; 
      totalSolutionsFound.value = table.data.list.total;
      showText.value = totalIncentiveReward.value + '(Mainnet reward: ' + mainnetReward.value  + ')';
      if(table.data.list.Data !== null){
        tableData.value = table.data.list.Data;
        page.value = table.data.page;
        pageSize.value = table.data.pageSize;
        total.value = table.data.total;
      }
    }
  };

  const onBlockClick = (block) => {
    console.log("block");
    router.push({
      path: "/aleo_block",
      name: "aleo_block",
      params: {
        block: block,
      },
    });
  };

  // 判断钱包地址是否正确并跳转
  const judgeAddress = async () => {
    const table = await getAddressList({address: walletForm.inputValue, page: 1, pageSize: 10});
    if (table.code == 0) {
      totalIncentiveReward.value = table.data.list.Reward;
      mainnetReward.value = table.data.list.mainnet; 
      totalSolutionsFound.value = table.data.list.total;
      showText.value = totalIncentiveReward.value + '(Mainnet reward: ' + mainnetReward.value  + ')';
      if(table.data.list.Data !== null){
        tableData.value = table.data.list.Data;
        page.value = table.data.page;
        pageSize.value = table.data.pageSize;
        total.value = table.data.total;
      }
    } else {
      ElMessage({
        type: "warning",
        message: i18n.global.t("common.find_not_address"),
      });
    }
  };

  // 判断区块高度是否正确并跳转
  const judgeBlock = async () => {
    const table = await getBlockList({height: walletForm.inputValue, page: 1, pageSize: 10});
    if (table.code == 0) {
      onBlockClick(table.data.list.BlockData.height);
    } else {
      ElMessage({
        type: "warning",
        message: i18n.global.t("common.find_not_block"),
      });
    }
  };

  // 是否显示时间（当算力显示为not enough solutions during last day时，不显示时间）
  const showComputingTime = ref(true);

  // 获取算力
  const getComputing = async() => {
    const table = await getSpeed({address: address.value});
    if(table.code == 0){
      estimatedSpeed.value = table.data.Speed;
      computingTime.value = table.data.TimeInterval;
    }
    if(table.code == 7 && table.msg == 'not enough solutions during last day') {
      estimatedSpeed.value = 'not enough solutions during last day';
      showComputingTime.value = false;
    }
  }
</script>

<style scoped lang="scss">
  .main {
    .content {
      position: relative;
      background: rgba(246, 248, 250, 1);

      .banner,
      .banner-page,
      .banner-wrap,
      .cpn {
        padding-bottom: 0;
      }

      .banner-wrap {
        padding: 0;
      }

      .row > * {
        padding-left: 0;
        padding-right: 0;
      }

      .text-center {
        text-align: left !important;
      }

      @media (min-width: 992px) {
        .banner-page .cpn {
          max-width: 100%;
        }
      }

      @media (min-width: 1200px) {
        .bg {
          max-width: 1140px;
        }
        :deep(.input-solid-lg) {
          min-width: 400px;
        }
      }

      @media (min-width: 991px) and (max-width: 1200px) {
        .bg {
          max-width: 960px;
        }
        :deep(.input-solid-lg) {
          min-width: 300px;
        }
      }

      @media (max-width: 991px) {
        .bg {
          max-width: 720px;
        }
      }

     // 暂无数据显示
     :deep(.el-table__empty-text) {
        position: absolute;
        top: 160px;
      }

      :deep(.el-table__empty-block) {
        // width: auto !important;
        height: 300px !important;
        background: url("@/assets/images/nodata.png") no-repeat;
        background-size: 5.4375rem 3.625rem;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .bg {
        // height: 48.541667vw;
        // background-image: url(@/assets/web/download/bg.png);
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 0% -5.625vw;
        margin: 0 auto;
        padding: 120px 20px 20px;

        .bg-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .cpn-action {
            margin: 0 0 0 20px !important;
            .el-form-item {
              margin: 0 !important;
            }
            .submit-wrap {
              display: flex;
              align-items: center;
            }
            .btn {
              padding: 0 !important;
              border-radius: 0 !important;
              border-width: 0;
              height: 40px;
              margin: 0.25rem;
              // min-width: 50px;
            }
            .field-inline {
              border-radius: 0;
            }
          }
          .input-solid-lg {
            padding: 0 20px;
          }
        }

        :deep(.el-switch__label--left) {
          width: 60px;
          text-align: center;
          margin-right: 0;
        }

        .switch-btn {
          :deep(.is-active) {
            color: rgba(103, 104, 124, 1);
          }
          :deep(.el-switch__label) {
            color: rgba(103, 104, 124, 1);
          }
        }

        .address-bg {
          width: 100%;
          height: 8rem;
          background: url("@/assets/images/aleoBg.png") no-repeat;
          background-size: 100% 100%;
          margin: 0 auto;
          min-width: 18.75rem;
          display: flex;
          align-items: center;
          .address-img {
            width: 3.5rem;
            height: 3.5rem;
            margin-left: 1.25rem;
          }
          .address-right {
            margin-left: 0.9375rem;
            .address-title {
              color: rgba(46, 80, 107, 1);
              font-size: 1rem;
            }
            .address-cont {
              display: flex;
              justify-content: flex-start;
              .address-text {
                color: rgba(0, 14, 72, 1);
                font-size: 0.9rem;
              }
              .address-copy {
                width: 1.3rem;
                height: 1.3rem;
                background: url("@/assets/images/copy.png") no-repeat;
                background-size: 100% 100%;
                margin-left: 0.625rem;
                cursor: pointer;
              }
            }
          }
        }

        @media screen and (max-width: 800px) and (min-width: 576px) {
          .address-text {
            width: 20rem;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        @media (max-width: 576px) {
          .address-text {
            width: 11rem;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .btn {
            min-width: 70px;
          }
        }

        .information {
          width: 100%;
          // 总览/收益 切换按钮
          .tab-header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px auto;
            .tab {
              a {
                text-decoration: none;
                cursor: pointer;
              }
            }
            .tab-nav-s2 li a.active {
              color: rgba(0, 135, 255, 1);
              border-bottom-color: rgba(0, 135, 255, 1);
            }
            .tab-nav-s2 {
              margin: 0 -15px;
              li a {
                font-size: 1rem;
                text-transform: capitalize;
              }
            }
            .nav {
              flex-wrap: nowrap;
            }
          }
          .overview {
            // 实时数据
            .head {
              margin-bottom: 10px;

              .content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .box1,
                .box2,
                .box3,
                .box4 {
                  background-color: #fff;
                  width: 18.75rem;
                  padding: 1.25rem 1.875rem;
                  .num {
                    font-weight: 700;
                    font-size: 1.5rem;
                    padding: 0.625rem;
                    padding-left: 0rem;
                  }
                  div {
                    display: flex;
                    justify-content: space-between;
                    p {
                      display: inline-block;
                    }
                  }
                  .box-icon {
                    width: 1.25rem;
                    height: 1.25rem;
                    background: url("@/assets/images/online.png") no-repeat;
                    background-size: 100% 100%;
                  }
                }
              }
            }
          }
          .header-title {
            width: 100%;
            height: 2.5rem;
            background: #ffffff;
            display: flex;
            align-items: center;
            padding-left: 1.25rem;
            font-weight: bold;
            border: 0.5px solid rgba(233, 235, 248, 1);
            margin-top: 1rem;
          }
          .detail {
          }

          // echarts
          .dashboard-line {
            background-color: #ffffff;
            height: 360px;
            width: 100%;
          }
        }
      }
      .el-pagination {
        justify-content: flex-end;
        padding: 10px 30px;
      }
    }
    @media screen and (max-width: 1160px) {
      .head > .content {
        flex-direction: column;
        .box1,
        .box2,
        .box3,
        .box4 {
          width: 100% !important;
          margin: 10px;
        }
      }
    }
  }

  // 顶部alert颜色
  .alert {
    margin-top: 1rem;
    padding: 1.7rem 3.25rem 1.7rem 2.25rem;
    color: #000e48;
    font-weight: 500;
    background-color: #e6efff;
    p {
      font-size: 1.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .alert-danger-alt {
    background: rgba(145, 216, 145, 0.15);
  }

  .alert-danger-alt .close {
    background: none;
  }

  // 顶部div边框
  .hada_div {
    border: 0.06rem solid #e9ebf8;
  }

  // 总览顶部div背景色
  .bg-light {
    background-color: #fefefe !important;
  }

  // 总览顶部div 标题
  .hada_div_title {
    font-size: 1.13rem;
    // font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000e48;
    line-height: 1.56rem;
  }

  // 总览顶部div 内容
  .hada_div_table {
    font-size: 1rem;
    // font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #67687c;
    line-height: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space: nowrap;
  }

  // 总览顶部div 内容
  .hada_row_bg {
    background-color: #f6f8fa;
  }

  // 顶部数据展示去除padding
  @media (max-width: 767px) {
    .container {
      padding-left: calc(var(--bs-gutter-x) * .5);
      padding-right: calc(var(--bs-gutter-x) * .5);
    }
  }

  // table表格样式
  // :deep(.el-table__header) {
  //   table-layout: auto;
  //   padding: 0 50px;
  //   background: rgba(250, 250, 250, 1);
  // }
  // :deep(.el-table__empty-block) {
  //   padding: 0 50px;
  // }
</style>
