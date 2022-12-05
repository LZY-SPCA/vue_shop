import Vue from 'vue'
import VueRouter from 'vue-router'
import myLogin from '../components/myLogin.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: 'login'
  },
  {
    path: '/login', component: myLogin
  },
  {
    path: '/home', component: Home
  }
]
const router = new VueRouter({
  routes
})

//挂载路由导航守卫
router.beforeEach((to, from, next)=>{
  if(to.path === '/login') return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem('token');
  if(!tokenStr) return next('/login');
  next();
})

export default router
