<template>
<!-- 制作一个框架包裹slider -->
 <div style="width:100%;margin:0 auto;height:6.4rem">
      <!-- 配置slider组件 -->
      <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
          <!-- 直接使用slideritem slot -->
           <!-- <slideritem 
           v-for="(item,index) in someList" 
           :key="index" 
           :style="item.style"
           >
           {{item.html}}
           </slideritem> -->
          <!-- 设置loading,可自定义 -->
          <!-- <div slot="loading">loading...</div> -->
          <slideritem v-for="(item,index) in carouselArr" :key="index" :style="item.style">
            <img :src='item.img' style='width:19.20rem;height:100%;' />
          </slideritem>
      </slider>
 </div>
</template>
<script>
import { slider, slideritem } from 'vue-concise-slider'  
import {getCarousel,} from '@/api/home'

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
          speed: 300,
          preventRebound:true,
        },
        carouselArr:[],
      }
    },
    components: {
      slider,
      slideritem
    },
    created(){
      getCarousel().then(res=>{
        if(res.data.code == 1){
          this.carouselArr = res.data.data;console.log(this.carouselArr)
        }else{
          alert('获取轮播图数据失败')
        }
      })
    },
    mounted () {
      // let that = this
      // setTimeout(function () {
      //   that.someList = [
      //     {
      //       html: "slide1",
      //       style: {
      //         'background': "#1bbc9b"
      //       }
      //     },
      //     {
      //       html: 'slide2',
      //       style: {
      //         'background': '#4bbfc3'
      //       }
      //     },
      //     {
      //       html: 'slide3',
      //       style: {
      //         'background': '#7baabe'
      //       }
      //     }
      //   ]
      // }, 2000)
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
      }
    }
}
</script> 
<style lang='scss' scoped>

</style>