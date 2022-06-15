import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store_how2'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store // 축약 store:store
}).$mount('#app')
