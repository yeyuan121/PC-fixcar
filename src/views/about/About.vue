<template>
    <div class='container'>
        <div class="div">
            <i>当前位置 :</i>
            <span class="span1" @click="toHome()">首页 > </span>
            <span class="span2">关于我们</span>
        </div>
        <div class="div1">
            <div class="div1child1">
                关于厦门耐诚智能科技有限公司
            </div>
            <div class="div1child2">
                <div class="left">
                    <div class="left1">
                        <span>厦门耐诚智能科技有限公司 </span>成立多年来，主要从事安防设备、
                        弱电智能化系统、系统集成化、PC设备、办公设备等弱电行业
                        我们拥有专业的施工团队和丰富的施工经验，服务过各类企业，
                        不仅能解决企业中存在的网络、监控、PC、办公设备等弱电问题，
                        也能提供及时、高效、快速地维修服务，多个维修网点全面覆盖厦门及周边县市
                        ，力争一小时内上门。
                    </div>
                    <div class="left2">
                        本公司自成立以来从未停止过更新、优化、改进、创新的脚步，
                        始终走在行业的前沿，始终如一地为客户提供优质有效的解决方案。
                        为客户节约时间成本，把损失降到最低，是我们的目标。
                    </div>
                    <div class="left3">
                        愿今后彼此鼎力合作,共同迈向辉煌的未来，期待与您的合作。
                    </div>
                </div>
                <div class="right">
                    <img src="@/assets/img/14844.png" alt="">
                </div>
            </div>
        </div>
        <div class="div2">
            <div class="div2child1">您可以多种方式联系我们哦</div>
            <div class="div2child2">
                <div class="div2child2div1">
                    <img src="@/assets/img/about1.png" alt="">
                    <div class="icondesc">
                        固话 | 0592-6666915
                    </div>
                </div>
                <div class="div2child2div2">
                    <img src="@/assets/img/about2.png" alt="">
                    <div class="icondesc">
                        手机 | 18030244550
                    </div>
                </div>
                <div class="div2child2div3">
                    <img src="@/assets/img/about3.png" alt="">
                    <div class="icondesc">
                        微信 | 18030244550
                    </div>
                </div>
                <div class="div2child2div4">
                    <img src="@/assets/img/about4.png" alt="">
                    <div class="icondesc">
                        QQ | 635409869
                    </div>
                </div>
            </div>
        </div>
        <div class="div3">
            <!-- <img src="@/assets/img/map.jpg" alt=""> -->
            <el-amap
                vid="amapDemo3"  
                :center="center"
                :zoom="zoom"
                mapStyle='normal'
                class="amap-demo"
            >
                <el-amap-info-window 
                :position="window.position"
                :content="window.content"
                >
                    <!-- <div :style="slotStyle">
                        <b>Hello {{ count }} times</b>
                        <button @click="onClick">Add</button>
                    </div> -->
                </el-amap-info-window>
            </el-amap>
        </div>
    </div>
</template>

<script>
export default {
//组件状态
data() {
let self = this;
        const center = [121.59996, 31.197646];

        return {
          zoom: 12,
          center,
        //   count: 0,
        //   slotStyle: {
        //     padding: '1px 1px',
        //     background: 'rgba(70,92,110,0.3)',
        //     color: '#333',
        //     // border: '1px solid #aaa'
        //   },
          window: {
            position: [121.59996, 31.197646],
            content:'厦门市海沧区嵩屿南路94号',
          }
        }
},
//方法集合
methods: {
    toHome(){
        this.$router.push('/')
    },
    onClick(){

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
    .container{
        .div{
            padding: 0 3.6rem;
            background: rgb(242,245,249);
            height: 0.67rem;
            line-height: 0.67rem;
            font-size: 0.13rem;
            color: rgb(151,158,167);
            i{
                font-style: inherit;
                margin-right: 0.15rem;
            }
            span{
                cursor: pointer;
            }
        }
        .div1{
            height: 4.65rem;
            padding: 0 3.6rem;
            background: rgb(242,245,249);
            .div1child1{
                text-align: center;
                font-size: 0.23rem;
                // font-weight: bold;
                color: rgb(20,41,71);
            }
            .div1child2{
                display: flex;
                .left{
                    line-height: 0.29rem;
                    height: 4.2rem;
                    width: 7.5rem;
                    font-size: 0.15rem;
                    padding: 0.7rem 0;
                    box-sizing: border-box;
                    .left1{
                        color: rgb(151,158,167);
                        span{
                            color: rgb(20,41,71);
                            font-weight: bold;                           
                        }
                    }
                    .left2{
                        margin: 0.4rem 0;
                        color: rgb(151,158,167);
                    }
                    .left3{
                        color: rgb(20,41,71);
                        font-weight: bold;
                    }
                }
                .right{
                    flex: 1;
                    border-radius: 50%;
                    padding: 0.4rem;
                    box-sizing: border-box;
                    margin-left: 0.5rem;
                    img{
                        width: 3.48rem;
                        height: 3.48rem;
                        border-radius: 50%;
                    }
                }
            }
        }
        .div2{
            height: 4.35rem;
            padding: 0 3.6rem;
            padding-top: 0.87rem;
            box-sizing: border-box;
            margin-bottom: 0.33rem;
            .div2child1{
                text-align: center;
                font-size: 0.23rem;
                // font-weight: bold;
                color: rgb(20,41,71);
                margin-bottom: 0.4rem;      
            }
            .div2child2{
                border: 0.01rem solid rgb(252,72,17);
                border-radius: 0.04rem;
                height: 2.83rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 0.57rem;
                div{
                    height: 1.52rem;
                    flex: 1;
                    font-size: 0.20rem;
                    color: rgb(252,72,17);
                    text-align: center;
                    img{
                        height: 1.03rem;
                        width: 1.08rem;
                        margin-bottom: 0.3rem;
                    }
                }
            }
        }
        .div3{
            height: 5.27rem;
            padding: 0 3.6rem;
            padding-bottom: 1.2rem;
            img{
                height: 100%;
                width: 100%;
                border-radius: 0.03rem;
            }
        }
        .amap-demo{
            ::v-deep .amap-container{
                font-size: 0.13rem;
                a{
                    display: none;
                }
                .amap-info-content{
                    min-width: 2.91rem;
                    height: 0.54rem;
                    line-height: 0.54rem;
                    font-size: 0.19rem;
                    font-weight: normal;
                    text-align: center;
                    background: rgba(16,19,16,0.7);
                    border-radius: 0.03rem;
                    color: white;
                    border: none;
                    white-space: nowrap;
                }
                .amap-info-sharp{
                    display: none;
                }
            }
        }
    }
</style>