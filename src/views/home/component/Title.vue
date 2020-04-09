<template>
    <div class='title'>
        <div class="titlediv1">
            <div>价格透明杜绝乱收费</div>
            <div class="line">|</div>
            <div>拥有百位专业工程师</div>
            <div class="line">|</div>
            <div>一小时之内急速上门</div>
        </div>
        <div class="titlediv2">
            了解故障类型高效解决问题
        </div>
    </div>
</template>

<script>
export default {
data() {
return {

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
components: {},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .title{
        height: 2.5rem;
        padding: 0.7rem 6.3rem;
        padding-bottom: 0;
        font-size: 0.14rem;
        .titlediv1{
            display: flex;
            height: 0.36rem;
            justify-content: space-between;
            font-size: 0.16rem;
            color: rgb(177, 183, 190);
        }
        .titlediv2{
            height: 1.43rem;
            padding: 0.7rem 1.5rem;
            box-sizing: border-box;
            text-align: center;
            font-size: 0.3rem;
            font-weight: bold;
            white-space: nowrap;
        }
    }
</style>