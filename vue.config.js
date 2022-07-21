// function mock(app,url,data){
//   app.get(url,(request,response) =>{
//     response.json(data)
//   })
// }

// const homeData = require('./src/mock/bookHome')
// const shelfData = require('./src/mock/bookShelf')
// const listData = require('./src/mock/bookList')
// const flatListData = require('./src/mock/bookFlatList')

module.exports = {
  publicPath: '/',//配置项目路径
  outputDir: 'dist',//构建输出目录，默认目录dist
  assetsDir: "assets",//静态资源目录（js,css,image），默认是src/assets
  lintOnSave: false, //是否开启eslint检测,false不开启，有效值：true || false
  productionSourceMap: true,//生产环境下面开启sourceMap用于代码的调试true开启，false关闭
  devServer: {
    // before(app){
    //   mock(app,'/book/home',homeData)
    //   mock(app,'/book/shelf',shelfData)
    //   mock(app,'/book/list',listData)
    //   mock(app,'/book/flat-list',flatListData)
    // },
    open: true, //是否运行项目自动打开默认浏览器
    host: "127.0.0.1",//主机，0.0.0.0支持局域网地址，可以用真机测试
    port: 8080, //端口
    https: false,//是否启动https
    //配置跨域代理http,https
    proxy: {
      "/api": {
        target: "http://vueshop.glbuys.com/api",//接口地址
        changeOrigin: true,//开启代理，如果设置为true,那么本地会虚拟一个服务端接收你的请求并代你发送该请求
        pathRewrite: {//地址重定向，相当于/api等于http://vueshop.glbuys.com/api
          '^/api': ""
        }
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map' //配置开发者环境的sourceMap用于代码调试
  }
}