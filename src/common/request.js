import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default function request(method,url,data = {}){
    if(method.toUpperCase() == 'GET'){
        return Vue.axios.get(url)
    }else if(method.toUpperCase() == 'POST'){
        return Vue.axios.post(url,data)
    }else{
        return false
    }
}

export const api = 'http://api.luodiqian.com'