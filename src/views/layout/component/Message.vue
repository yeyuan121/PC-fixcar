<template>
    <div class='container'>
        <div class="part1">
            <Title 
            title-name='热门案例'
            />
            <!--热门案例数组的第一个数据对象展示区-->
            <div class="first" @click="hotCaseItemToArticleDetail(dataArrayObject['2'][0].alias,dataArrayObject['2'][0].id)" v-if="dataArrayObject['2'][0]">
                <img :src="dataArrayObject['2'][0].thumb" alt="" class="img">
                <div class="position2first">
                    <div class="firstchild1">{{dataArrayObject['2'][0].introduction}}</div>
                    <div class="firstchild2">
                        {{dataArrayObject['2'][0].create_time}}
                        {{dataArrayObject['2'][0].reading}}
                    </div>
                </div>
            </div>
            <!-- -->
            <Item
            v-for="(v,k,index) in dataArrayObject['2'].slice(1)"
            :key="index"
            mark='HOT'
            :title="v.title"
            :text='v.introduction'
            :left-img-path='v.thumb'
            @click.native='hotCaseItemToArticleDetail(v.alias,v.id)'
            />
            <div class="titleconatainers">
                <Title 
                title-name='行业资讯'
                />
            </div>          
            <!--行业资讯数组的第一个数据对象展示区-->
            <div class="first" @click="hotCaseItemToArticleDetail(dataArrayObject['3'][0].alias,dataArrayObject['3'][0].id)" v-if="dataArrayObject['3'][0]">
                <img :src="dataArrayObject['3'][0].thumb" alt="" class="img">
                <div class="position2first">
                    <div class="firstchild1">{{dataArrayObject['3'][0].introduction}}</div>
                    <div class="firstchild2">
                        {{dataArrayObject['3'][0].create_time}}
                        {{dataArrayObject['3'][0].reading}}
                    </div>
                </div>
            </div>
            <!-- -->
            <div class="hangye">
                <Items
                v-for="(v,k,index) in dataArrayObject['3'].slice(1)"
                :key="index"
                :icon-name='v.name'
                :title-name='v.title'
                :text='v.introduction'
                :article-alias='v.alias'
                :article-id='v.id'
                />
            </div>
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
                v-for="(v,k,index) in dataArrayObject['2']"
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
import Title from './Title'
import Item from './Item'
import ColorTitle from './ColorTitle'
import Items from './Items'
import ColorTabBar from '../../../components/content/commonMessageComponent/ColorTab'
import PublishItem from '../../../components/content/commonMessageComponent/PublishItem'
import VedioItems from '../../../components/content/commonMessageComponent/VedioItem'

export default {
data() {
return {

}
},
//方法集合
methods: {
    //热门案例点击跳转到文章详情页
    hotCaseItemToArticleDetail(alias,id){
        this.$router.push(`${ alias + '/' + id + '.html' }`)
    }
},
//接收props传值
props: ['dataArrayObject','tagArr','wxalArray',],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {Title,Item,ColorTitle,Items,ColorTabBar,PublishItem,VedioItems,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    console.log(this.dataArrayObject,'message组件')
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .container{
        padding: 0.85rem 4.23rem;
        padding-top: 0.85rem;
        min-height: 7.37rem;
        box-sizing: border-box;
        display: flex;
        .part1{
            width: 7.15rem;
            height: 100%;
            padding: 0 0.47rem;
            box-sizing: border-box;
            .img{
                height: 2.44rem;
                width: 100%;
            }
            .hangye{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .titleconatainers{
                margin-top: 0.25rem;
            }
            .first{
                height: 2.4rem;
                position: relative;
                cursor: pointer;
                margin-bottom: 0.25rem;
                img{
                    border-radius: 0.03rem;
                    height: 100%;
                }
                .position2first{
                    position: absolute;
                    display: flex;
                    bottom: 0;
                    left:0;
                    width: 100%;
                    height: 0.5rem;
                    font-size: 0.13rem;
                    color: white;
                    box-sizing: border-box;
                    padding: 0 0.2rem;
                    line-height: 0.5rem;
                    .firstchild1{
                        width: 4.7rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .firstchild2{
                        flex: 1;
                        text-align: end;
                    }
                }
            }
        }
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
    }
</style>