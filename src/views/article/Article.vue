<template>
<div>
    <div class="title_container">
        <commonTitle
        :history-string='historyArrays'
        />
    </div>
    <div class='container'>
        <div class="left">
           <div class="left1" v-if="articleObject">{{articleObject.title}}</div>
           <div class="left2" v-if="articleObject">
               <div class="leftchild1">
                   <img src="@/assets/img/clark.png" alt="">
                   {{articleObject.create_time}}
               </div>
               <div class="leftchild2">
                   <img src="@/assets/img/eye.png" alt="">
                   {{articleObject.reading}}
               </div>
               <div class="leftchild3">
                   作者:
                   {{articleObject.release_name ? articleObject.release_name : '无'}}
               </div>
               <div class="leftchild4">
                   标签:
                   {{articleObject.keywords}}
               </div>
           </div>
           <div class="left3" 
           v-if="articleObject"
           v-html="articleObject.content"
           >           
           </div>
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
                :publish-text='v.introduction'
                
                @click.native='handleToDetail(v.alias,v.id)'
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
</div>
</template>

<script>
import ColorTabBar from '../../components/content/commonMessageComponent/ColorTab'
import CommonTitle from '../../components/content/commonPartOne/CommonTitle'
import PublishItem from '../../components/content/commonMessageComponent/PublishItem'

import {getTagesArr,getArticle,} from '@/api/home.js'
import {getArticleMessageById,} from '@/api/article'

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
        ],
        historyArrays:
        [
            {
                name:'首页 > ',
                url:'/'
            }
        ],
        articleObject:null,//文章对象
        wxalArray:[],
    }
},
//方法集合
methods: {
    //获取热门标签
    getHotTags(){
        getTagesArr()
        .then(res=>{
            if(res.data.code == 1){
                this.tagArr = res.data.data
                return getArticle()
            }else{
                this.$alert(`res.data.msg`,'提示')
            }
        })
        .then(res=>{
            if(res.data.code == 1){
                this.wxalArray = res.data.data
            }else{
                this.$alert('获取数据失败','提示')
            }
        })
    },
    //点击最新发布跳转到文章详情页
    //没有传alias和id给子组件去处理了
    //改页面的这个跳转到文章详情页是该组件自己特殊处理
    handleToDetail(alias,id){
        // console.log(this.$router)
        this.$router.replace(`${alias + '/' + id + '.html'}`)
        // this.$router.replace('/')
    }
},
//接收props传值
props: [],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {ColorTabBar,CommonTitle,PublishItem,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getHotTags()
    let id = this.$route.params.id//文章ID
    getArticleMessageById({id,}).then(res=>{
        if(res.data.code == 1){
            this.articleObject = res.data.data[0];console.log(this.articleObject)
        }else{
            this.$alert('获取文章内容失败','提示')
        }
    })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .title_container{
        height: 1.26rem;
        overflow: hidden;
    }
    .container{
        display: flex;
        padding: 0 3.58rem;
        // padding-top: 0.2rem;
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
            // padding:0 0.68rem;
            padding-right: 0.5rem;
            box-sizing:border-box;
            font-size: 0.135rem;
            color: rgb(145,152,161);

            .left1{
                height: 0.33rem;
                font-size: 0.2rem;
                color: rgb(20,41,71);
                line-height: 0.33rem;
            }
            .left2{
                padding-left: 0.05rem;
                height: 0.37rem;
                border-bottom: 0.008rem rgba(145,152,161,0.3) solid;
                margin-bottom: 0.1rem;
                line-height: 0.37rem;
                font-size: 0.12rem;
                display: flex;
                align-items: center;
                .leftchild1{
                    display: flex;
                    align-items: center;
                    img{
                        height: 0.15rem;
                        width: 0.15rem;
                        margin-right: 0.05rem;
                    }
                }
                .leftchild2{
                    display: flex;
                    align-items: center;
                    img{
                        height: 0.15rem;
                        width: 0.15rem;
                        margin-right: 0.05rem;
                    }
                    margin: 0 0.35rem;
                }
                .leftchild3{
                    margin-right: 0.3rem;
                }              
            }
            .left3{
                letter-spacing: 0.015rem;
                line-height: 0.35rem;
                img{
                    width: 100%;
                    height: 0.1rem;
                }
                ::v-deep img{
                    width: 100%;
                }
            }
        }
    }
</style>