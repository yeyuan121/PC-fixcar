<template>
    <div class='container'>
        {{title}}
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
props: ['title'],
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
        height: 1.84rem;
        padding-top: 1rem;
        padding-left: 7.87rem;
        padding-right: 7.87rem;
        box-sizing: border-box;
        font-size: 0.27rem;
        white-space: nowrap;
    }
</style>