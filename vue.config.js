// vue.config.js
const goods = require('./data/goods.json');

module.exports = {
    // 选项...
    /*baseUrl:"./", //根路径
    outputDir:"dist",   //打包路径 构建输出
    assetsDir:"assets", //静态资源目录  js css png jpg  fonts
    indexPath:"index.html",
    filenameHashing:true,
    pages:undefined,
    lintOnSave:true,    //是否开启eslint, 保存检测 true false 'error'
    runtimeCompiler:false,
    transpileDependencies:[],
    productionSourceMap:false,
    crossorigin:undefined,
    integrity:false,*/
    devServer: {
        port:8080,
        open: false, //浏览器自动打开页面
        host: "0.0.0.0", //如果是真机测试，就使用这个IP
        https: false,
        hotOnly: false, //热更新（webpack已实现了，这里false即可）
        proxy: {
            '/api': {
                target: 'http://home.51.com',
                // ws:true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api":""
                }
            }
        },
        before(app){
            //http://localhost:8080/test/path
            app.get('/test/path', function(req, res) {
                res.json(goods);
            });
        }
    }
}