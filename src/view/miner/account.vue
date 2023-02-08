<template>
  <div class="nk-pages nk-pages-centered">
    <div class="hada_pool_container">
      <!-- .row -->
      <div class="row align-items-center justify-content-center">
        <!-- .col -->
        <div class="col-lg-7 col-sm-12 text-center text-lg-start">
          <div class="hada_banner_caption text-center banner-caption tc-light">
            <h5 class="title hada_pool_title animated" data-animate="fadeInUp" data-delay=".95">{{ $t("account.hadapool") }}</h5>
            <div class="cpn-action">
              <el-form ref="walletFormRef" :model="walletForm" label-width="0px" class="nk-form-submit animated" data-animate="fadeInUp" data-delay="1.4">
                <el-form-item prop="address">
                  <div class="hada_wallet_input animated" data-animate="fadeInUp" data-delay="1.2">
                    <div class="field-inline field-split bg-white shadow-soft">
                      <div class="field-wrap d-flex align-items-center">
                        <!-- <label class="label-inline mb-0 d-none d-sm-block"><i class="mt-1 icon fas fa-envelope"></i></label> -->
                        <input v-model="walletForm.address" class="input-solid input-solid-lg" type="text" :placeholder="$t('account.input_placeholder')" />
                      </div>
                      <div class="submit-wrap">
                        <button type="button" class="btn btn-primary hada_search_btn" @click="onWalletAddressSearch(walletFormRef)">{{ $t("account.submit_btn") }}</button>
                      </div>
                    </div>
                  </div>
                </el-form-item>
              </el-form>
            </div>
            <div class="hada_history_block animated" data-animate="fadeInUp" data-delay="1.1" v-if="showSearchHistory">
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
      </div>
    </div>
    <div class="bg"></div>
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
          window.localStorage.setItem("searchHistoryaccount", userInputArr);

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
  };
  // 删除近期查询
  const onAddressDelete = (index) => {
    console.log(`删除数组下标为${index}的地址`);
    let searchHistory = window.localStorage.getItem("searchHistoryaccount");
    let addressArr = JSON.parse(searchHistory);
    addressArr.forEach((address, idx) => {
      if (idx === index) {
        addressArr.splice(idx, 1);
      }
    });
    addressArr = JSON.stringify(addressArr);
    // 存修改好的数据到 localStorage
    window.localStorage.setItem("searchHistoryaccount", addressArr);
  };

  onMounted(() => {
    // location.reload();

    let searchHistory = window.localStorage.getItem("searchHistoryaccount");
    userInput.value = JSON.parse(searchHistory);
    if (userInput.value !== null) {
      showSearchHistory.value = true;
    }
  });
</script>

<style lang="scss" scoped>
  .bg {
    display: block;
    position: absolute;
    left: 0px;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background-image: url("@/images/hada/account/hadapool_bg.png");
    background-repeat: no-repeat;
    background-size: contain;
  }

  .hada_pool_container {
    // width: 784px;
    min-width: 70%;
    margin: 30px auto;
    // Hadapool
    .hada_pool_title {
      font-size: 4.06rem;
      // font-family: AlibabaPuHuiTiB;
      color: #ffffff;
      line-height: 5.56rem;
      background: linear-gradient(85deg, #ae7fff 0%, #0ab2ff 65%, #09fcf1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  // 地址搜索框
  .hada_banner_caption {
      position: relative;
      max-width: 1296px;
      width: 100%;
      // 搜索按钮
      .hada_search_btn {
        background-color: #000000;
        border-color: #000000;
        border-radius: 12px;
      }
      // 地址input
      .hada_wallet_input {
        flex: 1;
      }
      .hada_history_block {
        position: absolute;
        width: inherit;
        // background-image: url("@/images/hada/home/1.png");
        // background-repeat: no-repeat;
        // background-size: 100% 100%
        background-color: rgba(239, 242, 245, 1);
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 1);
        p {
          margin-left: 21px;
          margin-top: 25px;
          font-size: 1.0625rem;
          // font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(0, 14, 72, 1);
          line-height: 1.4375rem;
          text-align: left;
        }
        .hada_history_address {
          grid-column-gap: 20px;
          margin-bottom: 40px;
          padding: 0px 21px;
          display: grid;
          grid-template-rows: auto;
          grid-template-columns: calc(50% - 10px) calc(50% - 10px);
          span {
            color: lightgray;
            flex-grow: 1;
          }
          div:hover {
            span {
              color: rgba(103, 104, 124, 1);
            }
            // 删除icon
            // .hada_history_delete_icon {
            //   background-image: url("@/images/hada/home/delete_icon.png");
            // }
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
</style>
