import Vue from 'vue'
import Vuex from 'vuex'

// 引入home模块
import home from './modules/home.js'
// 引入search模块
import search from './modules/search.js'
Vue.use(Vuex)

// 导入页面主体模块vuex
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    search
  }
})
