<template>
    <div class='colortab'>
        {{text}}
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
props: ['text'],
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
    .colortab{
        height: 0.31rem;
        background: rgb(252,72,17);
        font-size: 0.14rem;
        color: white;
        text-indent: 0.15rem;
        line-height: 0.31rem;
        border-radius: 0.04rem;
    }
</style>