<template>
    <div class='containera'>
        <div class="top">
            <img :src="videoImg" alt="">
            <img src="@/assets/img/play.png" alt="" class="playbutton">
        </div>
        <div class="bottom">{{videoTitle}}</div>
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
props: ['videoTitle','videoImg'],
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
    .containera{
        height: 1.9rem;
        .top{
            position: relative;
            padding-top: 0.1rem;
            box-sizing: border-box;
            height: 1.4rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: 0.015rem;
            }
            .playbutton{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                height: 0.34rem;
                width: 0.34rem;
            }
        }
        .bottom{
            padding: 0.1rem;
            box-sizing: border-box;
            height: 0.5rem;
            font-size: 0.11rem;
            color: rgb(145,152,161);
            line-height: 0.16rem;
            overflow: hidden;
        }
    }
</style>