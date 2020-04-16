import {api} from '@/common/request'
import req from '@/common/request'

//获取商品
export function getGoodsArr(data){
    return req('post',api+'/Product/getProduct',data)
}