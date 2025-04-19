"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["5700"],{55703:function(e,n,r){r.r(n),r.d(n,{default:()=>t});var s=r(52676),i=r(40453),a=r(9192);function l(e){let n=Object.assign({h2:"h2",a:"a",p:"p",code:"code",pre:"pre",img:"img",h3:"h3",h4:"h4",ul:"ul",li:"li",hr:"hr",strong:"strong"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"1-前言",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-前言",children:"#"}),"1. 前言"]}),"\n",(0,s.jsx)(a.Z,{defaultLocale:"zh-CN"}),"\n",(0,s.jsxs)(n.p,{children:["大家好，我是",(0,s.jsx)(n.a,{href:"https://juejin.cn/user/1415826704971918",rel:"noopener noreferrer",target:"_blank",children:"若川"}),"，欢迎 ",(0,s.jsx)(n.code,{children:"follow"})," ",(0,s.jsx)(n.a,{href:"https://github.com/ruochuan12",rel:"noopener noreferrer",target:"_blank",children:"我的 github"}),"。我倾力持续组织了3年多",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7079706017579139102",rel:"noopener noreferrer",target:"_blank",children:"每周大家一起学习200行左右的源码共读活动"}),"，感兴趣的可以",(0,s.jsxs)(n.a,{href:"https://juejin.cn/pin/7217386885793595453",rel:"noopener noreferrer",target:"_blank",children:["点此扫码加我微信 ",(0,s.jsx)(n.code,{children:"ruochuan02"})," 参与"]}),"。另外，想学源码，极力推荐关注我写的专栏",(0,s.jsx)(n.a,{href:"https://juejin.cn/column/6960551178908205093",rel:"noopener noreferrer",target:"_blank",children:"《学习源码整体架构系列》"}),"，目前是掘金关注人数（5.7k+人）第一的专栏，写有30余篇源码文章。"]}),"\n",(0,s.jsxs)(n.p,{children:["我曾在 2019年 写过 ",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/6844904019987529735",rel:"noopener noreferrer",target:"_blank",children:"axios 源码文章"}),"（570赞、758收藏、2.5w阅读），虽然之前文章写的版本是",(0,s.jsx)(n.code,{children:"v0.19.x"})," ，但是相比现在的源码整体结构基本没有太大变化，感兴趣的可以看看。截至目前（2024-05-09）",(0,s.jsx)(n.code,{children:"axios"})," 版本已经更新到 ",(0,s.jsx)(n.code,{children:"v1.7.0-beta.0"})," 了。",(0,s.jsx)(n.a,{href:"https://github.com/axios/axios",rel:"noopener noreferrer",target:"_blank",children:(0,s.jsx)(n.code,{children:"axios"})})," 源码值得每一个前端学习。转眼过去好多年了，真是逝者如斯夫，不舍昼夜。"]}),"\n",(0,s.jsxs)(n.p,{children:["曾经也写过",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/6997943192851054606",rel:"noopener noreferrer",target:"_blank",children:"Vue 3.2 发布了，那尤雨溪是怎么发布 Vue.js 的？"}),"，757赞、553收藏、3.7w阅读。"]}),"\n",(0,s.jsxs)(n.p,{children:["本文主要讲述 ",(0,s.jsx)(n.code,{children:"axios"}),"，每次更新是如何打包发布更新版本的，学习如何打包发布工具库。"]}),"\n",(0,s.jsx)(n.p,{children:"学完本文，你将学到："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"1. 学会使用 gulp 编写脚本任务\n2. 学会使用 relase-it 自动化发布 npm 生成 changelog、生成 release、打 tag 等\n3. 学会使用 rollup 打包输出多种格式\n4. 等等\n"})}),"\n",(0,s.jsxs)(n.p,{children:["看一个开源项目，第一步应该是先看 ",(0,s.jsx)(n.a,{href:"https://github.com/axios/axios",rel:"noopener noreferrer",target:"_blank",children:"README.md"})," 再看 ",(0,s.jsx)(n.a,{href:"https://github.com/axios/axios/blob/v1.x/CONTRIBUTING.md",rel:"noopener noreferrer",target:"_blank",children:"贡献文档"})," 和 ",(0,s.jsx)(n.code,{children:"package.json"}),"。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# 推荐克隆我的项目\ngit clone https://github.com/ruochuan12/axios-analysis.git\ncd axios-analysis/axios-v1.x\n\n# 或者克隆官方仓库\ngit clone git@github.com:axios/axios.git\ncd axios\n\nnpm i\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"2-packagejson-scripts",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-packagejson-scripts",children:"#"}),"2. package.json scripts"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'// axios-v1.x/package.json\n{\n  "name": "axios",\n  "version": "1.7.0-beta.0",\n  "description": "Promise based HTTP client for the browser and node.js",\n  "main": "index.js",\n  "type": "module",\n  "scripts": {\n    "release:dry": "release-it --dry-run --no-npm",\n    "release:info": "release-it --release-version",\n    "release:beta:no-npm": "release-it --preRelease=beta --no-npm",\n    "release:beta": "release-it --preRelease=beta",\n    "release:no-npm": "release-it --no-npm",\n    "release:changelog:fix": "node ./bin/injectContributorsList.js && git add CHANGELOG.md",\n    "release": "release-it"\n  },\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"package.json"})," 中还有很多字段，比如 ",(0,s.jsx)(n.code,{children:"main"}),"、",(0,s.jsx)(n.code,{children:"exports"})," 等。推荐参考阮一峰老师的",(0,s.jsx)(n.a,{href:"https://es6.ruanyifeng.com/#docs/module-loader",rel:"noopener noreferrer",target:"_blank",children:"ES6 入门 —— Module 的加载实现"})]}),"\n",(0,s.jsxs)(n.p,{children:["我们可以看到发布主要对应的就是 ",(0,s.jsx)(n.a,{href:"https://github.com/release-it/release-it",rel:"noopener noreferrer",target:"_blank",children:"release-it"})," 。\n我们来看 ",(0,s.jsx)(n.code,{children:"release-it"})," 的配置。一般这类 ",(0,s.jsx)(n.code,{children:"nodejs"})," 工具，都是可以设置在 ",(0,s.jsx)(n.code,{children:"package.json"})," 中的单独属性xxx，或者单独文件配置，比如 ",(0,s.jsx)(n.code,{children:"xxxrc、xxx.json、xxx.config.js、xxx.config.ts"})," 等，内部实现了可以读取这些文件中的配置。算是一些通用规则。"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/release-it/release-it",rel:"noopener noreferrer",target:"_blank",children:"release-it 仓库"})," 中的 ",(0,s.jsx)(n.code,{children:"gif"})," 图如下："]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4f4940084da4dfbbfdab14f9f9393d4~tplv-k3u1fbpfcp-image.image#?w=820&h=541&s=37648&e=svg&b=000000",alt:"release-it.svg"})}),"\n",(0,s.jsxs)(n.p,{children:["我们可以执行 ",(0,s.jsx)(n.code,{children:"npm run release:dry"})," 空跑，查看下具体效果。当然也可以直接跑 ",(0,s.jsx)(n.code,{children:"npm run release"}),"，但可能没有那么顺利。"]}),"\n",(0,s.jsx)(n.p,{children:"执行效果如下图所示："}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6f94ca451314f85b8fa0150a21f43cd~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2570&h=1606&s=346817&e=png&b=000000",alt:"npm run release:dry"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35652e3942894807a56dc0f9e904de8e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2528&h=1522&s=345348&e=png&b=000000",alt:"npm run release:dry-2.png"})}),"\n",(0,s.jsxs)(n.h2,{id:"3-release-it",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-release-it",children:"#"}),"3. release-it"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'// axios-v1.x/package.json\n{\n    "release-it": {\n        "git": {\n          // commit 信息格式\n            "commitMessage": "chore(release): v${version}",\n            // 推送到远端\n            "push": true,\n            // 提交\n            "commit": true,\n            // 标签\n            "tag": true,\n            "requireCommits": false,\n            // 执行时是否需要工作区干净（比如有变动需要提交的）：false\n            "requireCleanWorkingDir": false\n        },\n        "github": {\n          // 是否生成 release\n            "release": true,\n            // 是否保存草稿\n            "draft": true\n        },\n        "npm": {\n          // 是否推送发布 npm 包\n            "publish": false,\n            // 是否忽略版本号\n            "ignoreVersion": false\n        },\n        "plugins": {\n            "@release-it/conventional-changelog": {\n                "preset": "angular",\n                "infile": "CHANGELOG.md",\n                "header": "# Changelog"\n            }\n        },\n        "hooks": {\n            "before:init": "npm test",\n            "after:bump": "gulp version --bump ${version} && npm run build && npm run test:build:version && git add ./dist && git add ./package-lock.json",\n            "before:release": "npm run release:changelog:fix",\n            "after:release": "echo Successfully released ${name} v${version} to ${repo.repository}."\n        }\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"git"}),"、",(0,s.jsx)(n.code,{children:"github"}),"、",(0,s.jsx)(n.code,{children:"plugins"})," 等很多属性都是字面意思。"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"plugins"})," 中这个插件 ",(0,s.jsx)(n.a,{href:"https://github.com/release-it/conventional-changelog",rel:"noopener noreferrer",target:"_blank",children:"@release-it/conventional-changelog"}),"，是生成 ",(0,s.jsx)(n.code,{children:"CHANGELOG.md"})," 文件的。"]}),"\n",(0,s.jsxs)(n.p,{children:["值得一提的是这个插件有个配置 ",(0,s.jsx)(n.a,{href:"https://github.com/release-it/conventional-changelog?tab=readme-ov-file#ignorerecommendedbump",rel:"noopener noreferrer",target:"_blank",children:"ignoreRecommendedBump"})," 默认是 ",(0,s.jsx)(n.code,{children:"false"}),"。当然还有很多配置和其他插件。默认值 ",(0,s.jsx)(n.code,{children:"false"})," 时，会根据提交的 ",(0,s.jsx)(n.code,{children:"commit"})," 信息，比如 ",(0,s.jsx)(n.code,{children:"feat,fix"})," 等推荐升级版本号，不能手动选择，如果为 ",(0,s.jsx)(n.code,{children:"true"})," 则可以自行选择版本号。"]}),"\n",(0,s.jsxs)(n.p,{children:["我们接着来看 ",(0,s.jsx)(n.a,{href:"https://github.com/release-it/release-it?tab=readme-ov-file#hooks",rel:"noopener noreferrer",target:"_blank",children:(0,s.jsx)(n.code,{children:"hooks"})}),"。"]}),"\n",(0,s.jsxs)(n.h3,{id:"31-hooks",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#31-hooks",children:"#"}),"3.1 hooks"]}),"\n",(0,s.jsx)(n.p,{children:"hooks，这里我简单画了一个图。"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a21333b2b9f4bf993f75747c0a8b94e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=4130&h=1312&s=502754&e=png&b=ffffff",alt:"npm-run-release@若川.png"})}),"\n",(0,s.jsxs)(n.h4,{id:"311-beforeinit",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#311-beforeinit",children:"#"}),"3.1.1 before:init"]}),"\n",(0,s.jsx)(n.p,{children:"执行测试脚本"}),"\n",(0,s.jsx)(n.p,{children:"npm test"}),"\n",(0,s.jsx)(n.p,{children:"npm run test:eslint && npm run test:mocha && npm run test:karma && npm run test:dtslint && npm run test:exports"}),"\n",(0,s.jsx)(n.p,{children:"就不展开叙述了。"}),"\n",(0,s.jsxs)(n.h4,{id:"312-afterbump",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#312-afterbump",children:"#"}),"3.1.2 after:bump"]}),"\n",(0,s.jsx)(n.p,{children:"提升版本号后"}),"\n",(0,s.jsx)(n.p,{children:"gulp version --bump ${version} && npm run build && npm run test:build:version && git add ./dist && git add ./package-lock.json"}),"\n",(0,s.jsx)(n.p,{children:"可以拆分成四段"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"gulp version --bump ${version}"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["提升版本号，执行 ",(0,s.jsx)(n.code,{children:"gulp"})," 的 ",(0,s.jsx)(n.code,{children:"version"})," 任务。"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"npm run build => gulp clear && cross-env NODE_ENV=production rollup -c -m\n清理文件 执行 production rollup 编译"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"npm run test:build:version => node ./bin/check-build-version.js\n检测源代码的 axios 版本和 axios 编译后的版本是否一致"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["git add ./dist && git add ./package-lock.json\ngit 添加 ",(0,s.jsx)(n.code,{children:"./dist"})," 和 ",(0,s.jsx)(n.code,{children:"./package-lock.json"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"313-beforerelease",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#313-beforerelease",children:"#"}),"3.1.3 before:release"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run release:changelog:fix\nnode ./bin/injectContributorsList.js && git add CHANGELOG.md\n"})}),"\n",(0,s.jsx)(n.p,{children:"简单来说就是修改 CHANGELOG.md 文件，添加 PRs、Contributors 等。就不展开叙述了。"}),"\n",(0,s.jsxs)(n.h4,{id:"313-afterrelease",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#313-afterrelease",children:"#"}),"3.1.3 after:release"]}),"\n",(0,s.jsxs)(n.p,{children:["执行 ",(0,s.jsx)(n.code,{children:"echo Successfully released ${name} v${version} to ${repo.repository}."})]}),"\n",(0,s.jsx)(n.p,{children:"替换相关变量，输出这句话。"}),"\n",(0,s.jsx)(n.p,{children:"先来看这句："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"gulp version --bump ${version}"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"4-gulp-version---bump-version",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4-gulp-version---bump-version",children:"#"}),"4. gulp version --bump ${version}"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://gulpjs.com/",rel:"noopener noreferrer",target:"_blank",children:"gulp 官方文档"})}),"\n",(0,s.jsxs)(n.p,{children:["可以先在 ",(0,s.jsx)(n.code,{children:"gulpfile.js"})," 文件打好断点，断点调试下。"]}),"\n",(0,s.jsxs)(n.p,{children:["可参考我的文章",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7030584939020042254",rel:"noopener noreferrer",target:"_blank",children:"新手向：前端程序员必学基本技能——调试JS代码"}),"，或者",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7212263304394981432",rel:"noopener noreferrer",target:"_blank",children:"据说90%的人不知道可以用测试用例(Vitest)调试开源项目(Vue3) 源码"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6020d572ba8d477787c85ee9a3b60a52~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2584&h=1052&s=391940&e=png&b=262626",alt:"debugger.png"})}),"\n",(0,s.jsxs)(n.p,{children:["或者新建 ",(0,s.jsx)(n.code,{children:"JavaScript调试终端"})," -  执行 ",(0,s.jsx)(n.code,{children:"npm run preversion"})," 命令调试。"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ea85248550746bca79feff79c015646~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1070&h=576&s=88905&e=png&b=262626",alt:"debugger-js.png"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f67cf7bc8004986bfb44f8c1e06b30b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=3840&h=1982&s=808478&e=png&b=272727",alt:"debugger-cmd.png"})}),"\n",(0,s.jsxs)(n.h3,{id:"41-引入-和-task-deafult-clear",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#41-引入-和-task-deafult-clear",children:"#"}),"4.1 引入 和 task deafult clear"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// axios-v1.x/gulpfile.js\nimport gulp from 'gulp';\nimport fs from 'fs-extra';\nimport axios from './bin/githubAxios.js';\nimport minimist from 'minimist'\n\n// 解析 命令行的参数\nconst argv = minimist(process.argv.slice(2));\n\n  gulp.task('default', async function(){\n  console.log('hello!');\n});\n\n// 清空打包后的 dist 目录\nconst clear = gulp.task('clear', async function() {\n  await fs.emptyDir('./dist/')\n});\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"process.argv.slice(2)"})," ",(0,s.jsx)(n.code,{children:"process.argv"})," 第一个参数是 node 命令的完整路径。第二个参数是正被执行的文件的完整路径。所有其他的参数从第三个位置开始。"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/minimistjs/minimist",rel:"noopener noreferrer",target:"_blank",children:"minimist"})," 解析命令行参数。这里主要是 ",(0,s.jsx)(n.code,{children:"gulp version --bump ${version}"})," 获取 ",(0,s.jsx)(n.code,{children:"argv.bump"})," 版本号。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// for CJS\nconst argv = require('minimist')(process.argv.slice(2));\n\n// for ESM\n// import minimist from 'minimist';\n// const argv = minimist(process.argv.slice(2));\nconsole.log(argv);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop --no-ding foo bar baz\n{\n	_: ['foo', 'bar', 'baz'],\n	x: 3,\n	y: 4,\n	n: 5,\n	a: true,\n	b: true,\n	c: true,\n	beep: 'boop',\n	ding: false\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"42-task-bower",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#42-task-bower",children:"#"}),"4.2 task bower"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"\n// 读取 package.json 中的一些指定属性，修改 bower.json 。bower https://bower.io/ 我们目前不常用了。可以简单了解\nconst bower = gulp.task('bower', async function () {\n  const npm = JSON.parse(await fs.readFile('package.json'));\n  const bower = JSON.parse(await fs.readFile('bower.json'));\n\n  const fields = [\n    'name',\n    'description',\n    'version',\n    'homepage',\n    'license',\n    'keywords'\n  ];\n\n  for (let i = 0, l = fields.length; i < l; i++) {\n    const field = fields[i];\n    bower[field] = npm[field];\n  }\n\n  await fs.writeFile('bower.json', JSON.stringify(bower, null, 2));\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"43-task-package",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#43-task-package",children:"#"}),"4.3 task package"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// 用 axios 获取 贡献者 contributors\nasync function getContributors(user, repo, maxCount = 1) {\n  const contributors = (await axios.get(\n    `https://api.github.com/repos/${encodeURIComponent(user)}/${encodeURIComponent(repo)}/contributors`,\n    { params: { per_page: maxCount } }\n  )).data;\n\n  return Promise.all(contributors.map(async (contributor)=> {\n    return {...contributor, ...(await axios.get(\n      `https://api.github.com/users/${encodeURIComponent(contributor.login)}`\n    )).data};\n  }))\n}\n\n// 获取最多的15个贡献者，修改 package.json 的 contributors 字段\nconst packageJSON = gulp.task('package', async function () {\n  const CONTRIBUTION_THRESHOLD = 3;\n\n  const npm = JSON.parse(await fs.readFile('package.json'));\n\n  try {\n    const contributors = await getContributors('axios', 'axios', 15);\n\n    npm.contributors = contributors\n      .filter(\n        ({type, contributions}) => type.toLowerCase() === 'user' && contributions >= CONTRIBUTION_THRESHOLD\n      )\n      .map(({login, name, url}) => `${name || login} (https://github.com/${login})`);\n\n    await fs.writeFile('package.json', JSON.stringify(npm, null, 2));\n  } catch (err) {\n    if (axios.isAxiosError(err) && err.response && err.response.status === 403) {\n      throw Error(`GitHub API Error: ${err.response.data && err.response.data.message}`);\n    }\n    throw err;\n  }\n});\n\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"44-task-env",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#44-task-env",children:"#"}),"4.4 task env"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// 传入的版本号，修改替换 axios-v1.x/lib/env/data.js 文件的版本号\n// export const VERSION = \"1.7.0-beta.0\";\nconst env = gulp.task('env', async function () {\n  var npm = JSON.parse(await fs.readFile('package.json'));\n\n  const envFilePath = './lib/env/data.js';\n\n  await fs.writeFile(envFilePath, Object.entries({\n    VERSION: (argv.bump || npm.version).replace(/^v/, '')\n  }).map(([key, value]) => {\n    return `export const ${key} = ${JSON.stringify(value)};`\n  }).join('\\n'));\n});\n\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"45-task-version",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#45-task-version",children:"#"}),"4.5 task version"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// 三个任务依次执行\nconst version = gulp.series('bower', 'env', 'package');\n\nexport {\n  bower,\n  env,\n  clear,\n  version,\n  packageJSON\n}\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://gulpjs.com/docs/en/api/series/",rel:"noopener noreferrer",target:"_blank",children:"gulp.series 串行"})}),"\n",(0,s.jsxs)(n.p,{children:["将任务函数和/或组合操作组合成更大的操作，这些操作将按顺序依次执行。使用 ",(0,s.jsx)(n.code,{children:"series()"})," 和 的组合操作的嵌套深度没有限制",(0,s.jsx)(n.code,{children:"parallel()"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["我们继续来看 ",(0,s.jsx)(n.code,{children:"npm run build"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"gulp clear && cross-env NODE_ENV=production rollup -c -m"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"5-gulp-clear--cross-env-node_envproduction-rollup--c--m",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#5-gulp-clear--cross-env-node_envproduction-rollup--c--m",children:"#"}),"5. gulp clear && cross-env NODE_ENV=production rollup -c -m"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"gulp clear"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// 清空打包后的 dist 目录\nconst clear = gulp.task('clear', async function() {\n  await fs.emptyDir('./dist/')\n});\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"cross-env NODE_ENV=production"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/kentcdodds/cross-env",rel:"noopener noreferrer",target:"_blank",children:"cross-env"})," 跨平台"]}),"\n",(0,s.jsxs)(n.p,{children:["也就是设置环境变量 ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"})," 为 ",(0,s.jsx)(n.code,{children:"production"}),"。"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://cn.rollupjs.org/introduction/",rel:"noopener noreferrer",target:"_blank",children:"rollupjs 中文文档"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://cn.rollupjs.org/command-line-interface/#command-line-flags",rel:"noopener noreferrer",target:"_blank",children:"命令行标志"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ cross-env NODE_ENV=production rollup -c -m\n-c, --config <filename>     使用此配置文件 （如果使用参数但未指定值，则默认为 rollup.config.js）\n-m, --sourcemap             生成源映射（`-m inline` 为内联映射）\n"})}),"\n",(0,s.jsxs)(n.p,{children:["我们接着来看 ",(0,s.jsx)(n.code,{children:"rollup.config.js"})," 文件。"]}),"\n",(0,s.jsxs)(n.p,{children:["可以调试运行 ",(0,s.jsx)(n.code,{children:"build"})," 命令，调试这个文件。"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd7af302194641019cdc86f1ce9fd545~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=3840&h=1982&s=808168&e=png&b=262626",alt:"debugger-rollup.png"})}),"\n",(0,s.jsxs)(n.h3,{id:"51-引入各种-rollup-插件等",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#51-引入各种-rollup-插件等",children:"#"}),"5.1 引入各种 rollup 插件等"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// axios-v1.x/rollup.config.js\n// 这个插件可以让 Rollup 找到外部模块。\nimport resolve from '@rollup/plugin-node-resolve';\n// 目前，大多数 NPM 上的包都以 CommonJS 模块的方式暴露。这个插件， Rollup 处理它们之前将 CommonJS 转换为 ES2015。\nimport commonjs from '@rollup/plugin-commonjs';\n// rollup-plugin-terser 压缩代码 现在更推荐：@rollup/plugin-terser;\nimport {terser} from \"rollup-plugin-terser\";\n// 处理 json 文件\nimport json from '@rollup/plugin-json';\n// 使用 babel 处理\nimport { babel } from '@rollup/plugin-babel';\n// Rollup plugin to automatically exclude package.json dependencies and peerDependencies from your bundle.\n// 可自动从 bundle 中排除 package.json 的 dependencies 和 peerDependency。\nimport autoExternal from 'rollup-plugin-auto-external';\n// 显示生成的包的大小。\nimport bundleSize from 'rollup-plugin-bundle-size';\n// 设置别名\nimport aliasPlugin from '@rollup/plugin-alias';\nimport path from 'path';\n\nconst lib = require(\"./package.json\");\n// 输出文件名\nconst outputFileName = 'axios';\nconst name = \"axios\";\nconst namedInput = './index.js';\n// 入口\nconst defaultInput = './lib/axios.js';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"52-buildconfig",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#52-buildconfig",children:"#"}),"5.2 buildConfig"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// axios-v1.x/rollup.config.js\nconst buildConfig = ({es5, browser = true, minifiedVersion = true, alias, ...config}) => {\n  const {file} = config.output;\n  const ext = path.extname(file);\n  const basename = path.basename(file, ext);\n  // 输出文件后缀\n  const extArr = ext.split('.');\n  extArr.shift();\n\n\n  const build = ({minified}) => ({\n    input: namedInput,\n    ...config,\n    output: {\n      ...config.output,\n      file: `${path.dirname(file)}/${basename}.${(minified ? ['min', ...extArr] : extArr).join('.')}`\n    },\n    plugins: [\n      aliasPlugin({\n        entries: alias || []\n      }),\n      json(),\n      resolve({browser}),\n      commonjs(),\n\n      // 压缩\n      minified && terser(),\n      minified && bundleSize(),\n      // 使用 babel \n      ...(es5 ? [babel({\n        babelHelpers: 'bundled',\n        presets: ['@babel/preset-env']\n      })] : []),\n      // 插件\n      ...(config.plugins || []),\n    ]\n  });\n\n  const configs = [\n    build({minified: false}),\n  ];\n\n  if (minifiedVersion) {\n    configs.push(build({minified: true}))\n  }\n\n  return configs;\n};\n\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"53-最终导出函数",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#53-最终导出函数",children:"#"}),"5.3 最终导出函数"]}),"\n",(0,s.jsx)(n.p,{children:"打包后四种类型"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"browser ESM bundle for CDN"}),"\n",(0,s.jsx)(n.li,{children:"Browser UMD bundle for CDN"}),"\n",(0,s.jsx)(n.li,{children:"Browser CJS bundle"}),"\n",(0,s.jsx)(n.li,{children:"Node.js commonjs bundle"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"打包后的文件如图所示："}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63c6d0e9b43541849d0ae2cc701bdafb~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2374&h=1644&s=340835&e=png&b=0d1117",alt:"dist-4.png"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// axios-v1.x/rollup.config.js\nexport default async () => {\n  const year = new Date().getFullYear();\n  const banner = `// Axios v${lib.version} Copyright (c) ${year} ${lib.author} and contributors`;\n\n  return [\n    // browser ESM bundle for CDN\n    ...buildConfig({\n      input: namedInput,\n      output: {\n        file: `dist/esm/${outputFileName}.js`,\n        format: "esm",\n        preferConst: true,\n        exports: "named",\n        banner\n      }\n    }),\n    // browser ESM bundle for CDN with fetch adapter only\n    // Downsizing from 12.97 kB (gzip) to 12.23 kB (gzip)\n/*    ...buildConfig({\n      input: namedInput,\n      output: {\n        file: `dist/esm/${outputFileName}-fetch.js`,\n        format: "esm",\n        preferConst: true,\n        exports: "named",\n        banner\n      },\n      alias: [\n        { find: \'./xhr.js\', replacement: \'../helpers/null.js\' }\n      ]\n    }),*/\n\n    // Browser UMD bundle for CDN\n    ...buildConfig({\n      input: defaultInput,\n      es5: true,\n      output: {\n        file: `dist/${outputFileName}.js`,\n        name,\n        format: "umd",\n        exports: "default",\n        banner\n      }\n    }),\n\n    // Browser CJS bundle\n    ...buildConfig({\n      input: defaultInput,\n      es5: false,\n      minifiedVersion: false,\n      output: {\n        file: `dist/browser/${name}.cjs`,\n        name,\n        format: "cjs",\n        exports: "default",\n        banner\n      }\n    }),\n\n    // Node.js commonjs bundle\n    {\n      input: defaultInput,\n      output: {\n        file: `dist/node/${name}.cjs`,\n        format: "cjs",\n        preferConst: true,\n        exports: "default",\n        banner\n      },\n      plugins: [\n        autoExternal(),\n        resolve(),\n        commonjs()\n      ]\n    }\n  ]\n};\n\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"6-总结",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#6-总结",children:"#"}),"6. 总结"]}),"\n",(0,s.jsxs)(n.p,{children:["本文我们学习了 ",(0,s.jsx)(n.code,{children:"axios"})," 是如何打包发布更新的，也就是说我们学会了打包工具库。"]}),"\n",(0,s.jsxs)(n.p,{children:["我们通过学习 ",(0,s.jsx)(n.code,{children:"package.json"})," 的脚本 ",(0,s.jsx)(n.code,{children:"scripts"}),"，",(0,s.jsx)(n.a,{href:"https://github.com/release-it/release-it",rel:"noopener noreferrer",target:"_blank",children:"release-it"})," 的配置 ",(0,s.jsx)(n.code,{children:"git、github、npm、plugins、hooks"})," 等。使用 ",(0,s.jsx)(n.a,{href:"https://github.com/release-it/conventional-changelog",rel:"noopener noreferrer",target:"_blank",children:"@release-it/conventional-changelog"})," 生成 changelog。自动化发布 npm、生成 release、打 tag 等。"]}),"\n",(0,s.jsxs)(n.p,{children:["在 ",(0,s.jsx)(n.code,{children:"hooks"})," 中配置了一些命令，比如 ",(0,s.jsx)(n.code,{children:"npm test"}),"、",(0,s.jsx)(n.code,{children:"gulp verison"}),"、",(0,s.jsx)(n.code,{children:"npm run build"})," 等，对应 ",(0,s.jsx)(n.code,{children:"gulpfile.js"})," 和 ",(0,s.jsx)(n.code,{children:"rollup.config.js"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["用 ",(0,s.jsx)(n.code,{children:"rollup"})," 打包生成四种格式的文件。"]}),"\n",(0,s.jsx)(n.p,{children:"如图所示："}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a21333b2b9f4bf993f75747c0a8b94e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=4130&h=1312&s=502754&e=png&b=ffffff",alt:"npm-run-release@若川.png"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"如果看完有收获，欢迎点赞、评论、分享支持。你的支持和肯定，是我写作的动力"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["最后可以持续关注我",(0,s.jsx)(n.a,{href:"https://juejin.cn/user/1415826704971918",rel:"noopener noreferrer",target:"_blank",children:"@若川"}),"，欢迎 ",(0,s.jsx)(n.code,{children:"follow"})," ",(0,s.jsx)(n.a,{href:"https://github.com/ruochuan12",rel:"noopener noreferrer",target:"_blank",children:"我的 github"}),"。另外，想学源码，极力推荐关注我写的专栏",(0,s.jsx)(n.a,{href:"https://juejin.cn/column/6960551178908205093",rel:"noopener noreferrer",target:"_blank",children:"《学习源码整体架构系列》"}),"，目前是掘金关注人数（5.7k+人）第一的专栏，写有30余篇源码文章。"]}),"\n",(0,s.jsxs)(n.p,{children:["我倾力持续组织了3年多",(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7079706017579139102",rel:"noopener noreferrer",target:"_blank",children:"每周大家一起学习200行左右的源码共读活动"}),"，感兴趣的可以",(0,s.jsxs)(n.a,{href:"https://juejin.cn/pin/7217386885793595453",rel:"noopener noreferrer",target:"_blank",children:["点此扫码加我微信 ",(0,s.jsx)(n.code,{children:"ruochuan02"})," 参与"]}),"。"]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}let t=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["axios-build%2FREADME.juejin.md"]={toc:[{id:"1-前言",text:"1. 前言",depth:2},{id:"2-packagejson-scripts",text:"2. package.json scripts",depth:2},{id:"3-release-it",text:"3. release-it",depth:2},{id:"31-hooks",text:"3.1 hooks",depth:3},{id:"311-beforeinit",text:"3.1.1 before:init",depth:4},{id:"312-afterbump",text:"3.1.2 after:bump",depth:4},{id:"313-beforerelease",text:"3.1.3 before:release",depth:4},{id:"313-afterrelease",text:"3.1.3 after:release",depth:4},{id:"4-gulp-version---bump-version",text:"4. gulp version --bump ${version}",depth:2},{id:"41-引入-和-task-deafult-clear",text:"4.1 引入 和 task deafult clear",depth:3},{id:"42-task-bower",text:"4.2 task bower",depth:3},{id:"43-task-package",text:"4.3 task package",depth:3},{id:"44-task-env",text:"4.4 task env",depth:3},{id:"45-task-version",text:"4.5 task version",depth:3},{id:"5-gulp-clear--cross-env-node_envproduction-rollup--c--m",text:"5. gulp clear && cross-env NODE_ENV=production rollup -c -m",depth:2},{id:"51-引入各种-rollup-插件等",text:"5.1 引入各种 rollup 插件等",depth:3},{id:"52-buildconfig",text:"5.2 buildConfig",depth:3},{id:"53-最终导出函数",text:"5.3 最终导出函数",depth:3},{id:"6-总结",text:"6. 总结",depth:2}],title:"",headingTitle:"",frontmatter:{highlight:"darcula",theme:"smartblue"}}},9192:function(e,n,r){r.d(n,{Z:()=>t});var s=r(52676),i=r(75271),a=r(22820);r(3593);let l={"zh-CN":e=>`预计阅读时间: ${e.minutes>=1?`${Math.ceil(e.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function o(e,n,r){let s=Object.keys(l).includes(n)?n:r;return l[s](e)}let t=e=>{let{defaultLocale:n="en-US"}=e,r=(0,a.Vi)().page.readingTimeData,l=(0,a.Jr)(),t=(0,a.e7)(),[c,d]=(0,i.useState)(o(r,l,n));return(0,i.useEffect)(()=>{d(o(r,l,n))},[l,r]),(0,s.jsx)("span",{"data-dark":String(t),className:"rp-reading-time",children:c})}}}]);