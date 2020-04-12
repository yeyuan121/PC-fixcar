<template>
    <div class='container'>
        <div class="title_container">
            <CommonTitle 
            :history-string='historyArr'
            />
        </div>
        <div class="flex_container">
            <div class="left">
                <div class="left1" @click="changeTab(1)" :class="{add:current==1}">案例咨询</div>
                <div class="left2" @click="changeTab(2)" :class="{add:current==2}">维修案例</div>
                <div class="left3" @click="changeTab(3)" :class="{add:current==3}">行业资讯</div>
            </div>
            <div class="right">
                <div class="right1">
                    <div>电脑维修</div>
                </div>
                <div class="right2">
                    <CommonItem
                    mark='电脑维修'
                    title="1111111111111111111111111"
                    text='222222222222222222222222222222222222222222222'
                    v-for="(v,k,index) in 6"
                    :key="index"
                    >
                        <template v-slot:date>
                            [2020-3-20]
                        </template>
                    </CommonItem>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CommonTitle from '../../components/content/commonPartOne/CommonTitle'
import CommonItem from '../../views/layout/component/Item'

export default {
//组件状态
data() {
    return {
        current:1,
        historyArr:
        [
            {
                name:'首页 > ',
                url:'/'
            },
            {
                name:'案例咨询',
                url:'/case'
            }
        ]
    }
},
//方法集合
methods: {
    changeTab(i){
        this.current = i
    }
},
//组件注册
components: {CommonTitle,CommonItem,},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {},
mounted() {}
}
</script>
<style lang='scss' scoped>
    .container{
        .title_container{
            height: 0.68rem;
            overflow: hidden;
        }
        .flex_container{
            font-size: 0.13rem;
            padding: 0 4.2rem;
            height: 9rem;
            display: flex;
            .left{
                width: 1.97rem;
                height: 100%;
                div{
                    height: 0.5rem;
                    background: rgb(242,242,242);
                    line-height: 0.5rem;
                    text-indent: 0.3rem;
                    color: rgb(20,41,71);
                    cursor: pointer;
                }
            }
            .right{
                padding: 0 0.45rem;
                flex: 1;
                .right1{
                    display: flex;
                    height: 0.2rem;
                    margin-bottom: 0.15rem;
                    div{
                        width: 0.88rem;
                        height: 100%;
                        color: rgb(20,41,71);
                    }
                }
                .right2{

                }
            }
        }
        .add{
            background: rgb(252,83,31) !important;
            color: white !important;
        }
    }
</style>