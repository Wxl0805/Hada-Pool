<template>
  <div class="nk-footer bg-theme-grad ov-h">
    <section class="section section-t-xl tc-light pdb-0 animated ov-h" data-animate="fadeInUp" data-delay=".1">
      <div class="container">
        <!-- Block @s -->
        <div class="nk-block">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-8 col-mb-9 hada_contact">
              <div class="section-head section-head-sm wide-auto-sm text-left ms-0">
                <h4 class="title">{{ $t("menus.footer.contact") }}</h4>
              </div>
              <el-form ref="contactFormRef" :model="contactForm" :rules="rules" label-width="0px" class="nk-form-submit">
                <el-form-item prop="name">
                  <div class="field-inline field-split bg-white shadow-soft hada_border_radius_3 flex-grow-1">
                    <div class="field-wrap d-flex align-items-center">
                      <input v-model="contactForm.name" class="input-solid" type="text" :placeholder="$t('menus.footer.contact_name')" />
                      <input type="text" class="d-none" name="form-anti-honeypot" value="" />
                    </div>
                  </div>
                </el-form-item>
                <el-form-item prop="info">
                  <div class="field-inline field-split bg-white shadow-soft hada_border_radius_3 flex-grow-1">
                    <div class="field-wrap d-flex align-items-center">
                      <input v-model="contactForm.info" class="input-solid" type="text" :placeholder="$t('menus.footer.contact_input')" />
                      <input type="text" class="d-none" name="form-anti-honeypot" value="" />
                    </div>
                  </div>
                </el-form-item>
                <el-form-item>
                  <div class="submit-wrap">
                    <button type="button" class="btn btn-primary hada_border_radius_3" @click="onEmailAddressSearch(contactFormRef)">{{ $t("menus.footer.submit") }}</button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
        <!-- .block @e -->
      </div>
    </section>
    <section class="section section-t-xs tc-light animated" data-animate="fadeInUp" data-delay=".2">
      <div class="container">
        <div class="nk-block">
          <div class="gutter-vr-15px px row justify-content-between align-items-center text-center text-sm-start">
            <div class="col-lg-4">
              <ul class="social justify-content-center ms-n2">
                <li>
                  <a href="https://t.me/+rB73LjDYQ1NlMjA1">
                    <em class="social-icon social-icon-transparent fab fa-telegram-plane"></em>
                    <span>{{ $t("menus.footer.t_me") }}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-5 col-sm-8">
              <div class="copyright-text copyright-text-s4">
                <p>&copy; {{ $t("menus.footer.copyright") }}</p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-4 text-sm-end invisible">
              <ul class="footer-links">
                <li><a href="#">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="nk-ovm mask-f-footer shape-z2"></div>
  </div>
</template>

<script setup>
  import { ref, reactive } from "vue";
  import { ElMessage } from "element-plus";
  import { contactUs } from "../../api/home";
  import i18n from "../../locales";

  const contactFormRef = ref();
  const contactForm = ref({
    name: "",
    info: "",
  });

  // 表单验证规则
  const rules = reactive({
    name: [
      {
        required: true,
        message: i18n.global.t("menus.footer.pls_input_name"),
        trigger: "change",
      },
    ],
    info: [
      {
        required: true,
        message: i18n.global.t("menus.footer.pls_input_tel"),
        trigger: "change",
      },
    ],
  });

  // 搜索
  const onEmailAddressSearch = (formEl) => {
    // console.log("用户输入:", contactForm.value.name, " ;", contactForm.value.info);
    if (!formEl) return;
    formEl.validate((valid) => {
      if (valid) {
        console.log("submit!");
        sendInfo(contactForm.value);
        ElMessage({
          type: "success",
          message: i18n.global.t("menus.footer.submit_success"),
        });
        contactForm.value.name = "";
        contactForm.value.info = "";
      } else {
        console.log("error submit!");
        ElMessage({
          type: "error",
          message: i18n.global.t("menus.footer.submit_error"),
        });
      }
    });
  };

  const sendInfo = async (data) => {
    const info = await contactUs({ name: data.name, value: data.info });
    if (info.code === 0) {
      console.log("Successfully sent to the server");
    }
  };
</script>

<style lang="scss" scoped>
  .bg-theme-grad {
    background-image: linear-gradient(to right, #1b1a3f 0%, #000537 100%) !important;
  }

  // icon后文字颜色
  .social-icon + span {
    color: #ffffff;
    font-weight: 500;
  }
  .hada_contact {
    .title {
      width: 9.375rem;
      font-size: 2rem;
      font-family: AlibabaPuHuiTiB;
      color: #ffffff;
      line-height: 2.4375rem;
      background: linear-gradient(270deg, #094bfc 0%, #0ab2ff 45%, #ae7fff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  // input圓角
  .hada_border_radius_3 {
    border-radius: 6px;
  }

  // input样式
  .input-solid {
    background-color: #40405e;
    color: #ffffff !important;
    height: 40px !important;
  }

  .field-inline input {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  input::placeholder {
    color: #ffffff !important;
  }

  // 底部button按钮样式
  .btn{
    height: 40px !important;
  }
</style>
