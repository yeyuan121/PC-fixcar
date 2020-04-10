<template>
    <div class='container'>
        <div class="class1">
            <span class="span1">请详细填写您的信息，我们的工程师会快速联系到您，请保持电话通畅！</span>
            <span class="span2">|</span>
            <span class="span3"></span>
            <span class="span4">
                维修电话:
                <span>0592-6666915</span>
            </span>
        </div>
        <div class="class2">
            <input type="text" name="b1" id="" placeholder='输入手机号码' class="p4">
            <input type="text" name="b2" id="" placeholder='输入验证码' class="p5">
            <input type="text" name="b3" id="" placeholder='输入地址' class="p5">
            <input type="text" name="b4" id="" placeholder='选择故障类型' class="p4">
            <div class="button">立即下单</div>
        </div>
        <div class="yzm">获取验证码</div>
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

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .container{
        width: 9.5rem;
        height: 1.15rem;
        padding: 0.1rem 0.2rem;
        box-sizing: border-box;
        background: rgba(28, 28, 28,.4);
        border-radius: 0.05rem;
        font-size: 0.14rem;
        color: white;
        position: absolute;
        top: 4.63rem;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
        .class1{
            height: 0.2rem;
            margin-bottom: 0.1rem;
            margin-top: 0.05rem;
            .span1{
                margin-right: 0.27rem;
            }
            .span2{
                margin-right: 0.27rem;
            }
            .span4{
                span{
                    color: rgb(252, 72, 17);
                    font-weight: bold;
                    font-size: 0.17rem;
                }
            }
        }
        .class2{
            display: flex;
            align-items: center;
            input{
                height: 0.45rem;
                border-radius: 0.03rem;
                margin-right: 0.03rem;
                box-sizing: border-box;
                padding-left: 0.15rem;
                border: 0px solid red;
            }
            .button{
                background: rgb(252, 72, 17);
                height: 0.45rem;
                color: white;
                width: 1rem;
                text-align: center;
                line-height: 0.45rem;
                border-radius: 0.03rem;
                cursor: pointer;
            }
            .p5{
                flex: 1;
            }
            .p4{
                width: 1.38rem;
            }
        }
        .yzm{
            height: 0.36rem;
            width: 1.08rem;
            position: absolute;
            top: 0.5rem;
            left: 3.05rem;
            background: rgba(28, 28, 28,.1);
            border-radius: 0.03rem;
            line-height: 0.36rem;
            text-align: center;
            color: rgb(177, 183, 190);
            cursor: pointer;
        }
    }
</style>