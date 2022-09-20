import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ui from './components/index.js'
Vue.config.productionTip = false
Vue.use(ui)
new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
