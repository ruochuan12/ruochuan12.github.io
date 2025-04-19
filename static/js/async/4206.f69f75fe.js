"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["4206"],{52789:function(e,n,r){r.r(n),r.d(n,{default:()=>x});var i=r(52676),s=r(40453),o=r(9192);let a=r.p+"static/image/vue-devtools--loading.5dd48478.png",t=r.p+"static/image/contents.9ccf89cc.png",d=r.p+"static/image/loading-router-debugger.e031bffa.png",c=r.p+"static/image/loading-router-path.ed6c7512.png",l=r.p+"static/image/npm-dist-tag.96099e83.png";function h(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",strong:"strong",ul:"ul",li:"li",pre:"pre",h3:"h3",img:"img",hr:"hr"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"跟着-vant4-源码学习如何用-vue3--ts-开发一个-loading-组件",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#跟着-vant4-源码学习如何用-vue3--ts-开发一个-loading-组件",children:"#"}),"跟着 vant4 源码学习如何用 vue3 + ts 开发一个 loading 组件"]}),"\n",(0,i.jsx)(o.Z,{defaultLocale:"zh-CN"}),"\n",(0,i.jsx)(n.p,{children:"本文为稀土掘金技术社区首发签约文章，14天内禁止转载，14天后未获授权禁止转载，侵权必究！"}),"\n",(0,i.jsxs)(n.h2,{id:"1-前言",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-前言",children:"#"}),"1. 前言"]}),"\n",(0,i.jsxs)(n.p,{children:["大家好，我是",(0,i.jsx)(n.a,{href:"https://ruochuan12.github.io",rel:"noopener noreferrer",target:"_blank",children:"若川"}),"。我倾力持续组织了一年",(0,i.jsx)(n.a,{href:"https://juejin.cn/post/7079706017579139102",rel:"noopener noreferrer",target:"_blank",children:"每周大家一起学习200行左右的源码共读活动"}),"，感兴趣的可以",(0,i.jsxs)(n.a,{href:"https://juejin.cn/pin/7217386885793595453",rel:"noopener noreferrer",target:"_blank",children:["点此扫码加我微信 ",(0,i.jsx)(n.code,{children:"ruochuan02"})," 参与"]}),"。另外，想学源码，极力推荐关注我写的专栏",(0,i.jsx)(n.a,{href:"https://juejin.cn/column/6960551178908205093",rel:"noopener noreferrer",target:"_blank",children:"《学习源码整体架构系列》"}),"，目前是掘金关注人数（4.1k+人）第一的专栏，写有20余篇源码文章。"]}),"\n",(0,i.jsx)(n.p,{children:"我们开发业务时经常会使用到组件库，一般来说，很多时候我们不需要关心内部实现。但是如果希望学习和深究里面的原理，这时我们可以分析自己使用的组件库实现。有哪些优雅实现、最佳实践、前沿技术等都可以值得我们借鉴。"}),"\n",(0,i.jsxs)(n.p,{children:["相比于原生 ",(0,i.jsx)(n.code,{children:"JS"})," 等源码。我们或许更应该学习，正在使用的组件库的源码，因为有助于帮助我们写业务和写自己的组件。"]}),"\n",(0,i.jsxs)(n.p,{children:["如果是 ",(0,i.jsx)(n.code,{children:"Vue"})," 技术栈，开发移动端的项目，大多会选用 ",(0,i.jsx)(n.code,{children:"vant"})," 组件库，目前（2022-10-31） ",(0,i.jsx)(n.code,{children:"star"})," 多达 ",(0,i.jsx)(n.code,{children:"20.4k"}),"。我们可以挑选 ",(0,i.jsx)(n.code,{children:"vant"})," 组件库学习，我会写一个",(0,i.jsx)(n.a,{href:"https://juejin.cn/column/7140264842954276871",rel:"noopener noreferrer",target:"_blank",children:"vant 组件库源码系列专栏"}),"，欢迎大家关注。"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"vant 组件库源码分析系列："})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["1.",(0,i.jsx)(n.a,{href:"https://juejin.cn/post/7158239404484460574",rel:"noopener noreferrer",target:"_blank",children:"vant 4 即将正式发布，支持暗黑主题，那么是如何实现的呢"})]}),"\n",(0,i.jsxs)(n.li,{children:["2.",(0,i.jsx)(n.a,{href:"https://juejin.cn/post/7160465286036979748",rel:"noopener noreferrer",target:"_blank",children:"跟着 vant 4 源码学习如何用 vue3+ts 开发一个 loading 组件，仅88行代码"})]}),"\n",(0,i.jsxs)(n.li,{children:["3.",(0,i.jsx)(n.a,{href:"https://juejin.cn/post/7165661072785932296",rel:"noopener noreferrer",target:"_blank",children:"分析 vant 4 源码，如何用 vue3 + ts 开发一个瀑布流滚动加载的列表组件？"})]}),"\n",(0,i.jsxs)(n.li,{children:["4.",(0,i.jsx)(n.a,{href:"https://juejin.cn/post/7169003604303413278",rel:"noopener noreferrer",target:"_blank",children:"分析 vant 4 源码，学会用 vue3 + ts 开发毫秒级渲染的倒计时组件，真是妙啊"})]}),"\n",(0,i.jsxs)(n.li,{children:["5.",(0,i.jsx)(n.a,{href:"https://juejin.cn/post/7171227417246171149",rel:"noopener noreferrer",target:"_blank",children:"vant 4.0 正式发布了，分析其源码学会用 vue3 写一个图片懒加载组件！"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["这次我们来学习 ",(0,i.jsx)(n.a,{href:"https://vant-contrib.gitee.io/vant/v4/#/zh-CN/loading",rel:"noopener noreferrer",target:"_blank",children:"loading 组件"}),"。"]}),"\n",(0,i.jsx)(n.p,{children:"学完本文，你将学到："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"1. 学会如何用 vue3 + ts 开发一个 loading 组件\n2. 学会使用 vue-devtools 打开组件文件，并可以学会其原理\n3. 学会使用 @vue/babel-plugin-jsx 编写 jsx 组件\n4. 等等\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"2-准备工作",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-准备工作",children:"#"}),"2. 准备工作"]}),"\n",(0,i.jsxs)(n.p,{children:["看一个开源项目，第一步应该是先看 ",(0,i.jsx)(n.a,{href:"https://github.com/youzan/vant",rel:"noopener noreferrer",target:"_blank",children:"README.md"})," 再看贡献文档 ",(0,i.jsx)(n.a,{href:"https://github.com/youzan/vant/blob/main/.github/CONTRIBUTING.md",rel:"noopener noreferrer",target:"_blank",children:"github/CONTRIBUTING.md"}),"。"]}),"\n",(0,i.jsxs)(n.h3,{id:"21-克隆源码--跑起来",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#21-克隆源码--跑起来",children:"#"}),"2.1 克隆源码 && 跑起来"]}),"\n",(0,i.jsxs)(n.p,{children:["You will need ",(0,i.jsx)(n.a,{href:"https://nodejs.org",rel:"noopener noreferrer",target:"_blank",children:"Node.js >= 14"})," and ",(0,i.jsx)(n.a,{href:"https://pnpm.io",rel:"noopener noreferrer",target:"_blank",children:"pnpm"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# 推荐克隆我的项目\ngit clone https://github.com/ruochuan12/vant-analysis\ncd vant-analysis/vant\n\n# 或者克隆官方仓库\ngit clone git@github.com:vant-ui/vant.git\ncd vant\n\n# 安装依赖，会运行所有 packages 下仓库的 pnpm i 钩子 pnpm prepare 和 pnpm i\npnpm i\n\n# Start development\npnpm dev\n"})}),"\n",(0,i.jsxs)(n.p,{children:["我们先来看 ",(0,i.jsx)(n.code,{children:"pnpm dev"})," 最终执行的什么命令。"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"vant"})," 项目使用的是 ",(0,i.jsx)(n.code,{children:"monorepo"})," 结构。查看根路径下的 ",(0,i.jsx)(n.code,{children:"package.json"}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'vant/package.json => "dev": "pnpm --dir ./packages/vant dev"'}),"\n",(0,i.jsx)(n.code,{children:"vant/packages/vant/package.json"}),' => "dev": "vant-cli dev"`']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pnpm dev"})," 最终执行的是：",(0,i.jsx)(n.code,{children:"vant-cli dev"})," 启动了一个服务。本文主要是学习 ",(0,i.jsx)(n.a,{href:"https://vant-contrib.gitee.io/vant/v4/#/zh-CN/loading",rel:"noopener noreferrer",target:"_blank",children:"loading 组件"})," 的实现，所以我们就不深入 ",(0,i.jsx)(n.code,{children:"vant-cli dev"})," 命令了。"]}),"\n",(0,i.jsxs)(n.h2,{id:"3-从官方文档入手找到-demo-文件",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-从官方文档入手找到-demo-文件",children:"#"}),"3. 从官方文档入手找到 demo 文件"]}),"\n",(0,i.jsxs)(n.p,{children:["有些小伙伴喜欢在新的项目中去安装组件，再去自行新建 ",(0,i.jsx)(n.code,{children:"demo"})," 文件去调试预览。一般来说，其实没有必要。开源项目中一般就有 ",(0,i.jsx)(n.code,{children:"demo"})," 类文件了。直接学习即可，省去新建的麻烦。"]}),"\n",(0,i.jsxs)(n.p,{children:["我们凭着前端人直觉，应该很容易在找到 ",(0,i.jsx)(n.code,{children:"loading"})," 文件夹的路径：",(0,i.jsx)(n.code,{children:"vant/packages/vant/src/loading/demo/index.vue"}),"。\n但真的是这个路径吗？或者说这个路径是怎么渲染到官方文档中页面上的呢。带着这个疑问，我们从文档网站入手。"]}),"\n",(0,i.jsxs)(n.p,{children:["我们很容易我们通过 ",(0,i.jsx)(n.code,{children:"http://localhost:5173/#/zh-CN/loading"}),"。\n接下来我们来看，",(0,i.jsxs)(n.strong,{children:["这个页面的对应的文件是在哪里，为啥路由 ",(0,i.jsx)(n.code,{children:"loading"})," 就能到达这个页面"]}),"。"]}),"\n",(0,i.jsxs)(n.h3,{id:"31-mobile-项目中的-demoblock-组件",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#31-mobile-项目中的-demoblock-组件",children:"#"}),"3.1 mobile 项目中的 DemoBlock 组件"]}),"\n",(0,i.jsxs)(n.p,{children:["我们通过 ",(0,i.jsx)(n.a,{href:"https://devtools.vuejs.org/guide/installation.html",rel:"noopener noreferrer",target:"_blank",children:"vue-devtools"})," 可以找到和打开 ",(0,i.jsx)(n.code,{children:"DemoBlock"})," 组件文件。",(0,i.jsx)(n.a,{href:"https://chrome.zzzmh.cn/info/nhdogjmejiglipccpnnnanhbledajbpd",rel:"noopener noreferrer",target:"_blank",children:"也可以通过极简插件下载安装"}),"。我曾经写过文章分析原理",(0,i.jsx)(n.a,{href:"https://juejin.cn/post/6959348263547830280",rel:"noopener noreferrer",target:"_blank",children:"《据说 99% 的人不知道 vue-devtools 还能直接打开对应组件文件？本文原理揭秘》"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"vue-devtools 打开 demo-block",src:a})}),"\n",(0,i.jsxs)(n.p,{children:["打开后的文件是这样的，主要传入插槽，还有 ",(0,i.jsx)(n.code,{children:"card"})," 和 ",(0,i.jsx)(n.code,{children:"title"})," 属性。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// vant/packages/vant-cli/site/mobile/components/DemoBlock.vue\n<template>\n  <div class="van-doc-demo-block">\n    <h2 v-if="title" class="van-doc-demo-block__title">{{ title }}</h2>\n    <div v-if="card" class="van-doc-demo-block__card">\n      <slot />\n    </div>\n    <slot v-else />\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'DemoBlock\',\n\n  props: {\n    card: Boolean,\n    title: String,\n  },\n};\n<\/script>\n// 省略 less\n'})}),"\n",(0,i.jsxs)(n.p,{children:["在编辑器左侧，我们可以看到 ",(0,i.jsx)(n.code,{children:"vant-cli/site"})," 目录结构。"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"vant-cli/site 目录结构",src:t})}),"\n",(0,i.jsxs)(n.h3,{id:"32-mobile-项目中的-mainjs-主入口文件",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#32-mobile-项目中的-mainjs-主入口文件",children:"#"}),"3.2 mobile 项目中的 main.js 主入口文件"]}),"\n",(0,i.jsxs)(n.p,{children:["我们很容易看出这就是一个 ",(0,i.jsx)(n.code,{children:"vue"})," 的项目。我们打开 ",(0,i.jsx)(n.code,{children:"main.js"})," 查看。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// vant/packages/vant-cli/site/mobile/main.js\nimport { createApp } from 'vue';\nimport DemoBlock from './components/DemoBlock.vue';\nimport DemoSection from './components/DemoSection.vue';\nimport { router } from './router';\nimport App from './App.vue';\n// 模拟 touch\nimport '@vant/touch-emulator';\n\n// 全局注册 DemoBlock 和 DemoSection 组件，在 demo 文件组件中会用到\nwindow.app = createApp(App)\n  .use(router)\n  .component(DemoBlock.name, DemoBlock)\n  .component(DemoSection.name, DemoSection);\n\nsetTimeout(() => {\n  window.app.mount('#app');\n}, 0);\n\n// https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari/33681490#33681490\ndocument.addEventListener('touchstart', () => {}, {\n  passive: true,\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"33-mobile-项目中的-appvue-文件",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#33-mobile-项目中的-appvue-文件",children:"#"}),"3.3 mobile 项目中的 App.vue 文件"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// 省略其他文件\n<template>\n  <demo-nav />\n  <router-view v-slot="{ Component }">\n    <keep-alive>\n      <demo-section>\n        <component :is="Component" />\n      </demo-section>\n    </keep-alive>\n  </router-view>\n</template>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["查看",(0,i.jsx)(n.a,{href:"https://router.vuejs.org/zh/api/index.html#router-view-%E7%9A%84-v-slot",rel:"noopener noreferrer",target:"_blank",children:"vue-router 文档"}),"，可以发现：\n",(0,i.jsx)(n.code,{children:"<router-view>"})," 暴露了一个 ",(0,i.jsx)(n.code,{children:"v-slot"})," API，主要使用 ",(0,i.jsx)(n.code,{children:"<transition>"})," 和 ",(0,i.jsx)(n.code,{children:"<keep-alive>"})," 组件来包裹你的路由组件。\n",(0,i.jsx)(n.code,{children:"Component"}),": VNodes, 传递给 ",(0,i.jsx)(n.code,{children:"<component>"})," 的 ",(0,i.jsx)(n.code,{children:"is"})," prop。\n",(0,i.jsx)(n.code,{children:"route"}),": 解析出的标准化",(0,i.jsx)(n.a,{href:"https://router.vuejs.org/zh/api/index.html#routelocationnormalized",rel:"noopener noreferrer",target:"_blank",children:"路由地址"}),"。"]}),"\n",(0,i.jsxs)(n.h3,{id:"34-mobile-项目中的-rotuerjs-路由文件",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#34-mobile-项目中的-rotuerjs-路由文件",children:"#"}),"3.4 mobile 项目中的 rotuer.js 路由文件"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// vant/packages/vant-cli/site/mobile/router.js\n// 代码有省略\nimport { decamelize } from '../common';\nimport { demos, config } from 'site-mobile-shared';\nimport { createRouter, createWebHashHistory } from 'vue-router';\n\nconst { locales, defaultLang } = config.site;\n\nfunction getRoutes() {\n  // 可以加上 debugger 自行打断点调试\n  debugger;\n  const routes = [];\n  const names = Object.keys(demos);\n  const langs = locales ? Object.keys(locales) : [];\n  names.forEach((name) => {\n      // time-picker timePicker\n      const component = decamelize(name);\n\n      if (langs.length) {\n        langs.forEach((lang) => {\n          routes.push({\n            name: `${lang}/${component}`,\n            // http://localhost:5173/#/zh-CN/loading\n            path: `/${lang}/${component}`,\n            // () => import('xxxx/vant/packages/vant/src/loading/demo/index.vue')\n            component: demos[name],\n            meta: {\n              name,\n              lang,\n            },\n          });\n        });\n      }\n      // 代码有省略\n  }\n}\n\nexport const router = createRouter({\n  history: createWebHashHistory(),\n  routes: getRoutes(),\n  scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"router debugger 调试",src:d})}),"\n",(0,i.jsx)(n.p,{children:"按调试点进函数看到截图，可以看到具体代码和路径。"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"loading 路径代码",src:c})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// http://localhost:5173/@id/vant-cli:site-mobile-shared?t=1667051150300\n// vant/packages/vant-cli/dist/package-entry.js\n// 省略若干代码...\nconst Loading = () => import("/@fs/Users/ruochuan/git-source/github-ruochuan12/vant-analysis/vant/packages/vant/src/loading/demo/index.vue?t=1667051150300")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["果然，确实是我们在前文猜测路径 ",(0,i.jsx)(n.code,{children:"vant/packages/vant/src/loading/demo/index.vue"}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:["小结：通过路由 ",(0,i.jsx)(n.code,{children:"/loading"})," 匹配组件 ",(0,i.jsx)(n.code,{children:"demos"})," 中的组件 ",(0,i.jsx)(n.code,{children:"Loading"})," ",(0,i.jsx)(n.code,{children:"component: () => import('xxx/loading/demo/index.vue')"}),"，",(0,i.jsx)(n.code,{children:"<router-view>"})," 传递给 ",(0,i.jsx)(n.code,{children:"v-slot"})," ",(0,i.jsx)(n.code,{children:"Component"})," ",(0,i.jsx)(n.code,{children:'<component :is="Component" />'})," 属性渲染，不得不说秒啊。"]}),"\n",(0,i.jsxs)(n.p,{children:["接着我们继续来看，",(0,i.jsx)(n.code,{children:"loading"})," 的 ",(0,i.jsx)(n.code,{children:"demo"})," 文件。"]}),"\n",(0,i.jsxs)(n.h2,{id:"4-loading-demo-文件-loadingdemoindexvue",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4-loading-demo-文件-loadingdemoindexvue",children:"#"}),"4. loading demo 文件 loading/demo/index.vue"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// vant/packages/vant/src/loading/demo/index.vue\n// 代码有省略\n<script setup lang=\"ts\">\nimport VanIcon from '../../icon';\nimport VanLoading from '..';\nimport { useTranslate } from '../../../docs/site';\n\nconst t = useTranslate({\n  'zh-CN': {\n    type: '加载类型',\n  },\n  'en-US': {\n    type: 'Type',\n  },\n});\n<\/script>\n\n<template>\n  <demo-block :title=\"t('type')\">\n    <van-loading />\n    <van-loading type=\"spinner\" />\n  </demo-block>\n</template>\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://cn.vuejs.org/api/built-in-special-elements.html#component",rel:"noopener noreferrer",target:"_blank",children:"vue 文档 component is"}),"如果将组件本身传递给 ",(0,i.jsx)(n.code,{children:"is"})," 而不是其名称，则不需要注册，例如在 ",(0,i.jsx)(n.code,{children:"<script setup>"})," 中。\n也就是为什么不需要注册 ",(0,i.jsx)(n.code,{children:"VanLoading"}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:["而 ",(0,i.jsx)(n.code,{children:"demo-block"})," 是在 ",(0,i.jsx)(n.code,{children:"mobile"})," ",(0,i.jsx)(n.code,{children:"main.js"})," 入口文件注册的。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"window.app = createApp(App)\n  .use(router)\n  .component(DemoBlock.name, DemoBlock)\n  .component(DemoSection.name, DemoSection)\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"5-loading-入口文件-loadingindexts",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#5-loading-入口文件-loadingindexts",children:"#"}),"5. loading 入口文件 loading/index.ts"]}),"\n",(0,i.jsxs)(n.p,{children:["组件源码中的 ",(0,i.jsx)(n.code,{children:"TS"})," 代码我不会过多解释。没学过TS的小伙伴，推荐学这个",(0,i.jsx)(n.a,{href:"http://ts.xcatliu.com/",rel:"noopener noreferrer",target:"_blank",children:"TypeScript 入门教程"}),"。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// vant/packages/vant/src/loading/index.ts\nimport { withInstall } from '../utils';\nimport _Loading from './Loading';\n\nexport const Loading = withInstall(_Loading);\nexport default Loading;\nexport { loadingProps } from './Loading';\nexport type { LoadingType, LoadingProps } from './Loading';\nexport type { LoadingThemeVars } from './types';\n\ndeclare module 'vue' {\n  export interface GlobalComponents {\n    VanLoading: typeof Loading;\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"51-withinstall-给组件对象添加-install-方法",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#51-withinstall-给组件对象添加-install-方法",children:"#"}),"5.1 withInstall 给组件对象添加 install 方法"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { camelize } from './format';\nimport type { App, Component } from 'vue';\n\n// https://github.com/vant-ui/vant/issues/8302\ntype EventShim = {\n  new (...args: any[]): {\n    $props: {\n      onClick?: (...args: any[]) => void;\n    };\n  };\n};\n\nexport type WithInstall<T> = T & {\n  install(app: App): void;\n} & EventShim;\n\n// 给传入的options对象添加 install 属性，在 app.use() 时使用。\n// 有传参中有 name 属性，则注册 `van-loading` 和 `VanLoading` 两个名称的组件\nexport function withInstall<T extends Component>(options: T) {\n  (options as Record<string, unknown>).install = (app: App) => {\n    const { name } = options;\n    if (name) {\n      // van-loading\n      app.component(name, options);\n      // VanLoading\n      app.component(camelize(`-${name}`), options);\n    }\n  };\n\n  return options as WithInstall<T>;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["关于 ",(0,i.jsx)(n.code,{children:"app.component"})," 的用法，更多可以参考 ",(0,i.jsx)(n.a,{href:"https://cn.vuejs.org/api/application.html#app-component",rel:"noopener noreferrer",target:"_blank",children:"vue 文档 app-component"})]}),"\n",(0,i.jsx)(n.p,{children:"我们来讲讲安装。"}),"\n",(0,i.jsxs)(n.h3,{id:"52-安装-vant",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#52-安装-vant",children:"#"}),"5.2 安装 vant"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Vue 3 项目，安装最新版 Vant\nnpm i vant\n\n# Vue 2 项目，安装 Vant 2\nnpm i vant@latest-v2\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm dist-tag vant\n# alpha: 4.0.0-alpha.4\n# beta: 4.0.0-beta.1\n# latest-v1: 1.6.28\n# latest-v2: 2.12.50\n# latest: 3.6.4\n# next: 3.4.3\n# rc: 4.0.0-rc.6\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"npm dist-tag vant",src:l})}),"\n",(0,i.jsxs)(n.p,{children:["对应的则是：",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/vant",rel:"noopener noreferrer",target:"_blank",children:"npmjs.com 上 vant 介绍"})," 的版本。"]}),"\n",(0,i.jsxs)(n.p,{children:["为啥讲这么详细，因为之前",(0,i.jsx)(n.a,{href:"https://juejin.cn/post/7079706017579139102",rel:"noopener noreferrer",target:"_blank",children:"源码共读"}),"群里有小伙伴问这些版本安装的问题。"]}),"\n",(0,i.jsxs)(n.p,{children:["我猜测很多人虽然经常使用 ",(0,i.jsx)(n.code,{children:"npm"}),"，但很少有完整看过 ",(0,i.jsx)(n.code,{children:"npm"})," 文档的。",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com",rel:"noopener noreferrer",target:"_blank",children:"docs npmjs"}),"\n",(0,i.jsx)(n.code,{children:"npm"})," 也是脚手架，如果想看 ",(0,i.jsx)(n.code,{children:"npm i"}),", ",(0,i.jsx)(n.code,{children:"npm dist-tag"})," 等源码实现，可以查看它的",(0,i.jsx)(n.a,{href:"https://github.com/npm/cli",rel:"noopener noreferrer",target:"_blank",children:"github 源码仓库"}),"。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { createApp } from 'vue';\nimport { Loading } from 'vant';\n\nconst app = createApp();\napp.use(Loading);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<van-loading />\n<van-loading type="spinner" />\n// 也可以\n\n<VanLoading />\n'})}),"\n",(0,i.jsxs)(n.p,{children:["关于 ",(0,i.jsx)(n.code,{children:"app.use"})," 的用法更多可以参考",(0,i.jsx)(n.a,{href:"https://cn.vuejs.org/api/application.html#app-use",rel:"noopener noreferrer",target:"_blank",children:"vue 文档 app.use"})]}),"\n",(0,i.jsx)(n.p,{children:"我们继续看主文件。"}),"\n",(0,i.jsxs)(n.h2,{id:"6-主文件-loadingloadingtsx",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#6-主文件-loadingloadingtsx",children:"#"}),"6. 主文件 loading/Loading.tsx"]}),"\n",(0,i.jsx)(n.p,{children:"主结构最后就是渲染图标和渲染文字。你可能会感慨原来就是这么简单。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// vant/packages/vant/src/loading/Loading.tsx\n// 代码有删减\nexport default defineComponent({\n  name,\n\n  props: loadingProps,\n\n  setup(props, { slots }) {\n    // 我们完全可以在这里打 debugger 调试源码\n    // debugger;\n    const spinnerStyle = computed(() =>\n      extend({ color: props.color }, getSizeStyle(props.size))\n    );\n\n    // 渲染图标\n    const renderIcon = () => {\n      const DefaultIcon = props.type === 'spinner' ? SpinIcon : CircularIcon;\n      return (\n        <span class={bem('spinner', props.type)} style={spinnerStyle.value}>\n          {slots.icon ? slots.icon() : DefaultIcon}\n        </span>\n      );\n    };\n\n    // 渲染文字\n    const renderText = () => {\n      if (slots.default) {\n        return (\n          <span\n            class={bem('text')}\n            style={{\n              fontSize: addUnit(props.textSize),\n              color: props.textColor ?? props.color,\n            }}\n          >\n            {slots.default()}\n          </span>\n        );\n      }\n    };\n\n    return () => {\n      const { type, vertical } = props;\n      return (\n        <div\n          class={bem([type, { vertical }])}\n          aria-live=\"polite\"\n          aria-busy={true}\n        >\n          {renderIcon()}\n          {renderText()}\n        </div>\n      );\n    };\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["有小伙伴可能注意到了，这感觉就是和 ",(0,i.jsx)(n.code,{children:"react"})," 类似啊。其实 ",(0,i.jsx)(n.code,{children:"vue"})," 也是支持 ",(0,i.jsx)(n.code,{children:"jsx"}),"。不过需要配置插件 ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/@vue/babel-plugin-jsx",rel:"noopener noreferrer",target:"_blank",children:(0,i.jsx)(n.code,{children:"@vue/babel-plugin-jsx"})}),"。全局搜索这个插件，可以搜索到在 ",(0,i.jsx)(n.code,{children:"vant-cli"})," 中配置了这个插件。"]}),"\n",(0,i.jsx)(n.p,{children:"我们再来看前面完整的，介绍一些工具函数等。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// vant/packages/vant/src/loading/Loading.tsx\nimport { computed, defineComponent, type ExtractPropTypes } from 'vue';\nimport {\n  extend,\n  addUnit,\n  numericProp,\n  getSizeStyle,\n  makeStringProp,\n  createNamespace,\n} from '../utils';\n\n// [van-loading, ]\n// bem 是个函数 circular\nconst [name, bem] = createNamespace('loading');\n\n// fill(null) 填充是因为 new Array (可以省略 new 操作符) 生成的数组是空位数组，不填充无法遍历。\nconst SpinIcon: JSX.Element[] = Array(12)\n  .fill(null)\n  .map((_, index) => <i class={bem('line', String(index + 1))} />);\n\nconst CircularIcon = (\n  <svg class={bem('circular')} viewBox=\"25 25 50 50\">\n    <circle cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" />\n  </svg>\n);\n\n// 导出 LoadingType\nexport type LoadingType = 'circular' | 'spinner';\n\n// loading 属性\nexport const loadingProps = {\n  size: numericProp,\n  type: makeStringProp<LoadingType>('circular'),\n  color: String,\n  vertical: Boolean,\n  textSize: numericProp,\n  textColor: String,\n};\n\n// 导出类型\nexport type LoadingProps = ExtractPropTypes<typeof loadingProps>;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["我们来看从 ",(0,i.jsx)(n.code,{children:"utils"})," 文件引入的函数。"]}),"\n",(0,i.jsxs)(n.h3,{id:"61-工具函数-extend",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#61-工具函数-extend",children:"#"}),"6.1 工具函数 extend"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export const extend = Object.assign;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["就是取了个 ",(0,i.jsx)(n.code,{children:"Object.assign"})," 别名。值得提醒的一点是："]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Object.assign"})," 是浅复制。参数也可以是 ",(0,i.jsx)(n.code,{children:"undefined"}),"，不会报错。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const props = {\n  name: undefined,\n  mp: '若川视野',\n  desc: '加我微信 ruochuan02 参加每周一起参加源码共读'\n};\nconst person = Object.assign({name: '若川'}, {age: '18'}, props.name);\nconsole.log(person);\n// {name: '若川', age: '18'}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"62-工具函数-addunit-添加单位",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#62-工具函数-addunit-添加单位",children:"#"}),"6.2 工具函数 addUnit 添加单位"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// vant/packages/vant/src/utils/format.ts\nimport { isDef, isNumeric } from './validate';\n\nexport const isDef = <T>(val: T): val is NonNullable<T> =>\n  val !== undefined && val !== null;\n\n// '1.11' 字符串算是数字\nexport const isNumeric = (val: Numeric): val is string =>\n  typeof val === 'number' || /^\\d+(\\.\\d+)?$/.test(val);\n\n// 添加单位，也就是说 20px 省略单位可以写成 20\nexport function addUnit(value?: Numeric): string | undefined {\n  if (isDef(value)) {\n    return isNumeric(value) ? `${value}px` : String(value);\n  }\n  return undefined;\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"63-工具函数-numericprop-数组或字符串属性",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#63-工具函数-numericprop-数组或字符串属性",children:"#"}),"6.3 工具函数 numericProp 数组或字符串属性"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export const numericProp = [Number, String];\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"64-工具函数-getsizestyle-获取样式",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#64-工具函数-getsizestyle-获取样式",children:"#"}),"6.4 工具函数 getSizeStyle 获取样式"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export type Numeric = number | string;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import type { CSSProperties } from 'vue';\n\nimport { type Numeric } from './basic';\n\nexport function getSizeStyle(\n  originSize?: Numeric | Numeric[]\n): CSSProperties | undefined {\n  if (isDef(originSize)) {\n    // 如果数组 [10, 20] 前面是 width, 后面是 height\n    if (Array.isArray(originSize)) {\n      return {\n        width: addUnit(originSize[0]),\n        height: addUnit(originSize[1]),\n      };\n    }\n    const size = addUnit(originSize);\n    return {\n      width: size,\n      height: size,\n    };\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"65-工具函数-createnamespace-创建域名空间",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#65-工具函数-createnamespace-创建域名空间",children:"#"}),"6.5 工具函数 createNamespace 创建域名空间"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// vant/packages/vant/src/utils/create.ts\nexport function createNamespace(name: string) {\n  const prefixedName = `van-${name}`;\n  return [\n    prefixedName,\n    createBEM(prefixedName),\n    createTranslate(prefixedName),\n  ] as const;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["分析完工具函数，我们就基本分析完了 ",(0,i.jsx)(n.code,{children:"loading"})," 组件，代码函数不多，主文件就 88 行。"]}),"\n",(0,i.jsxs)(n.h2,{id:"7-总结",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#7-总结",children:"#"}),"7. 总结"]}),"\n",(0,i.jsxs)(n.p,{children:["我们从分析找到 ",(0,i.jsx)(n.code,{children:"demo"})," 文件的位置 ",(0,i.jsx)(n.code,{children:"loading/demo/index.vue"}),"，找到入口文件 ",(0,i.jsx)(n.code,{children:"loading/index.ts"}),"，简要描述了安装 ",(0,i.jsx)(n.code,{children:"vant"})," 对应 ",(0,i.jsx)(n.code,{children:"npm"})," 版本和 ",(0,i.jsx)(n.code,{children:"loading"})," 主文件 ",(0,i.jsx)(n.code,{children:"loading/Loading.tsx"})," 工具函数。"]}),"\n",(0,i.jsxs)(n.p,{children:["其中 ",(0,i.jsx)(n.code,{children:"demo"})," 文件位置原理设计的很巧妙。通过路由 ",(0,i.jsx)(n.code,{children:"/loading"})," 匹配组件 ",(0,i.jsx)(n.code,{children:"demos"})," 中的组件 ",(0,i.jsx)(n.code,{children:"Loading"})," ",(0,i.jsx)(n.code,{children:"component: () => import('xxx/loading/demo/index.vue')"}),"，",(0,i.jsx)(n.code,{children:"<router-view>"})," 传递给 ",(0,i.jsx)(n.code,{children:"v-slot"})," ",(0,i.jsx)(n.code,{children:"Component"})," ",(0,i.jsx)(n.code,{children:'<component :is="Component" />'})," 属性渲染。"]}),"\n",(0,i.jsx)(n.p,{children:"源码也不是我们想象中的那么难，耐心学下来一定会有很多收获。"}),"\n",(0,i.jsxs)(n.p,{children:["相比于原生 ",(0,i.jsx)(n.code,{children:"JS"})," 等源码。我们或许更应该学习，正在使用的组件库的源码，因为有助于帮助我们写业务和写自己的组件。开源项目通常有很多优雅实现、最佳实践、前沿技术等都可以值得我们借鉴。"]}),"\n",(0,i.jsxs)(n.p,{children:["如果是自己写开源项目相对耗时耗力，而且短时间很难有很大收益，很容易放弃。而刚开始可能也无法参与到开源项目中，这时我们可以先从看懂开源项目的源码做起。",(0,i.jsx)(n.strong,{children:"对于写源码来说，看懂源码相对容易。看懂源码后可以写文章分享回馈给社区，也算是对开源做出一种贡献"}),"。重要的是行动起来，学着学着就会发现很多都已经学会，锻炼了自己看源码的能力。"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"如果看完有收获，欢迎点赞、评论、分享支持。你的支持和肯定，是我写作的动力"}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:["最后可以持续关注我",(0,i.jsx)(n.a,{href:"https://juejin.cn/user/1415826704971918",rel:"noopener noreferrer",target:"_blank",children:"@若川"}),"。这是 ",(0,i.jsx)(n.code,{children:"vant"})," 第二篇文章。\n上一篇是：",(0,i.jsx)(n.a,{href:"https://juejin.cn/post/7158239404484460574",rel:"noopener noreferrer",target:"_blank",children:"vant 4 即将正式发布，支持暗黑主题，那么是如何实现的呢"}),"。我会写一个",(0,i.jsx)(n.a,{href:"https://juejin.cn/column/7140264842954276871",rel:"noopener noreferrer",target:"_blank",children:"组件库源码系列专栏"}),"，欢迎大家关注。"]}),"\n",(0,i.jsxs)(n.p,{children:["我倾力持续组织了一年",(0,i.jsx)(n.a,{href:"https://juejin.cn/post/7079706017579139102",rel:"noopener noreferrer",target:"_blank",children:"每周大家一起学习200行左右的源码共读活动"}),"，感兴趣的可以",(0,i.jsxs)(n.a,{href:"https://juejin.cn/pin/7217386885793595453",rel:"noopener noreferrer",target:"_blank",children:["点此扫码加我微信 ",(0,i.jsx)(n.code,{children:"ruochuan02"})," 参与"]}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:["另外，想学源码，极力推荐关注我写的专栏",(0,i.jsx)(n.a,{href:"https://juejin.cn/column/6960551178908205093",rel:"noopener noreferrer",target:"_blank",children:"《学习源码整体架构系列》"}),"，目前是掘金关注人数（4.1k+人）第一的专栏，写有20余篇源码文章。包含",(0,i.jsx)(n.code,{children:"jQuery"}),"、",(0,i.jsx)(n.code,{children:"underscore"}),"、",(0,i.jsx)(n.code,{children:"lodash"}),"、",(0,i.jsx)(n.code,{children:"vuex"}),"、",(0,i.jsx)(n.code,{children:"sentry"}),"、",(0,i.jsx)(n.code,{children:"axios"}),"、",(0,i.jsx)(n.code,{children:"redux"}),"、",(0,i.jsx)(n.code,{children:"koa"}),"、",(0,i.jsx)(n.code,{children:"vue-devtools"}),"、",(0,i.jsx)(n.code,{children:"vuex4"}),"、",(0,i.jsx)(n.code,{children:"koa-compose"}),"、",(0,i.jsx)(n.code,{children:"vue 3.2 发布"}),"、",(0,i.jsx)(n.code,{children:"vue-this"}),"、",(0,i.jsx)(n.code,{children:"create-vue"}),"、",(0,i.jsx)(n.code,{children:"玩具vite"}),"、",(0,i.jsx)(n.code,{children:"create-vite"})," 等20余篇源码文章。"]})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}let x=p;p.__RSPRESS_PAGE_META={},p.__RSPRESS_PAGE_META["vant%2Floading%2Findex.md"]={toc:[{id:"1-前言",text:"1. 前言",depth:2},{id:"2-准备工作",text:"2. 准备工作",depth:2},{id:"21-克隆源码--跑起来",text:"2.1 克隆源码 && 跑起来",depth:3},{id:"3-从官方文档入手找到-demo-文件",text:"3. 从官方文档入手找到 demo 文件",depth:2},{id:"31-mobile-项目中的-demoblock-组件",text:"3.1 mobile 项目中的 DemoBlock 组件",depth:3},{id:"32-mobile-项目中的-mainjs-主入口文件",text:"3.2 mobile 项目中的 main.js 主入口文件",depth:3},{id:"33-mobile-项目中的-appvue-文件",text:"3.3 mobile 项目中的 App.vue 文件",depth:3},{id:"34-mobile-项目中的-rotuerjs-路由文件",text:"3.4 mobile 项目中的 rotuer.js 路由文件",depth:3},{id:"4-loading-demo-文件-loadingdemoindexvue",text:"4. loading demo 文件 loading/demo/index.vue",depth:2},{id:"5-loading-入口文件-loadingindexts",text:"5. loading 入口文件 loading/index.ts",depth:2},{id:"51-withinstall-给组件对象添加-install-方法",text:"5.1 withInstall 给组件对象添加 install 方法",depth:3},{id:"52-安装-vant",text:"5.2 安装 vant",depth:3},{id:"6-主文件-loadingloadingtsx",text:"6. 主文件 loading/Loading.tsx",depth:2},{id:"61-工具函数-extend",text:"6.1 工具函数 extend",depth:3},{id:"62-工具函数-addunit-添加单位",text:"6.2 工具函数 addUnit 添加单位",depth:3},{id:"63-工具函数-numericprop-数组或字符串属性",text:"6.3 工具函数 numericProp 数组或字符串属性",depth:3},{id:"64-工具函数-getsizestyle-获取样式",text:"6.4 工具函数 getSizeStyle 获取样式",depth:3},{id:"65-工具函数-createnamespace-创建域名空间",text:"6.5 工具函数 createNamespace 创建域名空间",depth:3},{id:"7-总结",text:"7. 总结",depth:2}],title:"跟着 vant4 源码学习如何用 vue3 + ts 开发一个 loading 组件",headingTitle:"跟着 vant4 源码学习如何用 vue3 + ts 开发一个 loading 组件",frontmatter:{highlight:"darcula",theme:"smartblue"}}},9192:function(e,n,r){r.d(n,{Z:()=>d});var i=r(52676),s=r(75271),o=r(22820);r(3593);let a={"zh-CN":e=>`预计阅读时间: ${e.minutes>=1?`${Math.ceil(e.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function t(e,n,r){let i=Object.keys(a).includes(n)?n:r;return a[i](e)}let d=e=>{let{defaultLocale:n="en-US"}=e,r=(0,o.Vi)().page.readingTimeData,a=(0,o.Jr)(),d=(0,o.e7)(),[c,l]=(0,s.useState)(t(r,a,n));return(0,s.useEffect)(()=>{l(t(r,a,n))},[a,r]),(0,i.jsx)("span",{"data-dark":String(d),className:"rp-reading-time",children:c})}}}]);