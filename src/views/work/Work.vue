<template>
    <div class='work'>
        <CommonComponent 
        item-title='办公设备维修具体有哪些项目?'
        :item-arr='arr'
        >
            <template v-slot:slottop>
                喷墨打印机，激光打印机，扫描仪，投影仪，办公耗材等
            </template>
        </CommonComponent>
        <CommonMsgComponent />
    </div>
</template>

<script>
import CommonComponent from '../../components/content/commonPartOne/CommonPartOne'
import CommonMsgComponent from '../../components/content/commonMessageComponent/index'

export default {
data() {
    return {
        arr:
            [
                '不通电',
                '卡纸',
                '打印断线',
                '断针',
                '跳行',
                '字位异常',
                '错位',
                '打印空白',
                '进纸异常',
                '不联机',
                '电路板短路',
                '主芯片损坏',
                '不清晰',
                '开机报错',
                '机器清洗',
                '换黑盒',
                '模糊',
                '颜色不正常',
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