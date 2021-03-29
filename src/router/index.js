import { createRouter, createWebHashHistory } from 'vue-router' 

import login from "./modules/login.js"

let routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    component: () => import('@/views/home'),
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    children: login.routers,
  },
  {
    path: '/nav',
    component: () => import('@/views/navpage'),
  },
]



const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})



export default router
