<template>
    <div class='container'>
        <div class="part1">
            <Title 
            title-name='热门案例'
            />
            <img src="@/assets/img/tests.png" alt="" class="img">
            <Item
            v-for="(v,k,index) in dataArrayObject['2']"
            :key="index"
            mark='HOT'
            :title="v.title"
            :text='v.introduction'
            :left-img-path='v.thumb'
            @click.native='hotCaseItemToArticleDetail(v.id)'
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
    hotCaseItemToArticleDetail(id){
        this.$router.push(`/article/${id}`)
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
                margin-bottom: 0.22rem;
            }
            .hangye{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
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