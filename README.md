# React Server-Side Rendering（SSR） scheme based on Next.js+Koa
> React Server-Side Rendering solution bases on Next.js+koa is easy to use out of the box.

**Background：** There is lacking of react related scaffolding tools like vue-cli, enterprise frameworks like egg and code specifications. For novices, it is not suitable for using it immediately.

### Doc
- [中文](https://github.com/Baiang/ReactSSR/blob/master/en.md)
- English

### Features
- Koa: Backend architecture integrated with koa (alternative option is egg in plan).
- Server-Side Rendering (SSR): Use the Next.js SSR scheme to make development simpler and cooler.
- Css compiler: Supporting to develop with less, sass, css, and some external resource references.
- Css-in-js: Styled-jsx integrates with sass solutions, easy to use, quickly for writing css style.
- Code syntax: Eslint grammar rule detecting and prettier coding style checking tools, integrating with TypeScript, unify the coding style and make your codes more rigorous.
- Unit test: Jest, greatly reducing the difficulty of writing unit tests, need less configurations.
- Syntax compatible: Supporting `className` and `class` two types class name writing styles which used in React; Supporting `autoprefixer` to auto-fill style prefix in css, sass, less, styled-jsx 
- Code optimization: Supporting module analysis when packaging. npm run analyze: bundles; source Maps.

### Quick Start

```bash
# git clone
> git clone git@github.com:Baiang/ReactSSR.git

# install
> npm install

# dev
> npm run dev

# Eslint code detection and prettier formatting code
> npm run eslint

# Automatic eslint code detection and prettier formatting code
> npm run lint:watch

# Unit test and coverage test
> npm run test

# build
> npm run build

# analyze:bundles
> npm run analyze:bundles

# Start the server
> npm run start
```


### Eslint
You can use the Standard specification or choosing the Airbnb. Eslint offers two types specifications:
- Standard (https://github.com/standard/standard)
- Airbnb (https://github.com/airbnb/javascript)

### Unit test
React unit test based on Jest + Enzyme

### Editor syntax highlighting
Styled-jsx syntax highlighting method https://github.com/zeit/styled-jsx

### TODOs
- Add egg
- Add dva
- Add CDN
- Support vue-ssr switch
