<template>
    <div class=''>
        <Header />
        <Form />
    </div>
</template>

<script>
import Header from './FormHeader'
import Form from './Form'

export default {
//组件状态
data() {
    return{

    }
},
//方法集合
methods: {},
//组件注册
components: {Header,Form,},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {},
mounted() {}
}
</script>
<style lang='scss' scoped>

</style>