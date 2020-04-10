<template>
    <div class='computer'>
        <CommonPartComponent
        item-title='电脑维修具体有哪些项目?'
        :item-arr='itemArr'
        >
            <template v-slot:slotbottom>
                <div class="computermsg">
                    网页打开速度慢、QQ登不上、显示器文字抖动、风扇声音太响、光驱不读盘、打印机脱机、无法格式化、接口不能使用麦克风/摄像头不能用、下毒软件报错、IE首页被恶意修改、U盘或移动硬盘打不开
                </div>
            </template>
        </CommonPartComponent>
        <CommonMessageComponent 
        />
    </div>
</template>

<script>
import CommonPartComponent from '../../components/content/commonPartOne/CommonPartOne'
import CommonMessageComponent from '../../components/content/commonMessageComponent/index'

export default {
data() {
return {
        itemArr:
            [
                '系统安装',
                '开机无反应/黑屏',
                '开关机速度慢',
                '自动关机',
                '电脑死机/蓝屏',
                '电脑中毒',
                '电脑进水',
                '对话框报错',
                '忘记密码解密',
                '不能上网',
                '网页打不开',
                '更换配件',
                '驱动丢失',
                '键盘/鼠标失灵',
                '无法识别设备',
                '文件丢失',
                '电脑没有声音',
                '系统文件损坏'
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
components: {CommonPartComponent,CommonMessageComponent,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

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