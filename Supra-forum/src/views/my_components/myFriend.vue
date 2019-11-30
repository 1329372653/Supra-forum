<template>
  <div>
    <div class="friends_content">
      <div class="mui-scroll-wrapper mui-scroll_content">
        <div class="mui-scroll">
          <div class="friends_item" v-for="friend in friends" :key="friend._id">
            <div class="friends_item_left">
              <img :src="'http://localhost:8899'+friend.friend_avatar" alt />
            </div>
            <div class="friends_item_mid">
              <div class="friends_item_nickname">{{friend.friend_nickname}}</div>
              <div class="friends_item_createdTime">关注时间：{{friend.created_time | dateFormat}}</div>
            </div>
            <div class="friends_item_right">
              <div class="friends_item_btn1" @click="deleteFriend(friend.friendID)">取消关注</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.friends_content {
  width: 100%;
  height: 100%;
  .friends_item {
    width: 100%;
    height: 80px;
    margin-top: 5px;
    .friends_item_left {
      float: left;
      width: 20%;
      height: 80px;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .friends_item_mid {
      float: left;
      width: 60%;
      height: 80px;
      .friends_item_nickname {
        width: 100%;
        height: 50%;
        line-height: 40px;
        text-align: center;
      }
      .friends_item_createdTime {
        width: 100%;
        height: 50%;
        line-height: 40px;
        text-align: center;
        font-size: 10px;
      }
    }
    .friends_item_right {
      float: left;
      width: 20%;
      height: 80px;
      .friends_item_btn1 {
        width: 100%;
        height: 50%;
        line-height: 80px;
        text-align: center;
        color: blue;
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
  getsessionURL,
  getMyFriendsURL,
  deleteFriendURL
} from "@/tools/myaxios.js";
import mui from "@/../lib/mui/js/mui.js";
export default {
  data: function() {
    return {
      user: "",
      friends: ""
    };
  },
  methods: {
    async deleteFriend(friendID) {
      var obj = {
        friend_id: friendID
      };
      let result = await myaxios("POST", deleteFriendURL, obj);
      if (result.data.code == 101) {
        Toast("取消关注成功！");
        var obj = {
          userID: this.user._id
        };
        let result2 = await myaxios("POST", getMyFriendsURL, obj);
        this.friends = result2.data.friends;
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
      let result2 = await myaxios("POST", getMyFriendsURL, obj);
      this.friends = result2.data.friends;
    } else {
      this.$router.push("/my");
    }
  },
  mounted() {
    var header_title = document.getElementsByClassName("mint-header-title")[0];
    header_title.innerText = "我的关注"
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>