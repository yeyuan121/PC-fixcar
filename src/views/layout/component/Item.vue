<template>
    <div class='containerss'>
        <div class="div1">
            <img :src="leftImgPath" alt="">
        </div>
        <div class="div2">
            <div class="div11">
                <span>{{mark}}</span>
                {{title}}
                <div class="slot_container">
                    <slot name="date" />
                </div>
            </div>
            <div class="div21">{{text}}</div>
        </div>
    </div>
</template>

<script>
export default {
data() {
return {

}
},
//方法集合
methods: {

},
//接收props传值
props: ['title','text','mark','leftImgPath'],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .containerss{
        cursor: pointer;
        height: 1rem;
        box-sizing: border-box;
        padding: 0.1rem 0;
        display: flex;
        .div1{
            position: relative;
            height: 0.8rem;
            width: 1rem;
            margin-right: 0.1rem;
            img{
                position: absolute;
                top:0;
                left:0;
                height: 100%;
                width: 100%;
                border-radius: 0.03rem;
            }
        }
        .div2{
            flex: 1;
            font-size: 0.14rem;
            span{
                display: inline-block;
                height: 0.2rem;
                min-width: 0.4rem;
                padding: 0 0.05rem;
                background: rgb(252, 72, 17);
                line-height: 0.2rem;
                color: white;
                text-align: center;
                border-radius: 0.03rem;
                margin-right: 0.05rem;
            }
            .div11{
                display: flex;
                align-items: center;
                .slot_container{
                    flex: 1;
                    text-align: end;
                }
                margin-bottom: 0.05rem;
                font-size: 0.12rem;
                color: rgb(26,47,76);
                font-weight: medium;
            }
            .div21{
                color: rgb(145,152,161);
                font-size: 0.11rem;
                letter-spacing: 0.012rem;
                line-height: 0.16rem;
            }
        }
    }
</style>