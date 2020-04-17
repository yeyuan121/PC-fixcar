<template>
    <div class='other'>
        <Tab 
        @event='callback'
        />
        <div class="flexcontainers">
            <Item
            v-for=" (v,k,index) in  currentTab == 6 ? goods: goodsTotalArray[currentTab] "
            :key="index"
            :goods-title='v.title'
            :old-price='v.o_price'
            :now-price='v.discount'
            :goods-img='v.img'
            />
        </div>
        <div class="page">
            <el-pagination
            @current-change="handleCurrentChange"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
            prev-text='上一页'
            next-text='下一页'
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Tab from './component/Tab'
import Item from './component/Item'

import {getGoodsArr,} from '@/api/other.js'

export default {
data() {
    return {
        currentPage:0,//当前页
        goodsArr:[],
        goodsTotalArray:[],//商品存放总数组
        currentTab:'',
        goods:[],
    }
},
//方法集合
methods: {
    handleCurrentChange(e){
        this.currentPage = e
    },
    //获取商品
    getGoods(i){
        let type = i == 6 ? '' : i
        let page = 1
        let limit = 10
        getGoodsArr({type,page,limit}).then(res=>{
            // console.log(res)
            if(res.data.code == 1){
                this.goodsArr = res.data.data
            }else{

            }
        })
    },
    callback(data){
        console.log(1)
        this.currentTab = data
        console.log(this.goodsTotalArray[data],data)
        // this.getGoods(data)
    },
    //处理商品总数组的数据
    handleGoodsArray(arr){
        for(let item of arr){
            if(!Array.isArray(this.goodsTotalArray[item.type])){
                this.goodsTotalArray[item.type] = []
            }
            this.goodsTotalArray[item.type].push(item)
            this.goods.push(item)
        }
        console.log(this.goodsTotalArray)
    }
},
//接收props传值
props: [],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {Tab,Item,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    getGoodsArr().then(res => {
        if(res.data.code == 1){
            this.handleGoodsArray(res.data.data)
        }else{
            this.$alert(`${res.data.msg}`,'提示')
        }
    })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate(){
    console.log('beforcreate',this,1111)
}
}
</script>
<style lang='scss'>
    .other{
        padding: 0 4.11rem;
        background: rgb(242,245,249);
        .flexcontainers{
            display: flex;
            min-height: 4.47rem;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 0.45rem;
            div{
                // margin-bottom: 0.3rem;
            }
        }
        .el-pager li{
            background: white !important;
            border: 0.01rem solid rgb(221,222,224) !important;
            font-size: 0.17rem !important;
            margin: 0 0.03rem !important;
            border-radius: 0.04rem !important;
            width: 0.5rem !important;
            height: 0.5rem !important;
            line-height: 0.5rem !important;
        }
        .el-pager .active{
            color: rgb(250,115,75) !important;
            border: 0rem solid red !important;
            background: rgb(242,245,249) !important;
        }
        .btn-prev span,.btn-next span{
            border: 0.01rem solid rgb(221,222,224) !important;
            background: white !important;
            padding: 0 0.2rem;
            width: 1.2rem !important;
            height: 0.5rem !important;
            line-height: 0.5rem !important;
            font-size: 0.16rem !important;
        }
        .el-pagination__editor{
            height: 0.5rem !important;
            line-height: 0.5rem !important;
            font-size: 0.16rem !important;           
        }
        .el-pagination__jump{
            font-size: 0.16rem !important;
        }
        .el-pagination__jump input{
            height: 0.5rem !important;
            line-height: 0.5rem !important;
            font-size: 0.16rem !important;
        }
        .el-pagination .btn-prev , .btn-next{
            margin: 0 !important;
            background: none !important;
            border-radius: 0.04rem !important;
        }
        .el-pagination button:disabled{
            background: none;
        }
    }
</style>