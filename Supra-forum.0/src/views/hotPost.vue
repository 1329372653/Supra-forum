<template>
  <div>
    <div class="searchResult_content">
      <div class="mui-scroll-wrapper mui-scroll_content">
        <div class="mui-scroll">
          <mt-swipe>
            <mt-swipe-item v-for="item in lunboData" :key="item._id">
              <router-link :to="'/topic/detail/'+item._id" tag="span">
                <img :src="'http://localhost:8899'+item.img" alt />
              </router-link>
            </mt-swipe-item>
          </mt-swipe>
          <div class="hostPost_ul_head">
            <img class="img" src="@/assets/icon/HOT.png">
            热帖</div>
          <ul class="topics_content_ul">
            <li v-for="(item,index) in topics" :key="item._id">
              <div class="topics_content_ul_index">{{index+1}}</div>
              <div class="topic_left">
                <img :src="'http://localhost:8899'+item.img" alt />
              </div>
              <router-link :to="'/topic/detail/'+item._id" tag="span">
                <div class="topic_right">
                  <div class="topic_title">{{item.title}}</div>
                  <div class="topic_poster_nickname">{{item.nickname}}</div>
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
.mint-swipe {
   border-radius: 10px;
  height: 220px;
  margin: 8px;
  border: none;
  box-shadow: 0px 0px 10px -10px black;
  .mint-swipe-item {

    img {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  }
}
.searchResult_content {
  width: 100%;
  height: 100%;
  .mui-scroll_content {
    top: 40px;
    bottom: 54px;
    .hostPost_ul_head {
      background-color: white;
      height: 30px;
      margin: 8px;
      color: black;
      font-size: 20px;
      line-height: 30px;
      border-radius: 10px;
       .img{
         float: left;
         width: 24px;
         height: 24px;
         margin-top: 3px;
         margin-left: 5px;
         margin-right: 5px;
       }
    }
    .topics_content_ul {
      padding: 10px;
         border-radius: 10px;
          background-color: white;
      padding: 0;
      list-style: none;
      width: 100%;
      position: relative;
      li {
        margin-left: 3px;
        margin-top: 5px;
        margin-bottom: 5px;
        width: 100%;
        height: 110px;
        border-bottom: 1px solid rgb(236, 236, 236);
        .topics_content_ul_index{
          width: 100%;
          color: red;
          height: 25px;
          line-height: 25px;
          font-size: 16px;
        }
        .topic_left {
          font-size: 14px;
           color: red;
           font-weight: bold;
          float: left;
          width: 75px;
          height: 85px;
          position: relative;
          img {
            margin-left: 5px;
            width: 80%;
            height: 80%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
             margin-bottom: 5px;
          }
        }
        .topic_right {
          margin-left: 5px;
          float: left;
          width: 270px;;
          height: 85px;
          .topic_title {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 55px;
            line-height: 55px;
            font-size: 20px;
          }
          .topic_poster_nickname {
            float: left;
            width: 50%;
            height: 25px;
            line-height: 25px;
            color: #333;
            font-size: 14px;
            overflow: hidden;
          }
          .topic_createdtime {
            float: left;
            width: 50%;
            height: 25px;
            line-height: 25px;
            font-size: 14px;
            color: gray;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>

<script>
import { Toast } from "mint-ui";
import myaxios, { getHostPostURL, getLunboDataURL } from "@/tools/myaxios.js";
import mui from "@/../lib/mui/js/mui.js";
export default {
  data: function() {
    return {
      topics: "",
      lunboData: ""
    };
  },
  methods: {},
  async created() {
    let result = await myaxios("GET", getHostPostURL);
    this.topics = result.data.topics;
    let result2 = await myaxios("GET", getLunboDataURL);
    this.lunboData = result2.data.lunboData;
  },
  mounted() {
    var header_title = document.getElementsByClassName("mint-header-title")[0];
    header_title.innerText = "热门帖子"
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>