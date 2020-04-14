import {api} from '../common/request'
import req from '../common/request'

//获取维修案例
export function getFixCase(data){
    return req('post',api+'/article/getArticleList ',data)
}