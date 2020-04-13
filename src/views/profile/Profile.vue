<template>
    <div class='container'>
        <div class="guide-container">
            <CommonGuide
            :history-string='historyArr'
            />
        </div>
        <div class="flex-container">
            <div class="left">
                <div class="left1">账户首页</div>
                <div class="left2">
                    <div class="left2child1">订单信息</div>
                    <div class="left2child2">我的订单</div>
                </div>
                <div class="left3">
                    <div class="left3child1">基本信息</div>
                    <div class="left3child2">个人资料</div>
                    <div class="left3child2">修改密码</div>
                </div>
            </div>
            <div class="right">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import CommonGuide from '../../components/content/commonPartOne/CommonTitle'

export default {
data() {
    return {
        historyArr:
        [
            {
                name:'首页 >',
                url:'/'
            },
            {
                name:'个人中心',
                url:'/profile'
            }
        ]
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
components: {CommonGuide,},
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
        background: rgb(242,245,249);
        .guide-container{
            height: 0.9rem;
            overflow: hidden;
        }
        .flex-container{
            height: 6.3rem;
            padding: 0 4.26rem;
            padding-bottom: 0.6rem;
            display: flex;
            background: rgb(242,245,249);
            font-size: 0.14rem;
            .left{
                width: 1.47rem;
                height: 3.55rem;
                margin-right: 0.15rem;
                text-align: center;
                color: rgb(145,152,161);
                padding-bottom: 0.4rem;
                cursor: pointer;
                div{
                    background: white;
                }
                .left1{
                    height: 0.6rem;
                    line-height: 0.6rem;
                    margin-bottom: 0.03rem;
                }
                .left2{
                    .left2child1{
                        height: 0.6rem;
                        line-height: 0.6rem;
                    }
                    .left2child2{
                        height: 0.6rem;
                        font-size: 0.11rem;
                    }
                    margin-bottom: 0.03rem;
                }
                .left3{
                    padding-bottom:0.25rem;
                    .left3child1{
                        height: 0.6rem;
                        line-height: 0.6rem;
                    }
                    .left3child2{
                        height: 0.16rem;
                        font-size: 0.11rem;
                        margin-bottom: 0.16rem;
                    }
                }
            }
            .right{
                background: white;
                flex: 1;
                padding-top: 0.45rem;
                padding-left: 0.9rem;
                box-sizing: border-box;
                border-radius: 0.04rem;
            }
        }
    }
</style>