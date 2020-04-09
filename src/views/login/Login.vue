<template>
    <div class='a'>
        <CommonFormComponent />
    </div>
</template>

<script>
import CommonFormComponent from '../../components/content/commonLoginForm/index'

export default {
//组件状态
data() {
    return {

    }
},
//方法集合
methods: {},
//组件注册
components: {CommonFormComponent,},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {
    console.log(this.$route)
},
mounted() {}
}
</script>
<style lang='scss' scoped>

</style>