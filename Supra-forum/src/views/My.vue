<template>
  <div>
    <div class="content">
      <div class="header">
        <div class="header_bg">
          <img :src="'http://localhost:8899'+user.avatar" alt="img" class="bg">
        </div>
        <div class="header_avatar" v-if="user !=''">
          <router-link to="/my/person">
            <img :src="'http://localhost:8899'+user.avatar" alt />
          </router-link>
          <router-link to="/my/person" tag="div">
            <div class="header_nickname">{{user.nickname}}</div>
          </router-link>
        </div>
        <div class="header_login_content" v-if="user ==''">
          <img src="../assets/headimg.png" alt />
          <router-link to="/login" tag="div">
            <div class="header_login_btn">登录</div>
          </router-link>
          <router-link to="/register">
            <div class="header_register_btn">注册</div>
          </router-link>
        </div>
      </div>
      <div class="my_mid_content">
        <ul>
          <li class="li_a">
            <router-link to="/my/myPost" tag="div">
              <div v-if="topics" class="li_a_num">{{topics.length}}</div>
              <div v-else-if="topics" class="li_a_num">0</div>发表
            </router-link>
          </li>
          <li>
            <div>|</div>|
          </li>
          <li class="li_a">
            <router-link to="/my/myFriend" tag="div">
              <div v-if="friends" class="li_a_num">{{friends.length}}</div>
              <div v-else-if="friends" class="li_a_num">0</div>关注
            </router-link>
          </li>
          <li>
            <div>|</div>|
          </li>
          <li class="li_a">
            <router-link to="/my/myFans" tag="div">
              <div v-if="Fans" class="li_a_num">{{Fans.length}}</div>
              <div v-else-if="Fans" class="li_a_num">0</div>粉丝
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mybio">{{user.bio}}</div>
      <div class="my_cell">
        <ul>
          <li>
            <router-link to="/my/myPost" tag="div">
              <div class="my_cell_li_img">
                <img src="../assets/icon/my_topic_icon.png" alt />
              </div>
              <div class="my_cell_li_div">我的帖子</div>
            </router-link>
          </li>

          <li>
            <router-link to="/my/myComment" tag="div">
              <div class="my_cell_li_img">
                <img src="../assets/icon/my_comment_icon.png" alt />
              </div>
              <div class="my_cell_li_div">我的评论</div>
            </router-link>
          </li>
          <li>
            <router-link to="/my/myCollection" tag="div">
              <div class="my_cell_li_img">
                <img src="../assets/icon/my_like_icon.png" alt />
              </div>
              <div class="my_cell_li_div">我的收藏</div>
            </router-link>
          </li>
          <li>
            <router-link to="/my/myFriend" tag="div">
              <div class="my_cell_li_img">
                <img src="../assets/icon/my_follow_icon.png" alt />
              </div>
              <div class="my_cell_li_div">我的关注</div>
            </router-link>
          </li>
        </ul>
      </div> 
           
      <div class="my_cell_item">
        <router-link to="/about" tag="div">
          <i class="mui-icon mui-icon-phone"></i>
          <label>关于我们</label>
          <div class="icon_goBtn">
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>
        </router-link>
      </div>

      <div class="my_cell_item">
        <router-link to="/setting" tag="div">
          <i class="mui-icon mui-icon-gear"></i>
          <label>设置</label>
          <div class="icon_goBtn">
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang='less'>
.content {
  width: 100%;
  .header {
    position: relative;
    width: 100%;
    height: 200px;

    .header_bg {
      width: 100%;
      height: 270px;
      position: relative;
      left: 0;
      top: 0;
      background-size: cover;
      opacity: 1;
       .bg {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            overflow: hidden;
            -webkit-filter: blur(8px);
            -moz-filter: blur(8px);
            -o-filter: blur(8px);
            -ms-filter: blur(8px);
            filter: blur(20px);
        }
    }
    .header_avatar {
      position: absolute;
      width: 100%;
      height: 200px;
      left: 0;
      top: 0;
      img {
        width: 100px;
        height: 100px;
        border: 1px solid transparent;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -70%);
      }
      .header_nickname {
        text-align: center;
        line-height: 50px;
        width: 200px;
        height: 50px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, 70%);
        font-size: 20px;
        font-weight: 400;
        overflow: hidden;
        color: white;
      }
    }
    .header_login_content {
      position: absolute;
      width: 100%;
      height: 200px;
      left: 0;
      top: 0;
      img {
        width: 100px;
        height: 100px;
        border: 1px solid transparent;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 35%;
        transform: translate(-50%, -50%);
      }
      .header_login_btn {
        position: absolute;
        left: 38%;
        top: 70%;
        color: blue;
      }
      .header_register_btn {
        position: absolute;
        left: 52%;
        top: 70%;
        color: blue;
      }
    }
  }
  .my_mid_content {
    border: 1px solid transparent;
    width: 100%;
    height: 70px;
    background: rgb(204, 204, 223);
    border-radius: 10px;
    ul {
      
      list-style: none;
      padding: 0;
      margin: 0;
      margin-top: 10px;
      display: flex;
      li {
        display: inline-block;
      }
      .li_a {z-index: 999;
        font-size: 14px;
        color: black;
        font-weight: bold;
        flex: 1;
        width: 80px;
        height: 50px;
        text-align: center;
      }
    }
  }
  .mybio{
    height: 30px;
    width: 100%;
    line-height: 30px;
    font-size: 14px;
    color: grey;
    padding-left: 8px;
    background-color: white;
    z-index: 999;
    overflow: hidden;/*超出部分隐藏*/
    text-overflow:ellipsis;/* 超出部分显示省略号 */
    white-space: nowrap;/*规定段落中的文本不进行换行 */
  }
  .my_cell {
    width: 100%;
    height: 100px;
    background: white;
    border-radius: 10px;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      margin-left: 10px;
      padding-top: 20px;
      display: flex;
    }
    li {
      flex: 1;
      display: inline-block;
      font-size: 10px;
      .my_cell_li_img {
        position: relative;
        width: 100%;
        height: 40px;
        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
        }
      }
      .my_cell_li_div {
        width: 100%;
        text-align: center;
      }
    }
  }
  .my_cell_item {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    margin-top: 2px;
    background: white;
    .mui-icon {
      float: left;
      line-height: 50px;
      text-align: center;
      color: red;
      font-size: 30px;
      width: 10%;
    }
    label {
      float: left;
      display: block;
      width: 80%;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
    .icon_goBtn {
      float: left;
      height: 50x;
      .mui-icon-arrowright {
        font-size: 12px;
        color: black;
      }
    }
  }
}
</style>

<script>
import { Toast } from "mint-ui";
import myaxios, {
  getsessionURL,
  getMyTopicsURL,
  getMyFriendsURL,
  getMyFansURL
} from "@/tools/myaxios.js";
export default {
  data: function() {
    return {
      user: [],
      topics: [],
      friends: [],
      Fans: []
    };
  },
  methods: {
  },
  async created() {
    let result = await myaxios("GET", getsessionURL);
    if (result.data.user) {
      this.user = result.data.user;
      var obj = {
        userID: this.user._id
      };
      let result2 = await myaxios("POST", getMyTopicsURL, obj);
      if (result2.data.code == 101) {
        this.topics = result2.data.topics;
      }
      let result3 = await myaxios("POST", getMyFriendsURL, obj);
      if (result2.data.code == 101) {
        this.friends = result3.data.friends;
      }
      let result4 = await myaxios("POST", getMyFansURL, obj);
      if (result4.data.code == 101) {
        this.Fans = result4.data.Fans;
      }
    }
  },
  mounted(){
    var header_title = document.getElementsByClassName("mint-header-title")[0];
    header_title.innerText = "我的"
  }
};
</script>