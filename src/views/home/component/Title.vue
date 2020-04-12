<template>
    <div class='title'>
        <div class="titlediv1">
            <img src="@/assets/img/group1.png" alt="">
            <div class="line">|</div>
            <img src="@/assets/img/group2.png" alt="">
            <div class="line">|</div>
            <img src="@/assets/img/group3.png" alt="">
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
            align-items: center;
            font-size: 0.16rem;
            color: rgb(177, 183, 190);
            img{
                width: 1.8rem;
                height: 0.27rem;
            }
        }
        .titlediv2{
            height: 1.43rem;
            padding: 0.7rem 1.5rem;
            box-sizing: border-box;
            text-align: center;
            font-size: 0.3rem;
            // font-weight: bold;
            white-space: nowrap;
        }
    }
</style>