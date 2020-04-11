<template>
    <div class='container'>
        {{title}}
        <div class="guide">
            <i>当前位置 :</i>
            <span
            v-for="(v,k,index) in historyString"
            :key="index"
            @click="handleClick(v.url)"
            >
                {{v.name}}
            </span>
        </div>
    </div>    
</template>

<script>
export default {
data() {
return {

}
},
//方法集合
methods: {
    handleClick(url){
        this.$router.push(url)
    }
},
//接收props传值
props: ['title','historyString',],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {},
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
        height: 1.84rem;
        padding-top: 1rem;
        padding-left: 7.87rem;
        padding-right: 7.87rem;
        box-sizing: border-box;
        font-size: 0.27rem;
        white-space: nowrap;
        text-align: center;
        position: relative;
        .guide{
            position: absolute;
            left: 4.24rem;
            top: 0.24rem;
            font-size: 0.13rem;
            color: rgb(151,158,167);
            span{
                // margin-left: 0.07rem;
                cursor: pointer;
            }
            i{
                font-style: inherit;
                margin-right: 0.08rem;
            }
        }
    }
</style>