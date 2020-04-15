<template>
    <div class='container'>
        <div class="part1">
            <Title 
            title-name='热门案例'
            />
            <!--热门案例数组的第一个数据对象展示区-->
            <div class="first" @click="hotCaseItemToArticleDetail(dataArrayObject['2'][0].alias,dataArrayObject['2'][0].id)">
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
            <Title 
            title-name='行业资讯'
            >
            </Title>           
            <img src="@/assets/img/tests.png" alt="" class="img">
            <div class="hangye">
                <Items 
                icon-name='电脑维修'
                title-name='1111111111111111111111111111111'
                text='2222222222222222222222222222222222222222'
                /><Items 
                icon-name='电脑维修'
                title-name='1111111111111111111111111111111'
                text='2222222222222222222222222222222222222222'
                /><Items 
                icon-name='电脑维修'
                title-name='1111111111111111111111111111111'
                text='2222222222222222222222222222222222222222'
                /><Items 
                icon-name='电脑维修'
                title-name='1111111111111111111111111111111'
                text='2222222222222222222222222222222222222222'
                /><Items 
                icon-name='电脑维修'
                title-name='1111111111111111111111111111111'
                text='2222222222222222222222222222222222222222'
                /><Items 
                icon-name='电脑维修'
                title-name='1111111111111111111111111111111'
                text='2222222222222222222222222222222222222222'
                />
                <Items 
                icon-name='电脑维修'
                title-name='1111111111111111111111111111111'
                text='2222222222222222222222222222222222222222'
                /><Items 
                icon-name='电脑维修'
                title-name='1111111111111111111111111111111'
                text='2222222222222222222222222222222222222222'
                />
            </div>
        </div>
        <div class="part2">
            <div class="main">
                <ColorTitle 
                title-name='对应地区'
                />
                <ColorTitle 
                title-name='视频教程'
                />
                <ColorTitle 
                title-name='最新发布'
                />
                <ColorTitle 
                title-name='热门标签'
                />
            </div>
        </div>
    </div>
</template>

<script>
import Title from './Title'
import Item from './Item'
import ColorTitle from './ColorTitle'
import Items from './Items'

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
props: ['dataArrayObject',],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {Title,Item,ColorTitle,Items,},
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
            // background: brown;
            .img{
                height: 2.44rem;
                width: 100%;
            }
            .hangye{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .first{
                height: 2.4rem;
                position: relative;
                cursor: pointer;
                margin-bottom: 0.10rem;
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
                    }
                    .firstchild2{
                        flex: 1;
                        text-align: end;
                    }
                }
            }
        }
        .part2{
            width: 2.82rem;
            height: 100%;
            // background: burlywood;
            padding-left: 0.4rem;
            box-sizing: border-box;
            .main{
                height: 100%;
                border: 0.01rem solid rgb(228, 230, 233);
                box-sizing: border-box;
                padding: 0.2rem;
                font-size: 0.14rem;
            }
        }
    }
</style>