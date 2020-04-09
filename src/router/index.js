import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path:'/computer',
    component:() => import('../views/computer/Computer.vue')
  },
  {
    path:'/network',
    component:() => import('../views/network/Network.vue')
  },
  {
    path:'/work',
    component:() => import('../views/work/Work.vue')
  },
  {
    path:'/monitor',
    component:() => import('../views/monitor/Monitor.vue')
  },
  {
    path:'/other',
    component:() => import('../views/other/Other.vue')
  },
  {
    path:'/about',
    component:() => import('../views/about/About.vue')
  },
  {
    path:'/login',
    component:() => import('../views/login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
