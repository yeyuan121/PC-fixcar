import {api} from '@/common/request'
import req from '@/common/request'

//登陆
export function loginFunc(data){
    return req('post',api+'/login/login',data)
}