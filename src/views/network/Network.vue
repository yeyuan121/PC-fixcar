<template>
    <div class='network'>
        <CommonComponent 
        item-title='网络维修具体有哪些项目?'
        :item-arr='arr'
        />
    </div>
</template>

<script>
import CommonComponent from '../../components/content/commonPartOne/CommonPartOne'

export default {
data() {
    return {
        arr:
        [
            '网络突然中断',
            '网卡误操作被禁用',
            '网线接触不良',
            '网卡插错',
            '交换机停止工作',
            '网络正常,邮件发送出现异常'
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
components: {CommonComponent,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .network{
        background: rgb(242,245,249);
    }
</style>