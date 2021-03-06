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
  },
  {
    path:'/serve',
    component:() => import('../views/serve/Serve.vue')
  },
  {
    path:'/register',
    component:() => import('../views/register/Register.vue')
  },
  {
    path:'/case',
    component:() => import('../views/case/Case.vue')
  },
  {
    path:'/profile',
    component:() => import('../views/profile/Profile.vue'),
    children:[
      {
        path:'detail',
        component:() => import('../views/profile/component/Detail.vue')
      },
      {
        path:'changepwd',
        component:() => import('../views/profile/component/ChangePassword.vue')
      },
      {
        path:'order',
        component:() => import('../views/profile/component/OrderList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
