# React的SSR服务端渲染方案
> reactSSR基于next.js React的SSR服务端渲染方案，简单易上手，开箱即用。

**背景：** 在使用react中，缺乏像vue-cli一样的模板，拥有健全的打包工具、esLint代码检测、单元测试、代码分析等等，对于新手来说，不适合立马上手和开发。

### 构建启动

```bash
# 下载
> git clone git@github.com:Baiang/ReactSSR.git

# 安装
> npm install

# 启动
> npm run dev

# 代码检测及格式化代码
> npm run eslint

```


### 技术栈
- next.js：React的SSR服务端渲染方案。
- styled-jsx+sass：css-in-js的解决方案，简单易上手,快速编写css样式。
- eslint：语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。
- jest单元测试：jest, 极大的降低写单元测试的难度，无需更多的配置。

### Eslint规范
我们现在使用的是Standard规范。Eslint提供两种规范：
- Standard (https://github.com/standard/standard)
- Airbnb (https://github.com/airbnb/javascript)

### 单元测试
基于Jest + Enzyme 的 React 单元测试

### 语法高亮
styled-jsx的语法高亮可以到github styled-jsx生查看文档，进行设置 https://github.com/zeit/styled-jsx

### 后续更新计划
- 优化服务端缓存
- postcss扩展

## 更新

### 1.6更新内容
- 优化webpack插件写法
- 支持React中className和class两种样式写法
- css、sass、styled-jsx支持autoprefixer前缀自动补齐
- 优化esLint检测文件，增加npm run dev:esLint 命令行检测通知

### 1.5更新内容
- 兼容IE9浏览器
- 优化模板，组件Layout.jsx更改为根目录下index.jsx
- 支持SVG引用
- 增加favicon.ico图标
- 增加jest单元测试、覆盖率测试

### 1.4更新内容
- 命令行npm run dev执行时打开浏览器
- 优化esLint规则
- 修复引入字体报错

### 1.3更新内容
- 支持typescript
- 修复同时引入css和sass文件时报错
- 优化模板_document.jsx改成组件Layout.jsx
- 引入antd组件库

### 1.2更新内容
- 优化目录结构，开发文件放入src目录下
- 增加打包分析 npm run analyze:bundles
- 增加文件打包压缩优化 npm run analyze:size
- 增加编辑器通用格式规范

### 1.1更新内容
- 增加esLint规范检测
- 增加自动格式化esLint:watch
- .next目录更改为build目录

### 1.0更新内容
- 支持引入css文件
- 支持引入sass文件
- 支持styled-jsx使用sass
