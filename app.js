const Koa = require('koa');
const app = new Koa();
const static  = require('koa-static');
const path = require('path')

// 配置静态资源
const staticPath = './dist'
app.use(static(
    path.join( __dirname, staticPath)
))

app.listen(3000);
console.log('启动成功3000')      //日志打印
