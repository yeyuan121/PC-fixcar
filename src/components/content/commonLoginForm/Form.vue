<template>
    <div class='container'>
        <div class="div1">
            <!-- 配置slider组件 -->
            <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
                <!-- 直接使用slideritem slot -->
                <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
                <!-- 设置loading,可自定义 -->
                <div slot="loading">loading...</div>
            </slider>
        </div>
        <div class="div2">
            <div class="child1">
                <img src="@/assets/img/code1.png" alt="">
            </div>
            <div class="child2">
                <div class="mmdl" @click="changeTab(1)" :class="{adds:currentTab == 1}">
                    密码登录
                    <div :class="{add:currentTab == 1}"></div>
                </div>
                <div class="dxdl" @click="changeTab(2)" :class="{adds:currentTab == 2}">
                    短信登陆
                    <div :class="{add:currentTab == 2}"></div>
                </div>
            </div>
            <div class="child3">
                <div>
                    <img src="@/assets/img/sock1.png" alt="">
                </div>
                <input type="text" name="" id="" placeholder="手机号码" v-model="phone">
            </div>
            <div class="child4">
                <div>
                    <img src="@/assets/img/sock.png" alt="">
                </div>
                <input type="password" name="" id="" placeholder="密码" v-model="password">
                <div class="getcode" v-if="currentTab == 2" @click="getPhoneCode()">
                    {{this.timer <=0 ? '获取短信码' : this.timer}}
                    <div class="getcodechild"></div>
                </div>
            </div>
            <div class="child5"></div>
            <div class="child6" @click="toLogin">登陆</div>
            <div class="child7">
                <div class="child7child1">其他账号登陆<img src="@/assets/img/qq.png" alt=""></div>            
                <div class="child7child2" @click="toRegister">立即注册</div>
            </div>
        </div>
    </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
import FormBottom from './FormBottom'

import {loginFunc,phoneCodeLogin,} from '@/api/login'
import {getCode,} from '@/api/register'

export default {
   data () {
      return {
        //Image list
        someList:[],
        //Sliding configuration [obj]
        options: {
          currentPage: 0,
          thresholdDistance:100,
          thresholdTime:500,
          autoplay:4000,
          loop:true,
        //   direction:'vertical',
          loopedSlides:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          speed: 300
        },
        currentTab:1,//登陆方式切换tab
        phone:'',
        password:'',
        timer:0,
      }
    },
    components: {
      slider,
      slideritem,
      FormBottom,
    },
    mounted () {
      let that = this
        that.someList = [
          {
            html: 'slide1',
            style: {
              'background': '#1bbc9b'
            }
          },
          {
            html: 'slide2',
            style: {
              'background': '#4bbfc3'
            }
          },
          {
            html: 'slide3',
            style: {
              'background': '#7baabe'
            }
          }
        ]
    },
    methods: {
      // Listener event
      slide (data) {
        //console.log(data)
      },
      onTap (data) {
        //console.log(data)
      },
      onInit (data) {
        //console.log(data)
      },
      changeTab(i){
          this.currentTab = i
      },
      toRegister(){
          this.$router.push('/register')
      },
      toLogin(){//登陆操作
        if(this.currentTab == 1){//账号密码登录
            let username = this.phone
            let password = this.password
            loginFunc({username,password,}).then(res=>{
                if(res.data.code == 1){
                    res.data.data['token'] = res.data.token
                    let data = JSON.stringify(res.data.data)
                    this.saveUserMessage(data)
                    this.$alert('登陆成功','提示')
                    this.$router.push('/')
                }else{
                    this.$alert(`${res.data.msg}`, '登陆失败', {
                        confirmButtonText: '确定'
                    })               
                }
            })
        }else{//短信验证码登录
            let username = this.phone
            let code = this.password
            phoneCodeLogin({username,code}).then(res=>{
                if(res.data.code == 1){
                    let data = res.data.data;console.log(data,2000)
                    data = JSON.stringify(data)
                    this.saveUserMessage(data)
                    this.$router.push('/')
                }
                this.$alert(`${res.data.msg}`,'提示')
            })
        }
      },
      saveUserMessage(data){//保存用户信息
        localStorage.setItem('nc_user',data)
      },
      //获取验证码
      getPhoneCode(){
          let phone = this.phone
          let event = 'login'
          getCode({phone,event,}).then(res=>{
              if(res.data.code == 1){
                  this.timer = 60
                setInterval(() => {
                    if(this.timer >= 1){
                        this.timer -= 1
                    }else{

                    }               
                }, 1000)
              }
              this.$alert(`${res.data.msg}`,`提示`)
          }).catch(err=>{
              this.$alert('请求失败','提示')
          })
      }
    },
    created(){
        
    }
}
</script>
<style lang='scss' scoped>
    .container{
        display: flex;
        height: 6.43rem;
        padding: 0 5.04rem;
        padding-top: 1.1rem;
        box-sizing: border-box;
        .div1{
            width: 3.87rem;
            border-radius: 0.05rem;
        }
        .div2{
            cursor: pointer;
            border: 1px solid rgb(249,249,249);
            flex: 1;
            border-radius: 0.05rem;
            padding: 0.45rem 0.75rem;
            box-sizing: border-box;
            .child1{
                height: 0.84rem;
                position: relative;
                img{
                    position: absolute;
                    right: 0;
                    top: 0;
                    height: 0.55rem;
                    width: 0.55rem;
                }
            }
            .child2{
                display: flex;
                font-size: 0.16rem;
                height: 0.41rem;
                div{
                    position: relative;
                    line-height: 0.41rem;
                    flex: 1;
                    text-align: center;
                    color: rgb(201,203,207);
                    div{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 0.022rem;
                        background:rgb(201,203,207);
                    }
                }
            }
            .child3{
                height: 0.88rem;
                width: 100%;
                padding-top: 0.37rem;
                padding-left: 0.3rem;
                box-sizing: border-box;
                display: flex;
                align-items: flex-start;
                margin-bottom: 0.2rem;
                div{
                    width: 20%;
                    height: 105%;
                    background: rgb(255,246,235);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        height: 0.2rem;
                        width: 0.17rem;
                    }
                }
                input{
                    height: 100%;
                    width: 80%;
                    background: rgb(255,246,235);
                    border: 0px solid black;
                    font-size: 0.13rem;
                    outline: none;
                }
            }
            .child4{
                height: 0.48rem;
                width: 100%;
                padding-left: 0.3rem;
                box-sizing: border-box;
                display: flex;
                align-items: flex-start;
                margin-bottom: 0.2rem;
                position: relative;
                div{
                    width: 20%;
                    height: 105%;
                    background: rgb(255,246,235);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        height: 0.2rem;
                        width: 0.17rem;
                    }
                }
                input{
                    height: 100%;
                    width: 80%;
                    background: rgb(255,246,235);
                    border: 0px solid black;
                    font-size: 0.13rem;
                    outline: none;
                }
                .getcode{
                    width: 1rem;
                    height: 0.5rem;
                    background: rgb(255,246,235);
                    position: absolute;
                    top: 0;
                    right: 0;
                    font-size: 0.13rem;
                    color: rgb(252,72,17);
                    .getcodechild{
                        width: 0.04rem;
                        height: 0.5rem;
                        background: white;
                        position: absolute;
                        left: -0.04rem;
                    }
                }
            }
            .child5{
                height: 0.56rem;
            }
            .child6{
                height: 0.52rem;
                width: 93%;
                margin:0 auto;
                color: white;
                font-size: 0.20rem;
                line-height: 0.52rem;
                text-align: center;
                border-radius: 0.03rem;
                letter-spacing: 0.07rem;
                background: rgb(252,72,17) !important;
                transform: translateX(0.16rem);
            }
            .child7{
                display: flex;
                height: 0.55rem;
                font-size: 0.11rem;
                align-items: center;
                padding-left: 0.3rem;
                box-sizing: border-box;
                div{
                    flex: 1;
                }
                .child7child1{
                    display: flex;
                    align-items: center;
                    color: rgb(145,152,161)
                }
                .child7child2{
                    color: rgb(252,72,17);
                    text-align: end;
                }
                img{
                    width: 0.25rem;
                    height: 0.25rem;
                    margin-left: 0.15rem;
                }
            }
            ::-webkit-input-placeholder {
                color: rgb(229,182,167);
            }
        }
        .add{
            background: rgb(252,72,17) !important;
        }
        .adds{
            color: rgb(145,152,161) !important;
        }
    }
</style>