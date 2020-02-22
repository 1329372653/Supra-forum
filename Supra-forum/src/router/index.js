import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import HotPost from '@/views/hotPost.vue'
import My from '@/views/My.vue'
import Login from '@/components/login.vue'
import Register from '@/components/register.vue'
import Setting from '@/views/my_components/setting.vue'
import About from '@/views/my_components/about.vue'
import Person from '@/views/my_components/person.vue'
import modifyPerson from '@/views/my_components/modifyPerson.vue'
import Post from '@/views/post_components/post.vue'
import TopicDetail from '@/views/home_components/topic_detail.vue'
import MyPost from '@/views/my_components/myPost.vue'
import MyComment from '@/views/my_components/myComment.vue'
import MyFriend from '@/views/my_components/myFriend.vue'
import ModifyPassword from '@/views/my_components/modifyPassword.vue'
import MyCollection from '@/views/my_components/myCollection.vue'
import MyFans from '@/views/my_components/myFans.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:Home
  },
  {
    path:"/search",
    component:Search
  },
  {
    path:"/hotPost",
    component:HotPost
  },
  {
    path:"/my",
    component:My,
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/register",
    component:Register
  },
  {
    path:"/setting",
    component:Setting,
  },
  {
    path:"/about",
    component:About
  },
  {
    path:"/my/person",
    component:Person
  },
  {
    path:"/my/person/modifyPerson",
    component:modifyPerson
  },
  {
    path:"/post",
    component:Post
  },
  {
    path:'/topic/detail/:id',
    component:TopicDetail
  },
  {
    path:'/my/myPost',
    component:MyPost
  },
  {
    path:'/my/myComment',
    component:MyComment
  },
  {
    path:'/my/myFriend',
    component:MyFriend
  },
  {
    path:'/my/myCollection',
    component:MyCollection
  },
  {
    path:'/setting/modifyPassword',
    component:ModifyPassword
  },
  {
    path:'/my/myFans',
    component:MyFans
  },

]

const router = new VueRouter({
  routes
})

export default router
