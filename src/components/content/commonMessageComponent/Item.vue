<template>
    <div class='messageitem'>
        <!-- <img src="@/assets/img/7.png" alt=""> -->
        <div>
            <span>{{messageHeader}}</span>
            {{messageComponentText}}
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
props: ['messageComponentText','messageHeader'],
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
    .messageitem{
        height: 0.87rem;
        width: 7.2rem;
        display: flex;
        align-items: center;
        border-bottom: 0.008rem solid rgba(196,200,205,.2);
        img{
            width: 0.68rem;
            height: 0.68rem;
            margin-right: 0.1rem;
        }
        div{
            padding-right: 0.6rem;
            box-sizing: border-box;
            cursor: pointer;
            height: 0.68rem;
            flex: 1;
            font-size: 0.13rem;
            line-height: 0.24rem;
            color: rgb(145,152,161);
            overflow: hidden;
            text-overflow: ellipsis;
            span{
                font-weight: bold;
                color: rgb(35,55,84);
                margin-right: 0.07rem;
            }
        }
    }
</style>