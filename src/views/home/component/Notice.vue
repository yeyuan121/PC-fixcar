<template>
    <div class='notice'>
        <div class="left">
            <div class="div1">维修前这些注意事项</div>
            <div class="div1">您都了解了吗?</div>
            <div class="div2">如果您是电脑小白，面对电脑突然的故障不知道该怎么处理，
注意以下几点，后面的就交给我们了！</div>
            <div class="div3">
                <div class="div3child1"><img src='@/assets/img/right.png'></img>维修前做好数据备份 ;</div>
                <div class="div3child2"><img src='@/assets/img/right.png'></img>维修的电脑做好标签登记 ;</div>
                <div class="div3child3"><img src='@/assets/img/right.png'></img>有更换配件的找技术员索要保修凭证 ;</div>
            </div>
        </div>
        <div class="right">
            <img src="@/assets/img/sobig.png" alt="">
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
    .notice{
        font-size: 0.14rem;
        height: 4.72rem;
        padding: 0 4.78rem;
        margin-top: 0.2rem;
        display: flex;
        .left{
            color: rgb(145,152,161);
            padding-top: 0.7rem;
            box-sizing: border-box;
            flex: 1;
            .div2{
                margin-top: 0.2rem;
                margin-bottom: 0.4rem;
            }
            .div1{
                color: rgb(20,41,71);
                font-size: 0.18rem;
            }
            .div3{
                div{
                    margin-bottom: 0.17rem;
                    display: flex;
                    align-items: center;
                    img{
                        margin-right: 0.07rem;
                    }
                }
            }
        }
        .right{
            width: 5rem;
            padding: 0.3rem 0;
            box-sizing: border-box;
            img{
                height: 100%;
                width: 100%;
            }
        }
    }
</style>