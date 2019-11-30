<template>
  <div class="mainhome">
    <div class="nav">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" @click="getTopicAll">全部</a>
          <a class="mui-control-item" @click="getTopicByPlate" :value="'travel'">旅游</a>
          <a class="mui-control-item" @click="getTopicByPlate" :value="'game'">游戏</a>
          <a class="mui-control-item" @click="getTopicByPlate" :value="'movie'">电影</a>
          <a class="mui-control-item" @click="getTopicByPlate" :value="'music'">音乐</a>
          <a class="mui-control-item" @click="getTopicByPlate" :value="'funny'">搞笑</a>
          <a class="mui-control-item" @click="getTopicByPlate" :value="'technology'">科技</a>
          <a class="mui-control-item" @click="getTopicByPlate" :value="'sports'">体育</a>
          <a class="mui-control-item" @click="getTopicByPlate" :value="'car'">汽车</a>
          <a class="mui-control-item" @click="getTopicByPlate" :value="'food'">美食</a>
        </div>
      </div>
    </div>
    <div class="topics_content">
      <div class="mui-scroll-wrapper mui-scroll_content">
        <div class="mui-scroll">
          <div class="list-wrapper" v-for="topics in topics" :key="topics._id">
            <div class="headnav">
              <div class="head-icon">
                <img class="head-img" :src="'http://localhost:8899'+topics.icon" />
              </div>
              <div class="content">
                <div class="user-info">
                  <div class="name">{{topics.nickname}}</div>
                  <div class="timeAndClickNum">
                    <div class="time">{{topics.created_time | dateFormat}}</div>
                    <div class="clickNum">
                      <img class="img" src="@/assets/icon/阅读量 (1).png" />
                      {{topics.clickNum}}
                    </div>
                  </div>
                </div>
                <div class="Like">
                  <img class="img" @click="collection(topics)" src="@/assets/icon/收藏.png" alt />
                </div>
              </div>
            </div>
            <router-link :to="'/topic/detail/'+topics._id" tag="span">
              <div class="weibo">
                <p class="weiboTxt" v-html="topics.title">​​​</p>
                <div class="weiboMedia">
                  <div class="imgs_content">
                    <div
                      class="weiboImg"
                      :v-if="topics.img_src != ''"
                      v-for="(item, index) in  topics.img_src "
                      :key="index"
                      @click.prevent="preview(topics.img_src,index)"
                    >
                      <img class="txt-img" :src="'http://localhost:8899'+item" />
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
            <div class="topic_list_footer">
              <div class="topic_list_footer_list">
                评论
                {{topics.commentNum}}
              </div>
              <div class="topic_list_footer_list">
                收藏
                {{topics.likeNum}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.mui-icon-plusempty:before {
  font-size: 25px;
  font-weight: bold;
}
.hide_content {
  width: 133px;
  position: absolute;
  top: 44px;
  right: 5px;
  z-index: 1000;
  background-color: #49484b;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      float: left;
      width: 100%;
      height: 40px;
      label {
        float: left;
        height: 40px;
        line-height: 40px;
        width: 50px;
        text-align: center;
        color: white;
      }
      .hide_li_font {
        float: left;
        height: 40px;
        line-height: 40px;
        width: 80px;
        color: white;
      }
    }
  }
}
.mui-segmented-control {
  background: white !important;
}
.mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  color: rgb(255, 66, 66) !important;
  border-bottom: 2px solid rgb(255, 66, 66) !important;
}
.topics_content {
  width: 100%;
  .mui-scroll_content {
    top: 78px;
    bottom: 54px;
  }
}
.list-wrapper {
  // border: 1px solid rgb(202, 202, 202);
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px -10px black;
  margin: 10px;
  color: #333;
  overflow: hidden;
  .headnav {
    width: 100%;
    margin: 8px;
    height: 50px;
    .head-icon {
      float: left;
      height: 40px;
      width: 40px;
      margin: 5px;
      .head-img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }
    .content {
      height: 50px;
      display: block;
      width: 280px;
      float: left;
      .user-info {
        float: left;
        width: 210px;
        .name {
          line-height: 25px;
          margin-left: 6px;
          font-size: 16px;
          font-weight: bold;
        }
        .timeAndClickNum {
          height: 25px;
          width: 210px;
          line-height: 25px;
          .time {
            float: left;
            margin-left: 6px;
            font-size: 12px;
            color: grey;
          }
          .clickNum {
            margin-left: 5px;
            height: 25px;
            float: left;
            line-height: 27px;
            font-size: 12px;
            color: grey;

            .img {
              float: left;
              width: 24px;
              height: 24px;
              margin-bottom: 4px;
              margin-right: 3px;
            }
          }
        }
      }
      .Like {
        width: 50px;
        height: 50px;
        float: right;
        position: relative;
        .img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  .weibo {
    padding: 8px;
    overflow: hidden;
    .weiboTxt {
      margin-left: 4px;
      font-size: 18px;
      line-height: 20px;
      width: 100%;
      color: black;
    }
    .weiboMedia {
      overflow: hidden;
      .imgs_content {
        width: 100%;
        overflow: hidden;
        .weiboImg:nth-last-child(1):first-child {
          float: left;
          box-sizing: border-box;
          overflow: hidden;
          width: 60%;
          height: 200px;
          border-right: 1px solid #fff;
          border-top: 1px solid #fff;
          .txt-img {
            width: 100%;
            height: 100%;
          }
        }
        .weiboImg:nth-last-child(2):first-child,
        .weiboImg:nth-last-child(2):first-child ~ .weiboImg {
          float: left;
          box-sizing: border-box;
          overflow: hidden;
          width: 50%;
          height: 100px;
          border-right: 1px solid #fff;
          border-top: 1px solid #fff;
          .txt-img {
            width: 100%;
            height: 100%;
          }
        }
        .weiboImg:nth-last-child(n + 3):first-child,
        .weiboImg:nth-last-child(n + 3):first-child ~ .weiboImg {
          float: left;
          box-sizing: border-box;
          overflow: hidden;
          width: 110px;
          height: 110px;

          border-right: 1px solid #fff;
          border-top: 1px solid #fff;
          .txt-img {
            width: 100%;
            height: 100%;
            margin: 4px;
          }
        }
      }
    }
  }
  .topic_list_footer {
    float: left;
    width: 100%;
    display: flex;
    .topic_list_footer_list {
      flex: 1;
      height: 30px;
      text-align: center;
      font-size: 15px;
      line-height: 30px;
      color: gray;
      .img {
        width: 24px;
        height: 24px;
        margin: 3px;
      }
    }
  }
}
</style>

<script>
import { Toast } from "mint-ui";
import myaxios, {
  gettopicAllURL,
  gettopicByPlate,
  getsessionURL,
  addCollectionURL
} from "@/tools/myaxios.js";
import mui from "@/../lib/mui/js/mui.js";
import { create } from "domain";

export default {
  data: function() {
    return {
      topics: "",
      imgArr: ""
    };
  },
  methods: {
    async collection(topic) {
      let result = await myaxios("GET", getsessionURL);
      if (result.data.user) {
        this.user = result.data.user;
        var obj = {
          topic_id: topic._id,
          collector_id: this.user._id,
          collector_avatar: this.user.avatar,
          collector_nickname: this.user.nickname,
          poster_nickname: topic.nickname,
          topic_title: topic.title,
          topic_content: topic.content,
          poster_avatar: topic.icon,
          topic_createdTime: topic.created_time
        };
        let result2 = await myaxios("POST", addCollectionURL, obj);
        if (result2.data.code == 101) {
          Toast(result2.data.message);
          let result = await myaxios("GET", gettopicAllURL);
          if (result.data.code == 101) {
            this.topics = result.data.topics;
          }
        } else if (result2.data.code == 100) {
          Toast(result2.data.message);
        }
      } else {
        this.$router.push("/login");
      }
    },
    async getTopicAll() {
      let result = await myaxios("GET", gettopicAllURL);
      if (result.data.code == 101) {
        this.topics = result.data.topics;
      } else {
        Toast("请求失败请重试！");
      }
    },
    async getTopicByPlate(e) {
      var plate = e.target.getAttribute("value");
      let result = await myaxios("POST", gettopicByPlate, { plate: plate });
      this.topics = result.data.topics;
    },
    preview(img_src, index) {
      this.$imagePreview({
        images: img_src.map(item => {
          return "http://localhost:8899" + item;
        }),
        index: index
      });
    }
  },
  async created() {
    let result = await myaxios("GET", gettopicAllURL);
    if (result.data.code == 101) {
      this.topics = result.data.topics;
    }
  },

  mounted() {
    var header_title = document.getElementsByClassName("mint-header-title")[0];
    header_title.innerText = "首页";
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
