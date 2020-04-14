import {api} from '@/common/request'
import req from '@/common/request'

//注册
export function registerFunc(data){
    return req('post',api+'/login/register',data)
}

//发送验证码
export function getCode(data){
    return req('post',api+'/base/sendSMS',data)
}