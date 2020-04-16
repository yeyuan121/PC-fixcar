<template>
    <div class='containersss' @click="toDetail()">
        <div class="div1">
            <div class="part1">{{IconName}}</div>
            <div class="part2">{{TitleName}}</div>
        </div>
        <div class="div2">{{text}}</div>
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
    toDetail(){
        this.$router.push(`${this.articleAlias + '/' + this.articleId + '.html'}`)
    }
},
//接收props传值
props: ['IconName','TitleName','text','articleId','articleAlias',],
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
    .containersss{
        cursor: pointer;
        width: 3rem;
        height: 0.7rem;
        font-size: 0.14rem;
        .div1{
            display: flex;
            margin-bottom: 0.03rem;
            .part1{
                height: 0.2rem;
                min-width: 0.6rem;
                background: rgb(252, 72, 17);
                color: white;
                line-height: 0.2rem;
                margin-right: 0.05rem;
                font-size: 0.12rem;
                text-align: center;
                border-radius: 0.03rem;
            }
            .part2{
                flex: 1;
            }
        }
        .div2{
            color: rgb(145,152,161);
            font-size: 0.13rem;
            
        }
    }
</style>