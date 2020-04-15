import {api} from '@/common/request'
import req from '@/common/request'

//根据文章ID获取文章内容
export function getArticleMessageById(data){
    return req('post',api+'/article/getArticleList',data)
}