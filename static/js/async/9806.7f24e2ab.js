"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["9806"],{99021:function(e,n,t){t.r(n),t.d(n,{default:()=>c});var i=t(52676),s=t(40453),l=t(9192);function a(e){let n=Object.assign({p:"p",ol:"ol",li:"li"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{defaultLocale:"zh-CN"}),"\n","\n","\n",(0,i.jsx)(n.p,{children:"抽象类"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"setupTransaction - init"}),"\n",(0,i.jsx)(n.li,{children:"setup"}),"\n",(0,i.jsx)(n.li,{children:"setupTransaction - close"}),"\n",(0,i.jsx)(n.li,{children:"buildTransaction - init"}),"\n",(0,i.jsx)(n.li,{children:"build"}),"\n",(0,i.jsx)(n.li,{children:"buildTransaction - close"}),"\n"]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}let c=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["taro%2Fcli-build%2Fbak.md"]={toc:[],title:"",headingTitle:"",frontmatter:{}}},9192:function(e,n,t){t.d(n,{Z:()=>c});var i=t(52676),s=t(75271),l=t(22820);t(3593);let a={"zh-CN":e=>`预计阅读时间: ${e.minutes>=1?`${Math.ceil(e.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function r(e,n,t){let i=Object.keys(a).includes(n)?n:t;return a[i](e)}let c=e=>{let{defaultLocale:n="en-US"}=e,t=(0,l.Vi)().page.readingTimeData,a=(0,l.Jr)(),c=(0,l.e7)(),[u,d]=(0,s.useState)(r(t,a,n));return(0,s.useEffect)(()=>{d(r(t,a,n))},[a,t]),(0,i.jsx)("span",{"data-dark":String(c),className:"rp-reading-time",children:u})}}}]);