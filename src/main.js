import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'

import axios from 'axios'

Vue.use(ElementUI)
// Vue.prototype.$message = Message

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
