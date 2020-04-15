<template>
    <div class='container'>
        <div class="guide-container">
            <CommonGuide
            :history-string='historyArr'
            />
        </div>
        <div class="flex-container">
            <div class="left">
                <div class="left1"><div></div>账户首页</div>
                <div class="left2">
                    <div class="left2child1">订单信息</div>
                    <div class="left2child2">
                        <router-link to="/profile/order">我的订单</router-link>
                    </div>
                </div>
                <div class="left3">
                    <div class="left3child1">基本信息</div>
                    <div class="left3child2">
                        <router-link to="/profile/detail">个人资料</router-link>
                    </div>
                    <div class="left3child2">
                        <router-link to="/profile/changepwd">修改密码</router-link>
                    </div>
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
            margin-top: 0.66rem;
            height: 6.3rem;
            padding: 0 4.26rem;
            padding-bottom: 0.6rem;
            display: flex;
            background: rgb(242,245,249);
            font-size: 0.16em;
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
                .router-link-active{
                    color: rgb(252,72,17) !important;
                }
                a{
                    text-decoration: none;
                    color: rgb(145,152,161);
                }
                .left1{
                    height: 0.6rem;
                    line-height: 0.6rem;
                    margin-bottom: 0.03rem;
                    color: rgb(252,72,17);
                    div{
                        height: 0.04rem;
                        background: rgb(252,72,17);
                    }
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