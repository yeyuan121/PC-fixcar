<template>
    <div class='common-item'>
        <div class="commonitem1"></div>
        <div class="commonitem2">
            <img :src="itemImg" alt="">
        </div>
        <div class="commonitem3">{{itemName}}</div>
        <div class="commonitem1 add"></div>
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
props: ['itemName','itemImg'],
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
    .common-item{
        position: relative;
        height: 1.5rem;
        width: 1.7rem;
        box-sizing: border-box;
        padding: 0 0.24rem;
        background: white;
        border-radius: 0.04rem;
        .commonitem1{
            height: 0.03rem;
            width: 90%;
            background: rgb(219, 225, 232);
            margin: 0 auto;
            border-radius: 0.003rem;
        }
        .commonitem2{
            display: flex;
            align-items: center;
            font-size: 0.14rem;
            overflow: hidden;
            height: 1rem;
            width: 1rem;
            padding: 0.2rem;
            box-sizing: border-box;
            margin: 0 auto;
            justify-content: center;
            img{
                width: 90%;
                height: 85%;
            }
        }
        .commonitem3{
            font-size: 0.12rem;
            text-align: center;
            color: rgb(79,95,118);
        }
        .add{
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 1.12rem;
        }
    }
</style>