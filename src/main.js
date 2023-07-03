import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import './plugins/element.js'
// 引入全局样式
import '@/assets/css/global.css'
// 引入第三方图标样式
import '@/assets/fonts/icon.css'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
