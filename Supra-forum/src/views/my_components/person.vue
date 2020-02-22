<template>
  <div>
    <div class="person_avatar">
      <label>头像</label>
      <div class="person_avatar_img">
        <img :src="'http://localhost:9000'+user.avatar" alt />
      </div>
    </div>
    <div class="person_item">
      <label class="person_item_label">昵称</label>
      <div class="person_item_detail">{{user.nickname}}</div>
    </div>
    <div class="person_item">
      <label class="person_item_label">性别</label>
      <div class="person_item_detail" v-if="+user.gender == '-1'">男</div>
      <div class="person_item_detail" v-if="+user.gender == '1'">女</div>
      <div class="person_item_detail" v-if="+user.gender == '0'">保密</div>
    </div>
    <div class="person_item">
      <label class="person_item_label">邮箱</label>
      <div class="person_item_detail">{{user.email}}</div>
    </div>
    <div class="person_signature">
      <label class="person_signature_label">个性签名</label>
      <div class="person_signature_detail">{{user.bio}}</div>
    </div>
    <router-link to="/my/person/modifyPerson" tag="div">
      <div class="modify_information">修改个人信息</div>
    </router-link>
  </div>
</template>

<style lang="less">
.person_avatar {
  width: 100%;
  height: 75px;
  background: white;
  label {
    margin-left: 20px;
    float: left;
    display: block;
    width: 70%;
    height: 75px;
    line-height: 75px;
  }
  .person_avatar_img {
    float: left;
    width: 75px;
    height: 75px;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
  }
}
.person_item {
  margin-top: 4px;
  width: 100%;
  height: 50px;
  background: white;
  .person_item_label {
    margin-left: 20px;
    float: left;
    display: block;
    width: 20%;
    height: 50px;
    line-height: 50px;
  }
  .person_item_detail {
    float: left;
    width: 70%;
    height: 50px;
    line-height: 50px;
    text-align: right;
    overflow: hidden;
  }
}
.person_signature {
  margin-top: 4px;
  width: 100%;
  height: 150px;
  background: white;
  .person_signature_label {
    margin-left: 20px;
    float: left;
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .person_signature_detail {
    float: left;
    width: 100%;
    height: 100px;
    margin-left: 20px;
    overflow: hidden;
  }
}
.modify_information {
  width: 100%;
  height: 50px;
  background: red;
  color: white;
  font-size: 20px;
  border-radius: 50px;
  line-height: 50px;
  text-align: center;
}
</style>

<script>
import { Toast } from "mint-ui";
import myaxios, { getsessionURL } from "@/tools/myaxios.js";
export default {
  data: function() {
    return {
      user: []
    };
  },
  methods: {},
  async created() {
    let result = await myaxios("GET", getsessionURL);
    if (result.data.user) {
      this.user = result.data.user;
    }
  },
  mounted() {
    var header_title = document.getElementsByClassName("mint-header-title")[0];
    header_title.innerText = "个人信息"
  }
};
</script>