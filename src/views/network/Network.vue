<template>
    <div class='network'>
        <CommonComponent 
        item-title='网络维修具体有哪些项目?'
        :item-arr='arr'
        :history-recode-string='historyArr'
        >
            <template v-slot:slotbottom>
                更多的故障问题您可以直接联系我们！<span> 0592-6666915</span>
            </template>
        </CommonComponent>
        <CommonMessageComponent 
        :fix-arr='fixArr'
        />
    </div>
</template>

<script>
import CommonComponent from '../../components/content/commonPartOne/CommonPartOne'
import CommonMessageComponent from '../../components/content/commonMessageComponent/index'

export default {
data() {
    return {
        arr:
        [
            '网络突然中断',
            '网卡误操作被禁用',
            '网线接触不良',
            '网卡插错',
            '交换机停止工作',
            '网络正常,邮件发送出现异常'
        ],
        historyArr:
        [
            {
                name:'首页 > ',
                url:'/'
            },
            {
                name:'网络维修',
                url:'/network'
            }
        ],
        fixArr:
        [
            {
                header:'路由器怎么修改无线密码',
                content:'打开电脑浏览器，输入192.168.199.1。输入路由器的管理密码，进入设置界面。选择左侧栏的系统设置。然后点击修改后台管理密码。输入原密码，然后输入两次新密码，点击保存即可。'
            },
            {
                header:'路由器密码忘记密码',
                content:'打开网络设置，在“设置”界面中点击“网络和共享中心”。进入共享中心界面后，点击已连接的网络。点击“无线属性”，进入无限属性界面。找到“安全”选项并点击进入，点击“显示字符”即可看到密码。'
            },
            {
                header:'本地连接出现黄色叹号',
                content:'1、打开电脑桌面，右键点击网上邻居属性；2、点击进入网上邻居界面，右键本地连接属性；3、 点击进入本地连接属性，双击Internet 协议（TCP/IP）；4、取消自动获度得IP地址选择选项，手动输入IP地址、子网掩码、默认网关和DNS服务器地问址；5、手动输入电脑的ip地址，子网掩码，DNS服务器地址，即可解除本地连接受限制；'
            }
        ]
    }
},
//方法集合
methods: {

},
//接收props传值
props: [],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//注册组件
components: {CommonComponent,CommonMessageComponent,},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='scss' scoped>
    .network{
        background: rgb(242,245,249);
    }
</style>