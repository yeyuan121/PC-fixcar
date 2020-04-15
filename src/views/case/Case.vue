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
                    <div
                    v-for="(v,k,index) in allArticleArray[current]"
                    :key='index'
                    @click='childTabClick(k)'
                    :class='{add2:k == current2}'
                    >
                    {{ $router.options.routes.find(item => item.meta == k).name }}
                    </div>
                </div>
                <div class="right2">
                    <CommonItem
                    :mark='v.name' 
                    :title="v.title"
                    :text='v.introduction'
                    v-for="(v,k,index) in allArticleArray[current][current2]"
                    :key="index"
                    :left-img-path='v.thumb'
                    @click.native="goToDetail(v.alias,v.id)"
                    >
                        <template v-slot:date>
                            [{{v.create_time}}]
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

import {getAllArticleList,} from '@/api/case'

export default {
//组件状态
data() {
    return {
        current:1,
        current2:2,
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
        ],
        allArticleArray://所有的文章存放对象
        {
            1:{},//案例资讯
            2:{},//维修案例
            3:{},//行业资讯
        },
    }
},
//方法集合
methods: {
    //点击tab栏回调函数
    changeTab(i){
        this.current = i
        // this.historyArr.push({name:' >叶远 >',url:'/'})
        if(i == 1){
            this.historyArr.splice(1,1,{name:'案例咨询',url:''}) 
        }else if(i == 2){
            this.historyArr.splice(1,1,{name:'维修案例',url:''})
        }else{
            this.historyArr.splice(1,1,{name:'行业资讯',url:''}) 
        }
    },
    //处理初始化数据
    dealInitData(arr){
        for(const item of arr){
            if(!Array.isArray(this.allArticleArray[item.type][item.cid])){//如果不是数组
                this.allArticleArray[item.type][item.cid] = []
            }
            this.allArticleArray[item.type][item.cid].push(item)
        }
    },
    childTabClick(i){
        this.current2 = i
        let name = '  > ' + this.$router.options.routes.find(item => item.meta == i).name
        if(this.historyArr.length < 3){
            this.historyArr.push({name,url:''})
        }else{
            this.historyArr.splice(2,1,{name,url:'',})
        }
    },
    //跳转去文章详情页
    goToDetail(alias,id){
        this.$router.push(`${alias + '/' + id + '.html'}`)
    }
},
//组件注册
components: {CommonTitle,CommonItem,},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {
    getAllArticleList().then(res=>{
        if(res.data.code == 1){
            this.dealInitData(res.data.data)
            console.log(this.allArticleArray,112,this.$router)
        }else{
            alert('获取数据失败')
        }
    })
},
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
                    cursor: pointer;
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
        .add2{
            color: rgb(252,83,31) !important;
        }
    }
</style>