import { createRouter, createWebHashHistory } from 'vue-router' 


let routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home'),
    meta: { title: '首页', icon: 'home', requiresAuth: false},
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    meta: { title: '登录', icon: 'login', requiresAuth: false},
  },
]



const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})



export default router
