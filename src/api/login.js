import {api} from '@/common/request'
import req from '@/common/request'

//账号密码登录登陆
export function loginFunc(data){
    return req('post',api+'/login/login',data)
}

//短信登录
export function phoneCodeLogin(data){
    return req('post',api+'/login/smsLogin',data)
}