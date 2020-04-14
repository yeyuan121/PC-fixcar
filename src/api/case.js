import {api} from '@/common/request'
import req from '@/common/request'

//获取所有文章
export function getAllArticleList(data){
    return req('post',api+'/article/getArticleList ',data)
}