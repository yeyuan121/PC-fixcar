<template>
    <div class='other'>
        <Tab />
        <div class="flexcontainers">
            <Item 
            goods-title='标题哒哒哒哒哒哒多多多多多多多多多多多多多多多多多多多多多多'
            old-price='3200'
            now-price='4500'
            />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    </div>
</template>

<script>
import Tab from './component/Tab'
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
components: {Tab,Item,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .other{
        padding: 0 4.11rem;
        background: rgb(242,245,249);
        .flexcontainers{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            div{
                margin-bottom: 0.3rem;
            }
        }
    }
</style>