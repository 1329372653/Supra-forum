<template>
  <div>
    <router-link to="setting/modifyPassword" tag="div">
      <div class="setting_item">修改密码</div>
    </router-link>
    <router-link to="about" tag="div">
      <div class="setting_item">关于我们</div>
    </router-link>
    <div class="setting_item" @click="loginOut">退出登录</div>
  </div>
</template>

<style lang="less">
.setting_item {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  background: white;
  margin-top: 5px;
}
</style>
<script>
import { Toast } from "mint-ui";
import myaxios, { loginoutURL } from "@/tools/myaxios.js";
export default {
  data: function() {
    return {};
  },
  methods: {
    async loginOut() {
      let result = await myaxios("GET", loginoutURL);
      if (result.data.code == 101) {
        Toast(result.data.msg);
        this.$router.push("/my");
      }
    }
  },
  mounted() {
    var header_title = document.getElementsByClassName("mint-header-title")[0];
    header_title.innerText = "设置"
  }
};
</script>