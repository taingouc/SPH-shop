import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ui from './components/index.js'
import store from '@/store/index.js'
import '@/mock/mockServe.js'
Vue.config.productionTip = false

Vue.use(ui)
new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
