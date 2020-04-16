<template>
<div class='container'>
    <div class="div1">
        <span @click="nav(1)">电脑维修</span><Lines />
        <span @click="nav(2)">网络维修</span><Lines />
        <span @click="nav(3)">办公设备</span><Lines />
        <span @click="nav(4)">监控设备</span><Lines />
        <span @click="nav(5)">其他产品</span><Lines />
        <span @click="nav(6)">服务</span><Lines />
        <span @click="nav(7)">案例资讯</span><Lines />
        <span @click="nav(8)">关于我们</span>
    </div>
    <div class="div2"></div>
    <div class="div3">
        <div class="div3-class1">
            <div class="span1">
                <img src="@/assets/img/logo2.png" alt="">
            </div>
            <div class="span2">厦门耐诚智能科技有限公司/厦门欣邦诺信息科技有限公司</div>
            <div class="span2">地址：厦门市海沧区嵩屿南路94号/厦门市海沧区海兴路35号之六</div>
            <div class="span2">手机：18030244550 / 18059819876 </div>
            <div class="span2">Copyright 2014-2018 厦门耐诚智能科技有限公司 版权所有 闽ICP备18023960号-1</div>
        </div>
        <div class="div3-class2">
            <div class="span1">热线 9:00-18:00</div>
            <div class="span2">0592-6666915</div>
        </div>
        <div class="div3-class3">
            <div class="div1">
                <img src="@/assets/img/code.png" alt="">
            </div>
            <div class="div2">关注微信公众号</div>
        </div>
    </div>
    <div class="div2"></div>
    <div class="div4">
        <div class="div4-div1">合作商家:</div>
        <div class="div4-div2">
            <img src="@/assets/img/f1.png" alt="">
            <img src="@/assets/img/f2.png" alt="">
            <img src="@/assets/img/f4.png" alt="">
            <img src="@/assets/img/f3.png" alt="">
            <img src="@/assets/img/f6.png" alt="">
            <img src="@/assets/img/f7.png" alt="">
            <img src="@/assets/img/f8.png" alt="">
            <img src="@/assets/img/f9.png" alt="">
        </div>
    </div>
    <div class="div4">
        <div class="div4-div1">网站认证:</div>
        <div class="div4-div2">
            <img src="@/assets/img/a.png" alt="">

        </div>
    </div>
</div>
</template>

<script>
import Lines from './Line'
export default {
data() {
return {

}
},
//方法集合
methods: {
    nav(id){
        if(id == 1){
            this.$router.push('/dnwx')
        }else if(id == 2){
            this.$router.push('/wlwx')
        }else if(id == 3){
            this.$router.push('/bgsb')
        }else if(id == 4){
            this.$router.push('/jksb')
        }else if(id == 5){
            this.$router.push('/qtcp')
        }else if(id == 6){
            this.$router.push('/fw')
        }else if(id == 7){
            this.$router.push('/alzx')
        }else if(id == 8){
            this.$router.push('/gywm')
        }
    }
},
//接收props传值
props: [],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {Lines,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    console.log(this.$router)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .container{
        height: 4.76rem;
        background: black;
        padding-right: 4,23rem;
        padding-left: 4.23rem;
        padding-top: 0.31rem;
        box-sizing: border-box;
        .div1{
            height: 0.36rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            span{
                color: grey;
                font-size: 0.14rem;
            }
        }
        .div2{
            width: 10.53rem;
            height: 0.01rem;
            background: grey;
            margin-bottom: 0.2rem;
        }
        .div3{
            color: grey;
            font-size: 0.14rem;
            display: flex;
            justify-content: space-between;
            width: 9.76rem;
            overflow: hidden;
            .div3-class1{
                .span1{
                    img{
                        height: 0.28rem;
                    }
                }
                .span2{
                    height: 0.2rem;
                    margin-bottom: 0.1rem;
                }
            }
            .div3-class2{
                padding-top: 0.31rem;
                box-sizing: border-box;
                height: 1.29rem;
                width: 2.53rem;
                .span1{
                    margin-bottom: 0.18rem;
                    font-size: 0.16rem;
                }
                .span2{
                    font-size: 0.3rem;
                    color: white;
                }
            }
            .div3-class3{
                height: 1.14rem;
                width: 0.9rem;
                font-size: 0.11rem;
                padding-top: 0.21rem;
                box-sizing: border-box;
                .div1{
                    height: 0.91rem;
                    width: 0.91rem;
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
                .div2{
                    padding-top: 0.1rem;
                    background: black;
                    text-indent: 0.05rem;
                }
            }
        }
        .div4{
            color: white;
            font-size: 0.13rem;
            margin-bottom: 0.1rem;
            img{
                height: 0.28rem;
                margin-right: 0.05rem;
                min-width: 0.95rem;
            }
            .div4-div1{
                margin-bottom: 0.1rem;
            }
        }
    }
</style>