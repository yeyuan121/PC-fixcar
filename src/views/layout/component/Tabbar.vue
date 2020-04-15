<template>
<div class='container' :class="{addssss:$route.path.includes('profile')}">
    <div class="div1">
        <img src="@/assets/img/logo.png" alt="">
    </div>
    <div
    v-for="(v,k,index) in routesArray"
    :key="index"
    v-if='v.name'
    >
        <router-link :to="v.path" v-if="v.name != '登录'">{{v.name}}</router-link>
    </div>
    <div class="div2" v-if="!isLogin">
        <!-- <img src="@/assets/img/1.png" alt=""> -->
        <i class="iconfont iconfont icon-weibiaoti4"></i>
        <router-link to="/dl">登录/注册</router-link>
    </div>
    <div class="div2" v-else>
        <!-- <img src="@/assets/img/1.png" alt=""> -->
        <i class="iconfont iconfont icon-weibiaoti4 changeblack"></i>
        <router-link to="/profile">{{userObject.mobile}}</router-link>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
        current:0,
        routesArray:[],
        isLogin:false,//是否登陆
        userObject:null,//用户信息对象
    }
},
//方法集合
methods: {
    
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.routesArray = this.$router.options.routes
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    if(localStorage.getItem('nc_user')){
        this.isLogin = true
        this.userObject = JSON.parse(localStorage.getItem('nc_user'))
    }else{
        this.isLogin = false
        this.userObject = null
    }
},
}
</script>
<style lang='scss' scoped>
    .icon-weibiaoti4{
        // height: 0.23rem;
        // width: 0.16rem;
        margin-right: 0.05rem;
    }
    .addssss{
        background: white !important;
        color: black !important;
        a{
            color:black !important;
        }
        i{
            color: black !important;
        }
    }
.container{

    width: 100%;
    box-sizing: border-box;
    height: 0.66rem;
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
    .router-link-exact-active{
        color: red !important;
    }
    a{
        text-decoration: none;
        color: white;
    }
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