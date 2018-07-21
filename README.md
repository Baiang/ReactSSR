# React的SSR服务端渲染方案
> reactSSR基于next.js+koa React的SSR服务端渲染方案，简单易上手，开箱即用。

**背景：** 在使用react中，缺乏像vue-cli一样的模板，拥有健全的打包工具、esLint代码检测、单元测试、代码分析等等，对于新手来说，不适合立马上手和开发。

### 特色
- koa：集成koa后端架构。
- next.js：React的SSR服务端渲染方案。
- styled-jsx+sass：css-in-js的解决方案，简单易上手,快速编写css样式。
- 语法检测：eslint语法规则检测和prettier代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。
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
