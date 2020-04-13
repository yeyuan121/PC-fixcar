<template>
    <div class='order'>
        <div class="div1">
            <div class="div1child1">下单时间</div>
            <div class="div1child2">手机号码</div>
            <div class="div1child3">维修类型</div>
            <div class="div1child4">下单地址</div>
        </div>
        <div class="div2">
            <div class="flexcontainer">
                <div>111111111</div>
                <div>22222</div>
                <div>333333333</div>
                <div>44444444444444</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
//组件状态
data() {
    return{

    }
},
//方法集合
methods: {},
//组件注册
components: {},
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
    .order{
        .div1{
            display: flex;
            border-bottom: 0.007rem solid rgba(145,152,161,0.2);
            font-weight: bold;
            div{
                width: 1.8rem;
                height: 0.4rem;
            }
        }
        .div2{
            margin-top: 0.4rem;
            .flexcontainer{
                display: flex;
                div{
                    width: 1.8rem;
                    height: 0.4rem;
                    color: rgb(182,186,192);
                }
            }
        }
    }
</style>