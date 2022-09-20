import Vue from 'vue'
import VueRouter from 'vue-router'

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
Vue.use(VueRouter)

export default new VueRouter({
  // 配置路由
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: () => import('@/pages/Home'),
      meta: { show: true },
      children: [
        { path: '/', component: () => import('@/pages/Main'), meta: { show: true } },
        { path: '/login', component: () => import('@/pages/Login') },
        { path: '/register', component: () => import('@/pages/Register') },
        {
          path: '/search/:keyword?',
          name: 'search',
          component: () => import('@/pages/Search'),
          meta: { show: true },
          props: true
        }
      ]
    }
  ]
})
