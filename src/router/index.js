import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  },
]

const router = new VueRouter({
  routes
})

//挂载路由导航守卫
// to:将要返问的路径，from：代表从那个路径跳转而来，next：放行函数
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  } else {
    if (!window.sessionStorage.getItem('loginToken')) {
      return next('/login');
    } else {
      return next();
    }
  }
})
export default router
