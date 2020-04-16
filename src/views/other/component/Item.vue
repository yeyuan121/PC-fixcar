<template>
    <div class='item-container'>
        <div class="div1">
            <img :src="goodsImg" alt="">
        </div>
        <div class="div2">{{goodsTitle}}</div>
        <div class="div3">
            <div class="child1">
                <img src="" alt="">
                <span>点击跳转</span>
            </div>
            <div class="child2">
                <div class="childchild1"><span class="span1">￥</span>{{nowPrice}}</div>
                <div class="childchild2">原价:￥<span class="span2">{{oldPrice}}</span></div>
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
props: ['goodsTitle','nowPrice','oldPrice','goodsImg'],
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
        margin-bottom: 0.3rem;
        cursor: pointer;
        .div1{
            height: 2.5rem;
            width: 2.8rem;
            padding: 0.25rem;
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
            line-height: 0.53rem;
            font-size: 0.17rem;
        }
        .div3{
            height: 0.86rem;
            width: 2.8rem;
            display: flex;
            .child1{
                padding-top: 0.3rem;
                box-sizing: border-box;
                flex: 1;
            }
            .child2{
                padding-top: 0.3rem;
                box-sizing: border-box;
                flex: 1;
                overflow: hidden;
                text-align: end;
                .childchild1{
                    display: flex;
                    align-items: center;
                    height: 0.28rem;
                    font-weight: bold;
                    justify-content: flex-end;
                    font-size: 0.31rem;
                    color: rgb(252,94,46);
                    margin-bottom: 0.06rem;
                    .span1{
                        font-size: 0.12rem;
                    }
                }
                .childchild2{
                    height: 0.2rem;
                    font-size: 0.13rem;
                    color: rgb(228,229,231);
                    .span2{
                        text-decoration: line-through;
                    }
                }
            }
        }
    }
</style>