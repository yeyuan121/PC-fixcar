import req from '../common/request'
import {api} from '../common/request'

//导航路由获取
export function getRouting(data){
    return req('post',api+'Routing/getRouting',data)
}