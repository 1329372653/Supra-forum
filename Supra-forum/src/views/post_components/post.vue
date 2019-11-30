<template>
  <div id="postArticle" class="abc">
    <div class="p-header">
      <div class="h-content">
        <div class="back" @click="$router.back(-1)">返回</div>
        <div class="plabel">Fresh News</div>
        <div class="p-name">{{user.nickname}}</div>
      </div>
    </div>
    <div class="mui-scroll-wrapper">
      <div class="mui-scroll">
        <div class="p-main">
          <div class="p-title">
            <input type="text" ref="title" placeholder="填写标题会吸引更多关注奥 ~" />
          </div>
          <div class="p-content">
            <textarea id="editor" name="editor" placeholder="有什么新鲜事？说说吧！"></textarea>
          </div>
          <div class="p-img">
            <van-uploader
              v-model="fileList"
              multiple
              :max-count="9"
              preview-size="100px"
              :after-read="afterRead"
              image-fit="contain"
            />
            <!--  <img src="" alt=""> -->
            <!-- <img src='@/../public/icon/addimg-default.png' /> -->
          </div>
          <div class="p-classify">
            <div class="c-text">分类</div>
            <div class="c-tags">
              <select name="plate" id="plate" ref="plate">
                <option value="travel">旅游</option>
                <option value="game">游戏</option>
                <option value="movie">电影</option>
                <option value="music">音乐</option>
                <option value="funny">搞笑</option>
                <option value="technology">科技</option>
                <option value="sports">体育</option>
                <option value="car">汽车</option>
                <option value="food">美食</option>
              </select>
            </div>
          </div>
          <div class="p-bottom">
            <button @click="postBtn">Post</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import myaxios, { posttopicURL, getsessionURL } from "@/tools/myaxios.js";
import { EALREADY } from "constants";
import mui from "@/../lib/mui/js/mui.js";
import axios from "axios";
export default {
  data: function() {
    return {
      user: [],
      img_src: [],
      fileList: []
    };
  },
  methods: {
    afterRead() {},
    async postBtn() {
      var plate = this.$refs.plate.value;
      var title = this.$refs.title.value;
      var content = document.getElementById("editor").value;
      var i = this.fileList;
      let params = new FormData();
      params.append("plate", plate);
      params.append("title", title);
      params.append("content", content);
      i.map(item => {
        var img = item.file;
        params.append("file", img);
      });
      Toast("正在上传图片...");
      axios
        .post("/api/uploadimg", params, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(res => {
          if (res.data.code == 101) {
            this.$router.push("/");
            Toast(res.data.message);
          } else if (res.data.code == 102) {
            this.$router.push("/login");
            Toast(res.data.message);
          } else {
            Toast(res.data.message);
          }
        });
    }
  },
  async created() {
    let result = await myaxios("GET", getsessionURL);
    if (result.data.user) {
      this.user = result.data.user;
    }
    if (this.user == "") {
      this.$router.push("/login");
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>




<style lang="less" scoped>
.abc {
  height: 100%;
  bottom: 43px;
}
.mui-scroll-wrapper {
  top: 50px;
  bottom: 54px;
}
#postArticle {
  height: 100%;
}
.p-header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  height: 50px;
  display: flex;
  z-index: 1000;
  .h-content {
    height: 50px;
    margin: 0 auto;
    .back {
      position: fixed;
      top: 12.5px;
      left: 9px;
      line-height: 30px;
      font-size: 15px;
    }
    .plabel {
      color: black;
      font-size: 18px;
      font-weight: bold;
      height: 30px;
      line-height: 30px;
    }
    .p-name {
      text-align: center;
      font-size: 14px;
      color: grey;
      height: 20px;
      margin: 0 auto;
      line-height: 20px;
    }
  }
}
.p-main {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  height: 100%;
  width: 100%;
  .p-img {
    margin-top: 10px;
    padding: 5px;

    background-color: white;
  }
  input::-webkit-input-placeholder {
    /* WebKit browsers 适配谷歌 */
    text-align: start;
  }
  .p-title {
    height: 50px;
    margin-top: 10px;
    input[type="text"] {
      border: none;
      height: 50px;
      line-height: 40px;
      color: black;
    }
  }
  .p-content {
    margin-top: 10px;
    width: 100%;
    height: 250px;
    textarea {
      border: none;
      width: 100%;
      height: 100%;
      color: gray;
    }
  }
  .p-classify {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    font-size: 18px;
    background-color: white;
    .c-text {
      padding-left: 5px;
      width: 100px;
      height: 50px;
      float: left;
      line-height: 50px;
    }
    .c-tags {
      width: 100px;
      height: 50px;
      float: right;
      border-radius: 25px;
      select {
        margin: 0;
        padding: 0;
        line-height: 50px;
        font-size: 18px;
      }
    }
  }
  .p-bottom {
    margin-top: 10px;
    width: 100%;
    height: 50px;

    text-align: center;
    button {
      width: 100%;
      height: 50px;
      font-size: 20px;
      color: white;
      background-color: rgb(255, 60, 60);
      border-radius: 25px;
    }
  }
}
</style>