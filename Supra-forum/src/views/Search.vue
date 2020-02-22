<template>
  <div>
    <div class="abc">
      <div class="search">
        <input type="text" placeholder="想搜些什么？" @keydown="searchBtn" class="search_input" ref="searchContent" />
        <div class="mui-icon mui-icon-search" @click="searchBtn"></div>
      </div>
    </div>

    <div class="searchResult_content">
      <div class="mui-scroll-wrapper mui-scroll_content">
        <div class="mui-scroll">
          <div class="hotSearch_content" v-if="!topics">
            <div class="hostSearch_head">热搜</div>
            <div class="hostSearch_li_content">
              <div class="hostSearch_li" v-for="item in hostSearch" :key="item._id">{{item.title}}</div>
            </div>
          </div>
          <ul class="topics_content_ul" v-if="topics">
            <li v-for="item in topics" :key="item._id">
              <div class="topic_left">
                <img :src="'http://localhost:9000'+item.icon" alt />
              </div>
              <router-link :to="'/topic/detail/'+item._id" tag="span">
                <div class="topic_right">
                  <div class="topic_poster_nickname">{{item.nickname}}</div>
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
.abc {
  height: 80px;
  width: 100%;
  background-color: white;
}
input::-ms-input-placeholder {
  text-align: center;
}
input::-webkit-input-placeholder {
  text-align: center;
}
.search {
  margin-top: 1px;
  width: 100%;
  height: 52px;
  border-radius: 10px;
  border: 1px solid gray;
  .search_input {
    padding: 0px;
    display: inline-block;
    width: 90%;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    margin: 0;
    border: 0;
    margin-left: 5px;
  }
  .mui-icon-search {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: none !important;
    height: 50px;
    margin-right: 8px;
    line-height: 50px;
    background: white;
    text-align: center;
    margin: 0;
  }
}
.searchResult_content {
  width: 100%;
  height: 100%;
  .mui-scroll_content {
    background-color: white;
    padding: 8px;
    top: 102px;
    bottom: 54px;
    .hotSearch_content {
      margin-top: 10px;
      width: 100%;
      .hostSearch_head {
        width: 100%;
        color: black;
        font-size: 20px;
      }
      .hostSearch_li_content {
        width: 100%;
        font-size: 14px;
        color: rgb(255, 66, 66);
        .hostSearch_li {
          float: left;
          margin-top: 10px;
          width: 48%;
          overflow: hidden;
          text-overflow: ellipsis;

          white-space: nowrap;
          height: 20px;
        }
      }
    }
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
            border-radius: 50%;
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
            width: 100%;
            height: 20px;
            line-height: 20px;
            color: #333;
            font-size: 14px;
            overflow: hidden;
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
}
</style>

<script>
import { Toast } from "mint-ui";
import myaxios, { getSearchURL, getHostPostURL } from "@/tools/myaxios.js";
import mui from "@/../lib/mui/js/mui.js";
export default {
  data: function() {
    return {
      topics: "",
      hostSearch: "",
    };
  },
  methods: {
    async searchBtn() {
      var searchContent = this.$refs.searchContent.value;
      var obj = {
        searchContent: searchContent
      };
      let result = await myaxios("POST", getSearchURL, obj);
      if (result.data.code == 101) {
        this.topics = result.data.topics;
      }
    }
  },
  async created() {
    let result = await myaxios("GET", getHostPostURL);
    this.hostSearch = result.data.topics.slice(0, 8);
  },
  mounted() {
    var header_title = document.getElementsByClassName("mint-header-title")[0];
    header_title.innerText = "搜索";
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>