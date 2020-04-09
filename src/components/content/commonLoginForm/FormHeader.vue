<template>
    <div class='container'>
        <img src="@/assets/img/logo3.png" alt="" class="img1">
        <img src="@/assets/img/word.png" alt="" class="img2">
        <div class="div">
            <img src="@/assets/img/phone.png" alt="">
            <span class="span2">|</span>
            <span class="span3">维修电话：<span>0592-6666915</span></span>
        </div>
    </div>
</template>

<script>
export default {
//组件状态
data() {
    return{

    }
},
//方法集合
methods: {},
//组件注册
components: {},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {},
mounted() {}
}
</script>
<style lang='scss' scoped>
    .container{
        height: 0.9rem;
        padding: 0 5.16rem;
        border-bottom: 1px solid rgb(249,249,249);
        display: flex;
        align-items: center;
        .img1{
            height: 0.46rem;
            width: 1.5rem;
            margin-right: 0.2rem;
        }
        .img2{
            width: 2.56rem;
            height: 0.25rem;
        }
        .div{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: 0.12rem;
            text-align: end;
            color: rgb(252,72,17);
            flex: 1;
            img{
                height: 0.23rem;
                widows: 0.4rem;
            }
            .span2{
                margin: 0 0.15rem;
            }
            .span3{
                span{
                    font-weight: bold;
                }
            }
        }
    }
</style>