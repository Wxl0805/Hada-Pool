<template>
  <div class="main nk-body body-wider bg-light mode-onepage">
    <!-- main-content -->
    <div class="content">
      <div class="bg">
        <!-- Banner @s -->
        <div class="bg-header">
          <div class="switch-btn animated" data-animate="fadeInUp" data-delay="1"><el-switch v-model="reloadBtn" :inactive-text="reloadText" /></div>
          <div class="cpn-action">
            <el-form ref="walletFormRef" :model="walletForm" label-width="0px" class="nk-form-submit animated" data-animate="fadeInUp" data-delay="1">
              <el-form-item prop="address">
                <div class="hada_wallet_input animated" data-animate="fadeInUp" data-delay="1">
                  <div class="field-inline field-split bg-white shadow-soft">
                    <div class="field-wrap d-flex align-items-center">
                      <!-- <label class="label-inline mb-0 d-none d-sm-block"><i class="mt-1 icon fas fa-envelope"></i></label> -->
                      <input v-model="walletForm.address" class="input-solid input-solid-lg" type="text" :placeholder="$t('account.address.input_placeholder')" />
                    </div>
                    <div class="submit-wrap">
                      <button type="button" class="btn btn-primary hada_search_btn" @click="onWalletAddressSearch1to(walletFormRef)">{{ $t("account.address.submit_btn") }}</button>
                    </div>
                  </div>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="header-banner">
          <div class="nk-banner">
            <div class="banner banner-page">
              <div class="banner-wrap">
                <div class="container">
                  <div class="row align-items-center justify-content-center">
                    <div class="col-lg-12 col-sm-12 text-center text-lg-start">
                      <div class="banner-caption cpn tc-light hada_banner_caption">
                        <div class="cpn-head hada_head">
                          <div class="address-bg animated" data-animate="fadeInUp" data-delay="1">
                            <img src="../../assets/images/aleo.png" alt="" class="address-img" />
                            <div class="address-right">
                              <span class="address-title">{{ $t("account.address.walletAddress") }}</span>
                              <div class="address-cont">
                                <p class="address-text">{{ walletAddress1to }}</p>
                                <div class="address-copy" :data-clipboard-text="walletAddress" @click="copy"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- .col -->
                  </div>
                  <!-- .row -->
                </div>
              </div>
            </div>
          </div>
          <!-- .nk-banner -->
          <!-- <div class="nk-ovm mask-a shape-a"></div> -->
          <!-- Place Particle Js -->
          <!-- <div id="particles-bg" class="particles-container particles-bg"></div> -->
        </div>

        <div class="information">
          <div class="tab-header animated" data-animate="fadeInUp" data-delay="1">
            <div class="tab">
              <ul class="nav tab-nav tab-nav-s2 tab-nav-center">
                <li>
                  <a class="active" data-bs-toggle="tab" @click="showOverview = true">{{ $t("account.address.Overview.overview") }}</a>
                </li>
                <li>
                  <a data-bs-toggle="tab" @click="showOverview = false">{{ $t("account.address.Detail.detail") }}</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 总览 -->
          <div class="overview" v-if="showOverview">
            <div class="head animated" data-animate="fadeInUp" data-delay="1">
              <div class="content">
                <div class="box1">
                  <div style="display: flex; align-items: center;">
                    {{ $t("account.address.Overview.onlineDevices") }}
                    <el-tooltip
                      class="box-item"
                      effect="dark"
                      :content="$t('account.address.Overview.icon_tooltip1')"
                      placement="top-start"
                    >
                      <div class="box-icon"></div>
                    </el-tooltip>
                  </div>
                  <p class="num" style="display: flex;justify-content:space-between;"><span>{{ machineCount1to }}</span><span style="color:rgba(82, 196, 26, 1);">{{ machineCountOnline1to }}</span><span style="color:rgba(249, 0, 0, 1);">{{ machineCountOffline1to }}</span></p>
                </div>
                <!-- <div class="box2">
                  <div style="display: flex; align-items: center;">
                    {{ $t("account.address.Overview.graphicsCards") }}
                    <el-tooltip
                      class="box-item"
                      effect="dark"
                      :content="$t('account.address.Overview.icon_tooltip2')"
                      placement="top-start"
                    >
                      <div class="box-icon"></div>
                    </el-tooltip>
                  </div>
                  <p class="num" style="display: flex;justify-content:space-between;"><span>{{ graphicsCards }}</span><span style="color:rgba(82, 196, 26, 1);">{{ onlinegraphicsCards }}</span><span style="color:rgba(250, 128, 1, 1);">{{ errorgraphicsCards }}</span></p>
                </div> -->
                <div class="box3">
                  <div style="display: flex; align-items: center;">
                    {{ $t("account.address.Overview.computingPower") }}
                    <el-tooltip
                      class="box-item"
                      effect="dark"
                      :content="$t('account.address.Overview.icon_tooltip3')"
                      placement="top-start"
                    >
                      <div class="box-icon"></div>
                    </el-tooltip>
                  </div>
                  <p class="num">{{ totalSpeed1to.toFixed(2) }}</p>
                </div>
                <div class="box4">
                  <div style="display: flex; align-items: center;">
                    {{ $t("account.address.Overview.totalRewards") }}
                    <el-tooltip
                      class="box-item"
                      effect="dark"
                      :content="$t('account.address.Overview.icon_tooltip4')"
                      placement="top-start"
                    >
                      <div class="box-icon"></div>
                    </el-tooltip>
                  </div>
                  <p class="num">{{ totalRewards }}</p>
                </div>
              </div>
            </div>

            <div class="echart animated" data-animate="fadeInUp" data-delay="1">
              <div class="container bg-light hada_div">
                <!-- <div class="header-title">Rewards</div> -->
                <div class="row" style="border-bottom: 1px solid #dcdfe6;">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_title">{{ $t("account.address.Overview.Rewards_title") }}</h6>
                  </div>
                </div>
                <div class="day_machine echart">
                  <div ref="echartOverview" class="dashboard-line" />
                </div>
              </div>
            </div>

            <div class="alert alert-danger-alt alert-dismissible fade show animated" data-animate="fadeInUp" data-delay="1">
              {{ $t("account.address.Overview.alert")
              }}<button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="tables animated" data-animate="fadeInUp" data-delay="1">
              <div class="container bg-light hada_div" style="padding: 0;">
                <div class="row" style="padding: 0 15px;">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_title">{{ $t("account.address.Overview.Solutions_title") }}</h6>
                  </div>
                </div>
                <div class="gva-table-box">
                  <el-table :data="solutionsTableData" :header-cell-style="{background:'rgba(250, 250, 250, 1)',color:'rgba(0, 14, 72, 1)',borderWidth:'0'}">
                    <el-table-column align="left" :label="$t('account.address.Overview.submitTime')" min-width="150" prop="Times" />
                    <el-table-column align="left" :label="$t('account.address.Overview.commitment')" min-width="200">
                      <template #default="scope">
                        <div class="table-tooltip"><el-tooltip effect="dark" :content="scope.row.Commitment" placement="top-start"><div class="table-tooltip-text">{{ scope.row.Commitment }}</div></el-tooltip></div>
                      </template>
                    </el-table-column>
                    <el-table-column align="left" :label="$t('account.address.Overview.nonce')" min-width="100" prop="Nonce" />
                    <el-table-column align="left" :label="$t('account.address.Overview.blockHeight')" min-width="150" prop="Height" />
                    <el-table-column align="left" :label="$t('account.address.Overview.Epoch')" min-width="120" >
                      <template #default="scope">
                        <div><div style="font-weight: bold;display: inline-block;">{{ scope.row.Epoch1 }}</div> {{ scope.row.Epoch2 }}</div>
                      </template>
                    </el-table-column>
                    <el-table-column align="left" :label="$t('account.address.Overview.target')" min-width="150" prop="TargetSum" />
                    <el-table-column align="left" :label="$t('account.address.Overview.Rewards')" min-width="120" prop="Reward" />
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
          <!-- 明细 -->
          <div class="detail" v-if="!showOverview">
            <div class="tables animated" data-animate="fadeInUp" data-delay="1">
              <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane :label="labelAll" name="first">
                  <div class="gva-table-box">
                    <el-table :data="tableDataPro1to.slice((pageAll-1)*pageSizeAll,pageAll*pageSizeAll)" :header-cell-style="{background:'rgba(250, 250, 250, 1)',color:'rgba(0, 14, 72, 1)',borderWidth:'0'}">
                      <!--                      <el-table-column align="left" label="最近心跳时间" min-width="150" prop="last_heartbeat" />-->
                      <el-table-column align="left" label="内网IP" min-width="100" prop="inner_ip" />
                      <el-table-column align="left" label="算力" min-width="100" prop="speed" />
                      <el-table-column align="left" label="地址替换状态" min-width="100">
                        <template #default="scope">
                          <div style="display: inline-block; ">
                            <p v-if="scope.row.replace_status == 1" style="background-color: rgba(82, 196, 26, 0.10);padding: 5px;color: rgba(82, 196, 26, 1);margin: 2px 10px 10px 0;">是</p>
                            <p v-if="scope.row.replace_status == 0" style="background-color: rgba(249, 0, 0, 0.10);padding: 5px;color: rgba(249, 0, 0, 1);margin: 2px 10px 10px 0;">否</p>
                          </div>
                        </template>
                      </el-table-column>
                      <el-table-column align="left" label="机器状态" min-width="100">
                        <template #default="scope">
                          <div style="display: inline-block; ">
                            <p v-if="scope.row.machine_status == 1" style="background-color: rgba(82, 196, 26, 0.10);padding: 5px;color: rgba(82, 196, 26, 1);margin: 2px 10px 10px 0;">在线</p>
                            <p v-if="scope.row.machine_status == 0" style="background-color: rgba(249, 0, 0, 0.10);padding: 5px;color: rgba(249, 0, 0, 1);margin: 2px 10px 10px 0;">离线</p>
                          </div>
                        </template>
                      </el-table-column>
                      <el-table-column align="left" label="显卡数量" min-width="100" prop="gpu_count" />
                      <el-table-column align="left" label="显卡详情" min-width="250">
                        <template #default="scope">
                          <div v-for="(item, index) in (scope.row.gpu_detail)" style="display: inline-block; ">
                            <p style="background-color: rgba(82, 196, 26, 0.10);padding: 5px;color: rgba(82, 196, 26, 1);margin: 2px 10px 10px 0;">{{item.model.replace("NVIDIA GeForce ","")}}</p>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                    <div class="gva-pagination">
                      <el-pagination
                          :current-page="pageAll"
                          :page-size="pageSizeAll"
                          :page-sizes="[10, 30, 50, 100]"
                          :total="totalAll"
                          layout="total, sizes, prev, pager, next, jumper"
                          @current-change="handleCurrentChangeAll"
                          @size-change="handleSizeChangeAll"
                      />
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane :label="labelOnline" name="second">
                  <div class="gva-table-box">
                    <el-table :data="tableDataPro1to.slice((pageAll-1)*pageSizeAll,pageAll*pageSizeAll)" :header-cell-style="{background:'rgba(250, 250, 250, 1)',color:'rgba(0, 14, 72, 1)',borderWidth:'0'}">
                      <!--                      <el-table-column align="left" label="最近心跳时间" min-width="150" prop="last_heartbeat" />-->
                      <el-table-column align="left" label="内网IP" min-width="100" prop="inner_ip" />
                      <el-table-column align="left" label="算力" min-width="100" prop="speed" />
                      <el-table-column align="left" label="地址替换状态" min-width="100">
                        <template #default="scope">
                          <div style="display: inline-block; ">
                            <p v-if="scope.row.replace_status == 1" style="background-color: rgba(82, 196, 26, 0.10);padding: 5px;color: rgba(82, 196, 26, 1);margin: 2px 10px 10px 0;">是</p>
                            <p v-if="scope.row.replace_status == 0" style="background-color: rgba(249, 0, 0, 0.10);padding: 5px;color: rgba(249, 0, 0, 1);margin: 2px 10px 10px 0;">否</p>
                          </div>
                        </template>
                      </el-table-column>
                      <el-table-column align="left" label="机器状态" min-width="100">
                        <template #default="scope">
                          <div style="display: inline-block; ">
                            <p v-if="scope.row.machine_status == 1" style="background-color: rgba(82, 196, 26, 0.10);padding: 5px;color: rgba(82, 196, 26, 1);margin: 2px 10px 10px 0;">在线</p>
                            <p v-if="scope.row.machine_status == 0" style="background-color: rgba(249, 0, 0, 0.10);padding: 5px;color: rgba(249, 0, 0, 1);margin: 2px 10px 10px 0;">离线</p>
                          </div>
                        </template>
                      </el-table-column>
                      <el-table-column align="left" label="显卡数量" min-width="100" prop="gpu_count" />
                      <el-table-column align="left" label="显卡详情" min-width="250">
                        <template #default="scope">
                          <div v-for="(item, index) in (scope.row.gpu_detail)" style="display: inline-block; ">
                            <p style="background-color: rgba(82, 196, 26, 0.10);padding: 5px;color: rgba(82, 196, 26, 1);margin: 2px 10px 10px 0;">{{item.model.replace("NVIDIA GeForce ","")}}</p>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                    <div class="gva-pagination">
                      <el-pagination
                          :current-page="pageAll"
                          :page-size="pageSizeAll"
                          :page-sizes="[10, 30, 50, 100]"
                          :total="totalAll"
                          layout="total, sizes, prev, pager, next, jumper"
                          @current-change="handleCurrentChangeAll"
                          @size-change="handleSizeChangeAll"
                      />
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane :label="labelOffline" name="third">
                  <div class="gva-table-box">
                    <el-table :data="tableDataPro1to.slice((pageAll-1)*pageSizeAll,pageAll*pageSizeAll)" :header-cell-style="{background:'rgba(250, 250, 250, 1)',color:'rgba(0, 14, 72, 1)',borderWidth:'0'}">
                      <!--                      <el-table-column align="left" label="最近心跳时间" min-width="150" prop="last_heartbeat" />-->
                      <el-table-column align="left" label="内网IP" min-width="100" prop="inner_ip" />
                      <el-table-column align="left" label="算力" min-width="100" prop="speed" />
                      <el-table-column align="left" label="地址替换状态" min-width="100">
                        <template #default="scope">
                          <div style="display: inline-block; ">
                            <p v-if="scope.row.replace_status == 1" style="background-color: rgba(82, 196, 26, 0.10);padding: 5px;color: rgba(82, 196, 26, 1);margin: 2px 10px 10px 0;">是</p>
                            <p v-if="scope.row.replace_status == 0" style="background-color: rgba(249, 0, 0, 0.10);padding: 5px;color: rgba(249, 0, 0, 1);margin: 2px 10px 10px 0;">否</p>
                          </div>
                        </template>
                      </el-table-column>
                      <el-table-column align="left" label="机器状态" min-width="100">
                        <template #default="scope">
                          <div style="display: inline-block; ">
                            <p v-if="scope.row.machine_status == 1" style="background-color: rgba(82, 196, 26, 0.10);padding: 5px;color: rgba(82, 196, 26, 1);margin: 2px 10px 10px 0;">在线</p>
                            <p v-if="scope.row.machine_status == 0" style="background-color: rgba(249, 0, 0, 0.10);padding: 5px;color: rgba(249, 0, 0, 1);margin: 2px 10px 10px 0;">离线</p>
                          </div>
                        </template>
                      </el-table-column>
                      <el-table-column align="left" label="显卡数量" min-width="100" prop="gpu_count" />
                      <el-table-column align="left" label="显卡详情" min-width="250">
                        <template #default="scope">
                          <div v-for="(item, index) in (scope.row.gpu_detail)" style="display: inline-block; ">
                            <p style="background-color: rgba(82, 196, 26, 0.10);padding: 5px;color: rgba(82, 196, 26, 1);margin: 2px 10px 10px 0;">{{item.model.replace("NVIDIA GeForce ","")}}</p>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                    <div class="gva-pagination">
                      <el-pagination
                          :current-page="pageAll"
                          :page-size="pageSizeAll"
                          :page-sizes="[10, 30, 50, 100]"
                          :total="totalAll"
                          layout="total, sizes, prev, pager, next, jumper"
                          @current-change="handleCurrentChangeAll"
                          @size-change="handleSizeChangeAll"
                      />
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>

            <!-- <div class="alert alert-danger-alt alert-dismissible fade show animated" data-animate="fadeInUp" data-delay="1">
              {{ $t("account.address.Detail.alert")
              }}<button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div> -->

            <!-- <div class="echart animated" data-animate="fadeInUp" data-delay="1">
              <div class="container bg-light hada_div">
                <div class="row" style="border-bottom: 1px solid #dcdfe6;">
                  <div class="col-lg-6 mb-4 ps-5 pt-4">
                    <h6 class="hada_div_title">{{ $t("account.address.Detail.deviceStatistics") }}</h6>
                  </div>
                </div> -->
                <!-- <div class="header-title">设备统计</div> -->
                <!-- <div class="day_machine echarts">
                  <div ref="echartDay" class="dashboard-line" />
                </div> -->
              <!-- </div>
            </div> -->
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
  import * as echarts from "echarts";
  import api from "../../api/api";
  import { solutionsInfo } from "../../api/account";
  import Clipboard from "clipboard";
  import { ElMessage } from "element-plus";
  import i18n from "../../locales";
  import BigNumber from "bignumber.js";

  const route = useRoute(); //路由参数
  const router = useRouter(); //跳转路由

  const walletFormRef = ref();

  const walletForm = reactive({
    address: "",
  });

  // label信息
  const labelAll = ref(i18n.global.t("account.address.Detail.all") + "/");
  const labelOnline = ref(i18n.global.t("account.address.Detail.online") + "/");
  const labelError = ref(i18n.global.t("account.address.Detail.error") + "/");
  const labelOffline = ref(i18n.global.t("account.address.Detail.offline") + "/");

  // const onWalletAddressSearch = (formEl) => {
  //   // console.log("用户输入:", walletForm.address);
  //   if (!formEl) return;
  //   formEl.validate(async (valid) => {
  //     if (valid) {
  //       // console.log("submit!");
  //       if (!walletForm.address) {
  //         ElMessage({
  //           type: "warning",
  //           message: i18n.global.t("common.pls_input_address"),
  //         });
  //         return;
  //       }
  //       const table = await api.get1toData(walletForm.address);
  //       if (table.code == 0) {
  //         walletAddress.value = table.data.pool_addresses;
  //         allDevices.value = Number(table.data.total.machine_count_online) + Number(table.data.total.machine_count_abnormal)
  //         onlineDevices.value = table.data.total.machine_count_online;
  //         errorDevices.value = table.data.total.machine_count_abnormal;
  //         // graphicsCards.value = table.data.total.miner_count;
  //         computingPower.value = table.data.total.total_speed;

  //         // 求出异常显卡数
  //         gpuNums(table);
  //         onlinegraphicsCards.value = table.data.total.miner_count_online;
  //         graphicsCards.value = Number(onlinegraphicsCards.value) + Number(errorgraphicsCards.value);

  //         tab1.value = table;
  //         tab2.value = table;
  //         tab3.value = table;
  //         tab4.value = table;

  //         getTableDataPro1to();
  //         getDataOverviewEchart();
  //         getRewards();
  //         getSolutionsTableData();
  //       } else {
  //         ElMessage({
  //           type: "warning",
  //           message: i18n.global.t("common.find_not_address"),
  //         });
  //       }
  //     } else {
  //       // console.log("error submit!");
  //       return false;
  //     }
  //   });
  // };

  const onWalletAddressSearch1to = (formEl) => {
    if (!formEl) return;
    formEl.validate(async (valid) => {
      if (valid) {
        if (!walletForm.address) {
          ElMessage({
            type: "warning",
            message: i18n.global.t("common.pls_input_address"),
          });
          return;
        }
        const table = await api.get1toData(walletForm.address);
        if (table.code == 0) {
          walletAddress1to.value = table.data.machine_addr;
          machineCount1to.value = table.data.machine_count;
          machineCountOnline1to.value = table.data.machine_count_online;
          machineCountOffline1to.value = table.data.machine_count_offline;
          totalSpeed1to.value = table.data.total_speed;

          tab1.value = table;
          tab2.value = table;
          tab3.value = table;
          tab4.value = table;

          getTableDataPro1to();
          // getTableDataPro();
          getDataOverviewEchart();
          getRewards();
          getSolutionsTableData();
        } else {
          ElMessage({
            type: "warning",
            message: i18n.global.t("common.find_not_address"),
          });
        }
      } else {
        // console.log("error submit!");
        return false;
      }
    });
  };

  const copy = () => {
    var clipboard = new Clipboard(".address-copy");
    clipboard.on("success", (e) => {
      // console.log("复制成功");
      ElMessage({
        type: "success",
        message: i18n.global.t("account.address.copySuccess"),
      });
      // 释放内存
      clipboard.destroy();
    });
    clipboard.on("error", (e) => {
      // 不支持复制
      // console.log("该浏览器不支持自动复制");
      // 释放内存
      clipboard.destroy();
    });
  };

  // 自动刷新
  const reloadBtn = ref(false);
  const reloadText = ref(i18n.global.t("account.address.autoRefresh"));
  var time = 60;
  var run;
  const runTime = () => {
    run = setInterval(() => {
      reloadText.value = time + "s";
      time--;
      if (time < 0) {
        get1toTableData();
        // getTableDataPro();
        getDataOverviewEchart();
        getSolutionsTableData();
        getRewards();
        time = 60;
        run;
      }
    }, 1000);
  };
  // 判断localStorage是否存在openBtn
  const timeRun = () => {
    if (localStorage.getItem("openBtn") === "true") {
      reloadBtn.value = true;
      runTime();
    } else {
      reloadBtn.value = false;
    }
  };
  timeRun();

  watch(reloadBtn, (val) => {
    if (val === true) {
      localStorage.setItem("openBtn", true);
      // reloadText.value = "60s";
      time = 60;
      runTime();
    } else {
      localStorage.setItem("openBtn", false);
      clearInterval(run);
      reloadText.value = i18n.global.t("account.address.autoRefresh");
    }
  });
  const walletAddress = ref("");
  const allDevices = ref(0);
  const onlineDevices = ref(0);
  const errorDevices = ref(0);
  const graphicsCards = ref(0);
  const onlinegraphicsCards = ref(0);
  const errorgraphicsCards = ref(0);
  const computingPower = ref(0);
  const totalRewards = ref(0);

  //1to
  const walletAddress1to = ref("");
  const machineCount1to = ref(0);
  const machineCountOnline1to = ref(0);
  const machineCountOffline1to = ref(0);
  const totalSpeed1to = ref(0);

  // 获取total reward
  const getRewards = async () => {
    const table = await api.getRewards(walletAddress.value);
    if(table.code == 0){
      totalRewards.value = table.data;
    }
  }

  const getTableData = async () => {
    const table = await api.getData(walletAddress.value, 1);
    // console.log(table);
    walletAddress.value = table.data.pool_addresses;
    allDevices.value = Number(table.data.total.machine_count_online) + Number(table.data.total.machine_count_abnormal)
    onlineDevices.value = table.data.total.machine_count_online;
    errorDevices.value = table.data.total.machine_count_abnormal;
    // graphicsCards.value = table.data.total.miner_count;
    computingPower.value = table.data.total.total_speed;

    // 求出异常显卡数
    gpuNums(table);
    onlinegraphicsCards.value = table.data.total.miner_count_online;
    graphicsCards.value = Number(onlinegraphicsCards.value) + Number(errorgraphicsCards.value);

    // 将table数据存入全部、正常、异常、离线四个数组，便于遍历；
    tab1.value = table;
    tab2.value = table;
    tab3.value = table;
    tab4.value = table;

    getTableDataPro();
  };

  // 总览 Solutions 表格
  const page = ref(1);
  const total = ref(0);
  const pageSize = ref(10);
  const solutionsTableData = ref([]);

  // 获取solution table info
  const getSolutionsTableData = async () => {
    const table = await solutionsInfo({ address: walletAddress.value, page: page.value, pageSize: pageSize.value });
    // console.log(12345);
    if (table.code === 0) {
      if (table.data.list !== null) {
        table.data.list.forEach((data) => {
          data.TargetSum = data.Target + "/" + data.TargetSum;
          // data.Epoch = data.Epoch1+ ' ' + data.Epoch2;
        });

        solutionsTableData.value = table.data.list;
        page.value = table.data.page;
        pageSize.value = table.data.pageSize;
        total.value = table.data.total;
      }
      return;
    }
    // table.code 不为0的情况下初始化
    solutionsTableData.value = [];
    page.value = 1;
    pageSize.value = 10;
    total.value = 0;
  };

  // 分页
  const handleSizeChange = (val) => {
    pageSize.value = val;
    getSolutionsTableData();
  };
  const handleCurrentChange = (val) => {
    page.value = val;
    getSolutionsTableData();
  };

  // 控制 总览/明细 显隐
  const showOverview = ref(true);

  // 总览echarts
  const chartOverview = shallowRef(null);
  const echartOverview = ref(null);
  // x轴: 日期
  const xAxisData = ref([]);
  // y轴：折线图
  const yAxisDataline = ref([]);
  // y轴：柱状图
  const yAxisDatabar = ref([]);

  const initOverviewChart = () => {
    chartOverview.value = echarts.init(echartOverview.value /*'macarons'*/);
    setOverviewOptions();
    // console.log(6);
  };
  const setOverviewOptions = () => {
    chartOverview.value.setOption({
      grid: {
        top: 0,
        left: 20,
        right: 20,
        bottom: 100,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          animation: false,
          label: {
            backgroundColor: "#505765",
          },
        },
      },
      // 最顶上那两个小控件相关的配置
      legend: {
        data: ["Rewards", "Total Rewards"],
        // bottom:-10,
      },
      // 底下那个范围条相关的配置
      dataZoom: [
        {
          type: "inside",
          realtime: true,
          start: 0,
          end: 100,
        },
        {
          show: true,
          realtime: true,
          start: 0,
          end: 100,
          labelFormatter: function (value) {
            let d = "";
            xAxisData.value.forEach((date, index) => {
              if (value === index) {
                d = date;
              }
            });
            d = dateChangeFormat("YYYY-mm-dd HH:MM:SS", d);
            return d;
          },
        },
      ],
      // x轴
      xAxis: [
        {
          type: "category",
          boundaryGap: true,
          axisLine: {
            onZero: false,
            lineStyle: {
              color: "#E9E9E9",
            },
          },
          axisLabel: {
            color: "#BDC8D6",
          },
          // x轴日期数据
          data: xAxisData.value,
        },
      ],
      // y轴
      yAxis: [
        {
          name: "Rewards",
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#E9E9E9"],
              width: 2,
              type: "dotted",
            },
          },
          axisTick: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#E9E9E9",
            },
          },
        },
        {
          name: "Total Rewards",
          nameLocation: "end",
          alignTicks: true,
          type: "value",
          // inverse: true
          axisTick: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#E9E9E9",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#E9E9E9"],
              width: 2,
              type: "dotted",
            },
          },
        },
      ],
      series: [
        {
          name: "Total Rewards",
          type: "line",
          yAxisIndex: 1,
          areaStyle: {},
          smooth: true,
          itemStyle: {
            color: "#70E1B3",
          },
          lineStyle: {
            width: 2,
            color: "#70E1B3",
          },
          emphasis: {
            focus: "series",
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#00ffda", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#ffffff", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          // 折线图数据
          data: yAxisDataline.value,
        },
        {
          name: "Rewards",
          type: "bar",
          areaStyle: {},
          lineStyle: {
            width: 1,
          },
          emphasis: {
            focus: "series",
          },
          barWidth: 15, //柱状宽度
          itemStyle: {
            //柱状颜色和圆角
            // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#8db2f9", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#f2f6fd", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            borderRadius: [12, 12, 0, 0], // （顺时针左上，右上，右下，左下）
          },
          // 柱状图数据
          data: yAxisDatabar.value,
        },
      ],
    });
  };

  // 总览echart数据接口获取
  const getDataOverviewEchart = async () => {
    const table = await api.getDataOverviewEchart(walletAddress.value);
    if(table.data.Times) {
      xAxisData.value = table.data.Times.map(function (str) {
        str = dateChangeFormat("YYYY-mm-dd HH:MM:SS", str);
        return str.replace(" ", "\n");
      });
    } else {
      xAxisData.value = [];
    }

    if(table.data.TotalCredit) {
      yAxisDataline.value = table.data.TotalCredit;
    } else {
      yAxisDataline.value = [];
    }

    if(table.data.Reward) {
      yAxisDatabar.value = table.data.Reward;
    } else {
      yAxisDatabar.value = [];
    }
    
    // console.log(table);
  };

  // 明细echarts
  // const chart = shallowRef(null);
  // const echartDay = ref(null);

  // const labelOption = {
  //   show: true,
  //   position: "insideBottom",
  //   distance: 15,
  //   align: "left",
  //   verticalAlign: "middle",
  //   rotate: 90,
  //   formatter: "{c}  {name|{a}}",
  //   fontSize: 16,
  //   rich: {
  //     name: {},
  //   },
  // };

  // const initChart = () => {
  //   chart.value = echarts.init(echartDay.value /*'macarons'*/);
  //   setOptions();
  //   // console.log(8);
  // };
  // const setOptions = () => {
  //   chart.value.setOption({
  //     color: ["#A286FB", "#8BDFFF", "#FFA3CA"],
  //     tooltip: {
  //       trigger: "axis",
  //       axisPointer: {
  //         type: "shadow",
  //       },
  //     },
  //     legend: {
  //       data: [i18n.global.t("account.address.Detail.allPro"), i18n.global.t("account.address.Detail.onlinePro"), i18n.global.t("account.address.Detail.offlinePro")],
  //       bottom: 0,
  //     },
  //     xAxis: [
  //       {
  //         type: "category",
  //         axisTick: { show: false },
  //         data: ["2012", "2013", "2014", "2015", "2016"],
  //       },
  //     ],
  //     yAxis: [
  //       {
  //         type: "value",
  //       },
  //     ],
  //     series: [
  //       {
  //         name: i18n.global.t("account.address.Detail.allPro"),
  //         type: "bar",
  //         barGap: 0,
  //         barWidth: 15, //柱状宽度
  //         label: labelOption,
  //         emphasis: {
  //           focus: "series",
  //         },
  //         data: [320, 332, 301, 334, 390],
  //       },
  //       {
  //         name: i18n.global.t("account.address.Detail.onlinePro"),
  //         type: "bar",
  //         barWidth: 15, //柱状宽度
  //         label: labelOption,
  //         emphasis: {
  //           focus: "series",
  //         },
  //         data: [220, 182, 191, 234, 290],
  //       },
  //       {
  //         name: i18n.global.t("account.address.Detail.offlinePro"),
  //         type: "bar",
  //         barWidth: 15, //柱状宽度
  //         label: labelOption,
  //         emphasis: {
  //           focus: "series",
  //         },
  //         data: [150, 232, 201, 154, 190],
  //       },
  //     ],
  //   });
  // };

  // 当前语言
  const lang = ref("");
  onMounted(async () => {
    // await nextTick();
    // 获取localStorage里的语言
    lang.value = localStorage.getItem("lang") || "zh-TW";
    walletAddress.value = route.params.address;
    // console.log(1);
    getTableData();
    // console.log(2);
    // getTableDataPro();
    // console.log(3);
    getSolutionsTableData();
    getRewards();
    if (showOverview.value) {
      // console.log(4);
      getDataOverviewEchart();
      // console.log(5);
      initOverviewChart();
      // console.log(7);
    } else {
      // initChart();
    }
  });

  onUpdated(async () => {
    await nextTick();
    if (showOverview.value) {
      // getDataOverviewEchart();
      initOverviewChart();
    } else {
      // initChart();
    }
    NioApp.Util.scrollAnimation();
  });

  onUnmounted(() => {
    if (!chartOverview.value) {
      return;
    }
    chartOverview.value.dispose();
    chartOverview.value = null;

    // if (!chart.value) {
    //   return;
    // }
    // chart.value.dispose();
    // chart.value = null;
  });

  // tab
  const activeName = ref("first");

  const handleClick = (tab, event) => {
    console.log(tab.props.name);
    activeName.value = tab.props.name;
    getTableDataPro();
  };

  // 全部设备
  const pageAll = ref(1);
  const totalAll = ref(0);
  const pageSizeAll = ref(10);

  // 分页
  const handleSizeChangeAll = (val) => {
    pageSizeAll.value = val;
    // getTableDataPro();
  };
  const handleCurrentChangeAll = (val) => {
    pageAll.value = val;
    // getTableDataPro();
  };

  // 在线设备
  const pageOnline = ref(1);
  const totalOnline = ref(0);
  const pageSizeOnline = ref(10);

  // 分页
  const handleSizeChangeOnline = (val) => {
    pageSizeOnline.value = val;
    // getTableDataPro();
  };
  const handleCurrentChangeOnline = (val) => {
    pageOnline.value = val;
    // getTableDataPro();
  };

  // 异常设备
  const pageError = ref(1);
  const totalError = ref(0);
  const pageSizeError = ref(10);

  // 分页
  const handleSizeChangeError = (val) => {
    pageSizeError.value = val;
    // getTableDataPro();
  };
  const handleCurrentChangeError = (val) => {
    pageError.value = val;
    // getTableDataPro();
  };

  // 离线设备
  const pageOffline = ref(1);
  const totalOffline = ref(0);
  const pageSizeOffline = ref(10);

  // 分页
  const handleSizeChangeOffline = (val) => {
    pageSizeOffline.value = val;
    // getTableDataPro();
  };
  const handleCurrentChangeOffline = (val) => {
    pageOffline.value = val;
    // getTableDataPro();
  };

  // 设备data
  const tableDataPro = ref([]);

  // 获取设备信息
  const gpuDetail = (val) => {
    const len = val.length;
    if(len == 0){
      return [];
    }
    val.forEach((val, key) => {
      if (val.model.indexOf("RTX") !== -1) {
        let index = val.model.indexOf("RTX");
        let result = val.model.substr(index, val.model.length);
        val.model = result;
      }
    });
    return val;
  };

  // 时间戳转换成时间
  const switchTime = (val) => {
    if(val == null){
      return;
    }
    var maxTime = 0;
    val.forEach((val, key) => {
      if(Number(val.last_heartbeat) >= maxTime){
        maxTime = Number(val.last_heartbeat);
      }
    });
    // yyyy-MM-dd hh:mm:ss
    var date = new Date(maxTime);
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    const D = date.getDate() + ' ';
    const h = date.getHours() + ':';
    const m = date.getMinutes() + ':';
    const s = date.getSeconds(); 
    // console.log(Y+M+D+h+m+s); 
    return Y+M+D+h+m+s;
  }

  // 判断设备正常、异常和离线(0：离线、1：在线、2：异常)
  const judgeStatus = (val) => {
    if(val == null){
      return 2;
    }
    let arr = []
    val.forEach((val, key) => {
      if(val.model === 'CPU' && val.is_online === 0) {
        return;
      }
      arr.push(val.is_online);
    });
    if(!arr) {
      return 0;
    }
    // 用于判断arr是否值全部为1
    let flag1 = 1;
    let result1 = arr.every(item => item === flag1);
    // 如果result1为true，则值全部为1，正常，否则arr包含0或1，再次执行every函数
    if(result1) {
      return 1;
    }else{
      let flag2 = 0;
      let result2 = arr.every(item => item === flag2);
      if(result2) {
        return 0;
      }else{
        return 2;
      }
    }
  }

  // 设备算力总和计算
  const speedNum = (val) => {
    if(val == null){
      return 0;
    }
    let num = 0;
    val.forEach((val, key) => {
      num = BigNumber.sum(num, Number(val.speed)); 
    });
    return num;
  } 

  // 求异常显卡数
  const gpuNums = (val) => {
    let Arr = new Array();
    Object.values(val.data.detail).forEach((val) => {
      Arr.push(val);
    });
    let sum = 0;
    Arr.forEach((val) => {
      val.miner_infos.forEach((val) => {
        if (val.is_online === 2) {
          sum += 1;
        }
      })
    });
    errorgraphicsCards.value = sum;
  }

  // 四个tab的值
  const  tab1 = ref(null);
  const  tab2 = ref(null);
  const  tab3 = ref(null);
  const  tab4 = ref(null);

  const getTableDataPro = async () => {
    if (activeName.value === "first") {
      // const table = await api.getProduct({page: pageAll.value, pageSize: pageSizeAll.value, Address: address});
      // if(table.code === 0){
      //   tableDataPro.value = table.data.list;
      //   totalAll.value = table.data.total;
      //   pageAll.value = table.data.page;
      //   pageSizeAll.value = table.data.pageSize;
      // }
      const table = tab1.value;
      let Arr = new Array();
      Object.values(table.data.detail).forEach((val) => {
        Arr.push(val);
      });
      console.log(Arr);
      tableDataPro.value = Arr;
      labelAll.value = i18n.global.t("account.address.Detail.all") + "/" + table.data.total.machine_count;
      labelOnline.value = i18n.global.t("account.address.Detail.online") + "/" + table.data.total.machine_count_online;
      labelError.value = i18n.global.t("account.address.Detail.error") + "/" + table.data.total.machine_count_abnormal;
      labelOffline.value = i18n.global.t("account.address.Detail.offline") + "/" + table.data.total.machine_count_offline;
      totalAll.value = Number(table.data.total.machine_count);
    }
    if (activeName.value === "second") {
      // const table = await api.getProduct({page: pageOnline.value, pageSize: pageSizeOnline.value, Address: address});
      // if(table.code === 0){
      //   tableDataPro.value = table.data.list;
      //   totalOnline.value = table.data.total;
      //   pageOnline.value = table.data.page;
      //   pageSizeOnline.value = table.data.pageSize;
      // }
      const table = tab2.value;
      let Arr = new Array();
      Object.values(table.data.detail).forEach((val) => {
        let arr = []
        val.miner_infos.forEach((val, key) => {
          arr.push(val.is_online);
        });
        // 用于判断arr是否值全部为1
        let flag1 = 1;
        let result1 = arr.every(item => item === flag1);
        // 如果result1为true，则值全部为1，正常，否则arr包含0或1，再次执行every函数
        if(result1) {
          Arr.push(val);
        }else{
          
        }
      });
      tableDataPro.value = Arr;
      labelAll.value = i18n.global.t("account.address.Detail.all") + "/" + table.data.total.machine_count;
      labelOnline.value = i18n.global.t("account.address.Detail.online") + "/" + table.data.total.machine_count_online;
      labelError.value = i18n.global.t("account.address.Detail.error") + "/" + table.data.total.machine_count_abnormal;
      labelOffline.value = i18n.global.t("account.address.Detail.offline") + "/" + table.data.total.machine_count_offline;
      totalOnline.value = Number(table.data.total.machine_count_online);
    }
    if (activeName.value === "third") {
      const table = tab3.value;
      let Arr = new Array();
      Object.values(table.data.detail).forEach((val) => {
        let arr = []
        val.miner_infos.forEach((val, key) => {
          arr.push(val.is_online);
        });
        // 用于判断arr是否值全部为1
        let flag1 = 1;
        let result1 = arr.every(item => item === flag1);
        // 如果result1为true，则值全部为1，正常，否则arr包含0或1，再次执行every函数
        if(result1) {

        }else{
          let flag2 = 0;
          let result2 = arr.every(item => item === flag2);
          if(result2) {

          }else{
            Arr.push(val);
          }
        }
      });
      tableDataPro.value = Arr;
      labelAll.value = i18n.global.t("account.address.Detail.all") + "/" + table.data.total.machine_count;
      labelOnline.value = i18n.global.t("account.address.Detail.online") + "/" + table.data.total.machine_count_online;
      labelError.value = i18n.global.t("account.address.Detail.error") + "/" + table.data.total.machine_count_abnormal;
      labelOffline.value = i18n.global.t("account.address.Detail.offline") + "/" + table.data.total.machine_count_offline;
      totalError.value = Number(table.data.total.machine_count_abnormal);
    }
    if (activeName.value === "fourth") {
      const table = tab4.value;
      let Arr = new Array();
      Object.values(table.data.detail).forEach((val) => {
        let arr = []
        val.miner_infos.forEach((val, key) => {
          arr.push(val.is_online);
        });
        // 用于判断arr是否值全部为1
        let flag1 = 1;
        let result1 = arr.every(item => item === flag1);
        // 如果result1为true，则值全部为1，正常，否则arr包含0或1，再次执行every函数
        if(result1) {

        }else{
          let flag2 = 0;
          let result2 = arr.every(item => item === flag2);
          if(result2) {
            Arr.push(val);
          }else{

          }
        }
      });
      tableDataPro.value = Arr;
      labelAll.value = i18n.global.t("account.address.Detail.all") + "/" + table.data.total.machine_count;
      labelOnline.value = i18n.global.t("account.address.Detail.online") + "/" + table.data.total.machine_count_online;
      labelError.value = i18n.global.t("account.address.Detail.error") + "/" + table.data.total.machine_count_abnormal;
      labelOffline.value = i18n.global.t("account.address.Detail.offline") + "/" + table.data.total.machine_count_offline;
      totalOffline.value = Number(table.data.total.machine_count_offline);
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

        .alert {
          margin-top: 20px;
          padding: 0.75rem 3.25rem 0.75rem 2.25rem;
          color: rgba(83, 189, 83, 1);
          border: 0.7px solid rgba(145, 216, 145, 1);
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
            margin: 60px auto 20px;
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
                  width: 24%;
                  padding: 1.25rem 0.8rem;
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
                    background-size: 1.25rem 1.25rem;
                    .box-item{
                      width: 100px;
                      margin-top: 10px;
                    }
                  }

                  .box-icon:hover {
                    background: url("@/assets/images/online-hover.png") no-repeat;
                    background-size: 1.25rem 1.25rem;
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

    .hada_div {
      border: 0.06rem solid #e9ebf8;
      margin-top: 20px;
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
      line-height: 0.88rem;
    }

    // 总览顶部div 内容
    .hada_row_bg {
      background-color: #f6f8fa;
    }

    // 分页器样式
    // :deep(.el-pagination) {
    //   --el-pagination-font-size: 0.875rem;
    //   --el-pagination-button-width: 2rem;
    //   --el-pagination-button-height: 2rem;
    //   --el-pagination-font-size-small: 0.75rem;
    //   --el-pagination-button-width-small: 1.5rem;
    //   --el-pagination-button-height-small: 1.5rem;
    //   --el-pagination-item-gap: 1rem;
    //   .el-input{
    //     width: 8rem;
    //   }
    // }

    // table表格样式
    // :deep(.el-table__header) {
    //   table-layout: auto;
    //   padding: 0 50px;
    //   background: rgba(250, 250, 250, 1);
    // }
    // :deep(.el-table__empty-block) {
    //   padding: 0 50px;
    // }

    // table表格里面的tip显示
    .table-tooltip {
      width: 100%;
      height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      align-items: center;
      .table-tooltip-text {
        width: 100%;
        height: 28px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

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

    // tab样式
    :deep(.el-tabs__header)  {
      margin: 0 ;
    }
  }
</style>
