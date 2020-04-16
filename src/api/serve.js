import {api} from '@/common/request'
import req from '@/common/request'

//获取视频
export function getVideo(data){
    return req('post',api+'/video/getVideo',data)
}

