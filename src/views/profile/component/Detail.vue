<template>
    <div class='conatainer'>
        <div class="div1">
            <div class="span2"><span>*</span>真实姓名</div>
            <input type="text" name="" id="">
        </div>
        <div class="div1">
            <div class="span2"><span>*</span>联系方式</div>
            <input type="text" name="" id="">            
        </div>
        <div class="div1">
            <div>邮箱</div><input type="text" name="" id="">
        </div>
        <div class="div1">
            <div>联系地址</div>
        </div>
        <div class="div5">
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="div6">
            <div>确认</div>
            <div class="cancel">取消</div>
        </div>
    </div>
</template>

<script>
export default {
//组件状态
data() {
    return {

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
    .container{
        div{
            height: 0.55rem;
            color: rgb(145,152,161);
        }
        input{
            height: 0.4rem;
            width: 3.75rem;
            outline: none;
            border: 0.01rem solid rgb(223,224,227);
            border-radius: 0.04rem;
        }
        .div1{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 0.1rem;
            div{
                width: 0.75rem;
                height: 0.25rem;
                margin-right: 0.15rem;
                text-align: end;
                span{
                    color: red;
                }
            }
        }
        .div5{
            height: 1.37rem;
            padding-left: 0.9rem;
            textarea{
                width: 3.68rem;
                border-radius: 0.03rem;
                outline: none;
                border: 0.01rem solid rgb(223,224,227);
                height: 100%;
            }
        }
        .div6{
            margin-top: 0.4rem;
            display: flex;
            justify-content: center;
            padding-left: 0.9rem;
            padding-right: 3.5rem;
            div{
                width: 1rem;
                height: 0.4rem;
                margin-right: 0.1rem;
                background:rgb(252,72,17);
                color: white;
                line-height: 0.4rem;
                text-align: center;
                border-radius: 0.03rem;
                cursor: pointer;
            }
            .cancel{
                background: rgb(218,218,218);
                color: white;
            }
        }
    }
</style>