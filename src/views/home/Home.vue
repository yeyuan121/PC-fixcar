<template>
    <div class='container'>
        <Title />
        <div class="flexcontainer">
            <Item 
            v-for="(v,k,index) in itemArr"
            :key="index"
            :text='v.text'
            :title="v.title"
            :path='v.path'
            />
        </div>
        <Notice />
        <Message 
        :data-array-object='arr'
        :tag-arr='tagArray'
        :video-array='videoArray'
        />
    </div>
</template>

<script>
import Title from './component/Title'
import Item from './component/Item'
import Notice from './component/Notice'
import Message from '../layout/component/Message'

import {getRouting,getArticle,getCarousel,getTagesArr,} from '../../api/home'
import {getVideoList} from '@/api/computer.js'

export default {
data() {
    return {
        videoArray:[],
        itemArr:[
            {
                path:require('../../assets/img/7.png'),
                title:'电脑维修',
                text:'系统安装、开机无反应、黑屏、电脑中毒、电脑死机、蓝屏、电脑进水、清灰、无法上网、……',
            },
            {
                path:require('../../assets/img/8.png'),
                title:'网络维修',
                text:'网络突然中断、网卡误操作被禁用、交换机停止工作、网络正常，邮件收发有问题 ……',
            },
            {
                path:require('../../assets/img/9.png'),
                title:'办公设备',
                text:'喷墨打印机，激光打印机，扫描仪，投影仪，办公耗材  ……',
            },
            {
                path:require('../../assets/img/10.png'),
                title:'监控设备',
                text:'同轴监控，数字监控，人脸识别监控，家用无线监控，停车道闸系统，门禁考勤系统 …',
            }
        ],
        arr:
        {
            1:[],
            2:[],
            3:[],
        },
        tagArray:[],//热门标签数组
    }
},
//方法集合
methods: {

},
//接收props传值
props: [],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {Title,Item,Notice,Message,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    getArticle().then(res=>{
        if(res.data.code == 1){
            const array = res.data.data
            for(let item of array){
                this.arr[item.type].push(item)
            }
        }else{
            this.$alert('数据获取失败','提示')
        }
    })
    getTagesArr().then(res=>{
        if(res.data.code == 1){
            this.tagArray = res.data.data
        }else{
            this.$alert('获取热门标签数据失败','提示')
        }
    })
    getVideoList({limit:10,page:1,type:6}).then(res=>{
        if(res.data.code == 1){
            this.videoArray = res.data.data
        }else{
            
        }
    })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .container{
        background: rgb(242, 245, 249);
        .flexcontainer{
            padding: 0 4.64rem;
            display: flex;
            justify-content: space-between;
        }
    }
</style>