import {api} from '@/common/request'
import req from '@/common/request'

//获取关于我们数据
export function getAboutUsData(data){
    return req('post',api+'/about/getAbout',data)
}