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
          <p>{{ $t("explorer.Block.Block") }}&nbsp;&nbsp;{{ block }}</p>
        </div>

        <div class="information">
          <!-- 总览 -->
          <div class="overview mt-3">
            <div class="head animated" data-animate="fadeInUp" data-delay="1">
              <div class="container bg-light hada_div">
                <div class="row hada_row_bg">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Block.Height") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 pe-5 pt-4">
                    <h6 class="hada_div_table text-end">{{ blockHeight }}</h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Block.Epoch") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 pe-5 pt-4">
                    <h6 class="hada_div_table text-end">{{ epoch_1 }} {{ epoch_2 }}</h6>
                  </div>
                </div>
                <div class="row hada_row_bg">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Block.Timestamp") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 pe-5 pt-4">
                    <h6 class="hada_div_table text-end">{{ timeStamp }}</h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Block.Coinbase_target") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 pe-5 pt-4">
                    <h6 class="hada_div_table text-end">{{ coinbaseTarget }}</h6>
                  </div>
                </div>
                <div class="row hada_row_bg">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Block.Proof_target") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 pe-5 pt-4">
                    <h6 class="hada_div_table text-end">{{ proofTarget }}</h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Block.Coinbase_reward") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 pe-5 pt-4">
                    <h6 class="hada_div_table text-end">{{ coinbaseReward }}</h6>
                  </div>
                </div>
                <div class="row hada_row_bg">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Block.Block_hash") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 pe-5 pt-4 px-5">
                    <h6 class="hada_div_table text-end">
                      <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="blockHash"
                        placement="top-start"
                      >{{ blockHash }}
                      </el-tooltip>
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Block.Previous_block_hash") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 pe-5 pt-4 px-5">
                    <h6 class="hada_div_table text-end link-primary" style="cursor: pointer;" @click="getPrehash">
                      <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="previousBlockHash"
                        placement="top-start"
                      >{{ previousBlockHash }}
                      </el-tooltip>
                    </h6>
                  </div>
                </div>
                <div class="row hada_row_bg">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Block.Previous_state_root") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 pe-5 pt-4 px-5">
                    <h6 class="hada_div_table text-end">
                      <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="previousStateRoot"
                        placement="top-start"
                      >{{ previousStateRoot }}
                      </el-tooltip>
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Block.Transactions_root") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 pe-5 pt-4 px-5">
                    <h6 class="hada_div_table text-end">
                      <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="transactionsRoot"
                        placement="top-start"
                      >{{ transactionsRoot }}
                      </el-tooltip>
                    </h6>
                  </div>
                </div>
                <div class="row hada_row_bg">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_table">{{ $t("explorer.Block.Coinbase_accumulator") }}</h6>
                  </div>
                  <div class="col-lg-6 mb-4 pe-5 pt-4 px-5">
                    <h6 class="hada_div_table text-end">
                      <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="coinbaseAccumulator"
                        placement="top-start"
                      >{{ coinbaseAccumulator }}
                      </el-tooltip>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="tables animated" data-animate="fadeInUp" data-delay="1">
              <div class="container bg-light hada_div" style="padding: 0;">
                <div class="row" style="padding: 0 15px;">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_title">{{ $t("explorer.Block.Transactions") }}</h6>
                  </div>
                </div>
                <div class="gva-table-box">
                  <el-table :data="tableDataTransactions" :header-cell-style="{background:'rgba(250, 250, 250, 1)',color:'rgba(0, 14, 72, 1)',borderWidth:'0'}">
                    <el-table-column align="left" :label="$t('explorer.Block.Transaction_ID')" min-width="120" prop="transaction_id">
                      <template #default="scope">
                        <div @click="onBlockClicktransaction_id(scope.row.transaction_id)">{{ scope.row.transaction_id }}</div>
                      </template>
                    </el-table-column>
                    <el-table-column align="left" :label="$t('explorer.Block.Transactions_Type')" min-width="100" prop="type" />
                    <el-table-column align="left" :label="$t('explorer.Block.Transactions_transactions')" min-width="100">
                      <template #default="scope">
                        <div>1</div>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </div>
            </div>

            <div class="header-block animated" data-animate="fadeInUp" data-delay="1.4" v-show="showCoinbaseSolutions">
              <div class="block-title">{{ $t("explorer.Block.Coinbase_solutions") }}</div>
              <div class="block-cont">
                <div class="left">{{ $t("explorer.Block.Puzzle_proof") }}</div>
                <div class="right">
                  <el-tooltip
                    class="box-item"
                    effect="dark"
                    :content="proof_x"
                    placement="top-start"
                  >
                    <div class="xdiv">x:{{ proof_x }}</div>
                  </el-tooltip>
                  <div class="ydiv">y:{{ proof_y_positive }}</div>
                </div>
              </div>
            </div>
            <div class="tables animated" data-animate="fadeInUp" data-delay="1.4" v-show="showCoinbaseSolutions">
              <div class="container bg-light hada_div" style="padding: 0;">
                <div class="gva-table-box">
                  <el-table :data="tableData" :header-cell-style="{background:'rgba(250, 250, 250, 1)',color:'rgba(0, 14, 72, 1)',borderWidth:'0'}">
                    <el-table-column align="left" :label="$t('explorer.Block.Address')" min-width="120" prop="address" >
                      <template #default="scope">
                        <div class="link-primary" style="cursor: pointer;" @click="onAddressClick(scope.row.address)">{{ scope.row.address }}</div>
                      </template>
                    </el-table-column>
                    <el-table-column align="left" :label="$t('explorer.Block.Nonce')" min-width="100" prop="nonce" />
                    <el-table-column align="left" :label="$t('explorer.Block.Commitment')" min-width="100" prop="commitment" show-overflow-tooltip/>
                    <el-table-column align="left" :label="$t('explorer.Block.Target_Total')" min-width="100">
                      <template #default="scope">
                        <div>{{ scope.row.target }} / {{ scope.row.target_sum }}</div>
                      </template>
                    </el-table-column>
                    <el-table-column align="left" :label="$t('explorer.Block.Reward')" min-width="100" prop="reward" />
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
  import { nextTick, onMounted, onUpdated, onUnmounted, ref, reactive, shallowRef, watch } from "vue";
  import { dateChangeFormat } from "../../utils/dateFormatter.js";
  import { useRouter, useRoute } from "vue-router";
  import { getBlockList, getPreBlockDetails } from "../../api/block";
  import { getAddressList } from "../../api/address";
  import { ElMessage } from "element-plus";
  import i18n from "../../locales";

  const route = useRoute(); //路由参数
  const router = useRouter(); //跳转路由

  const block = ref("");

  // 顶部块的数据
  const blockHeight = ref(0);
  const epoch_1 = ref(0);
  const epoch_2 = ref(0);
  const timeStamp = ref(0);
  const coinbaseTarget = ref(0);
  const proofTarget = ref(0);
  const coinbaseReward = ref(0);
  const blockHash = ref(0);
  const previousBlockHash = ref(0);
  const previousStateRoot = ref(0);
  const transactionsRoot = ref(0);
  const coinbaseAccumulator = ref(0);

  // proof值
  const proof_x = ref('');
  const proof_y_positive = ref('');

  // 是否显示solutions
  const showCoinbaseSolutions = ref(true);
  // 当前语言
  const lang = ref("");
  onMounted(() => {
    // 获取localStorage里的语言
    lang.value = localStorage.getItem("lang") || "zh-TW";
    block.value = route.params.block;

    getTableData();
  });
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

  // 总览table
  const page = ref(1);
  const total = ref(0);
  const pageSize = ref(10);
  const tableData = ref([]);
  const tableDataTransactions = ref([]);

  const getTableData = async () => {
    const table = await getBlockList({page: page.value, pageSize: pageSize.value, height: block.value});
    if (table.code == 0) {
      if(table.data.total == 0){
        showCoinbaseSolutions.value = false;
      }
      block.value = table.data.list.BlockData.height;
      blockHeight.value = table.data.list.BlockData.height;
      epoch_1.value = table.data.list.BlockData.epoch_1;
      epoch_2.value = table.data.list.BlockData.epoch_2;
      timeStamp.value = table.data.list.BlockData.times;
      coinbaseTarget.value = table.data.list.BlockData.coinbase_target;
      proofTarget.value = table.data.list.BlockData.proof_target;
      coinbaseReward.value = table.data.list.BlockData.coinbase_reward;
      blockHash.value = table.data.list.BlockData.block_hash;
      previousBlockHash.value = table.data.list.BlockData.previous_hash;
      previousStateRoot.value = table.data.list.BlockData.previous_state_root;
      transactionsRoot.value = table.data.list.BlockData.transactions_root;
      coinbaseAccumulator.value = table.data.list.BlockData.coinbase_accumulator_point;
      tableDataTransactions.value = [];
      tableDataTransactions.value.push(table.data.list.BlockData);
      proof_x.value = table.data.list.BlockData.proof_x;
      proof_y_positive.value = table.data.list.BlockData.proof_y_positive == "false" ? 'Not implemented' : table.data.list.BlockData.proof_y_positive;

      if(table.data.list.SolutionsData !== null){
        tableData.value = table.data.list.SolutionsData;
        page.value = table.data.page;
        pageSize.value = table.data.pageSize;
        total.value = table.data.total;
      }

      if(table.data.total != 0){
        showCoinbaseSolutions.value = true;
        console.log(showCoinbaseSolutions.value);
      }
    }
  };

  // 分页
  const handleSizeChange = (val) => {
    pageSize.value = val;
    getTableData();
  };
  const handleCurrentChange = (val) => {
    page.value = val;
    getTableData();
  };

  // 点击transaction_id
  const onBlockClicktransaction_id = (id) => {
    console.log("transaction_id");
  }

  // 点击address
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

  // getPreBlockDetails数据
  const getPrehash = async() => {
    const table = await getPreBlockDetails({page: 1, pageSize: 10, previousHash: previousBlockHash.value});
      if(table.data.total == 0){
        showCoinbaseSolutions.value = false;
      }
      block.value = table.data.list.BlockData.height;
      blockHeight.value = table.data.list.BlockData.height;
      epoch_1.value = table.data.list.BlockData.epoch_1;
      epoch_2.value = table.data.list.BlockData.epoch_2;
      timeStamp.value = table.data.list.BlockData.times;
      coinbaseTarget.value = table.data.list.BlockData.coinbase_target;
      proofTarget.value = table.data.list.BlockData.proof_target;
      coinbaseReward.value = table.data.list.BlockData.coinbase_reward;
      blockHash.value = table.data.list.BlockData.block_hash;
      previousBlockHash.value = table.data.list.BlockData.previous_hash;
      previousStateRoot.value = table.data.list.BlockData.previous_state_root;
      transactionsRoot.value = table.data.list.BlockData.transactions_root;
      coinbaseAccumulator.value = table.data.list.BlockData.coinbase_accumulator_point;
      tableDataTransactions.value = [];
      tableDataTransactions.value.push(table.data.list.BlockData);
      proof_x.value = table.data.list.BlockData.proof_x;
      proof_y_positive.value = table.data.list.BlockData.proof_y_positive == "false" ? 'Not implemented' : table.data.list.BlockData.proof_y_positive;
      if(table.data.list.SolutionsData !== null){
        tableData.value = table.data.list.SolutionsData;
        page.value = table.data.page;
        pageSize.value = table.data.pageSize;
        total.value = table.data.total;
      }
      if(table.data.total != 0){
        showCoinbaseSolutions.value = true;
        console.log(showCoinbaseSolutions.value);
      }
  }

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
    const table = await getBlockList({page: 1, pageSize: 10, height: walletForm.inputValue});
    if (table.code == 0) {
      if(table.data.total == 0){
        showCoinbaseSolutions.value = false;
      }
      block.value = table.data.list.BlockData.height;
      blockHeight.value = table.data.list.BlockData.height;
      epoch_1.value = table.data.list.BlockData.epoch_1;
      epoch_2.value = table.data.list.BlockData.epoch_2;
      timeStamp.value = table.data.list.BlockData.times;
      coinbaseTarget.value = table.data.list.BlockData.coinbase_target;
      proofTarget.value = table.data.list.BlockData.proof_target;
      coinbaseReward.value = table.data.list.BlockData.coinbase_reward;
      blockHash.value = table.data.list.BlockData.block_hash;
      previousBlockHash.value = table.data.list.BlockData.previous_hash;
      previousStateRoot.value = table.data.list.BlockData.previous_state_root;
      transactionsRoot.value = table.data.list.BlockData.transactions_root;
      coinbaseAccumulator.value = table.data.list.BlockData.coinbase_accumulator_point;
      tableDataTransactions.value = [];
      tableDataTransactions.value.push(table.data.list.BlockData);
      proof_x.value = table.data.list.BlockData.proof_x;
      proof_y_positive.value = table.data.list.BlockData.proof_y_positive == "false" ? 'Not implemented' : table.data.list.BlockData.proof_y_positive;
      if(table.data.list.SolutionsData !== null){
        tableData.value = table.data.list.SolutionsData;
        page.value = table.data.page;
        pageSize.value = table.data.pageSize;
        total.value = table.data.total;
      }
      if(table.data.total != 0){
        showCoinbaseSolutions.value = true;
        console.log(showCoinbaseSolutions.value);
      }
    } else {
      ElMessage({
        type: "warning",
        message: i18n.global.t("common.find_not_block"),
      });
    }
  };
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
  }

  .text-end {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // 总览顶部div 内容
  .hada_row_bg {
    background-color: #f6f8fa;
  }

  // 总览顶部header样式
  .header-block {
    width: 100%;
    height: 150px;
    background-color: rgba(246, 248, 250, 1);
    padding: 10px;
    margin-top: 20px;
    .block-title {
      color: rgba(0, 14, 72, 1);
      font-size: 1.13rem;
      font-weight: 500;
    }
    .block-cont {
      width: 100%;
      display: flex;
      height: 100px;
      .left {
        width: 20%;
        color: rgba(103, 104, 124, 1);
        font-size: 1rem;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .right {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgba(103, 104, 124, 1);
        font-size: 0.875rem;
        .xdiv,
        .ydiv {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  // 顶部数据展示去除padding
  @media (max-width: 767px) {
    .container {
      padding-left: calc(var(--bs-gutter-x) * .5);
      padding-right: calc(var(--bs-gutter-x) * .5);
    }
  }
  

   // table表格样式
  //  :deep(.el-table__header) {
  //   table-layout: auto;
  //   padding: 0 50px;
  //   background: rgba(250, 250, 250, 1);
  // }
  // :deep(.el-table__empty-block) {
  //   padding: 0 50px;
  // }
</style>
