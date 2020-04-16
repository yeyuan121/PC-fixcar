<template>
    <div class='conatainer'>
        <div class="div1">
            <div class="span2"><span>*</span>真实姓名</div>
            <input type="text" name="" id="" v-model="userObject.nickname" placeholder="方便登记资料前端不会显示">
        </div>
        <div class="div1">
            <div class="span2"><span>*</span>联系方式</div>
            <input type="text" name="" id="" v-model="userObject.mobile" placeholder="填写您的手机号">            
        </div>
        <div class="div1">
            <div>邮箱</div><input type="text" name="" id="" v-model="qqmail">
        </div>
        <div class="div1">
            <div>联系地址</div>
            <v-region @values="regionChange" :area="false"></v-region>
        </div>
        <div class="div5">
            <textarea name="" id="" cols="30" rows="10" v-model="addressDetail" placeholder="请详细填写地址"></textarea>
        </div>
        <div class="div6">
            <div @click="confirms()">确认</div>
            <div class="cancel" @click="cancels()">取消</div>
        </div>
    </div>
</template>

<script>
import {modifyUserMessage,} from '@/api/profile.js'

export default {
//组件状态
data() {
    return {
        userObject:null,//用户信息对象
        addressStr:'',//地址
        qqmail:'',//qq邮箱
        addressDetail:'',//详细地址
    }
},
//方法集合
methods: {
    regionChange(res){
        let str = ''
        if(res.province){
            str += res.province.value
            str += ','
            if(res.city){
                str += res.city.value
            }
        }
        this.addressStr = str
    },
    //确认修改
    confirms(){
        let username = this.userObject.nickname
        let mobile = this.userObject.mobile
        let token = this.userObject.token
        let address = this.addressStr + ',' + this.addressDetail
        let email = this.qqmail
        modifyUserMessage({
            username,
            mobile,
            token,
            address,
            email,
        }).then(res=>{
            this.$alert(`${res.data.msg}`,'提示')
        })
    },
    //取消修改
    cancels(){
        history.go(0)
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
    this.userObject = JSON.parse(localStorage.getItem('nc_user'))
},
mounted() {}
}
</script>
<style lang='scss' scoped>
    .container{
        input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{
            font-size: 0.12rem;
            color: rgb(205,206,210);
        }
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
            box-sizing: border-box;
            padding: 0 0.15rem;
            font-size: 0.12rem;
            color: rgb(205,206,210);
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
                width: 3.75rem;
                border-radius: 0.03rem;
                outline: none;
                border: 0.01rem solid rgb(223,224,227);
                height: 100%;
                box-sizing: border-box;
                padding: 0.15rem;
                font-size: 0.12rem;
                color: rgb(205,206,210);
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
        .v-region{
            display: flex;
            height: 0.4rem !important;
            width: 3.74rem !important;
            ::v-deep .rg-select{
                height: 100%;
                flex: 1;
                .rg-select__el{
                    height: 100%;
                    padding: 0 !important;
                    text-align: center;
                    line-height: 0.4rem;
                    color: rgb(205,206,210);
                    font-size: 0.12rem;
                }
                .rg-select__el--active{
                    box-shadow: none !important;
                    outline: none !important;
                    border: 0.01rem solid rgb(223,224,227);
                }
            }
        }
        .container>>>.v-dropdown-caller{
            flex: 1 !important;
        }
        .div.rg-select {
            flex: 1;
        }
    }
</style>