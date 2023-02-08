<template>
  <div class="main nk-body body-wider bg-light mode-onepage">
    <!-- main-content -->
    <div class="content">
      <div class="bg">
        <!-- Banner @s -->
        <div class="bg-header justify-content-end">
          <div class="cpn-action">
            <el-form ref="walletFormRef" :model="walletForm" label-width="0px" class="nk-form-submit animated" data-animate="fadeInUp" data-delay=".8">
              <el-form-item prop="address">
                <div class="hada_wallet_input animated" data-animate="fadeInUp" data-delay=".8">
                  <div class="field-inline field-split bg-white shadow-soft">
                    <div class="field-wrap d-flex align-items-center">
                      <!-- <label class="label-inline mb-0 d-none d-sm-block"><i class="mt-1 icon fas fa-envelope"></i></label> -->
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

        <div class="information">
          <div class="tab-header animated" data-animate="fadeInUp" data-delay=".9">
            <div class="tab">
              <ul class="nav tab-nav tab-nav-s2 tab-nav-center">
                <li>
                  <a class="active" data-bs-toggle="tab" @click="showOverview = true">{{ $t("explorer.overview") }}</a>
                </li>
                <li>
                  <a data-bs-toggle="tab" @click="showOverview = false">{{ $t("explorer.rankingList") }}</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 总览 -->
          <div class="overview" v-if="showOverview">
            <div class="head animated" data-animate="fadeInUp" data-delay=".9">
              <div class="container bg-light hada_div">
                <div class="row">
                  <div class="col-lg-3 mb-4 ps-5 pt-3">
                    <h6 class="hada_div_title">{{ $t("explorer.blockHeight") }}</h6>
                    <h4 class="hada_div_num">{{ blockHeight }}</h4>
                  </div>
                  <div class="col-lg-3 mb-4 ps-5 pt-3">
                    <h6 class="hada_div_title">{{ $t("explorer.epoch") }}</h6>
                    <h4 class="hada_div_num">{{ epoch }}</h4>
                  </div>
                  <div class="col-lg-3 mb-4 ps-5 pt-3">
                    <h6 class="hada_div_title">{{ $t("explorer.proofTarget") }}</h6>
                    <h4 class="hada_div_num">{{ proofTarget }}</h4>
                  </div>
                  <div class="col-lg-3 mb-4 ps-5 pt-3">
                    <h6 class="hada_div_title">{{ $t("explorer.coinbaseTarget") }}</h6>
                    <h4 class="hada_div_num">{{ coinbaseTarget }}</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-3 mb-4 ps-5 pt-3">
                    <h6 class="hada_div_title">{{ $t("explorer.computing") }} <span v-show="showUnit">（ {{ computingTime }} ）</span></h6>
                    <el-tooltip
                      class="box-item"
                      effect="dark"
                      :content="computing"
                      placement="top-start"
                    ><div><h4 class="hada_div_num">{{ computing }} <div class="computing_unit" v-show="showUnit">&nbsp;C/S</div></h4></div>
                    </el-tooltip>
                  </div>
                  <div class="col-lg-3 mb-4 ps-5 pt-3">
                    <h6 class="hada_div_title">{{ $t("explorer.date") }}</h6>
                    <h4 class="hada_div_num time_show">{{ date }}</h4>
                  </div>
                </div>
              </div>
            </div>

            <div class="tables animated" data-animate="fadeInUp" data-delay=".9">
              <div class="container bg-light hada_div">
                <div class="row">
                  <div class="col-lg-6 mb-4 px-5 pt-4">
                    <h6 class="hada_table_title">{{ $t("explorer.recentBlocks.recentBlocks") }}</h6>
                  </div>
                </div>
                <div class="row">
                  <el-table :data="tableData" :header-cell-style="{background:'rgba(250, 250, 250, 1)',color:'rgba(0, 14, 72, 1)',borderWidth:'0'}">
                    <el-table-column align="left" :label="$t('explorer.recentBlocks.blockHeight')" min-width="150">
                      <template #default="scope">
                        <div class="link-primary" style="cursor: pointer;" @click="onBlockClick(scope.row.height)">{{ scope.row.height }}</div>
                      </template>
                    </el-table-column>
                    <el-table-column align="left" :label="$t('explorer.recentBlocks.epoch')" min-width="100" prop="epoch" />
                    <el-table-column align="left" :label="$t('explorer.recentBlocks.proofTarget')" min-width="150" prop="proof_target" />
                    <el-table-column align="left" :label="$t('explorer.recentBlocks.coinbaseTarget')" min-width="170" prop="target" />
                    <el-table-column align="left" :label="$t('explorer.recentBlocks.rewards')" min-width="120" prop="reward" />
                    <el-table-column align="left" :label="$t('explorer.recentBlocks.solutions')" min-width="150" prop="solutions" />
                    <el-table-column align="left" :label="$t('explorer.recentBlocks.date')" min-width="150" prop="times" />
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
          <!-- 排行榜 -->
          <div class="detail" v-if="!showOverview">
            <div class="alert alert-danger-alt alert-dismissible fade show animated" data-animate="fadeInUp" data-delay="1">
              {{ $t("explorer.alert") }}
            </div>

            <div class="hada_progress_bar bg-light container p-4 pt-5 hada_div animated" data-animate="fadeInUp" data-delay="1">
              <div class="progress-wrap">
                <div class="progress-title align-items-center">
                  <div class="d-flex align-items-center">
                    {{ $t("explorer.progressbar_title") }}
                    <p>&nbsp;{{ total_credit }} / {{ tem }}</p>
                  </div>
                </div>
                <el-progress :text-inside="true" :stroke-width="20" :percentage="percentage" />
              </div>
            </div>

            <div class="tables animated mt-3" data-animate="fadeInUp" data-delay="1">
              <div class="container bg-light hada_div">
                <div class="row">
                  <el-table :data="tableDataRank" :header-cell-style="{background:'rgba(250, 250, 250, 1)',color:'rgba(0, 14, 72, 1)',borderWidth:'0'}">
                    <el-table-column align="left" :label="$t('explorer.rank')" min-width="50" prop="rank" />
                    <el-table-column align="left" :label="$t('explorer.address')" min-width="250">
                      <template #default="scope">
                        <div class="link-primary" style="cursor: pointer;" @click="onAddressClick(scope.row.address)">{{ scope.row.address }}</div>
                      </template>
                    </el-table-column>
                    <el-table-column align="left" :label="$t('explorer.TotalIncentiveReward')" min-width="150" prop="total_reward" />
                  </el-table>
                  <div class="gva-pagination">
                    <el-pagination
                      :current-page="pageRank"
                      :page-size="pageSizeRank"
                      :page-sizes="[10, 30, 50, 100]"
                      :total="totalRank"
                      layout="total, sizes, prev, pager, next, jumper"
                      @current-change="handleCurrentChangeAll"
                      @size-change="handleSizeChangeAll"
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
  import { nextTick, onMounted, onUpdated, onUnmounted, ref, reactive, shallowRef, watch } from "vue";
  import { dateChangeFormat } from "../../utils/dateFormatter.js";
  import { useRouter, useRoute } from "vue-router";
  import { getRecentBlocksOverview, getRecentBlocks, getRankList } from "../../api/explorer";
  import { getAddressList } from "../../api/address";
  import { getBlockList } from "../../api/block";
  import { getSpeed } from "../../api/getcomputing";
  import { ElMessage } from "element-plus";
  import i18n from "../../locales";
import { get } from "lodash";

  const route = useRoute(); //路由参数
  const router = useRouter(); //跳转路由

  // 当前语言
  const lang = ref("");
  onMounted(async() => {
    // 获取localStorage里的语言
    lang.value = localStorage.getItem("lang") || "zh-TW";

    getBlocksOverview();
    getTableData();
    getTableDataRank();
    getComputing();
  });

  onUpdated(async() => {
    NioApp.Util.scrollAnimation();
  });

  const walletFormRef = ref();
  const walletForm = reactive({
    inputValue: "",
  });

  // 顶部数据概览
  const blockHeight = ref(0);
  const epoch = ref(0);
  const proofTarget = ref(0);
  const coinbaseTarget = ref(0);
  const computingTime = ref('')
  const computing = ref(0);
  const date = ref('');

  // 顶部数据排行榜
  const total_credit = ref(0);
  const tem = ref(0);
  const percentage = ref(0);

  // 总览table
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

  const onWalletAddressSearch = (formEl) => {
    console.log("用户输入:", walletForm.inputValue);
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

  // 顶部数据
  const getBlocksOverview = async () => {
    const table = await getRecentBlocksOverview();
    console.log(table);
    if(table.code == 0){
      blockHeight.value = table.data.height;
      epoch.value = table.data.epoch_1 + ' ' + table.data.epoch_2;
      proofTarget.value = table.data.proof_target;
      coinbaseTarget.value = table.data.coinbase_target;
      // computing.value = table.data.speed;
      date.value = table.data.times;
    }
  };


  // RecentBlocks数据
  const getTableData = async () => {
    const table = await getRecentBlocks({page: page.value, pageSize: pageSize.value});
    console.log(table);
    if(table.code == 0){
      if (table.data.list !== null) {
        table.data.list.forEach((data) => {
          data.epoch = data.epoch_1+ ' ' + data.epoch_2;
        });
        tableData.value = table.data.list;
        page.value = table.data.page;
        pageSize.value = table.data.pageSize;
        total.value = table.data.total;
      }
    }
  };


  // 控制 概览/排行榜 显隐
  const showOverview = ref(true);

  // rank table
  const pageRank = ref(1);
  const totalRank = ref(0);
  const pageSizeRank = ref(10);

  // 分页
  const handleSizeChangeAll = (val) => {
    pageSizeRank.value = val;
    getTableDataRank();
  };
  const handleCurrentChangeAll = (val) => {
    pageRank.value = val;
    getTableDataRank();
  };

  // 设备data
  const tableDataRank = ref([]);

  // 排行榜数据
  const getTableDataRank = async () => {
    const table = await getRankList({page: pageRank.value, pageSize: pageSizeRank.value});
    if (table.code == 0) {
      console.log(table);
      total_credit.value = table.data.list.PercentData.total_credit;
      tem.value = table.data.list.PercentData.tem;
      percentage.value = Number(table.data.list.PercentData.percentage.replace('%',''));
      if (table.data.list.RankListData !== null) {
        tableDataRank.value = table.data.list.RankListData;
        pageRank.value = table.data.page;
        pageSizeRank.value = table.data.pageSize;
        totalRank.value = table.data.total;
      }
    }
  };

  // 跳转到address
  const onAddressClick = (address) => {
    console.log("address");
    router.push({
      path: "/aleo_address",
      name: "aleo_address",
      params: {
        address: address,
      },
    });
  };

  // 跳转到block
  const onBlockClick = (height) => {
    router.push({
      path: "/aleo_block",
      name: "aleo_block",
      params: {
        block: height,
      },
    });
  };

  // 判断钱包地址是否正确并跳转
  const judgeAddress = async () => {
    const table = await getAddressList({address: walletForm.inputValue, page: 1, pageSize: 10});
    if (table.code == 0) {
      onAddressClick(table.data.list.address);
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

  // 是否显示c/s单位（当算力显示为not enough solutions during last day时，不显示单位）
  const showUnit = ref(true);

  // 获取算力
  const getComputing = async() => {
    const table = await getSpeed({address: ''});
    if(table.code == 0){
      computing.value = table.data.Speed;
      computingTime.value = table.data.TimeInterval;
    }
    if(table.code == 7 && table.msg == 'not enough solutions during last day') {
      computing.value = 'not enough solutions during last day';
      showUnit.value = false;
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
          max-width: 1300px;
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
              height: 2.5rem;
              // min-width: 50px;
              margin: 0.25rem;
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

        .alert {
          margin-top: 1rem;
          padding: 0.75rem 3.25rem 0.75rem 2.25rem;
          color: rgba(83, 189, 83, 1);
        }

        .alert-danger-alt {
          background: rgba(145, 216, 145, 0.15);
        }

        .alert-danger-alt .close {
          background: none;
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
  .information {
    // 总览顶部div背景色
    .bg-light {
      background-color: #fefefe !important;
    }
  }

  // 顶部div边框
  .hada_div {
    border: 0.06rem solid #e9ebf8;
  }

  // 总览顶部div 标题
  .hada_div_title {
    color: #67687c;
  }

  // 总览顶部div num
  .hada_div_num {
    color: #000e48;
    font-weight: 500;
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    width: -webkit-fill-available;
  }

  .time_show{
    overflow: visible;
    text-overflow: unset;
  }

  // 算力单位的样式
  .computing_unit{
    display: inline-block;
    color: rgba(103, 104, 124, 1);
    font-weight: 100;
    font-size: 1rem;
  }

  // 总览table 标题
  .hada_table_title {
    font-size: 1.13rem;
    font-weight: 500;
    color: #000e48;
    line-height: 1.56rem;
  }

  // 明细顶部进度条
  :deep(.el-progress-bar__outer) {
    border-radius: 0;
  }

  :deep(.el-progress-bar__inner){
    border-radius: 0;
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

  // 顶部数据溢出，小数点显示
  // :deep(.pt-3){
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  // }

  // 修改概览和明细active样式
  a.active {
    color: rgba(0, 14, 72, 1) !important;
    border-bottom-color: rgba(0, 135, 255, 1) !important;
    // border-width: 2px !important;
  }
  a:hover {
    color: rgba(0, 14, 72, 1) !important;
    border-bottom-color: rgba(0, 135, 255, 1) !important;
    // border-width: 2px !important;
  }
</style>
