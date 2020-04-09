<template>
    <div class='containers'>
        <div class="div1"></div>
        <div class="div2">{{TitleName}}</div>
        <div class="div3">
            <slot />
        </div>
        <div class="div4">查看更多></div>
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
props: ['TitleName'],
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
    .containers{
        display: flex;
        height: 0.28rem;
        margin-bottom: 0.25rem;
        .div1{
            height: 100%;
            width: 0.04rem;
            background: rgb(252, 72, 17);
            margin-right: 0.1rem;
            margin-left: 0.05rem;
        }
        .div2{
            font-size: 0.21rem;
            font-weight: bold;
        }
        .div4{
            font-size: 0.10rem;
            justify-self: flex-end;
            align-self: center;
            justify-items: flex-end;
            color: grey;
            flex: 1;
            text-align: end;
        }
    }
</style>