import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MVideo from './components/m-video.vue'
import '@/pluging/element'
Vue.config.productionTip = false
Vue.component('m-video', MVideo)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
