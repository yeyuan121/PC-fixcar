<template>
    <div class='container'>
        <div class="div1"></div>
        <div class="div2"></div>
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
        display: flex;
        height: 6.43rem;
        padding: 0 5.04rem;
        padding-top: 1.1rem;
        box-sizing: border-box;
        .div1{
            width: 3.87rem;
            border: 1px solid grey;
            border-radius: 0.05rem;
        }
        .div2{
            border: 1px solid rgb(249,249,249);
            flex: 1;
            border-radius: 0.05rem;
            padding: 0.45rem 0.75rem;
            box-sizing: border-box;
        }
    }
</style>