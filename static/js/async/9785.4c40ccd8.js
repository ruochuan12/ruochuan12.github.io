"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["9785"],{21298:function(e,n,r){r.r(n),r.d(n,{default:()=>m});var s=r(52676),a=r(40453),c=r(9192);let t=r.p+"static/image/dark-theme.6dad878f.png",d=r.p+"static/image/pnpm-dev-vite.ea2c9b52.png",o=r.p+"static/image/van-doc-header.9a8fa71a.png",i=r.p+"static/image/van-doc-simulator.a88f0c77.png",l=r.p+"static/image/open-in-editor--simulator.81816b79.png";function h(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",strong:"strong",ul:"ul",li:"li",img:"img",pre:"pre",h3:"h3",blockquote:"blockquote"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"vant-4-即将正式发布支持暗黑主题那么是如何实现的呢",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vant-4-即将正式发布支持暗黑主题那么是如何实现的呢",children:"#"}),"vant 4 即将正式发布，支持暗黑主题，那么是如何实现的呢"]}),"\n",(0,s.jsx)(c.Z,{defaultLocale:"zh-CN"}),"\n",(0,s.jsx)(n.p,{children:"本文为稀土掘金技术社区首发签约文章，14天内禁止转载，14天后未获授权禁止转载，侵权必究！"}),"\n",(0,s.jsxs)(n.h2,{id:"1-前言",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-前言",children:"#"}),"1. 前言"]}),"\n",(0,s.jsxs)(n.p,{children:["大家好，我是",(0,s.jsx)(n.a,{href:"https://ruochuan12.github.io",rel:"noopener noreferrer",target:"_blank",children:"若川"}),"。我倾力持续组织了一年",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7079706017579139102",rel:"noopener noreferrer",target:"_blank",children:"每周大家一起学习200行左右的源码共读活动"}),"，感兴趣的可以",(0,s.jsxs)(n.a,{href:"https://juejin.cn/pin/7217386885793595453",rel:"noopener noreferrer",target:"_blank",children:["点此扫码加我微信 ",(0,s.jsx)(n.code,{children:"ruochuan02"})," 参与"]}),"。另外，想学源码，极力推荐关注我写的专栏",(0,s.jsx)(n.a,{href:"https://juejin.cn/column/6960551178908205093",rel:"noopener noreferrer",target:"_blank",children:"《学习源码整体架构系列》"}),"，目前是掘金关注人数（4.1k+人）第一的专栏，写有20余篇源码文章。"]}),"\n",(0,s.jsx)(n.p,{children:"我们开发业务时经常会使用到组件库，一般来说，很多时候我们不需要关心内部实现。但是如果希望学习和深究里面的原理，这时我们可以分析自己使用的组件库实现。有哪些优雅实现、最佳实践、前沿技术等都可以值得我们借鉴。"}),"\n",(0,s.jsxs)(n.p,{children:["相比于原生 ",(0,s.jsx)(n.code,{children:"JS"})," 等源码。我们或许更应该学习，正在使用的组件库的源码，因为有助于帮助我们写业务和写自己的组件。"]}),"\n",(0,s.jsxs)(n.p,{children:["如果是 ",(0,s.jsx)(n.code,{children:"Vue"})," 技术栈，开发移动端的项目，大多会选用 ",(0,s.jsx)(n.code,{children:"vant"})," 组件库，目前（2022-10-24） ",(0,s.jsx)(n.code,{children:"star"})," 多达 ",(0,s.jsx)(n.code,{children:"20.3k"}),"。我们可以挑选 ",(0,s.jsx)(n.code,{children:"vant"})," 组件库学习，我会写一个",(0,s.jsx)(n.a,{href:"https://juejin.cn/column/7140264842954276871",rel:"noopener noreferrer",target:"_blank",children:"vant 组件库源码系列专栏"}),"，欢迎大家关注。"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"vant 组件库源码分析系列："})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["1.",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7158239404484460574",rel:"noopener noreferrer",target:"_blank",children:"vant 4 即将正式发布，支持暗黑主题，那么是如何实现的呢"})]}),"\n",(0,s.jsxs)(n.li,{children:["2.",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7160465286036979748",rel:"noopener noreferrer",target:"_blank",children:"跟着 vant 4 源码学习如何用 vue3+ts 开发一个 loading 组件，仅88行代码"})]}),"\n",(0,s.jsxs)(n.li,{children:["3.",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7165661072785932296",rel:"noopener noreferrer",target:"_blank",children:"分析 vant 4 源码，如何用 vue3 + ts 开发一个瀑布流滚动加载的列表组件？"})]}),"\n",(0,s.jsxs)(n.li,{children:["4.",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7169003604303413278",rel:"noopener noreferrer",target:"_blank",children:"分析 vant 4 源码，学会用 vue3 + ts 开发毫秒级渲染的倒计时组件，真是妙啊"})]}),"\n",(0,s.jsxs)(n.li,{children:["5.",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7171227417246171149",rel:"noopener noreferrer",target:"_blank",children:"vant 4.0 正式发布了，分析其源码学会用 vue3 写一个图片懒加载组件！"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["这次我们来分析 ",(0,s.jsx)(n.code,{children:"vant4"})," 新增的暗黑主题是如何实现的。文章中的 ",(0,s.jsx)(n.code,{children:"vant4"})," 的版本是 ",(0,s.jsx)(n.code,{children:"4.0.0-rc.6"}),"。",(0,s.jsx)(n.code,{children:"vant"})," 的核心开发者是",(0,s.jsx)(n.a,{href:"https://github.com/chenjiahan/",rel:"noopener noreferrer",target:"_blank",children:"@chenjiahan"}),"，一直在更新",(0,s.jsx)(n.code,{children:"vant"})," 。预计不久后就会发布 ",(0,s.jsx)(n.code,{children:"vant4"})," 正式版。"]}),"\n",(0,s.jsx)(n.p,{children:"暗黑主题如图所示:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"暗黑主题",src:t})}),"\n",(0,s.jsxs)(n.p,{children:["也可以打开",(0,s.jsx)(n.a,{href:"https://vant-contrib.gitee.io/vant/v4/#/zh-CN/config-provider",rel:"noopener noreferrer",target:"_blank",children:"官方文档链接"}),"，自行体验。"]}),"\n",(0,s.jsx)(n.p,{children:"学完本文，你将学到："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"1. 学会暗黑主题的原理和实现\n2. 学会使用 vue-devtools 打开组件文件，并可以学会其原理\n3. 学会 iframe postMessage 和 addEventListener 通信\n4. 学会 ConfigProvider 组件 CSS 变量实现对主题的深度定制原理\n5. 学会使用 @vue/babel-plugin-jsx 编写 jsx 组件\n6. 等等\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"2-准备工作",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-准备工作",children:"#"}),"2. 准备工作"]}),"\n",(0,s.jsxs)(n.p,{children:["看一个开源项目，第一步应该是先看 ",(0,s.jsx)(n.a,{href:"https://github.com/youzan/vant",rel:"noopener noreferrer",target:"_blank",children:"README.md"})," 再看贡献文档 ",(0,s.jsx)(n.a,{href:"https://github.com/youzan/vant/blob/main/.github/CONTRIBUTING.md",rel:"noopener noreferrer",target:"_blank",children:"github/CONTRIBUTING.md"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["不知道大家有没有发现，很多开源项目都是英文的 ",(0,s.jsx)(n.code,{children:"README.md"}),"，即使刚开始明显是为面向中国开发者。再给定一个中文的 ",(0,s.jsx)(n.code,{children:"README.md"}),"。主要原因是因为英文是世界通用的语言。想要非中文用户参与进来，英文是必备。也就是说你开源的项目能提供英文版就提供。"]}),"\n",(0,s.jsxs)(n.h3,{id:"21-克隆源码",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#21-克隆源码",children:"#"}),"2.1 克隆源码"]}),"\n",(0,s.jsxs)(n.p,{children:["贡献文档中有要求：You will need ",(0,s.jsx)(n.a,{href:"https://nodejs.org",rel:"noopener noreferrer",target:"_blank",children:"Node.js >= 14"})," and ",(0,s.jsx)(n.a,{href:"https://pnpm.io",rel:"noopener noreferrer",target:"_blank",children:"pnpm"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# 推荐克隆我的项目\ngit clone https://github.com/ruochuan12/vant-analysis\ncd vant-analysis/vant\n\n# 或者克隆官方仓库\ngit clone git@github.com:vant-ui/vant.git\ncd vant\n\n# Install dependencies\npnpm i\n\n# Start development\npnpm dev\n"})}),"\n",(0,s.jsxs)(n.p,{children:["我们先来看 ",(0,s.jsx)(n.code,{children:"pnpm dev"})," 最终执行的什么命令。"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vant"})," 项目使用的是 ",(0,s.jsx)(n.code,{children:"monorepo"})," 结构。查看根路径下的 ",(0,s.jsx)(n.code,{children:"package.json"}),"。"]}),"\n",(0,s.jsxs)(n.h3,{id:"22-pnpm-dev",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#22-pnpm-dev",children:"#"}),"2.2 pnpm dev"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'// vant/package.json\n{\n    "private": true,\n    "scripts": {\n        "prepare": "husky install",\n        "dev": "pnpm --dir ./packages/vant dev",\n  },\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["再看 ",(0,s.jsx)(n.code,{children:"packages/vant/package.json"}),"。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'// vant/packages/vant/package.json\n{\n  "name": "vant",\n  "version": "4.0.0-rc.6",\n  "scripts": {\n    "dev": "vant-cli dev",\n  },\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pnpm dev"})," 最终执行的是：",(0,s.jsx)(n.code,{children:"vant-cli dev"})," 启动了一个服务。本文主要是讲主题切换的实现，所以我们就不深入 ",(0,s.jsx)(n.code,{children:"vant-cli dev"})," 命令了。"]}),"\n",(0,s.jsxs)(n.p,{children:["执行 ",(0,s.jsx)(n.code,{children:"pnpm dev"})," 后，命令终端输入如图所示，可以发现是使用的是目前最新版本的 ",(0,s.jsx)(n.code,{children:"vite 3.1.8"}),"。"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"pnpm-dev-vite",src:d})}),"\n",(0,s.jsxs)(n.p,{children:["这时我们打开 ",(0,s.jsx)(n.code,{children:"http://localhost:5173/#/zh-CN/config-provider"}),"。"]}),"\n",(0,s.jsxs)(n.h2,{id:"3-文档网站",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-文档网站",children:"#"}),"3. 文档网站"]}),"\n",(0,s.jsxs)(n.p,{children:["打开后，我们可以按 ",(0,s.jsx)(n.code,{children:"F12"})," 和 ",(0,s.jsx)(n.code,{children:"vue-devtools"})," 来查看",(0,s.jsx)(n.code,{children:"vant"})," 官方文档的结构。如果没有安装，我们可以访问",(0,s.jsx)(n.a,{href:"https://devtools.vuejs.org/guide/installation.html",rel:"noopener noreferrer",target:"_blank",children:"vue-devtools 官网"}),"通过谷歌应用商店去安装。如果无法打开谷歌应用商店，可以通过这个",(0,s.jsx)(n.a,{href:"https://chrome.zzzmh.cn/info/nhdogjmejiglipccpnnnanhbledajbpd",rel:"noopener noreferrer",target:"_blank",children:"极简插件链接"})," 下载安装。"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"VanDocHeader 组件",src:o})}),"\n",(0,s.jsx)(n.p,{children:"mobile 端"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"VanDocSimulator 组件",src:i})}),"\n",(0,s.jsxs)(n.h3,{id:"31-通过-vue-devtools-打开组件文件",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#31-通过-vue-devtools-打开组件文件",children:"#"}),"3.1 通过 vue-devtools 打开组件文件"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"打开 VanDocSimulator 组件文件",src:l})}),"\n",(0,s.jsxs)(n.p,{children:["如图所示，我们通过 ",(0,s.jsx)(n.code,{children:"vue-devtools"})," 打开 ",(0,s.jsx)(n.code,{children:"VanDocSimulator"})," 组件文件。"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["曾经在我的公众号@若川视野 ",(0,s.jsx)(n.a,{href:"https://mp.weixin.qq.com/s/9gYmrJLdKwJ1TCVm-MUzrA",rel:"noopener noreferrer",target:"_blank",children:"发起投票"})," 发现有很多人不知道这个功能。我也曾经写过文章",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/6959348263547830280",rel:"noopener noreferrer",target:"_blank",children:"《据说 99% 的人不知道 vue-devtools 还能直接打开对应组件文件？本文原理揭秘》"}),"分析这个功能的原理。感兴趣的小伙伴可以查看。"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["我们可以看到 ",(0,s.jsx)(n.code,{children:"vant/packages/vant-cli/site/desktop/components/Simulator.vue"})," 文件，主要是 ",(0,s.jsx)(n.code,{children:"iframe"})," 实现的，渲染的链接是 ",(0,s.jsx)(n.code,{children:"/mobile.html#/zh-CN"}),"。我们也可以直接打开 ",(0,s.jsx)(n.a,{href:"https://vant-contrib.gitee.io/vant/mobile.html#/zh-CN",rel:"noopener noreferrer",target:"_blank",children:"mobile 官网"})," 验证下。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// vant/packages/vant-cli/site/desktop/components/Simulator.vue\n<template>\n  <div :class="[\'van-doc-simulator\', { \'van-doc-simulator-fixed\': isFixed }]">\n    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'VanDocSimulator\',\n\n  props: {\n    src: String,\n  },\n  // 省略若干代码\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"32-desktop-端",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#32-desktop-端",children:"#"}),"3.2 desktop 端"]}),"\n",(0,s.jsxs)(n.p,{children:["和打开 ",(0,s.jsx)(n.code,{children:"VanDocSimulator"})," 类似，我们通过 ",(0,s.jsx)(n.code,{children:"vue-devtools"})," 打开 ",(0,s.jsx)(n.code,{children:"VanDocHeader"})," 组件文件。"]}),"\n",(0,s.jsxs)(n.p,{children:["打开了文件后，我们也可以使用 ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",rel:"noopener noreferrer",target:"_blank",children:(0,s.jsx)(n.code,{children:"Gitlens"})})," 插件。根据 ",(0,s.jsx)(n.code,{children:"git"})," 提交记录 ",(0,s.jsx)(n.a,{href:"https://github.com/youzan/vant/commit/35a990ed65500311cbcafae506780dc6d3fb49fa",rel:"noopener noreferrer",target:"_blank",children:"feat(@vant/cli): desktop site support dark mode"}),"，查看添加暗黑模式做了哪些改动。"]}),"\n",(0,s.jsxs)(n.p,{children:["接着我们来看 ",(0,s.jsx)(n.code,{children:"vant/packages/vant-cli/site/desktop/components/Header.vue"})," 文件。找到切换主题的代码位置如下："]}),"\n",(0,s.jsx)(n.p,{children:"模板部分"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'// vant/packages/vant-cli/site/desktop/components/Header.vue\n\n<template>\n    <li v-if="darkModeClass" class="van-doc-header__top-nav-item">\n    <a\n        class="van-doc-header__link"\n        target="_blank"\n        @click="toggleTheme"\n    >\n        <img :src="themeImg" />\n    </a>\n    </li>\n</template>\n'})}),"\n",(0,s.jsx)(n.p,{children:"JS部分"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// vant/packages/vant-cli/site/desktop/components/Header.vue\n\n<script>\n\nimport { getDefaultTheme, syncThemeToChild } from '../../common/iframe-sync';\n\nexport default {\n  name: 'VanDocHeader',\n  data() {\n    return {\n      currentTheme: getDefaultTheme(),\n    };\n  },\n    watch: {\n        // 监听主题变化，移除和添加样式 class\n        currentTheme: {\n            handler(newVal, oldVal) {\n                window.localStorage.setItem('vantTheme', newVal);\n                document.documentElement.classList.remove(`van-doc-theme-${oldVal}`);\n                document.documentElement.classList.add(`van-doc-theme-${newVal}`);\n                // 我们也可以在这里加上debugger自行调试。\n                debugger;\n                // 同步到 mobile 的组件中\n                syncThemeToChild(newVal);\n            },\n            immediate: true,\n        },\n    },\n\n    methods: {\n        // 切换主题\n        toggleTheme() {\n          this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';\n        },\n    }\n}\n\n<\/script>\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"33-iframe-通信-iframe-sync",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#33-iframe-通信-iframe-sync",children:"#"}),"3.3 iframe 通信 iframe-sync"]}),"\n",(0,s.jsxs)(n.p,{children:["上文JS代码中，有 ",(0,s.jsx)(n.code,{children:"getDefaultTheme, syncThemeToChild"})," 函数引自文件 ",(0,s.jsx)(n.code,{children:"vant/packages/vant-cli/site/common/iframe-sync.js"})]}),"\n",(0,s.jsxs)(n.p,{children:["文件开头主要判断 ",(0,s.jsx)(n.code,{children:"iframe"})," 渲染完成。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// vant/packages/vant-cli/site/common/iframe-sync.js\n\nimport { ref } from 'vue';\nimport { config } from 'site-desktop-shared';\n\nlet queue = [];\nlet isIframeReady = false;\n\nfunction iframeReady(callback) {\n  if (isIframeReady) {\n    callback();\n  } else {\n    queue.push(callback);\n  }\n}\n\nif (window.top === window) {\n  window.addEventListener('message', (event) => {\n    if (event.data.type === 'iframeReady') {\n      isIframeReady = true;\n      queue.forEach((callback) => callback());\n      queue = [];\n    }\n  });\n} else {\n  window.top.postMessage({ type: 'iframeReady' }, '*');\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["后半部分主要是三个函数 ",(0,s.jsx)(n.code,{children:"getDefaultTheme"}),"、",(0,s.jsx)(n.code,{children:"syncThemeToChild"}),"、",(0,s.jsx)(n.code,{children:"useCurrentTheme"}),"。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// 获取默认的主题\nexport function getDefaultTheme() {\n  const cache = window.localStorage.getItem('vantTheme');\n\n  if (cache) {\n    return cache;\n  }\n\n  const useDark =\n    window.matchMedia &&\n    window.matchMedia('(prefers-color-scheme: dark)').matches;\n  return useDark ? 'dark' : 'light';\n}\n\n// 同步主题到 iframe 用 postMessage 通信\nexport function syncThemeToChild(theme) {\n  const iframe = document.querySelector('iframe');\n  if (iframe) {\n    iframeReady(() => {\n      iframe.contentWindow.postMessage(\n        {\n          type: 'updateTheme',\n          value: theme,\n        },\n        '*'\n      );\n    });\n  }\n}\n\n// 接收、使用主题色\nexport function useCurrentTheme() {\n  const theme = ref(getDefaultTheme());\n\n  // 接收到 updateTheme 值\n  window.addEventListener('message', (event) => {\n    if (event.data?.type !== 'updateTheme') {\n      return;\n    }\n\n    const newTheme = event.data?.value || '';\n    theme.value = newTheme;\n  });\n\n  return theme;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["在项目中，我们可以可以搜索 ",(0,s.jsx)(n.code,{children:"useCurrentTheme"})," 看在哪里使用的。很容易我们可以发现 ",(0,s.jsx)(n.code,{children:"vant/packages/vant-cli/site/mobile/App.vue"})," 文件中有使用。"]}),"\n",(0,s.jsxs)(n.h3,{id:"34-mobile-端",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#34-mobile-端",children:"#"}),"3.4 mobile 端"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'// 模板部分\n// vant/packages/vant-cli/site/mobile/App.vue\n\n<template>\n  <demo-nav />\n  <router-view v-slot="{ Component }">\n    <keep-alive>\n      <demo-section>\n        <component :is="Component" />\n      </demo-section>\n    </keep-alive>\n  </router-view>\n</template>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// js 部分\n// vant/packages/vant-cli/site/mobile/App.vue\n<script>\nimport { watch } from 'vue';\nimport DemoNav from './components/DemoNav.vue';\nimport { useCurrentTheme } from '../common/iframe-sync';\nimport { config } from 'site-mobile-shared';\n\nexport default {\n  components: { DemoNav },\n\n  setup() {\n    const theme = useCurrentTheme();\n\n    watch(\n      theme,\n      (newVal, oldVal) => {\n        document.documentElement.classList.remove(`van-doc-theme-${oldVal}`);\n        document.documentElement.classList.add(`van-doc-theme-${newVal}`);\n\n        const { darkModeClass, lightModeClass } = config.site;\n        if (darkModeClass) {\n          document.documentElement.classList.toggle(\n            darkModeClass,\n            newVal === 'dark'\n          );\n        }\n        if (lightModeClass) {\n          document.documentElement.classList.toggle(\n            lightModeClass,\n            newVal === 'light'\n          );\n        }\n      },\n      { immediate: true }\n    );\n  },\n};\n<\/script>\n\n<style lang=\"less\">\n@import '../common/style/base';\n\nbody {\n  min-width: 100vw;\n  background-color: inherit;\n}\n\n.van-doc-theme-light {\n  background-color: var(--van-doc-gray-1);\n}\n\n.van-doc-theme-dark {\n  background-color: var(--van-doc-black);\n}\n\n::-webkit-scrollbar {\n  width: 0;\n  background: transparent;\n}\n</style>\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["上文阐述了浅色主题和暗黑主题的实现原理，我们接着来看如何通过 ",(0,s.jsxs)(n.a,{href:"https://vant-contrib.gitee.io/vant/#/zh-CN/config-provider",rel:"noopener noreferrer",target:"_blank",children:[(0,s.jsx)(n.code,{children:"ConfigProvider"})," 组件"]}),"实现主题的深度定制。"]}),"\n",(0,s.jsxs)(n.h2,{id:"4-configprovider-组件深度定制主题",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4-configprovider-组件深度定制主题",children:"#"}),"4. ConfigProvider 组件，深度定制主题"]}),"\n",(0,s.jsxs)(n.p,{children:["这个组件的文档有说明，主要就是利用 ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties",rel:"noopener noreferrer",target:"_blank",children:"CSS 变量"}),"\n来实现的，具体可以查看这个链接学习。这里举个简单的例子。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// html\n<div id="app" style="--van-color: black;--van-background-color: pink;">hello world</div>\n// css\n#app {\n  color: var(--van-color);\n  background-color: var(--van-background-color);\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["可以预设写好若干变量，然后在 ",(0,s.jsx)(n.code,{children:"style"})," 中修改相关变量，就能得到相应的样式，从而达到深度定制修改主题的能力。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如：如果把 ",(0,s.jsx)(n.code,{children:"--van-color: black;"}),"，改成 ",(0,s.jsx)(n.code,{children:"--van-color: red;"})," 则字体颜色是红色。\n如果把 ",(0,s.jsx)(n.code,{children:"--van-background-color: pink;"})," 改成 ",(0,s.jsx)(n.code,{children:"--van-background-color: white;"})," 则背景色是白色。"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vant"})," 中有一次提交把之前所有的 ",(0,s.jsx)(n.code,{children:"less"})," 变量，改成了原生 ",(0,s.jsx)(n.code,{children:"css"})," 的 ",(0,s.jsx)(n.code,{children:"var"})," 变量。",(0,s.jsx)(n.a,{href:"https://github.com/youzan/vant/commit/ada5db011c676893a2917b9424be1aeafe54134b#diff-9a3dd1c100237e3a5d11553bb08a5f74144c9aecc67a995b8e608bfe2ebcf7f2",rel:"noopener noreferrer",target:"_blank",children:"breaking change: no longer support less vars"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vant"})," 中 ",(0,s.jsx)(n.code,{children:"ConfigProvider"})," 组件其实就是利用了这个原理。"]}),"\n",(0,s.jsxs)(n.p,{children:["知晓了上面的原理，我们再来简单看下 ",(0,s.jsx)(n.code,{children:"ConfigProvider"})," 具体实现。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// vant/packages/vant/src/config-provider/ConfigProvider.tsx\n// 代码有省略\nfunction mapThemeVarsToCSSVars(themeVars: Record<string, Numeric>) {\n  const cssVars: Record<string, Numeric> = {};\n  Object.keys(themeVars).forEach((key) => {\n    cssVars[`--van-${kebabCase(key)}`] = themeVars[key];\n  });\n  // 把 backgroundColor 最终生成类似这样的属性\n  // {--van-background-color: xxx}\n  return cssVars;\n}\n\nexport default defineComponent({\n  name,\n\n  props: configProviderProps,\n\n  setup(props, { slots }) {\n    // 完全可以在你需要的地方打上 debugger 断点\n    debugger;\n    const style = computed<CSSProperties | undefined>(() =>\n      mapThemeVarsToCSSVars(\n        extend(\n          {},\n          props.themeVars,\n          props.theme === 'dark' ? props.themeVarsDark : props.themeVarsLight\n        )\n      )\n    );\n\n    // 主题变化添加和移除相应的样式类\n    if (inBrowser) {\n      const addTheme = () => {\n        document.documentElement.classList.add(`van-theme-${props.theme}`);\n      };\n      const removeTheme = (theme = props.theme) => {\n        document.documentElement.classList.remove(`van-theme-${theme}`);\n      };\n\n      watch(\n        () => props.theme,\n        (newVal, oldVal) => {\n          if (oldVal) {\n            removeTheme(oldVal);\n          }\n          addTheme();\n        },\n        { immediate: true }\n      );\n\n      onActivated(addTheme);\n      onDeactivated(removeTheme);\n      onBeforeUnmount(removeTheme);\n    }\n\n    // 插槽\n    // 用于 style\n    // 把 backgroundColor 最终生成类似这样的属性\n    // {--van-background-color: xxx}\n\n    return () => (\n      <props.tag class={bem()} style={style.value}>\n        {slots.default?.()}\n      </props.tag>\n    );\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["有小伙伴可能注意到了，这感觉就是和 ",(0,s.jsx)(n.code,{children:"react"})," 类似啊。其实 ",(0,s.jsx)(n.code,{children:"vue"})," 也是支持 ",(0,s.jsx)(n.code,{children:"jsx"}),"。不过需要配置插件 ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@vue/babel-plugin-jsx",rel:"noopener noreferrer",target:"_blank",children:(0,s.jsx)(n.code,{children:"@vue/babel-plugin-jsx"})}),"。全局搜索这个插件，可以搜索到在 ",(0,s.jsx)(n.code,{children:"vant-cli"})," 中配置了这个插件。"]}),"\n",(0,s.jsxs)(n.h2,{id:"5-总结",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#5-总结",children:"#"}),"5. 总结"]}),"\n",(0,s.jsxs)(n.p,{children:["我们通过查看 ",(0,s.jsx)(n.code,{children:"README.md"})," 和贡献文档等，知道了项目使用的 ",(0,s.jsx)(n.code,{children:"monorepo"}),"，",(0,s.jsx)(n.code,{children:"vite"})," 等，",(0,s.jsx)(n.code,{children:"pnpm i"})," 安装依赖，",(0,s.jsx)(n.code,{children:"pnpm dev"})," 跑项目。"]}),"\n",(0,s.jsxs)(n.p,{children:["我们学会了利用 ",(0,s.jsx)(n.code,{children:"vue-devtools"})," 快速找到我们不那么熟悉的项目中的文件，并打开相应的文件。"]}),"\n",(0,s.jsxs)(n.p,{children:["通过文档桌面端和移动端的主题切换，我们学到了原来是 ",(0,s.jsx)(n.code,{children:"iframe"})," 渲染的移动（mobile）端，通过 ",(0,s.jsx)(n.code,{children:"iframe"})," ",(0,s.jsx)(n.code,{children:"postMessage"})," 和 ",(0,s.jsx)(n.code,{children:"addEventListener"})," 通信切换主题。"]}),"\n",(0,s.jsxs)(n.p,{children:["学会了 ",(0,s.jsx)(n.code,{children:"ConfigProvider"})," 组件是利用\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties",rel:"noopener noreferrer",target:"_blank",children:"CSS 变量"})," 预设变量样式，来实现的定制主题。"]}),"\n",(0,s.jsxs)(n.p,{children:["也学会使用 ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@vue/babel-plugin-jsx",rel:"noopener noreferrer",target:"_blank",children:(0,s.jsx)(n.code,{children:"@vue/babel-plugin-jsx"})})," 编写 ",(0,s.jsx)(n.code,{children:"jsx"})," 组件，和写 ",(0,s.jsx)(n.code,{children:"react"})," 类似。"]}),"\n",(0,s.jsxs)(n.p,{children:["相比于原生 ",(0,s.jsx)(n.code,{children:"JS"})," 等源码。我们或许更应该学习，正在使用的组件库的源码，因为有助于帮助我们写业务和写自己的组件。开源项目通常有很多优雅实现、最佳实践、前沿技术等都可以值得我们借鉴。"]}),"\n",(0,s.jsx)(n.p,{children:"如果是自己写开源项目相对耗时耗力，而且短时间很难有很大收益，很容易放弃。而刚开始可能也无法参与到开源项目中，这时我们可以先从看懂开源项目的源码做起。对于写源码来说，看懂源码相对容易。看懂源码后可以写文章分享回馈给社区，也算是对开源做出一种贡献。重要的是行动起来，学着学着就会发现很多都已经学会，锻炼了自己看源码的能力。"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"如果看完有收获，欢迎点赞、评论、分享支持。你的支持和肯定，是我写作的动力"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["最后可以持续关注我@若川。这是 ",(0,s.jsx)(n.code,{children:"vant"})," 第一篇文章。我会写一个",(0,s.jsx)(n.a,{href:"https://juejin.cn/column/7140264842954276871",rel:"noopener noreferrer",target:"_blank",children:"组件库源码系列专栏"}),"，欢迎大家关注。"]}),"\n",(0,s.jsxs)(n.p,{children:["我倾力持续组织了一年",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7079706017579139102",rel:"noopener noreferrer",target:"_blank",children:"每周大家一起学习200行左右的源码共读活动"}),"，感兴趣的可以",(0,s.jsxs)(n.a,{href:"https://juejin.cn/pin/7217386885793595453",rel:"noopener noreferrer",target:"_blank",children:["点此扫码加我微信 ",(0,s.jsx)(n.code,{children:"ruochuan02"})," 参与"]}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["另外，想学源码，极力推荐关注我写的专栏",(0,s.jsx)(n.a,{href:"https://juejin.cn/column/6960551178908205093",rel:"noopener noreferrer",target:"_blank",children:"《学习源码整体架构系列》"}),"，目前是掘金关注人数（4.1k+人）第一的专栏，写有20余篇源码文章。包含",(0,s.jsx)(n.code,{children:"jQuery"}),"、",(0,s.jsx)(n.code,{children:"underscore"}),"、",(0,s.jsx)(n.code,{children:"lodash"}),"、",(0,s.jsx)(n.code,{children:"vuex"}),"、",(0,s.jsx)(n.code,{children:"sentry"}),"、",(0,s.jsx)(n.code,{children:"axios"}),"、",(0,s.jsx)(n.code,{children:"redux"}),"、",(0,s.jsx)(n.code,{children:"koa"}),"、",(0,s.jsx)(n.code,{children:"vue-devtools"}),"、",(0,s.jsx)(n.code,{children:"vuex4"}),"、",(0,s.jsx)(n.code,{children:"koa-compose"}),"、",(0,s.jsx)(n.code,{children:"vue 3.2 发布"}),"、",(0,s.jsx)(n.code,{children:"vue-this"}),"、",(0,s.jsx)(n.code,{children:"create-vue"}),"、",(0,s.jsx)(n.code,{children:"玩具vite"}),"、",(0,s.jsx)(n.code,{children:"create-vite"})," 等20余篇源码文章。"]})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}let m=p;p.__RSPRESS_PAGE_META={},p.__RSPRESS_PAGE_META["vant%2Fdark-theme%2Findex.md"]={toc:[{id:"1-前言",text:"1. 前言",depth:2},{id:"2-准备工作",text:"2. 准备工作",depth:2},{id:"21-克隆源码",text:"2.1 克隆源码",depth:3},{id:"22-pnpm-dev",text:"2.2 pnpm dev",depth:3},{id:"3-文档网站",text:"3. 文档网站",depth:2},{id:"31-通过-vue-devtools-打开组件文件",text:"3.1 通过 vue-devtools 打开组件文件",depth:3},{id:"32-desktop-端",text:"3.2 desktop 端",depth:3},{id:"33-iframe-通信-iframe-sync",text:"3.3 iframe 通信 iframe-sync",depth:3},{id:"34-mobile-端",text:"3.4 mobile 端",depth:3},{id:"4-configprovider-组件深度定制主题",text:"4. ConfigProvider 组件，深度定制主题",depth:2},{id:"5-总结",text:"5. 总结",depth:2}],title:"vant 4 即将正式发布，支持暗黑主题，那么是如何实现的呢",headingTitle:"vant 4 即将正式发布，支持暗黑主题，那么是如何实现的呢",frontmatter:{highlight:"darcula",theme:"smartblue"}}},9192:function(e,n,r){r.d(n,{Z:()=>o});var s=r(52676),a=r(75271),c=r(22820);r(3593);let t={"zh-CN":e=>`预计阅读时间: ${e.minutes>=1?`${Math.ceil(e.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function d(e,n,r){let s=Object.keys(t).includes(n)?n:r;return t[s](e)}let o=e=>{let{defaultLocale:n="en-US"}=e,r=(0,c.Vi)().page.readingTimeData,t=(0,c.Jr)(),o=(0,c.e7)(),[i,l]=(0,a.useState)(d(r,t,n));return(0,a.useEffect)(()=>{l(d(r,t,n))},[t,r]),(0,s.jsx)("span",{"data-dark":String(o),className:"rp-reading-time",children:i})}}}]);