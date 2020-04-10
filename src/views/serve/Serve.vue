<template>
    <div class='container'>
        <CommonTitleComponent
        item-title='维修视频教程'
        />
        <div class="flex_container">
            <Item 
            v-for="(v,k,index) in 6"
            :key="index"
            />
        </div>
        <div class="fixway">
            <div class="div1">其他方式操作维修</div>
            <div class="div2">
                <div class="div2child1">
                    <img src="@/assets/img/tests.png" alt="">
                    <div class="msg1">远程操作维修</div>
                    <div class="msg2">通过向日葵软件或者加技术员QQ远程协助调试</div>
                    <div class="msg3">QQ:635409869</div>
                </div>
                <div class="div2child2">
                    <img src="@/assets/img/tests.png" alt="">
                    <div class="msg1">电话咨询维修</div>
                    <div class="msg2">通过向电话连线技术员协助操作维修</div>
                    <div class="msg3">固话:0592-6666915</div>
                    <div class="msg4">手机:18030244550</div>
                </div>
                <div class="div2child3">
                    <img src="@/assets/img/tests.png" alt="">
                    <div class="msg1">微信视频维修</div>
                    <div class="msg2">通过向微信视频技术员协助操作维修</div>
                    <div class="msg2">微信号:18030244550</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CommonTitleComponent from '../../components/content/commonPartOne/CommonPartOne'
import Item from './component/Item'

export default {
data() {
return {

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
components: {CommonTitleComponent,Item,},
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
        .flex_container{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 0 4rem;
            padding-bottom: 0.5rem;
            box-sizing: border-box;
            div{
                margin-bottom: 0.25rem;
            }
        }
        .fixway{
            height: 5.64rem;
            padding: 0 4.26rem;
            padding-top: 0.56rem;
            background: rgb(242,245,249);
            .div1{
                font-size: 0.27rem;
                text-align: center;
                margin-bottom: 0.7rem;
            }
            .div2{
                height: 3.1rem;
                display: flex;
                justify-content: space-around;
                div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: 3.14rem;
                    width: 3.14rem;
                    font-size: 0.15rem;
                    img{
                        height: 1.8rem;
                        width: 1.8rem;
                        border-radius: 50%;
                        margin-bottom: 0.2rem;
                    }
                    .msg1{
                        text-align: center;
                        height: 0.2rem;
                        margin-bottom: 0.1rem;
                    }
                    .msg2,.msg3,.msg4{
                        height: 0.2rem;
                        text-align: center;
                        margin-bottom: 0.05rem;
                        font-size: 0.12rem;
                        color: rgb(145,152,161);
                    }
                }
            }
        }
    }
</style>