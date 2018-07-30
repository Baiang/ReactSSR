const Koa = require('koa');
const app = new Koa();
const static  = require('koa-static');
const path = require('path')
const config = require('./config/config.global');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

// 配置静态资源
const staticPath = './dist'
app.use(static(
    path.join( __dirname, staticPath)
))

app.listen(config[env].port, config[env].host, () => {
  console.log(`启动成功${config[env].port}`)      //日志打印
});
