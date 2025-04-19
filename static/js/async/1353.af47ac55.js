"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["1353"],{97209:function(e,a,n){n.r(a),n.d(a,{default:()=>d});var t=n(52676),c=n(40453),i=n(9192);function r(e){let a=Object.assign({h3:"h3",a:"a",pre:"pre",code:"code"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.h3,{id:"缓存",children:[(0,t.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#缓存",children:"#"}),"缓存"]}),"\n",(0,t.jsx)(i.Z,{defaultLocale:"zh-CN"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:"let cache\nlet time = {}\nif (options.cache) {\n  const LRU = require('lru-cache')\n\n  cache = new LRU({\n    max: 500,\n    length: function (n, key) { return n * 2 + key.length }\n  })\n}\n"})}),"\n",(0,t.jsxs)(a.h3,{id:"trycache",children:[(0,t.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#trycache",children:"#"}),"tryCache"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:"async function tryCache (key, checkUpdateTime = true) {\n  const data = cache.get(key)\n\n  if (checkUpdateTime) {\n    const cacheUpdateTime = time[key]\n    const fileUpdateTime = (await stat(path.resolve(root, key.replace(/^\\//, '')))).mtime.getTime()\n    if (cacheUpdateTime < fileUpdateTime) return null\n  }\n\n  return data\n}\n"})}),"\n",(0,t.jsxs)(a.h3,{id:"cachedata",children:[(0,t.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#cachedata",children:"#"}),"cacheData"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:"function cacheData (key, data, updateTime) {\n  const old = cache.peek(key)\n\n  if (old != data) {\n    cache.set(key, data)\n    if (updateTime) time[key] = updateTime\n    return true\n  } else return false\n}\n"})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,c.ah)(),e.components);return a?(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}let d=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["vue-dev-server%2FREADME.todos.md"]={toc:[{id:"缓存",text:"缓存",depth:3},{id:"trycache",text:"tryCache",depth:3},{id:"cachedata",text:"cacheData",depth:3}],title:"",headingTitle:"",frontmatter:{}}},9192:function(e,a,n){n.d(a,{Z:()=>d});var t=n(52676),c=n(75271),i=n(22820);n(3593);let r={"zh-CN":e=>`预计阅读时间: ${e.minutes>=1?`${Math.ceil(e.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function s(e,a,n){let t=Object.keys(r).includes(a)?a:n;return r[t](e)}let d=e=>{let{defaultLocale:a="en-US"}=e,n=(0,i.Vi)().page.readingTimeData,r=(0,i.Jr)(),d=(0,i.e7)(),[h,l]=(0,c.useState)(s(n,r,a));return(0,c.useEffect)(()=>{l(s(n,r,a))},[r,n]),(0,t.jsx)("span",{"data-dark":String(d),className:"rp-reading-time",children:h})}}}]);