<template>
  <div>
    <div class="topics_content">
      <div class="mui-scroll-wrapper mui-scroll_content">
        <div class="mui-scroll">
          <ul class="topics_content_ul">
            <li v-for="item in topics" :key="item._id">
              <div class="topic_left">
                <img :src="'http://localhost:8899'+item.img" alt />
              </div>
              <router-link :to="'/topic/detail/'+item._id" tag="span">
                <div class="topic_right">
                  <div class="topic_poster_nickname">
                    {{item.nickname}}
                    <div
                      class="mui-icon mui-icon-closeempty"
                      @click.prevent="deleteMyTopic(item._id)"
                    ></div>
                  </div>
                  <div class="topic_title">{{item.title}}</div>
                  <div class="topic_createdtime">{{item.created_time | dateFormat}}</div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.topics_content {
  width: 100%;
  .topics_content_ul {
    padding: 0;
    list-style: none;
    width: 100%;
    position: relative;
    li {
      margin-top: 5px;
      width: 100%;
      height: 80px;
      .topic_left {
        float: left;
        width: 20%;
        height: 100%;
        position: relative;
        img {
          width: 80%;
          height: 80%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .topic_right {
        float: left;
        width: 80%;
        height: 100%;
        .topic_title {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          height: 40px;
          line-height: 40px;
          font-size: 18px;
        }
        .topic_poster_nickname {
          float: left;
          width: 100%;
          height: 20px;
          line-height: 20px;
          color: #333;
          font-size: 14px;
          overflow: hidden;
          .mui-icon-closeempty {
            float: right;
          }
        }
        .topic_createdtime {
          width: 100%;
          line-height: 20px;
          font-size: 10px;
          color: gray;
        }
      }
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
  getMyTopicsURL,
  getsessionURL,
  deleteMyTopicURL
} from "@/tools/myaxios.js";
import mui from "@/../lib/mui/js/mui.js";
export default {
  data: function() {
    return {
      topics: "",
      user: ""
    };
  },
  methods: {
    async deleteMyTopic(topicID) {
      var obj = {
        topicID: topicID
      };
      let result = await myaxios("POST", deleteMyTopicURL, obj);
      if (result.data.code == 101) {
        Toast("删除成功！");
        var obj = {
          userID: this.user._id
        };
        let result2 = await myaxios("POST", getMyTopicsURL, obj);
        if (result2.data.code == 101) {
          this.topics = result2.data.topics;
        }
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
      let result2 = await myaxios("POST", getMyTopicsURL, obj);
      if (result2.data.code == 101) {
        this.topics = result2.data.topics;
      }
    } else {
      this.$router.push("/my");
    }
  },
  mounted() {
    var header_title = document.getElementsByClassName("mint-header-title")[0];
    header_title.innerText = "我的帖子"
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>