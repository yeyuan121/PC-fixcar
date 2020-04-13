import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(ElementUI)

import './common/rem'
import './common/request'
import 'normalize.css' 

//引入api文件
import './api/index'

Vue.config.productionTip = false

axios.post('http://api.luodiqian.com/api/Routing/getRouting')
.then(response => {
  console.log(response.data.data,333)
  const routeArray = response.data.data
  const routes = []
  for(const item of routeArray){
    let path = ''
    if(item.name == '首页'){
      path = '../views/home/Home.vue'
    }else if(item.name == '电脑维修'){
      path = '../views/computer/Computer.vue'
    }else if(item.name == '网络维修'){
      path = '../views/network/Network.vue'
    }else if(item.name == '办公设备'){
      path = '../views/work/Work.vue'
    }else if(item.name == '监控设备'){
      path = '../views/monitor/Monitor.vue'
    }else if(item.name == '其他产品'){
      path = '../views/other/Other.vue'
    }else if(item.name == '服务'){
      path = '../views/serve/Serve.vue'
    }else if(item.name == '案例资讯'){
      path = '../views/case/Case.vue'
    }else if(item.name == '关于我们'){
      path = '../views/about/About.vue'
    }else{
      return
    }
    routes.push({
      path:item.alias,
      name:item.name,
      meta:item.id,
      component:() => import(path)
    })
  }
  console.log(routes,444)
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
.catch(error => {
  console.log(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
