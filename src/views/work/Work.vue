<template>
    <div class='work'>
        <CommonComponent 
        item-title='办公设备维修具体有哪些项目?'
        :item-arr='arr'
        :history-recode-string='historyArr'
        >
            <template v-slot:slottop>
                喷墨打印机，激光打印机，扫描仪，投影仪，办公耗材等
            </template>
            <template v-slot:slotbottom>
                更多的故障问题您可以直接联系我们！<span> 0592-6666915</span>
            </template>
        </CommonComponent>
        <CommonMsgComponent 
        :fix-arr='fixArray'
        :wxal-array='articleArr'
        />
    </div>
</template>

<script>
import CommonComponent from '../../components/content/commonPartOne/CommonPartOne'
import CommonMsgComponent from '../../components/content/commonMessageComponent/index'

import {getCase,} from '@/api/work'

export default {
data() {
    return {
        arr:
            [
                {name:'不通电',img:require('../../assets/img/w1.png')},
                {name:'卡纸',img:require('../../assets/img/w2.png')},
                {name:'打印断线',img:require('../../assets/img/w3.png')},
                {name:'机器清洗',img:require('../../assets/img/w4.png')},
                {name:'电路板短路',img:require('../../assets/img/w5.png')},
                {name:'主芯片损坏',img:require('../../assets/img/w6.png')},
            ],
        fixArray:
            [
                {
                    header:'激光打印机',
                    content:'1.打印出来的效果很淡：这种通常都是没墨粉造成的。2.刚加的墨粉还是显示没墨粉：很多打印机加粉之后都需要清零，清零之后才可以正常使用。3.打印的时候会出现乱码：每个打印机的驱动都会不断更新，要安装符合自己打印机的正版驱动4.打印出空白页：这种情况重启下打印机就可以解决了。'
                },
                {
                    header:'喷墨打印机',
                    content:'1.打印照片的时候会出现一些条形状态：这个时候清洗下打印头就可以解决。2.刚加的墨水还是打印不了：打印机加完墨水之后都要冲洗墨水之后才可以使用。3.打印机效果不是很好：很多人打印照片的时候都觉得效果不是很佳，这是因为打印机默认的打印质量是一般，可以在打印机里面把质量调到最高，效果会马上提示。4.卡纸：对于卡纸的问题很多种：纸张潮湿、细粒垃圾掉进打印机、纸屑存多。轻型卡纸把纸张取出来就可以使用。如果卡纸太频繁就要送维修店处理。'
                },
                {
                    header:'扫描仪',
                    content:'1.扫描一般出现的情况就是打印机可以打印，就是扫描不了。这个情况下我们就得看下安装的是不是正版驱动，正版驱动都是整套驱动一起安装。利用360驱动大师跟驱动精灵，有时候是安装不了扫描驱动的。'
                },
                {
                    header:'针式打印机',
                    content:'1.卡纸：色带干燥、打印机内有其小渣子或纸屑堵住。2.打印测试页没问题发票打印不了：这个时候是默认了打印机，测试页都正常就是打印不了发票，一些软件内部也要选择默认的打印机，比如常见的开票软件。'
                },
                {
                    header:'投影仪',
                    content:'1.开机后几分钟就自动关机：这种情况下通常都是散热不了，打开机箱清理一下散热器或者换个散热器就可以解决了。2.投影出来很模糊：聚焦、电脑的分辨率过高、镜头是否干净都会导致这个问题，依次检测排查就可以解决了。'
                },
            ],
        articleArr:[],
        historyArr:
            [
                {
                    name:'首页 >',
                    url:'/'
                },
                {
                    name:'办公设备',
                    url:'/bgsb'
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
components: {CommonComponent,CommonMsgComponent,},
//生命周期 - 创建完成（可以访问当前this实例）
created() { 
    let cid = this.$route.meta
    let type = 2
    getCase({cid,type}).then(res=>{
        if(res.data.code == 1){
            this.articleArr = res.data.data
        }else{
            alert('请求失败')
        }
    })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .work{
        background: rgb(242,245,249);
    }
</style>