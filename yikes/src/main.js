import Vue from 'vue'
import Yikes from './Yikes.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.keyCodes.w = 38
Vue.config.keyCodes.s = 40

new Vue({
  router,
  store,
  render: h => h(Yikes)
}).$mount('#app')
