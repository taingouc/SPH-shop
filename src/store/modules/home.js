import { getCategoryList } from '@/api/index.js'
export default {
  // 定义数据
  state: {
    categoryList: []
  },
  // 同步方法
  mutations: {
    CategoryList(state, val) {
      state.categoryList = val
    }
  },
  // 异步方法
  actions: {
    async CategoryListAsync({ commit }) {
      const { data } = await getCategoryList()
      data.pop()
      commit('CategoryList', data)
    }
  },
  // 计算属性
  getters: {},
  // 命名空间 (模块化中必不可少)
  // 命名空间的作用：为了让当前vuex模块里面的状态名和函数名和其他空间的命名不产生冲突
  namespaced: true
}
