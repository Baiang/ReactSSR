# React的SSR服务端渲染方案
> reactSSR基于next.js+koa React的SSR服务端渲染方案，简单易上手，开箱即用。

**背景：** 在使用react中，缺乏像vue-cli一样的简单上手模板，egg企业级架构及代码规范，对于应用，不适合大型应用开发；对于新手来说，不适合立马上手和开发。

### 特色
- koa：集成koa后端架构。
- next.js：React的SSR服务端渲染方案。
- css-in-js：styled-jsx+sass的解决方案，简单易上手,快速编写css样式。
- 代码语法：eslint语法规则检测和prettier代码风格的检查工具，集成TypeScript，让语法更严谨、代码风格统一化。
- jest单元测试：jest, 极大的降低写单元测试的难度，无需更多的配置。
- 语法兼容性：支持React中className和class两种样式写法；css、sass、styled-jsx支持autoprefixer前缀自动补齐
- 打包分析：支持打包分析 npm run analyze:bundles

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

# 启动服务器
> npm run start
```


### Eslint规范
我们现在使用的是Standard规范。Eslint提供两种规范：
- Standard (https://github.com/standard/standard)
- Airbnb (https://github.com/airbnb/javascript)

### 单元测试
基于Jest + Enzyme 的 React 单元测试

### 语法高亮
styled-jsx的语法高亮可以到github styled-jsx生查看文档，进行设置 https://github.com/zeit/styled-jsx

### 后续更新计划
- 增加egg
- 增加dva
- 支持vue-ssr切换
