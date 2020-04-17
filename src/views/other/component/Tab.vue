<template>
    <div class='container'>
        <div class="div1" @click="changeTab(1)">
            电脑产品
            <div class="div1child" v-if="current == 1"></div>
        </div>
        <div class="div2" @click="changeTab(2)">
            办公产品
            <div class="div1child" v-if="current == 2"></div>
        </div>
        <div class="div3" @click="changeTab(3)">
            网络产品
            <div class="div1child" v-if="current == 3"></div>    
        </div>
        <div class="div4" @click="changeTab(4)">
            监控安防
            <div class="div1child" v-if="current == 4"></div>
        </div>
        <div class="div5" @click="changeTab(5)">
            门禁系统
            <div class="div1child" v-if="current == 5"></div>
        </div>
        <div class="div6" @click="changeTab(6)">
            全部
            <div class="div1child" v-if="current == 6"></div>    
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        current:1,
    }
},
//方法集合
methods: {
    changeTab(i){
        this.current = i
        this.$emit('event',i)
    }
},
//接收props传值
props: [],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    //默认把第一个tab的ID在 我刚创建的时候就传给父组件
    setTimeout(() => {
        this.$emit('event',this.current)
    }, 500)
    
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .container{
        cursor: pointer;
        font-size: 0.14rem;
        width: 7.64rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.55rem;
        div{
            position: relative;
            width: 0.95rem;
            height: 0.42rem;
            color: rgb(35,55,83);
            text-align: center;
            line-height: 0.42rem;
            div{
                position: absolute;
                height: 0.02rem;
                background: rgb(252,72,17);
                bottom: 0;
            }
        }
    }
</style>