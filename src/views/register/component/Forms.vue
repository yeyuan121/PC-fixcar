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
            <div class="child11 addmargin">
                <div class="child11child1">手机/邮箱</div>
                <div class="child11child2">
                    <input type="text" name="" id="" placeholder="请输入邮箱或中国大陆手机号" v-model="phone">
                </div>
            </div>
            <div class="child11 addmargin">
                <div class="child11child1">密码</div>
                <div class="child11child2">
                    <input type="text" name="" id="" placeholder="4-20个字符,区分大小写" v-model="password">
                </div>
            </div>
            <div class="child11">
                <div class="child11child1">验证码</div>
                <div class="child11child2">
                    <input type="text" name="" id="" placeholder="请输入验证码" v-model="code">
                </div>
                <div class="child11child3" @click="toGetCode()">
                    获取验证码
                </div>
            </div>
            <div class="child13">
                <input type="radio" name="" id="">
                <span class="spanclass1">我同意</span>
                <span class="spanclass2">《耐诚智能科技平台注册协议》</span>
            </div>
            <div class="child14" @click="toFreeRegister">免费注册</div>
            <div class="child15">
                <span class="span1">已有账号?</span><span class="span2" @click="toLogin">直接登陆</span>
            </div>
            <div class="child16"></div>
        </div>
    </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'

import {getCode,registerFunc} from '@/api/register'

export default {
   data () {
      return {
        //Image list
        someList:[],
        //Sliding configuration [obj]
        options: {
          currentPage: 0,
          thresholdDistance:500,
          thresholdTime:100,
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
      }
    },
    components: {
      slider,
      slideritem,
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
      toLogin(){
          this.$router.push('/dl')
      },
      toGetCode(){//获取验证码
        let phone = this.phone
        let event = 'register'
        getCode({phone,event}).then(res=>{
            if(res.data.code == 1){
                this.$alert('发送验证码成功','提示')
            }else{
                this.$alert('发送验证码失败','提示')
            }
        })
      },
      toFreeRegister(){
          let username = this.phone
          let password = this.password
          let nickname = this.nickname ? this.nickname : ''
          let code = this.code
          registerFunc({username,password,nickname,code,}).then(res=>{
              console.log(res,114)
              if(res.data.code == 1){
                  this.$alert('注册成功','提示')
              }else{
                  this.$alert(`${res.data.msg}`,'提示')
              }
          })
      }
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
            font-size: 0.13rem;
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
            .child11{
                height: 0.44rem;
                display: flex;
                align-items: center;
                .child11child1{
                    width: 0.85rem;
                    text-align: end;
                    margin-right: 0.2rem;
                    color: rgb(152,159,167);
                }
                .child11child2{
                    flex: 1;
                    input{
                        border: 0;
                        border-bottom: 0.01rem solid rgb(201,203,207);
                        width: 85%;
                        outline: none;
                    }
                }
                .child11child3{
                    height: 0.23rem;
                    width: 0.94rem;
                    border: 0.01rem solid rgb(252,84,33);
                    border-radius: 0.03rem;
                    color: rgb(252,84,33);
                    line-height: 0.23rem;
                    text-align: center;
                }
            }
            .child13{
                height: 0.56rem;
                margin-bottom: 0.16rem;
                display: flex;
                color: rgb(152,159,167);
                font-size: 0.11rem;
                padding-top: 0.15rem;
                padding-left: 1.05rem;
                box-sizing: border-box;
                input{
                    margin-right: 0.05rem;
                }
                .spanclass2{
                    color: rgb(252,84,33);
                }
            }
            .child14{
                width: 2.82rem;
                height: 0.45rem;
                background: rgb(252,84,33);
                color: white;
                line-height: 0.45rem;
                text-align: center;
                border-radius: 0.04rem;
                transform: translateX(1.05rem);
            }
            .child15{
                height: 0.5rem;
                text-align: center;
                line-height: 0.5rem;
                color: rgb(152,159,167);
                font-size: 0.11rem;
                padding-left: 1.2rem;
                .span2{
                    color: rgb(252,84,33);
                    margin-left: 0.1rem;
                }
            }
            .addmargin{
                margin-bottom: 0.35rem;
            }
            ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                color:   rgb(201,203,207);
            }
            :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color:    #909;
                opacity:  1;
            }
            ::-moz-placeholder { /* Mozilla Firefox 19+ */
                color:    #909;
                opacity:  1;
            }
            :-ms-input-placeholder { /* Internet Explorer 10-11 */
                color:    #909;
            }
        }
    }
</style>