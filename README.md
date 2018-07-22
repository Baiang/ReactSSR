# 基于Next.js+koa React的SSR服务端渲染方案
> ReactSSR基于Next.js+koa React的SSR服务端渲染方案，简单易上手，开箱即用。

**背景：** 在使用react中，缺乏像vue-cli一样脚手架工具，egg企业级架构及代码规范；对于新手来说，不适合立马上手。

### 特色
- koa：集成koa后端架构（计划开发可选egg）。
- Next.js：React的SSR服务端渲染方案。
- css-in-js：styled-jsx+sass的解决方案，简单易上手,快速编写css样式。
- 代码语法：eslint语法规则检测和prettier代码风格的检查工具，集成TypeScript，让语法更严谨、代码风格统一化。
- 单元测试：jest, 极大的降低写单元测试的难度，无需更多的配置。
- 语法兼容：支持React中className和class两种样式写法；css、sass、styled-jsx支持autoprefixer前缀自动补齐
- 代码优化：支持打包模块分析 npm run analyze:bundles；source Maps。

### 构建应用

```bash
# 下载
> git clone git@github.com:Baiang/ReactSSR.git

# 安装
> npm install

# 启动
> npm run dev

# eslint代码检测及prettier格式化代码
> npm run eslint

# 自动eslint代码检测及prettier格式化代码
> npm run lint:watch

# 单元测试及覆盖率测试
> npm run test

# 打包文件
> npm run build

# 带有模块分析的打包
> npm run analyze:bundles

# 启动服务器
> npm run start
```


### Eslint规范
使用的是Standard规范，也可以选择Airbnb。Eslint提供两种规范：
- Standard (https://github.com/standard/standard)
- Airbnb (https://github.com/airbnb/javascript)

### 单元测试
基于Jest + Enzyme 的 React 单元测试

### 编辑器语法高亮
styled-jsx的语法高亮可以到styled-jsx查看文档进行设置 https://github.com/zeit/styled-jsx

### 后续更新计划
- 增加egg
- 增加dva
- 支持vue-ssr切换
