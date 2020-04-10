<template>
    <div class='container'>
        <div class="left">
            <Title 
            title-name='不花钱自己动动小手可以维修哪些?'
            />
            <Item
            message-component-text='电脑黑屏：开机显示器无画面或提示无信号，一般内存条问题，检查键盘灯是否亮起如不亮
拔插内存条即可；如键盘灯正常亮起，随之检查显示器或者显卡'
            v-for="(v,k,index) in 4"
            :key="index"
            />
            <div class="contain">
                <Title 
                title-name='维修案例'
                />
            </div>
            <div class="imgcontainer">
                <img src="" alt="">
            </div>
            <NewsItem 
            v-for="(v,k,index) in 4"
            :key="index"
            news-style='电脑维修'
            news-title='111111111111111111111'
            news-text='厦门市海沧区嵩屿南路94号/厦门市海沧区海兴路35号之六厦门市海沧区嵩屿南路94号/厦门市海沧区海兴路35号之六厦门市海沧区嵩屿南路94号/厦门市海沧区海兴路35号之六厦门市海沧区嵩屿南路94号/厦门市海沧区海兴路35号之六'
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
                v-for="(v,k,index) in 4"
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
props: [],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {Title,Item,NewsItem,ColorTabBar,PublishItem,},
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
            .contain{
                margin-top: 0.3rem;
                margin-bottom: 0.3rem
            }
            .imgcontainer{
                display: flex;
                justify-content: space-between;
                height: 2.08rem;
                img{
                    flex: 0.4;
                }
            }
        }
    }
</style>