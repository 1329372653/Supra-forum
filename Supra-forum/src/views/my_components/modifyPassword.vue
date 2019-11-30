<template>
  <div>
    <div class="modifyPassword_item">
      <label for>原密码：</label>
      <input type="text" placeholder="请输入原密码：" ref="oldpassword"/>
    </div>
    <div class="modifyPassword_item">
      <label for>新密码：</label>
      <input type="text" placeholder="请输入密码：" ref="newpassword"/>
    </div>
    <div class="modifyPassword_item">
      <label for>确认密码：</label>
      <input type="text" placeholder="请输入密码：" ref="renewpassword"/>
    </div>
    <button class="modify_btn" @click="modifyPsw">修改密码</button>
  </div>
</template>

<style lang="less" scoped>
.modifyPassword_item {
  width: 100%;
  height: 80px;
  margin-top: 5px;
}
.modify_btn {
  width: 100%;
  height: 50px;
  background: red;
  color: white;
  font-size: 20px;
  border-radius: 20px;
}
</style>

<script>
import { Toast } from "mint-ui";
import myaxios, {
  getsessionURL,
  modifyPasswordURL
} from "@/tools/myaxios.js";
export default {
  data: function() {
    return {
      user: ""
    };
  },
  methods: {
      async modifyPsw(){
          var oldpassword = this.$refs.oldpassword.value;
          var newpassword = this.$refs.newpassword.value;
          var renewpassword = this.$refs.renewpassword.value;
          var obj = {
              oldpassword:oldpassword,
              newpassword:newpassword,
              renewpassword:renewpassword
          }
          let result = await myaxios("POST",modifyPasswordURL,obj)
          if(result.data.code == 101){
            Toast(result.data.msg)
            this.$router.push("/my");
          }
          else{
            Toast(result.data.msg)
          }
      }
  },
  async created() {
    let result1 = await myaxios("GET", getsessionURL);
    if (result1.data.user) {
      this.user = result1.data.user;
    } else {
      this.$router.push("/login");
    }
  },
  mounted() {
    var header_title = document.getElementsByClassName("mint-header-title")[0];
    header_title.innerText = "修改密码"
  }
};
</script>