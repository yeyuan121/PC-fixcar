<template>
<div>
    <div class="title_container">
        <commonTitle
        :history-string='historyArrays'
        />
    </div>
    <div class='container'>
        <div class="left">
           <div class="left1">单日确诊激增10万为乌龙，美国疫情到底怎么样了？</div>
           <div class="left2">2020年04月14日 12:52 界面新闻</div>
           <div class="left3">
               约翰斯·霍普金斯大学的实时统计数据为全球媒体所引用，除了美国媒体，也包括新华社等中国媒体。对于此次乌龙事件，该校新冠数据统计工作人员在接受CGTN采访时表示，是统计误差造成的失误。

　　该校疫情可视化数据图的核心成员回应称，数据上的波动变化是由于美国佛罗里达州的数据源在人工输入时出现了问题。该成员称，已在Dashboard和GitHub上做了更正，系统已恢复正常。

　　观察者网早些时候的对比则发现，约翰斯·霍普金斯大学在统计佛罗里达州数据时出现失误。此前，该机构数据显示佛罗里达州累计确诊12.3万，比美国媒体和其他数据平台的统计多出10万。而佛罗里达州总计接受病毒检测的人数为19.6万。

　　约翰斯·霍普金斯大学对数据进行修正后，美国的疫情发展再度吻合了研究人员预测的趋势：正在接近峰值。华盛顿大学健康指标和评估研究所的模型预测，美国的单日新增死亡将在本周一达到峰值，新增2150例，之后将出现下降。重灾区纽约的死亡人数应在三天前达到峰值，此后开始下降。

　　模型预测，美国的疫情将在5月逐渐减弱；到8月，美国预计将有68841人死亡。截至14日，美国的累计死亡病例为23608例。

　　据CNN新闻4月13日报道，纽约州州长科莫在当天的发布会上表示，该州的新增入院患者、重症看护患者和插管患者的三日平均数均出现下降。

　　周一，纽约州的累计死亡人数破万，达到10056例，累计确诊超过19万。科莫指出，由于入院患者数量开始趋于稳定，该州已经扛过了“最糟糕”时刻。

　　同一天，纽约州与东海岸和北部的新泽西州、康涅狄格、宾夕法尼亚、特拉华、罗得岛和马萨诸塞达成协议，将就何时复工协同制定计划。科莫表示，各州政府的复工计划将以民众的安全为最先考量，“而不是政治”。

　　西海岸的加州、华盛顿和俄勒冈也就复工达成类似协议。加州州长纽森在Twitter发文表示，西海岸是依照“科学”行事，“我们为确保公众健康更早宣布居家令，也会依照同样的原则复工”。

　　此前，美国总统特朗普在Twitter发文，称何时复工是“总统的决定”，而非各州州长说了算。但依照美国宪法，各州州长有权发布居家令并强制当地学校停课。


　　由于模型预测美国的疫情将在5月缓解，特朗普在周一的新闻发布会上透露，联邦政府正在就复工制定计划，计划即将完成。但他拒绝透露复工的具体时间。

　　但包括田纳西在内的多州均表示，目前尚不具备复工条件。田纳西州周一宣布将居家令延长到4月30日，明尼苏达则宣布将紧急状态延长至5月13日。全美50个州均已进入“重大灾难状态”。

　　美国疾控中心主任雷德菲尔德接受NBC采访时指出，因为各地的疫情不同，全美的疫情需要被分为多种不同情况分析。他表示，各地的卫生系统需要提高检测、隔离和追查密切接触者的能力，在社区内树立信心，才能让社区有信心重新复工。

　　皮尤研究所的一项最新调查显示，高达29%的美国受访者认为新冠病毒为人工合成。23%的受访者认为新冠病毒为实验室有意制造，6%认为是实验室无意中合成。在不同年龄组中，18岁到29岁的年轻人中有35%相信人工合成阴谋论，65岁及以上受访者中为21%。
           </div>
        </div>
        <div class="right">
            <ColorTabBar 
            text='视频教程'
            />
            <ColorTabBar 
            text='最新发布'
            />
            <div class="publish_container">
                <PublishItem
                v-for="(v,k,index) in wxalArray"
                :key="index"
                publish-text='长沙为何会吸引大型企业入驻？腾讯为，富士康都包括在内？'
                />
            </div>
            <ColorTabBar 
            text='热门标签'
            />
            <div class="tag_flex_container">
                <div
                v-for="(v,k,index) in tagArr"
                :key="index"
                >
                    {{v.name}}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ColorTabBar from '../../components/content/commonMessageComponent/ColorTab'
import CommonTitle from '../../components/content/commonPartOne/CommonTitle'

export default {
data() {
    return {
        tagArr:
        [
            {
                id:1,
                name:'耐诚科技'
            },
            {
                id:2,
                name:'电脑维修'
            },
            {
                id:3,
                name:'网络维修'
            },
            {
                id:4,
                name:'开机无反应'
            }
        ],
        historyArrays:
        [
            {
                name:'首页 > ',
                url:'/'
            }
        ]
    }
},
//方法集合
methods: {

},
//接收props传值
props: ['fixArr','wxalArray','wxalArrayTop2',],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {ColorTabBar,CommonTitle,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    console.log('wxalArray',this.wxalArray)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .title_container{
        height: 1.26rem;
        overflow: hidden;
    }
    .container{
        display: flex;
        padding: 0 3.58rem;
        // padding-top: 0.2rem;
        margin-bottom: 0.45rem;
        background: white;
        .right{
            width: 2.87rem;
            border:1.45px solid rgba(196,200,205,.4);
            padding: 0.2rem 0.15rem;
            box-sizing: border-box;
            border-radius: 0.01rem;
            .publish_container{
                margin-top: 0.15rem;
            }
            .tag_flex_container{
                display: flex;
                flex-wrap: wrap;
                padding: 0.22rem;
                div{
                    font-size: 0.11rem;
                    color: rgb(152,159,167);
                    margin-right: 0.25rem;
                    margin-bottom: 0.1rem;
                    cursor: pointer;
                }
            }
        }
        .left{
            flex: 1;
            width:7.74rem;
            // padding:0 0.68rem;
            padding-right: 0.5rem;
            box-sizing:border-box;
            font-size: 0.18rem;
            color: rgb(145,152,161);
            .left1{
                height: 0.33rem;
                font-size: 0.26rem;
                color: rgb(20,41,71);
                // font-weight: bold;
            }
            .left2{
                height: 0.37rem;
                border-bottom: 0.01rem rgba(145,152,161,0.2) solid;
                margin-bottom: 0.2rem;
                line-height: 0.37rem;
                font-size: 0.15rem;
            }
            .left3{
                letter-spacing: 0.015rem;
                line-height: 0.35rem;
            }
        }
    }
</style>