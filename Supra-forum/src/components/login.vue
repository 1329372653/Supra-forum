<template>
  <div>
    <div class="mui-content content">
      <form id="login-form" class="mui-input-group">
        <div class="mui-input-row">
          <label>账号</label>
          <input
            id="account"
            ref="email"
            type="text"
            class="mui-input-clear mui-input"
            placeholder="请输入账号"
          />
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input
            id="password"
            type="password"
            class="mui-input-clear mui-input"
            ref="password"
            placeholder="请输入密码"
          />
        </div>
      </form>
      <form class="mui-input-group">
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="mui-table-view-cell">
            记住密码
            <div id="autoLogin" class="mui-switch">
              <div class="mui-switch-handle"></div>
            </div>
          </li>
        </ul>
      </form>
      <div class="mui-content-padded">
        <button id="login" class="mui-btn mui-btn-block mui-btn-primary" @click="login">登录</button>
        <div class="link-area">
          <router-link to="/register">
            <a id="reg">注册账号</a>
          </router-link>
          <span class="spliter">|</span>
          <a id="forgetPassword">忘记密码</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.area {
  margin: 20px auto 0px auto;
}

.mui-input-group {
  margin-top: 10px;
}

.mui-input-group:first-child {
  margin-top: 20px;
}

.mui-input-group label {
  width: 22%;
}

.mui-input-row label ~ input,
.mui-input-row label ~ select,
.mui-input-row label ~ textarea {
  width: 78%;
}

.mui-checkbox input[type="checkbox"],
.mui-radio input[type="radio"] {
  top: 6px;
}

.mui-content-padded {
  margin-top: 25px;
}

.mui-btn {
  padding: 10px;
}

.link-area {
  display: block;
  margin-top: 25px;
  text-align: center;
}

.spliter {
  color: #bbb;
  padding: 0px 8px;
}

.oauth-area {
  position: absolute;
  bottom: 20px;
  left: 0px;
  text-align: center;
  width: 100%;
  padding: 0px;
  margin: 0px;
}

.oauth-area .oauth-btn {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0px 20px;
  /*-webkit-filter: grayscale(100%); */
  border: solid 1px #ddd;
  border-radius: 25px;
}

.oauth-area .oauth-btn:active {
  border: solid 1px #aaa;
}

.oauth-area .oauth-btn.disabled {
  background-color: #ddd;
}
</style>

<script>
import { Toast } from "mint-ui";
import myaxios, { loginURL } from "@/tools/myaxios.js";
export default {
  data: function() {
    return {};
  },
  methods: {
    async login() {
      var email = this.$refs.email.value;
      var password = this.$refs.password.value;
      if (!email) {
        Toast("请输入您的账号！");
        return;
      } else if (!password) {
        Toast("请输入您的密码！");
        return;
      } else {
        var obj = {
            email: email,
            password: password
          },
          result = await myaxios("POST", loginURL, obj);
        if (result.data.code == 101) {
          this.$router.push("/my");
        } else {
          Toast("账户密码错误！");
        }
      }
    }
  },
  mounted(){
    var header_title = document.getElementsByClassName("mint-header-title")[0];
    header_title.innerText = "登陆"
  }
};
</script>