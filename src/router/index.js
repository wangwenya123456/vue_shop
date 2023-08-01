import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import List from '@/views/List.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: (data) => {
      let url = {
        path: '/list',
        query: {
          id: '2'
        }
      }
      return url;
    },
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/list',
        query: {
          id: '2'
        },
        component: List,
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

//挂载路由导航守卫
// to:将要返问的路径，from：代表从那个路径跳转而来，next：放行函数
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     return next()
//   } else {
//     if (!window.sessionStorage.getItem('loginToken')) {
//       return next('/login');
//     } else {
//       return next();
//     }
//   }
// })
export default router
