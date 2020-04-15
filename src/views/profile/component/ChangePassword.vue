<template>
    <div class='containers'>
        <div class="div1">
            <div>当前密码</div>
            <input type="text" name="" id="" placeholder="请输入当前密码" v-model="p1">
        </div>
        <div class="div1">
            <div>新的密码</div>
            <input type="text" name="" id="" placeholder="4-20个字符，区分大小写" v-model="p2">
        </div>
        <div class="div1">
            <div>确认密码</div>
            <input type="text" name="" id="" v-model="p3">
        </div>
        <div class="div4">
            <div @click="confirms()">确认</div>
        </div>
    </div>
</template>

<script>
import {modifyPassword,} from '@/api/profile.js'

export default {
//组件状态
data() {
    return{
        p1:'',
        p2:'',
        p3:'',
    }
},
//方法集合
methods: {
    confirms(){
        let token = JSON.parse(localStorage.getItem('nc_user')).token
        let oldpw = this.p1
        let newpw = this.p2
        let newpw2 = this.p3
        modifyPassword({
            token,
            oldpw,
            newpw,
            newpw2,
        }).then(res=>{
            console.log(res,115)
            if(res.data.code == 1){
                this.$alert(`${res.data.msg}`,'提示')
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
created() {},
mounted() {}
}
</script>
<style lang='scss' scoped>
    .containers{
        input::-webkit-input-placeholder{
            color: rgb(226,228,230);
            font-size: 0.13rem;
            text-indent: 0.2rem;
        }
        color: rgb(100, 117, 136);
        .div1{
            height: 0.45rem;
            display: flex;
            align-items: center;
            margin-bottom: 0.2rem;
            div{
                width: 0.85rem;
                height: 100%;
                margin-right: 0.15rem;
                line-height: 0.45rem;
                text-align: end;
            }
            input{
                height: 0.38rem;
                width: 3.8rem;
                border: 0.01rem solid rgb(226,228,230);
                border-radius: 0.03rem;
            }
        }
        .div4{
            padding-right: 3.35rem;
            padding-left: 1rem;
            margin-top: 0.5rem;
            height: 0.47rem;
            div{
                height: 100%;
                width: 1rem;
                margin: 0 auto;
                background: rgb(252,72,17);
                color: white;
                line-height: 0.47rem;
                text-align: center;
                border-radius: 0.03rem;
                cursor: pointer;
            }
        }
    }
</style>