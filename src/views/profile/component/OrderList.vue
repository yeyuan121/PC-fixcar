<template>
    <div class='order'>
        <div class="div1">
            <div class="div1child1">下单时间</div>
            <div class="div1child2">手机号码</div>
            <div class="div1child3">维修类型</div>
            <div class="div1child4">下单地址</div>
        </div>
        <div class="div2">
            <div class="flexcontainer" v-for="(v,k,index) in myOrderList" :key="index">
                <div>{{v.create_time}}</div>
                <div>{{v.mobile}}</div>
                <div>{{v.fault_name}}</div>
                <div>{{v.address}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {getMyOrder,} from '@/api/profile.js'

export default {
//组件状态
data() {
    return{
        myOrderList:[],//我的订单列表
    }
},
//方法集合
methods: {
    //获取个人订单信息
    getOrderList(){
        let user_id = JSON.parse(localStorage.getItem('nc_user')).id
        getMyOrder({user_id}).then(res=>{
            if(res.data.code == 1){
                this.myOrderList = res.data.data
            }else{
                this.$alert(`${res.data.msg}`,'提示')
            }
        })
    }
},
//组件注册
components: {},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {
    this.getOrderList()
},
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
                    font-size: 0.12rem;
                }
            }
        }
    }
</style>