<template>
  <div>
    <div class="topics_content">
      <div class="mui-scroll-wrapper mui-scroll_content">
        <div class="mui-scroll">
          <div class="comment_content" v-for="comment in comments" :key="comment._id">
            <div class="commenter_avatar">
              <img :src="'http://localhost:9000'+comment.conmmenter_avatar" alt />
            </div>
            <div class="commenter_right">
              <div class="commenter_nickname">
                {{comment.comment_nickname}}
                <div
                  class="mui-icon mui-icon-closeempty"
                  @click.prevent="deleteMyComment(comment._id)"
                ></div>
              </div>
              <div class="commenter_content">{{comment.comment_content}}</div>
              <div class="commenter_creatertime">{{comment.created_time | dateFormat }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.comment_content {
  width: 100%;
  height: 80px;
  margin-top: 5px;
  .commenter_avatar {
    float: left;
    width: 20%;
    height: 100%;
    position: relative;
    img {
      width: 80%;
      height: 80%;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .commenter_right {
    float: left;
    width: 80%;
    height: 100%;
    .commenter_content {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
    }
    .commenter_nickname {
      float: left;
      width: 100%;
      height: 20px;
      line-height: 20px;
      color: #333;
      font-size: 16px;
      overflow: hidden;
      .mui-icon-closeempty {
        float: right;
      }
    }
    .commenter_creatertime {
      width: 100%;
      line-height: 20px;
      font-size: 10px;
      color: gray;
    }
  }
}
.mui-scroll_content {
  top: 40px;
  bottom: 54px;
}
</style>

<script>
import { Toast } from "mint-ui";
import myaxios, {
  getsessionURL,
  getMyCommentURL,
  deleteMyCommentURL
} from "@/tools/myaxios.js";
import mui from "@/../lib/mui/js/mui.js";
export default {
  data: function() {
    return {
      user: "",
      comments: ""
    };
  },
  methods: {
    async deleteMyComment(comment_id) {
      var commentID = comment_id;
      var obj1 = {
        commentID: commentID
      };
      let result = await myaxios("POST", deleteMyCommentURL, obj1);
      if (result.data.code == 101) {
        Toast("删除成功！");
        var obj2 = {
          userID: this.user._id
        };
        let result2 = await myaxios("POST", getMyCommentURL, obj2);
        this.comments = result2.data.comments;
      }
    }
  },
  async created() {
    let result1 = await myaxios("GET", getsessionURL);
    if (result1.data.user) {
      this.user = result1.data.user;
      var obj = {
        userID: this.user._id
      };
      let result2 = await myaxios("POST", getMyCommentURL, obj);
      this.comments = result2.data.comments;
    }
    else{
        this.$router.push("/my");
    }
  },
  mounted() {
    var header_title = document.getElementsByClassName("mint-header-title")[0];
    header_title.innerText = "我的评论"
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>