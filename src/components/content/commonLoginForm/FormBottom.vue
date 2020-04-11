<template>
    <div class='form_bottom'>
        <div>
            <img src="@/assets/img/police.png" alt="" class="img1">
            <span>Copyright © 2014-2018 厦门耐诚智能科技有限公司 版权所有闽ICP备18023960号-1</span>
            <img src="@/assets/img/police1.png" alt="" class="img2">
        </div>
        <img src="@/assets/img/wave.png" alt="" class="img3">
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
    .form_bottom{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 0.13rem;
        div{
            height: 0.4rem;
            padding: 0 6.3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .img1{
                height: 0.2rem;
                width: 0.2rem;
            }
            span{
                color: rgb(160,166,174);
                margin: 0 0.1rem;
            }
        }
        .img3{
            width: 100%;
            height: 0.78rem;
        }
    }
</style>