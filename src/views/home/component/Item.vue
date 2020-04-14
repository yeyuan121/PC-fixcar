<template>
    <div class='item'>
        <div class="div1"></div>
        <div class="div2">
            <img :src="path" alt="">
        </div>
        <div class="div3">{{title}}</div>
        <div class="div4">{{text}}</div>
        <div class="div5" @click="handleClick">查看更多</div>
        <div class="div1 add"></div>
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
    handleClick(){
        if(this.title == '电脑维修'){
            this.$router.push('/dnwx')
        }else if(this.title == '网络维修'){
            this.$router.push('/wlwx')
        }else if(this.title == '办公设备'){
            this.$router.push('/bgsb')
        }else{
            this.$router.push('/jksb')
        }
    }
},
//接收props传值
props: ['title','text','path'],
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
    .item{
        position: relative;
        box-sizing: border-box;
        padding: 0 0.24rem;
        width: 2.24rem;
        height: 3.21rem;
        background: white;
        font-size: 0.14rem;
        .div1{
            height: 0.03rem;
            width: 90%;
            background: rgb(219, 225, 232);
            margin: 0 auto;
            margin-top: 0.0rem;
            border-radius: 0.003rem;
        }
        .div2{
            box-sizing: border-box;
            height: 1.45rem;
            padding: 0.33rem 0.42rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .div3{
            height: 0.2rem;
            text-align: center;
            font-size: 0.15rem;
            color: rgb(20,41,71);
        }
        .div4{
            height: 1rem;
            color: rgb(145,152,161);
            font-size: 0.13rem;
            line-height: 0.21rem;
            margin-top: 0.1rem;
        }
        .div5{
            width: 0.82rem;
            height: 0.28rem;
            border-radius: 0.1rem;
            line-height: 0.28rem;
            text-align: center;
            border: 0.01rem solid rgb(219, 225, 232);
            font-size: 0.14rem;
            margin: 0 auto;
            margin-bottom: 0.2rem;
            color: rgb(145, 152, 161);
            cursor: pointer;
        }
        .add{
            position: absolute;
            bottom: 0.0rem;
            left: 50%;
            transform: translateX(-50%);
            width: 1.68rem;
        }
    }
</style>