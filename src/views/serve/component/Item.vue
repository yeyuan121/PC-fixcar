<template>
    <div class='container'>
        <img src="" alt="">
        <div class="child">
            <img src="@/assets/img/play.png" alt="">
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
    .container{
        position: relative;
        height: 2.27rem;
        width: 3.63rem;
        border-radius: 0.05rem;
        background: black;
        img{
            height: 100%;
            width: 100%;
        }
        .child{
            height: 0.32rem;
            width: 0.32rem;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%);
            transform: translateY(-50%);
            img{
                position: absolute;
                top: 0;
                left: 0;
                height: 0.32rem;
                width: 0.32rem;
            }
        }
    }
</style>