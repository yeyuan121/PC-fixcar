<template>
    <div class=''>
        <Header />
        <Main />
        <Footer />
    </div>
</template>

<script>
import Header from '../../components/content/commonLoginForm/FormHeader'
import Footer from '../../components/content/commonLoginForm/FormBottom'
import Main from './component/Forms'

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
components: {Header,Footer,Main},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>

</style>