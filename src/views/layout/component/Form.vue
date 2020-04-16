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
            <input type="text" name="b1" id="" placeholder='输入手机号码' class="p4" v-model="phone">
            <input type="text" name="b2" id="" placeholder='输入验证码' class="p5" v-model="code">
            <input type="text" name="b3" id="" placeholder='输入地址' class="p5" v-model="address">
            <div class="position1" @click="openSelectFixTypeCart()">
                <input type="text" name="b4" id="" placeholder='选择故障类型' class="p4" readonly="readonly" :value="faultObject?faultObject.fault_name:'选择故障类型'">
                <div class="position2" v-show="selectFixTypeShow">
                    <div 
                    class="position2child1" 
                    @click.stop="selectFixType(v)"
                    v-for="(v,k,index) in faultArray"
                    :key="index"
                    >
                    {{v.fault_name}}
                    </div>
                </div>
            </div>
            <div class="button" @click="makeOrder()">立即下单</div>
        </div>
        <div class="yzm" @click="takeCode()">获取验证码</div>
    </div>
</template>

<script>
import {toOrder,getFault,} from '@/api/order'
import {getCode,} from '@/api/register'

export default {
    data() {    
        return {
            selectFixTypeShow:false,//故障类型下拉选择框是否显示
            phone:'',
            code:'',
            address:'',
            faultArray:[],//故障类型数组
            faultObject:null,//已选择的故障类型对象
        }
    },
//方法集合
methods: {
    //选择故障类型点击回调函数
    selectFixType(obj){
        this.faultObject = obj
        this.selectFixTypeShow = false
    },
    //打开故障类型下拉选择框
    openSelectFixTypeCart(){
        this.selectFixTypeShow = !this.selectFixTypeShow
    },
    //下单
    makeOrder(){
        let mobile = this.phone
        let code = this.code
        let address = this.address
        let users_id = ''

        if(localStorage.getItem('nc_user')){
            users_id = JSON.parse(localStorage.getItem('nc_user')).id
        }

        if(this.faultObject === null){
            this.$alert('请选择故障类型','提示')
            return
        }
        
        let fault_id = this.faultObject.id
        toOrder({mobile,code,address,fault_id,users_id,}).then(res=>{
            if(res.data.code == 1){
                this.$alert(`${res.data.msg}`,'提示')
            }else{
                this.$alert(`${res.data.msg}`,`提示`)
            }
        })
    },
    //获取验证码
    takeCode(){
        let phone = this.phone
        let event = 'order'
        getCode({phone,event}).then(res=>{
            if(res.data.code == 1){
                this.$alert('发送验证码成功','提示')
            }else{
                this.$alert(`${res.data.msg}`,'提示')
            }
        })
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
    getFault().then(res=>{
        if(res.data.code == 1){
            this.faultArray = res.data.data
        }else{
            this.$alert('获取故障类型数据失败','提示')
        }
    })
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
                outline: none;
                height: 0.45rem;
                border-radius: 0.03rem;
                margin-right: 0.03rem;
                box-sizing: border-box;
                padding-left: 0.15rem;
                border: 0px solid red;
                color: rgb(102, 102, 102); 
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
                cursor: pointer;
            }
            .position1{
                position: relative;
                .position2{
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    height: 1.5rem;
                    // border: 0.01rem solid black;
                    width: 100%;
                    top: 0.5rem;
                    left: 50%;
                    transform: translateX(-50%);
                    cursor: pointer;
                    background: white;
                    border-radius: 0.03rem;
                    div{
                        flex: 1;
                        color: rgb(102, 102, 102);
                        line-height: 0.38rem;
                        text-align: center;
                        // border-bottom: 0.01rem solid black;
                    }
                }
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