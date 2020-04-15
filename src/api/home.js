import req from '../common/request'
import {api} from '../common/request'

//导航路由获取
export function getRouting(data){
    return req('post',api+'Routing/getRouting',data)
}

//文章获取
export function getArticle(data){
    return req('post',api+'/article/getArticleList',data)
}

//轮播图获取
export function getCarousel(data){
    return req('post',api+'/Carousel/getCarousel',data)
}

//热门标签获取
export function getTagesArr(data){
    return req('post',api+'/hot_flag/getHotFlag',data)
}