<template>
<div class='container'>
    <div class="div1">
        <img src="@/assets/img/logo.png" alt="">
    </div>
    <div @click="handleClick(1)" :class="{add:current == 1}">首页</div>
    <div @click="handleClick(2)" :class="{add:current == 2}">电脑维修</div>
    <div @click="handleClick(3)" :class="{add:current == 3}">网络维修</div>
    <div @click="handleClick(4)" :class="{add:current == 4}">办公设备</div>
    <div @click="handleClick(5)" :class="{add:current == 5}">监控设备</div>
    <div @click="handleClick(6)" :class="{add:current == 6}">其他产品</div>
    <div @click="handleClick(7)" :class="{add:current == 7}">服务</div>
    <div @click="handleClick(8)" :class="{add:current == 8}">案例资讯</div>
    <div @click="handleClick(9)" :class="{add:current == 9}">关于我们</div>
    <div @click="handleClick(19)" :class="{add:current == 19}" class="div2">
        <img src="@/assets/img/1.png" alt="">
        登录/注册
    </div>
</div>
</template>

<script>
export default {
data() {
return {
    current:0,
}
},
//方法集合
methods: {
    handleClick(i){
        this.current = i
        if(i == 2){
            this.$router.push('/computer')
        }else if(i == 3){
            this.$router.push('/network')
        }else if(i == 4){
            this.$router.push('./work')
        }else if(i == 5){
            this.$router.push('./monitor')
        }else if(i == 6){
            this.$router.push('/other')
        }else if(i == 9){
            this.$router.push('/about')
        }else if(i == 19){
            this.$router.push('/login')
        }else if(i == 1){
            this.$router.push('/')
        }else if(i == 7){
            this.$router.push('/serve')
        }else if(i == 8){
            this.$router.push('/case')
        }
    }
},
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
    width: 100%;
    box-sizing: border-box;
    height: 0.92rem;
    background: rgba(1,1,1,0);
    padding-left: 4.1rem;
    padding-right: 4rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    .div1{
        height: 100%;
        width: 1.5rem;
        display: flex;
        align-items: center;
        img{
            height: 0.5rem;
            width: 100%;
        }
    }
    .div2{
        height: 100%;
        width: 0.9rem;
        display: flex;
        align-items: center;
        // justify-content: center;
        img{
            height: 0.18rem;
            width: 0.15rem;
        }
    }
    div{
        height: 0.21rem;
        width: 0.65rem;
        font-size: 0.16rem;
        color: white;
        text-align: center;
        cursor: pointer;
    }
}
.add{
    color: red !important;
}
</style>