import {api} from '../common/request'
import req from '../common/request'

//下单
export function toOrder(data){
    return req('post',api+'/order/PlaceTheOrder',data)
}

//故障类型获取
export function getFault(data){
    return req('post',api+'/order/getFault',data)
}

