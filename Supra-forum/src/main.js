import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/../lib/mui/css/mui.css'
import '@/../lib/mui/css/icons-extra.css'
import '@/../lib/mui/js/mui.js'
import Vant from 'vant';
Vue.use(Vant);
import 'vant/lib/index.css';

import 'lib-flexible'

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
let options = {
  fullscreenEl: false
};
Vue.use(preview, options)

import 'vue-image-swipe/dist/vue-image-swipe.css'
import VueImageSwipe from 'vue-image-swipe'
Vue.use(VueImageSwipe)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


import moment from 'moment'
Vue.filter('dateFormat', function(msg, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(msg).format(pattern)
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')