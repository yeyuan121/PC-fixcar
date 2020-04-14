<template>
    <div class='computer'>
        <CommonPartComponent
        item-title='电脑维修具体有哪些项目?'
        :item-arr='itemArr'
        :history-recode-string='historyRecodeArr'
        >
            <template v-slot:slotbottom>
                更多的故障问题您可以直接联系我们！<span> 0592-6666915</span>

            </template>
        </CommonPartComponent>
        <CommonMessageComponent
        :fix-arr='fixArray'
        :wxal-array='articleObject[2]'
        />
    </div>
</template>

<script>
import CommonPartComponent from '../../components/content/commonPartOne/CommonPartOne'
import CommonMessageComponent from '../../components/content/commonMessageComponent/index'

import {getArticleArr,} from '@/api/computer.js'

export default {
data() {
    return {
            itemArr:
                [
                    {name:'系统安装',img:require('../../assets/img/c1.png'),},
                    {name:'开机无反应/黑屏',img:require('../../assets/img/c2.png')},
                    {name:'开关机速度慢',img:require('../../assets/img/c3.png')},
                    {name:'自动关机',img:require('../../assets/img/c4.png')},
                    {name:'电脑死机/蓝屏',img:require('../../assets/img/c5.png')},
                    {name:'电脑中毒',img:require('../../assets/img/c6.png')},
                    {name:'电脑进水',img:require('../../assets/img/c7.png')},
                    {name:'对话框报错',img:require('../../assets/img/c8.png')},
                    {name:'忘记密码解密',img:require('../../assets/img/c9.png')},
                    {name:'不能上网',img:require('../../assets/img/c10.png')},
                    {name:'网页打不开',img:require('../../assets/img/c11.png')},
                    {name:'更换配件',img:require('../../assets/img/c12.png')},
                    {name:'驱动丢失',img:require('../../assets/img/c13.png')},
                    {name:'键盘/鼠标失灵',img:require('../../assets/img/c14.png')},
                    {name:'无法识别设备',img:require('../../assets/img/c15.png')},
                    {name:'文件丢失',img:require('../../assets/img/c16.png')},
                    {name:'电脑没有声音',img:require('../../assets/img/c17.png')},
                    {name:'系统文件损坏',img:require('../../assets/img/c18.png')},
                ],
            historyRecodeArr:
                [
                    {
                        name:'首页 > ',
                        url:'/'
                    },
                    {
                        name:'电脑维修',
                        url:'/computer'
                    }
                ],
            fixArray:
                [
                    {
                        header:'电脑忘记密码:',
                        content:'按shift键不放，点击“开关机键”，点击“重启”，再次点击“重启”，松开shift键，点击“疑难解答”。点击“高级选项”中的“启动设置”，点击“重启”。按下f6，启用带命令提示符的安全模式即可进入桌面。'
                    },
                    {
                        header:'插入U盘后无反应:',
                        content:'更换接口，若U盘仍是无反应，可将其插入到其他电脑的USB接口尝试，如果在其他电脑上能够正常读取，则问题出在电脑设置上，相反，若在其他电脑上仍是无法读取，则大有可能是U盘出现问题了。若是电脑设置的原因，打开“运行”对话框，输入命令“gpedit.msc”打开“组策略”管理器。依次展开“计算机配置”→“管理模块”→“系统”，然后双击“禁用自动播放”项。在打开的窗口中，将其设置为“已禁用”状态 ，并点击“确定”完成设置'
                    },
                    {
                        header:'电脑能上QQ打不开网页:',
                        content:'鼠标点击电脑左下角“开始”，找到“运行”并点击，输入“cmd”，点击“确定”。进入到命令提示符窗口，输入“ipconfig/flushdns”，按“回车”刷新的DNS地址的解析缓存，关闭窗口。点击电脑左下角“开始”，选择“控制面板”，找到“网络和共享中心”并点击进入，进入之后点击左边一栏的“更改适配器设置”右击“无线网络连接”，选择“属性”，点击此链接使用下列项目中的“Internet协议版本4点击“属性”，选中“使用下面的DNS服务器地址”，把DNS首选服务器参数修改为“8.8.8.8”，点击“确定”即可。'
                    },
                    {
                        header:'电脑温度过高引起卡顿:',
                        content:'后台运行的程序过多，超出了CPU承受的范围。也有可能是电脑机箱散热不好所导致的可以利用一些清理软件将后台不必要的程序停止运行，和清理一下系统垃圾。关于机箱散热，我们可以对其做一些简单的维护，如清理一下机箱内部的灰尘，特别是CPU以及散热风扇上的灰尘。'
                    }
                ],
            articleObject:{
                1:[],//案例资讯
                2:[],//维修案例
                3:[],//行业资讯
            }
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
components: {CommonPartComponent,CommonMessageComponent,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    let cid = this.$route.meta
    getArticleArr({cid}).then(res=>{
        if(res.data.code == 1){
            for(let item of res.data.data){
                if(item.type == 1){
                    this.articleObject[1].push(item)
                }else if(item.type == 2){
                    this.articleObject[2].push(item)
                }else if(item.type == 3){
                    this.articleObject[3].push(item)
                }else{
                    break
                }
            }
            console.log(this.articleObject)
        }else{
            alert('获取文章失败')
        }
    })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .computer{
        background: rgb(242,245,249);
        
    }
</style>