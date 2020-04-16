<template>
    <div class='container'>
        <div class="left">
            <Title 
            title-name='不花钱自己动动小手可以维修哪些?'
            />
            <Item
            :message-component-text='v.content'
            v-for="(v,k,index) in fixArr"
            :key="index"
            :message-header='v.header'
            />
            <div class="contain">
                <Title 
                title-name='维修案例'
                />
            </div>
            <!--存放维修案例数组前2个数据对象的容器-->
            <div class="imgcontainer">
                <div 
                class="first1"
                v-for="(v,k,index) in wxalArray.slice(0,2)"
                :key="index"
                @click="toArticlesDetail(v.alias,v.id)"
                >
                    <img :src="v.thumb" alt="">
                    <div class="desc">{{v.title}}</div>
                </div>
                <!-- <div class="first2"></div> -->
            </div>
            <NewsItem 
            v-for="(v,k,index) in wxalArray.slice(2)"
            :key="index"
            :news-style='v.name'
            :news-title='v.title'
            :news-text='v.introduction'
            :news-img='v.thumb'
            @click.native="toArticlesDetail(v.alias,v.id)"
            />
        </div>
        <div class="right">
            <ColorTabBar 
            text='视频教程'
            />
            <VedioItems />
            <ColorTabBar 
            text='最新发布'
            />
            <div class="publish_container">
                <PublishItem
                v-for="(v,k,index) in wxalArray"
                :key="index"
                :publish-text='v.title'
                :article-id='v.id'
                :article-alias='v.alias'               
                />
            </div>
            <ColorTabBar 
            text='热门标签'
            />
            <div class="tag_flex_container">
                <div
                v-for="(v,k,index) in tagArr"
                :key="index"
                >
                    {{v.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Title from '../../../views/layout/component/Title'
import Item from './Item'
import NewsItem from './NewItem'
import ColorTabBar from './ColorTab'
import PublishItem from './PublishItem'
import VedioItems from './VedioItem'

import {getTagesArr,} from '@/api/home.js'

export default {
data() {
    return {
        tagArr:
        [
            {
                id:1,
                name:'耐诚科技'
            },
            {
                id:2,
                name:'电脑维修'
            },
            {
                id:3,
                name:'网络维修'
            },
            {
                id:4,
                name:'开机无反应'
            }
        ]
    }
},
//方法集合
methods: {
    //点击维修案例div 跳转到文章详情页
    toArticlesDetail(alias,id){
        this.$router.push(`${alias + '/' + id + '.html'}`)
    }
},
//接收props传值
props: ['fixArr','wxalArray','wxalArrayTop2',],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {Title,Item,NewsItem,ColorTabBar,PublishItem,VedioItems,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    console.log('wxalArray',this.wxalArray)
    getTagesArr().then(res=>{
        if(res.data.code == 1){
            this.tagArr = res.data.data
        }else{
            this.$alert(`${res.data.msg}`,'提示')
        }
    })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .container{
        display: flex;
        padding: 0 4.45rem;
        padding-top: 0.2rem;
        margin-bottom: 0.45rem;
        background: white;
        cursor: pointer;
        .right{
            width: 2.87rem;
            border:1.45px solid rgba(196,200,205,.4);
            padding: 0.2rem 0.15rem;
            box-sizing: border-box;
            border-radius: 0.01rem;
            .publish_container{
                margin-top: 0.15rem;
            }
            .tag_flex_container{
                display: flex;
                flex-wrap: wrap;
                padding: 0.22rem;
                div{
                    font-size: 0.11rem;
                    color: rgb(152,159,167);
                    margin-right: 0.1rem;
                    margin-bottom: 0.1rem;
                    cursor: pointer;
                }
            }
        }
        .left{
            flex: 1;
            width:7.74rem;
            padding:0 0.6rem;
            box-sizing:border-box;
            word-break: break-all;
            .contain{
                margin-top: 0.3rem;
                margin-bottom: 0.3rem
            }
            .imgcontainer{
                display: flex;
                justify-content: space-between;
                height: 2.08rem;
                width:100%;
                div{
                    position: relative;
                    flex: 0.49;
                    border-radius: 0.09rem;
                    .desc{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 0.6rem;
                        font-size: 0.15rem;
                        color: white;
                        padding: 0 0.22rem;
                        box-sizing: border-box;
                        line-height: 0.6rem;
                    }
                    img{
                        height: 100%;
                        width: 100%;
                        border-radius: 0.03rem;
                    }
                }
            }
        }
    }
</style>