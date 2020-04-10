<template>
    <div class='containers'>
        <img src="" alt="">
        <div class="div1">
            <div class="div1child1">
                <span class="div1span1">{{newsStyle}}</span>
                <span class="div1span2">{{newsTitle}}</span>
            </div>
            <div class="div1child2">
                {{newsText}}
            </div>
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
props: ['newsText','newsStyle','newsTitle','newsImg'],
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
        padding-top: 0.1rem;
        box-sizing: border-box;
        width: 7.04rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.13rem;
        img{
            align-self: flex-start;
            height: 0.83rem;
            width: 1.13rem;
            margin-right: 0.1rem;
        }
        .div1{
            flex: 1;
            align-self: flex-start;
            .div1child1{
                margin-bottom: 0.07rem;
                .div1span1{
                    display: inline-block;
                    height: 0.16rem;
                    width: 0.58rem;
                    color: white;
                    background: rgb(252,72,17);
                    text-align: center;
                    font-size: 0.1rem;
                    line-height: 0.16rem;
                    margin-right: 0.1rem;
                    border-radius: 0.03rem;
                }
                .div1span2{
                    color: rgb(26,47,76);
                }
            }
            .div1child2{
                color: rgb(145,152,161);
                font-size: 0.11rem;
                line-height: 0.19rem;
            }
        }
    }
</style>