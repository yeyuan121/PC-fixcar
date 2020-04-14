import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueRouter from 'vue-router'

import Home from '@/views/home/Home.vue'
import Computer from './views/computer/Computer.vue'
import Work from './views/work/Work.vue'
import Monitor from './views/monitor/Monitor.vue'
import Other from './views/other/Other.vue'
import Serve from './views/serve/Serve.vue'
import Case from './views/case/Case.vue'
import About from './views/about/About.vue'
import Network from './views/network/Network.vue'
import Login from './views/login/Login.vue'
import Register from './views/register/Register.vue'
import Profile from './views/profile/Profile.vue'
import Order from './views/profile/component/OrderList.vue'
import Detail from './views/profile/component/Detail.vue'
import Changepwd from './views/profile/component/ChangePassword'
import Article from './views/article/Article.vue'


Vue.use(VueRouter)
Vue.use(ElementUI)

import './common/rem'
import './common/request'
import 'normalize.css' 

//引入api文件
import './api/index'

Vue.config.productionTip = false

axios.post('http://api.ddctou.net/api/Routing/getRouting')
.then(response => {
  const routeArray = response.data.data
  const routes = []
  for(const item of routeArray){
    let path = null
    if(item.name == '首页'){
      path = Home
    }else if(item.name == '电脑维修'){
      path = Computer
    }else if(item.name == '网络维修'){
      path = Network
    }else if(item.name == '办公设备'){
      path = Work
    }else if(item.name == '监控设备'){
      path = Monitor
    }else if(item.name == '其他产品'){
      path = Other
    }else if(item.name == '服务'){
      path = Serve
    }else if(item.name == '案例资讯'){
      path = Case
    }else if(item.name == '关于我们'){
      path = About
    }else{
      return
    }
    routes.push({
      path:item.alias,
      name:item.name,
      meta:item.id,
      component: path
    })
  }
  routes.push({
    path:'/dl',
    // name:'登录',
    // meta:99,
    component: Login
  })
  routes.push({
    path:'/register',
    // name:'登录',
    // meta:99,
    component: Register
  })
  routes.push({
    path:'/article/:id',
    // name:'登录',
    // meta:99,
    component: Article
  })
  routes.push({
    path:'/profile',
    component: Profile,
    children:
    [
      {
        path:'detail',
        component:Detail
      },
      {
        path:'order',
        component:Order
      },
      {
        path:'changepwd',
        component:Changepwd
      }
    ]
  })
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  // console.log(router)
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
.catch(error => {
  console.log(error)
})

