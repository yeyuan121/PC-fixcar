<template>
    <div class='container'>
        <div class="div1">
            电脑产品
            <div class="div1child"></div>
        </div>
        <div class="div2">
            办公产品
            <div class="div1child"></div>
        </div>
        <div class="div3">
            网络产品
            <div class="div1child"></div>    
        </div>
        <div class="div4">
            监控安防
            <div class="div1child"></div>
        </div>
        <div class="div5">
            门禁系统
            <div class="div1child"></div>
        </div>
        <div class="div6">
            全部
            <div class="div1child"></div>    
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
        font-size: 0.14rem;
        width: 7.64rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.55rem;
        div{
            position: relative;
            width: 0.95rem;
            height: 0.42rem;
            color: rgb(35,55,83);
            text-align: center;
            line-height: 0.42rem;
            div{
                position: absolute;
                height: 0.02rem;
                background: rgb(252,72,17);
                bottom: 0;
            }
        }
    }
</style>