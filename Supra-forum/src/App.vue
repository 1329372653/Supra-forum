<template>
  <div id="app" class="container">
    <mt-header fixed title="Supra!" v-if="ifshow">
      <a href="#" @click.prevent="goback" v-if="flag" slot="left">
        <mt-button icon="back">返回</mt-button>
      </a>
      <mt-button
        v-show="$route.path==='/'"
        class="mui-icon mui-icon-plusempty"
        slot="right"
        @click="toggle"
      ></mt-button>
    </mt-header>
    <div class="hide_content" v-show="inshow">
      <ul>
        <li>
          <router-link to="/post">
            <label class="mui-icon mui-icon-compose"></label>
            <div class="hide_li_font">发布帖子</div>
          </router-link>
        </li>
        <li>
          <router-link to="/hotPost">
            <label class="mui-icon mui-icon-weibo"></label>
            <div class="hide_li_font">热门帖子</div>
          </router-link>
        </li>
        <li>
          <router-link to="/my/myCollection">
            <label class="mui-icon mui-icon-chatboxes"></label>
            <div class="hide_li_font">我的收藏</div>
          </router-link>
        </li>
      </ul>
    </div>

    <transition :name="transitionName">
      <router-view></router-view>
    </transition>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <router-link to="/" tag="span">
          <i class="mui-icon mui-icon-home"></i>
          <br />主页
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="hotPost">
        <router-link to="/hotPost" tag="span">
          <i class="mui-icon mui-icon-weibo"></i>
          <br />热帖
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="member">
        <router-link to="/search" tag="span">
          <i class="mui-icon mui-icon-search"></i>
          <br />搜索
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="search">
        <router-link to="/my" tag="span">
          <i class="mui-icon mui-icon-contact"></i>
          <br />我的
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selected: "home",
      //控制返回按钮是否需要显示
      flag: false,
      //动画的名字
      transitionName: "",
      //控制当前动画的方向(是否是返回)
      isBack: false,
      inshow: false,
      post: true,
      ifshow: true
    };
  },
  methods: {
    goback() {
      // debugger
      //回退到前一个页面
      this.isBack = true;
      this.$router.go(-1);
    },
    toggle() {
      this.inshow = !this.inshow;
    }
  },
  watch: {
    "$route.path": function(newVal, oldVal) {
      var routerArr = ["/", "/search", "/hotPost", "/my"];
      if (routerArr.includes(newVal)) {
        this.flag = false;
      } else {
        this.flag = true;
      }
      var routerArr2 = ["/"];
      if (routerArr.includes(newVal)) {
        this.inshow = false;
      } else {
        this.inshow = false;
      }
    },
    //控制动画的
    $route(to, from) {
      var routerArr = ["/", "/search", "/hotPost", "/my","/post","/topic/detail"];
      if (this.isBack == true) {
        this.transitionName = "slide-right";
      } else {
        //当路由在四个tabarItem之间切换的时候不要动画
        var path = to.path.substring(0,13)//剪接路径
        if (routerArr.includes(path)) {
          this.transitionName = "";
        } else {
          this.transitionName = "slide-left";
        }
      }
      this.isBack = false;
    }
  }
};
</script>


<style lang="less">
/*解决 Unable to preventDefault inside passive event listener due to target being treated as passive 警告问题*/
* {
  touch-action: none;
}
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
html,
body {
  height: 100%;
  width: 100%;

  width: 100%;
  font-family: "华文细黑";
}

.container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow: hidden;
  height: 100%;
}
.mint-header {
  background-color: white !important;
  color: black !important;
  box-shadow: 0px 0px 10px -10px black !important;
}
.mint-tabbar {
  z-index: 999 !important;
  box-shadow: 0px 0px 10px -5px black !important;
}
//.mint-tab-item默认的文字颜色
.mint-tab-item {
  color: gray;
  // box-shadow: 0px -5px 20px -10px black;
  span {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
}

.mui-icon {
  margin-bottom: 3px;
}
.router-link-exact-active .router-link-active {
  position: relative;
}
.mint-tabbar > .mint-tab-item.is-selected {
  color: rgb(255, 66, 66);
}
.mint-tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
}

/*左边进入*/
.slide-left-enter {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
/*左边离开*/
.slide-left-leave-to {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
  position: absolute;
  width: 100%;
}

/*右边进入*/
.slide-right-enter {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
/*右边离开*/
.slide-right-leave-to {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
  position: absolute;
  width: 100%;
}

/*进入退出动画*/
.slide-right-enter-active,
.slide-left-enter-active,
.slide-right-leave-active,
.slide-left-leave-active {
  transition: transform 0.5s ease;
}
</style>
