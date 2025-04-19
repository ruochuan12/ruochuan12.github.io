"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["7043"],{90674:function(n,e,i){i.r(e),i.d(e,{default:()=>c});var s=i(52676),r=i(40453),l=i(9192);function a(n){let e=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",p:"p",input:"input"},(0,r.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"taro-源码揭秘系列",children:[(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#taro-源码揭秘系列",children:"#"}),"Taro 源码揭秘系列"]}),"\n",(0,s.jsx)(l.Z,{defaultLocale:"zh-CN"}),"\n",(0,s.jsxs)(e.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/taro/cli-init/index",children:"Taro 源码揭秘：1. 揭开整个架构的入口 CLI => taro init 初始化项目的秘密"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/taro/cli-plugins/index",children:"Taro 源码揭秘：2. 揭开整个架构的插件系统的秘密"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/taro/cli-init-2/index",children:"Taro 源码揭秘：3. 每次创建新的 Taro 项目（taro init）的背后原理是什么？"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/taro/cli-build/index",children:"Taro 源码揭秘：4. 每次 npm run dev:weapp 开发小程序，build 编译打包是如何实现的？"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/taro/events/index",children:"Taro 源码揭秘：5. 高手都在用的发布订阅机制 Events 在 Taro 中是如何实现的？"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/taro/native-apis/index",children:"Taro 源码揭秘：6. 为什么通过 Taro.xxx 能调用各个小程序平台的 API，如何设计实现的？"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/taro/request/index",children:"Taro 源码揭秘：7. Taro.request 和请求响应拦截器是如何实现的？"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/taro/webpack5/index",children:"Taro 源码揭秘：8. Taro 是如何使用 webpack 打包构建小程序的？"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/taro/webpack5-runner/index",children:"Taro 源码揭秘：9. Taro 是如何生成 webpack 配置进行构建小程序的？"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/taro/mini-plugin/index",children:"Taro 源码揭秘：10. Taro 到底是怎样转换成小程序文件的？"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/taro/mini-plugin-2/index",children:"Taro 源码揭秘：11. Taro 是如何解析入口配置 app.config.ts 和页面配置的？"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"TODOs:"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.input,{type:"checkbox",disabled:!0})," ","TaroMiniPlugin 读取文件"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.input,{type:"checkbox",disabled:!0})," ","TaroMiniPlugin 生成模板文件"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.input,{type:"checkbox",disabled:!0})," ","微信小程序转 Taro taro-cli-convertor"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.input,{type:"checkbox",disabled:!0})," ","plugin-mini-ci"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.input,{type:"checkbox",disabled:!0})," ","plugin-html"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.input,{type:"checkbox",disabled:!0})," ","plugin-http"]}),"\n"]}),"\n"]})]})}function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(a,n)})):a(n)}let c=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["taro%2Findex.md"]={toc:[],title:"Taro 源码揭秘系列",headingTitle:"Taro 源码揭秘系列",frontmatter:{}}},9192:function(n,e,i){i.d(e,{Z:()=>c});var s=i(52676),r=i(75271),l=i(22820);i(3593);let a={"zh-CN":n=>`预计阅读时间: ${n.minutes>=1?`${Math.ceil(n.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":n=>`Estimated reading time: ${n.minutes>=1?`${Math.ceil(n.minutes)} minutes`:"less than 1 minute"}`};function t(n,e,i){let s=Object.keys(a).includes(e)?e:i;return a[s](n)}let c=n=>{let{defaultLocale:e="en-US"}=n,i=(0,l.Vi)().page.readingTimeData,a=(0,l.Jr)(),c=(0,l.e7)(),[d,h]=(0,r.useState)(t(i,a,e));return(0,r.useEffect)(()=>{h(t(i,a,e))},[a,i]),(0,s.jsx)("span",{"data-dark":String(c),className:"rp-reading-time",children:d})}}}]);