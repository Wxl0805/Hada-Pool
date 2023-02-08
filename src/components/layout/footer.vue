<template>
  <!-- Footer -->
  <footer class="nk-footer hada_footer_bg">
    <!-- // -->
    <section class="section tc-light">
      <div class="container">
        <div class="nk-block block-footer mgb-m30">
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
      <!-- <div class="nk-ovm mask-f-footer shape-z2"></div> -->
    </section>
  </footer>
</template>

<style lang="scss" scoped>
  .hada_footer_bg {
    background-image: url("@/images/hada/layout/footer_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  // icon后文字颜色
  .social-icon + span {
    color: #ffffff;
    font-weight: 500;
  }
</style>
