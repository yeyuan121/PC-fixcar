<template>
    <div class='monitor'>
        <CommonComponent
        item-title='监控设备维修具体有哪些项目?'
        :item-arr='arr'
        :history-recode-string='historyArr'
        >
            <template v-slot:slotbottom>
                更多的故障问题您可以直接联系我们！<span> 0592-6666915</span>
            </template>
        </CommonComponent>
        <CommonMessageComponent 
        :fix-arr='fixArray'
        :wxal-array='articleArray'
        />
    </div>
</template>

<script>
import CommonComponent from '../../components/content/commonPartOne/CommonPartOne'
import CommonMessageComponent from '../../components/content/commonMessageComponent/index'

import {getCase,} from '@/api/monitor'

export default {
data() {
    return {
        arr:
            [
                '同轴监控',
                '数字监控',
                '人脸识别监控',
                '家电无线监控',
                '停车道闸系统',
                '门禁考勤系统',
            ],
        fixArray:
            [
                {
                    header:'同轴监控',
                    content:'他们的原理都是点对点的连接，即每个一监控探头上的接线需要直接连接到录像机的端口才可以输出画面显示。如果不显示一般要检查四点：一、中间连接的视频线跟电源线是否有断掉 二、监控探头是否有通电 三、视频线与探头的接头是否有老化 四、探头本身损坏'
                },
                {
                    header:'数字监控',
                    content:'数字监控俗称NVR，主要是通过网络传输线跟交换机转换，把信号传输到录像主机上，通过监视器显示出来，他不同于早期需要点对点的传输，而是可以通过局域网内获取，每一个数字探头对应需要分配一个IP地址。数字监控提高了视频的清晰度，也很大节约了线材成本跟人工成本。如果不显示一般要检查以下几点：一、探头本身是否损坏 二、探头是否通电红外对是否会亮 三、探头与交换机之间的连接线是否有损坏 四、IP地址是否有冲突'
                },
                {
                    header:'家用无线探头',
                    content:'无线探头基本上是通过连接家里的WIFI进行网络配对，通过手机远程来观看视频，如果手机看不到视频，提示设备不在线，一、检查无线探头是否通电，电源有没有接好 二、需要检查家里的路由器是否有通电 三、家里的网络是否正常上网 四、WIFI用户名或密码是否有更改过'
                },
            ],
        articleArray:[],//维修案例数据数组
        historyArr:
            [
                {
                    name:'首页 >',
                    url:'/'
                },
                {
                    name:'监控设备',
                    url:'jksb'
                }
            ]
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
components: {CommonComponent,CommonMessageComponent,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    let cid = this.$route.meta
    let type = 2
    getCase({cid,type,}).then(res=>{
        if(res.data.code == 1){
            this.articleArray = res.data.data
        }else{
            alert('获取数据失败')
        }
    })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .monitor{
        background: rgb(242,245,249);
    }
</style>