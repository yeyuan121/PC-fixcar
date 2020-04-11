<template>
    <div class='partone'>
        <Title 
        :title="itemTitle"
        :history-string='historyRecodeString'
        />
        <div class="slot1">
            <slot name="slottop" />
        </div>
        <div class="itemcontainer">
            <Item 
            v-for="(v,k,index) in itemArr"
            :key="index"
            :item-name='v'
            />
            <div class="slots">
                <slot name="slotbottom" />
            </div>
        </div>
    </div>
</template>

<script>
import Title from './CommonTitle'
import Item from './CommonItem'

export default {
data() {
    return {

    }
},
//方法集合
methods: {

},
//接收props传值
props: ['itemTitle','itemArr','historyRecodeString'],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {Title,Item,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .partone{
        .slot1{
            font-size: 0.13rem;
            text-align: center;
            box-sizing: border-box;
            color: rgb(64,82,107);
            position: relative;
            top: -0.35rem;
        }
        .itemcontainer{
            padding: 0 4.25rem;
            // padding-bottom: 1.24rem;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            div{
                margin-bottom: 0.15rem;
            }
            .slots{
                width: 100%;
                font-size: 0.13rem;
                div{
                    padding: 0.1rem 1rem;
                    text-align: center;
                    box-sizing: border-box;
                    color: rgb(64,82,107);
                }
            }
        }
    }
</style>