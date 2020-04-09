<template>
    <div class='colortitle'>
        {{TitleName}}
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
    .colortitle{
        height: 0.33rem;
        color: white;
        background: rgb(252, 72, 17);
        padding: 0 0.1rem;
        box-sizing: border-box;
        border-radius: 0.03rem;
        line-height: 0.33rem;
    }
</style>