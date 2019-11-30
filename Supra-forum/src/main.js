import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/../lib/mui/css/mui.css'
import '@/../lib/mui/css/icons-extra.css'
import '@/../lib/mui/js/mui.js'
import { Uploader } from 'vant';
Vue.use(Uploader);
import 'vant/lib/index.css';

import 'lib-flexible'

import 'vue-image-swipe/dist/vue-image-swipe.css'
import VueImageSwipe from 'vue-image-swipe'
Vue.use(VueImageSwipe)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

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