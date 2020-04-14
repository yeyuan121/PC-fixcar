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
            <div class="imgcontainer">
                <img 
                :src="v.thumb" 
                :alt="v.title"
                v-for="(v,k,index) in wxalArray"
                :key='index'
                >
            </div>
            <NewsItem 
            v-for="(v,k,index) in wxalArray"
            :key="index"
            :news-style='v.name'
            :news-title='v.title'
            :news-text='v.introduction'
            :news-img='v.thumb'
            />
        </div>
        <div class="right">
            <ColorTabBar 
            text='视频教程'
            />
            <ColorTabBar 
            text='最新发布'
            />
            <div class="publish_container">
                <PublishItem
                v-for="(v,k,index) in wxalArray"
                :key="index"
                publish-text='长沙为何会吸引大型企业入驻？腾讯为，富士康都包括在内？'
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

},
//接收props传值
props: ['fixArr','wxalArray',],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {Title,Item,NewsItem,ColorTabBar,PublishItem,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    console.log('wxalArray',this.wxalArray)
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
                    margin-right: 0.25rem;
                    margin-bottom: 0.1rem;
                    cursor: pointer;
                }
            }
        }
        .left{
            flex: 1;
            width:7.74rem;
            padding:0 0.68rem;
            box-sizing:border-box;
            .contain{
                margin-top: 0.3rem;
                margin-bottom: 0.3rem
            }
            .imgcontainer{
                display: flex;
                justify-content: space-between;
                height: 2.08rem;
                width:100%;
                img{
                    border-radius:0.03rem;
                    flex: 1;
                }
            }
        }
    }
</style>