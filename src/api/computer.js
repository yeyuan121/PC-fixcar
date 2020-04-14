import {api} from '../common/request'
import request from '../common/request'

//获取文章列表
export function getArticleArr(data){
    return request('POST',api+'/article/getArticleList',data)
}