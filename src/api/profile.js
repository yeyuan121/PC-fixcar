import {api} from '@/common/request'
import req from '@/common/request'

//修改个人资料
export function modifyUserMessage(data){
    return req('post',api+'/login/saveInfo',data)
}

//修改个人登录密码
export function modifyPassword(data){
    return req('post',api+'/login/resetPw',data)
}

//获取个人订单
export function getMyOrder(data){
    return req('post',api+'/login/getOrder',data)
}
