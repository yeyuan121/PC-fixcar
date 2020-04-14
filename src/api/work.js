import {api} from '@/common/request'
import req from '@/common/request'

//获取维修案例
export function getCase(data){
    return req('post',api+'/article/getArticleList ',data)
}