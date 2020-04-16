const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

module.exports = {
    devServer: {
        open: true, //浏览器自动打开页面
        host: "0.0.0.0", //如果是真机测试，就使用这个IP
        port: 8080,
        https: false,
        hotOnly: false, //热更新（webpack已实现了，这里false即可）
        // proxy: {
        //     '/api': {
        //     target:'http://api.luodiqian.com', // 你请求的第三方接口
        //     changeOrigin:true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        //     pathRewrite:{  // 路径重写，
        //     '^/api': ''  // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
        //     }
        //     }
        // }

    },
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    // 生成文件的路径，也可以与webpakc打包的一致。
                    // 下面这句话非常重要！！！
                    // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
                    staticDir: path.join(__dirname,'dist'),
                    // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
                    routes: ['/', '/dnwx','/wlwx','/bgsb','/jksb','/qtcp','/fw','/alzx','/gywm','/profile',
                    // '/id', '/dnwx/id','/wlwx/id','/bgsb/id','/jksb/id','/qtcp/id','/fw/id','/alzx/id','/gywm/id',
                    '/dl','/profile/detail','/register'],
                    // routes: ['/', '/dnwx'],
                    // 这个很重要，如果没有配置这段，也不会进行预编译
                    renderer: new Renderer({
                        inject: {
                            // foo: 'bar'
                        },
                        headless: false,
                        // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                        renderAfterDocumentEvent: 'render-event',
                        // args: ['--no-sandbox', '--disable-setuid-sandbox']
                    })
                }),
            ],
        };
    }
}


