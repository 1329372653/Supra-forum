<template>
  <div>
    <div class="mui-content">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>邮箱</label>
          <input
            id="email"
            ref="email"
            type="email"
            class="mui-input-clear mui-input"
            placeholder="请输入邮箱"
          />
        </div>
        <div class="mui-input-row">
          <label>昵称</label>
          <input
            id="nickname"
            ref="nickname"
            type="text"
            class="mui-input-clear mui-input"
            placeholder="请输入昵称"
          />
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input
            id="password"
            ref="password"
            type="password"
            class="mui-input-clear mui-input"
            placeholder="请输入密码"
          />
        </div>
        <div class="mui-input-row">
          <label>确认</label>
          <input
            id="password_confirm"
            ref="password2"
            type="password"
            class="mui-input-clear mui-input"
            placeholder="请确认密码"
          />
        </div>
      </form>
      <div class="mui-content-padded">
        <button id="reg" class="mui-btn mui-btn-block mui-btn-primary" @click="register">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import myaxios, { registerURL } from "@/tools/myaxios.js";
import { EALREADY } from "constants";
export default {
  data: function() {
    return {};
  },
  methods: {
    async register() {
      var email = this.$refs.email.value;
      var nickname = this.$refs.nickname.value;
      var password = this.$refs.password.value;
      var password2 = this.$refs.password2.value;
      if (!email) {
        Toast("请输入您的账号！");
        return;
      } else if (!password) {
        Toast("请输入您的密码！");
        return;
      } else if (!nickname) {
        Toast("请输入您的昵称！");
        return;
      } else if (!password) {
        Toast("请输入您的密码！");
        return;
      } else if (password != password2) {
        Toast("输入的两次密码不一致！");
        return;
      } else {
        var obj = {
            email: email,
            nickname: nickname,
            password: password
          },
          result = await myaxios("POST", registerURL, obj);
        if (result.data.code == 101) {
          this.$router.push("/login");
        } else {
          Toast("账户已注册！");
        }
      }
    }
  },
  mounted() {
    var header_title = document.getElementsByClassName("mint-header-title")[0];
    header_title.innerText = "注册";
  }
};
</script>