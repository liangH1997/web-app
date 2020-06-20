import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from "./router"
import store from "./store/"
import api from '@/utils/api'

Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
