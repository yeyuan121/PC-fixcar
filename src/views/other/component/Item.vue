<template>
    <div class='item-container'>
        <div class="div1">
            <img src="" alt="">
        </div>
        <div class="div2">{{goodsTitle}}</div>
        <div class="div3">
            <div class="child1">
                <img src="" alt="">
                <span>点击跳转</span>
            </div>
            <div class="child2">
                <div class="childchild1">{{nowPrice}}</div>
                <div class="childchild2">{{oldPrice}}</div>
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
props: ['goodsTitle','nowPrice','oldPrice'],
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
    .item-container{
        height: 4.4rem;
        width: 3.5rem;
        background: white;
        padding: 0.37rem;
        box-sizing: border-box;
        font-size: 0.14rem;
        border-radius: 0.02rem;
        .div1{
            height: 2.5rem;
            width: 2.8rem;
            padding: 0.35rem;
            box-sizing: border-box;
            img{
                height: 100%;
                width: 100%;
            }
        }
        .div2{
            height: 0.53rem;
            width: 2.8rem;
            color: rgb(20,41,71);
        }
        .div3{
            height: 0.86rem;
            width: 2.8rem;
            display: flex;
            .child1{
                flex: 1;
            }
            .child2{
                flex: 1;
                overflow: hidden;
                .childchild1{
                    height: 60%;
                    font-weight: bold;
                    font-size: 0.20rem;
                    color: rgb(252,94,46);
                }
                .childchild2{
                    height: 40%;
                    font-size: 0.13rem;
                    color: rgb(228,229,231);
                }
            }
        }
    }
</style>