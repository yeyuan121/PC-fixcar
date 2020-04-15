<template>
    <div class='publish_item' @click="toArticleDetail()">
        <div class="div1"></div>
        <div class="div2">
            {{publishText}}
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
    //跳转到文章详情页
    toArticleDetail(){
        this.$router.push(`/article/${this.articleId}`)
    }
},
//接收props传值
props: ['publishText','articleId',],
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
    .publish_item{
        font-size: 0.11rem;
        display: flex;
        color: rgb(152,159,167);
        padding-left: 0.05rem;
        margin-bottom: 0.2rem;
        cursor:pointer;
        .div1{
            height: 0.03rem;
            width: 0.03rem;
            border-radius: 50%;
            background:rgb(152,159,167);
            margin-right: 0.05rem;
            position: relative;
            top: 0.07rem;
        }
        .div2{
            flex: 1;
            line-height: 0.18rem;
        }
    }
</style>