<template>
    <div class='monitor'>
        <CommonComponent
        item-title='监控设备维修具体有哪些项目?'
        :item-arr='arr'
        >
            <template v-slot:slotbottom>
                <div>因环境因素，需以现场实际情况为准，与技术员联系</div>
            </template>
        </CommonComponent>
        <CommonMessageComponent />
    </div>
</template>

<script>
import CommonComponent from '../../components/content/commonPartOne/CommonPartOne'
import CommonMessageComponent from '../../components/content/commonMessageComponent/index'

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