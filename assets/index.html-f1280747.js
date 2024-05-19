import{_ as t}from"./wechat-official-accounts-mini-70e2513c.js";import{_ as o,Q as c,S as l,W as n,a4 as s,a2 as e,a5 as p,E as i}from"./framework-291a1352.js";const r={},u=n("h1",{id:"分析vue-cli-2-9-3-搭建的webpack项目工程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分析vue-cli-2-9-3-搭建的webpack项目工程","aria-hidden":"true"},"#"),s(" 分析vue-cli@2.9.3 搭建的webpack项目工程")],-1),d=n("blockquote",null,[n("p",null,[n("code",null,"写于2018年06月11日")])],-1),k=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),v={href:"https://lxchuan12.gitee.io",target:"_blank",rel:"noopener noreferrer"},m={href:"https://juejin.cn/post/7079706017579139102",target:"_blank",rel:"noopener noreferrer"},b={href:"https://juejin.cn/pin/7217386885793595453",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"ruochuan02",-1),y={href:"https://juejin.cn/column/6960551178908205093",target:"_blank",rel:"noopener noreferrer"},h=n("blockquote",null,[n("p",null,[s("已经有很多分析"),n("code",null,"Vue-cli"),s("搭建工程的文章，为什么自己还要写一遍呢。学习就好比是座大山，人们沿着不同的路登山，分享着自己看到的风景。你不一定能看到别人看到的风景，体会到别人的心情。只有自己去登山，才能看到不一样的风景，体会才更加深刻。")])],-1),f=n("code",null,"github",-1),w={href:"https://github.com/ruochuan12/analyse-vue-cli",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"star",-1),x=n("code",null,"^_^",-1),j=p(`<p>正文从这里开始～</p><h2 id="使用vue-cli初始化webpack工程" tabindex="-1"><a class="header-anchor" href="#使用vue-cli初始化webpack工程" aria-hidden="true">#</a> 使用<code>vue-cli</code>初始化<code>webpack</code>工程</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#	# 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> vue-cli
<span class="token comment">#	安装完后vue命令就可以使用了。实际上是全局注册了vue、vue-init、vue-list几个命令</span>

<span class="token comment"># ubuntu 系统下</span>
<span class="token comment">#	[vue-cli@2.9.3] link /usr/local/bin/vue@ -&gt; /usr/local/lib/node_modules/vue-cli/bin/vue</span>
<span class="token comment">#	[vue-cli@2.9.3] link /usr/local/bin/vue-init@ -&gt; /usr/local/lib/node_modules/vue-cli/bin/vue-init</span>
<span class="token comment">#	[vue-cli@2.9.3] link /usr/local/bin/vue-list@ -&gt; /usr/local/lib/node_modules/vue-cli/bin/vue-list</span>

vue list
<span class="token comment">#	可以发现有browserify、browserify-simple、pwa、simple、webpack、webpack-simple几种模板可选，这里选用webpack。</span>

<span class="token comment">#	使用 vue init</span>
vue init <span class="token operator">&lt;</span>template-name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span>

<span class="token comment">#	例子</span>
vue init webpack analyse-vue-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),q=n("code",null,"vue-cli",-1),P={href:"https://juejin.im/post/5a7b1b86f265da4e8f049081",target:"_blank",rel:"noopener noreferrer"},S={href:"https://segmentfault.com/a/1190000013975247",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/vuejs/vue-cli/tree/master",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"webpack",-1),M={href:"https://webpack.docschina.org/concepts/",target:"_blank",rel:"noopener noreferrer"},L=p(`<h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> <code>package.json</code></h2><p>分析一个项目，一般从<code>package.json</code>的命令入口<code>scripts</code>开始。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// dev webpack-dev-server --inline 模式 --progress 显示进度 --config 指定配置文件（默认是webpack.config.js）</span>
  <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --inline --progress --config build/webpack.dev.conf.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run dev&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// jest测试</span>
  <span class="token string-property property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jest --config test/unit/jest.conf.js --coverage&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// e2e测试</span>
  <span class="token string-property property">&quot;e2e&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node test/e2e/runner.js&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 运行jest测试和e2e测试</span>
  <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run unit &amp;&amp; npm run e2e&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// eslint --ext 指定扩展名和相应的文件</span>
  <span class="token string-property property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --ext .js,.vue src test/unit test/e2e/specs&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// node 执行build/build.js文件</span>
  <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node build/build.js&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Npm Script</code> 底层实现原理是通过调用 <code>Shell</code> 去运行脚本命令。<code>npm run start</code>等同于运行<code>npm run dev</code>。</p><p><code>Npm Script</code> 还有一个重要的功能是能运行安装到项目目录里的 <code>node_modules</code> 里的可执行模块。</p><p>例如在通过命令<code>npm i -D webpack-dev-server</code>将<code>webpack-dev-server</code>安装到项目后，是无法直接在项目根目录下通过命令 <code>webpack-dev-server</code> 去执行 <code>webpack-dev-server</code> 构建的，而是要通过命令 <code>./node_modules/.bin/webpack-dev-server</code> 去执行。</p><p><code>Npm Script</code> 能方便的解决这个问题，只需要在 <code>scripts</code> 字段里定义一个任务，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --inline --progress --config build/webpack.dev.conf.js&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Npm Script</code> 会先去项目目录下的 <code>node_modules</code> 中寻找有没有可执行的 <code>webpack-dev-server</code> 文件，如果有就使用本地的，如果没有就使用全局的。 所以现在执行 <code>webpack-dev-server</code> 启动服务时只需要通过执行 <code>npm run dev</code> 去实现。</p><blockquote><p>再来看下 npm run dev <code>webpack-dev-server</code> 其实是一个<code>node.js</code>的应用程序，它是通过<code>JavaScript</code>开发的。在命令行执行<code>npm run dev</code>命令等同于执行<code>node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --progress --config build/webpack.dev.conf.js</code>。你可以试试。</p></blockquote>`,10),N=n("code",null,"package.json",-1),O={href:"http://javascript.ruanyifeng.com/nodejs/packagejson.html",target:"_blank",rel:"noopener noreferrer"},z=p(`<p><code>npm run dev</code>指定了<code>build/webpack.dev.conf.js</code>配置去启动服务，那么我们来看下这个文件做了什么。</p><h2 id="build-webpack-dev-conf-js-webpack开发环境配置" tabindex="-1"><a class="header-anchor" href="#build-webpack-dev-conf-js-webpack开发环境配置" aria-hidden="true">#</a> <code>build/webpack.dev.conf.js</code> <code>webpack</code>开发环境配置</h2><p>这个文件主要做了以下几件事情：<br> 1、引入各种依赖，同时也引入了<code>config</code>文件夹下的变量和配置，和一个工具函数<code>build/utils.js</code>，<br> 2、合并<code>build/webpack.base.conf.js</code>配置文件，<br> 3、配置开发环境一些<code>devServer</code>，<code>plugin</code>等配置，<br> 4、最后导出了一个<code>Promise</code>，根据配置的端口，寻找可用的端口来启动服务。</p><p>具体可以看<code>build/webpack.dev.conf.js</code>这个文件注释：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>
<span class="token comment">// 引入工具函数</span>
<span class="token keyword">const</span> utils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./utils&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入webpack</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入config/index.js配置</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 合并webpack配置</span>
<span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 基本配置</span>
<span class="token keyword">const</span> baseWebpackConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.base.conf&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 拷贝插件</span>
<span class="token keyword">const</span> CopyWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;copy-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 生成html的插件</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 友好提示的插件 https://github.com/geowarin/friendly-errors-webpack-plugin</span>
<span class="token keyword">const</span> FriendlyErrorsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;friendly-errors-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 查找可用端口 // github仓库 https://github.com/indexzero/node-portfinder</span>
<span class="token keyword">const</span> portfinder <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;portfinder&#39;</span><span class="token punctuation">)</span>


<span class="token comment">// process模块用来与当前进程互动，可以通过全局变量process访问，不必使用require命令加载。它是一个EventEmitter对象的实例。</span>

<span class="token comment">// 后面有些process模块用到的，所以这里统一列举下。</span>
<span class="token comment">// 更多查看这篇阮一峰的这篇文章 http://javascript.ruanyifeng.com/nodejs/process.html</span>

<span class="token comment">// process对象提供一系列属性，用于返回系统信息。</span>
<span class="token comment">// process.pid：当前进程的进程号。</span>
<span class="token comment">// process.version：Node的版本，比如v0.10.18。</span>
<span class="token comment">// process.platform：当前系统平台，比如Linux。</span>
<span class="token comment">// process.title：默认值为“node”，可以自定义该值。</span>
<span class="token comment">// process.argv：当前进程的命令行参数数组。</span>
<span class="token comment">// p<wbr>rocess.env：指向当前shell的环境变量，比如p<wbr>rocess.env.HOME。</span>
<span class="token comment">// process.execPath：运行当前进程的可执行文件的绝对路径。</span>
<span class="token comment">// process.stdout：指向标准输出。</span>
<span class="token comment">// process.stdin：指向标准输入。</span>
<span class="token comment">// process.stderr：指向标准错误。</span>

<span class="token comment">// process对象提供以下方法：</span>
<span class="token comment">// process.exit()：退出当前进程。</span>
<span class="token comment">// process.cwd()：返回运行当前脚本的工作目录的路径。_</span>
<span class="token comment">// process.chdir()：改变工作目录。</span>
<span class="token comment">// process.nextTick()：将一个回调函数放在下次事件循环的顶部。</span>

<span class="token comment">// host</span>
<span class="token keyword">const</span> <span class="token constant">HOST</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">HOST</span>
<span class="token comment">// 端口</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">&amp;&amp;</span> <span class="token function">Number</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span><span class="token punctuation">)</span>

<span class="token comment">// 合并基本的webpack配置</span>
<span class="token keyword">const</span> devWebpackConfig <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>baseWebpackConfig<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// cssSourceMap这里配置的是true</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> utils<span class="token punctuation">.</span><span class="token function">styleLoaders</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>cssSourceMap<span class="token punctuation">,</span> <span class="token literal-property property">usePostCSS</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// cheap-module-eval-source-map is faster for development</span>
  <span class="token comment">// 在开发环境是cheap-module-eval-source-map选项更快</span>
  <span class="token comment">// 这里配置的是cheap-module-eval-source-map</span>
  <span class="token comment">// 更多可以查看中文文档：https://webpack.docschina.org/configuration/devtool/#devtool</span>
  <span class="token comment">// 英文 https://webpack.js.org/configuration/devtool/#development</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>devtool<span class="token punctuation">,</span>

  <span class="token comment">// these devServer options should be customized in /config/index.js</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置在客户端的日志等级，这会影响到你在浏览器开发者工具控制台里看到的日志内容。</span>
    <span class="token comment">// clientLogLevel 是枚举类型，可取如下之一的值 none | error | warning | info。</span>
    <span class="token comment">// 默认为 info 级别，即输出所有类型的日志，设置成 none 可以不输出任何日志。</span>
    <span class="token literal-property property">clientLogLevel</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// historyApiFallback boolean object 用于方便的开发使用了 HTML5 History API 的单页应用。</span>
    <span class="token comment">// 可以简单true 或者 任意的 404 响应可以提供为 index.html 页面。</span>
    <span class="token literal-property property">historyApiFallback</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rewrites</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// config.dev.assetsPublicPath 这里是 /</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span> path<span class="token punctuation">.</span>posix<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>assetsPublicPath<span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 开启热更新</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// contentBase 配置 DevServer HTTP 服务器的文件根目录。</span>
    <span class="token comment">// 默认情况下为当前执行目录，通常是项目根目录，所有一般情况下你不必设置它，除非你有额外的文件需要被 DevServer 服务。</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// since we use CopyWebpackPlugin.</span>
    <span class="token comment">// compress 配置是否启用 gzip 压缩。boolean 为类型，默认为 false。</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// host</span>
    <span class="token comment">// 例如你想要局域网中的其它设备访问你本地的服务，可以在启动 DevServer 时带上 --host 0.0.0.0</span>
    <span class="token comment">// 或者直接设置为 0.0.0.0</span>
    <span class="token comment">// 这里配置的是localhost</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token constant">HOST</span> <span class="token operator">||</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>host<span class="token punctuation">,</span>
    <span class="token comment">// 端口号 这里配置的是8080</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token constant">PORT</span> <span class="token operator">||</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>port<span class="token punctuation">,</span>
    <span class="token comment">// 打开浏览器，这里配置是不打开false</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>autoOpenBrowser<span class="token punctuation">,</span>
    <span class="token comment">// 是否在浏览器以遮罩形式显示报错信息 这里配置的是true</span>
    <span class="token literal-property property">overlay</span><span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>errorOverlay
      <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">warnings</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token comment">// 这里配置的是 /</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>assetsPublicPath<span class="token punctuation">,</span>
    <span class="token comment">// 代理 这里配置的是空{},有需要可以自行配置</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>proxyTable<span class="token punctuation">,</span>
    <span class="token comment">// 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。</span>
    <span class="token comment">// 开启后一般非常干净只有类似的提示 Your application is running here: http://localhost:8080</span>
    <span class="token literal-property property">quiet</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// necessary for FriendlyErrorsPlugin</span>
    <span class="token comment">// webpack-dev-middleware</span>
    <span class="token comment">// watch: false,</span>
    <span class="token comment">// 启用 Watch 模式。这意味着在初始构建之后，webpack 将继续监听任何已解析文件的更改。Watch 模式默认关闭。</span>
    <span class="token comment">// webpack-dev-server 和 webpack-dev-middleware 里 Watch 模式默认开启。</span>
    <span class="token comment">// Watch 模式的选项</span>
    <span class="token literal-property property">watchOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 或者指定毫秒为单位进行轮询。</span>
      <span class="token comment">// 这里配置为false</span>
      <span class="token literal-property property">poll</span><span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>poll<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 更多查看中文文档：https://webpack.docschina.org/configuration/watch/#src/components/Sidebar/Sidebar.jsx</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 定义为开发环境</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 这里是 { NODE_ENV: &#39;&quot;development&quot;&#39; }</span>
      <span class="token string-property property">&#39;p<wbr>rocess.env&#39;</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config/dev.env&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 热更新插件</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 热更新时显示具体的模块路径</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>NamedModulesPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// HMR shows correct file names in console on update.</span>
    <span class="token comment">// 在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>NoEmitOnErrorsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// github仓库 https://github.com/ampedandwired/html-webpack-plugin</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// inject 默认值 true，script标签位于html文件的 body 底部</span>
      <span class="token comment">// body 通true, header, script 标签位于 head 标签内</span>
      <span class="token comment">// false 不插入生成的 js 文件，只是单纯的生成一个 html 文件</span>
      <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// copy custom static assets</span>
    <span class="token comment">// 把static资源复制到相应目录。</span>
    <span class="token keyword">new</span> <span class="token class-name">CopyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 这里是 static</span>
        <span class="token literal-property property">from</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../static&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 这里是 static</span>
        <span class="token literal-property property">to</span><span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>assetsSubDirectory<span class="token punctuation">,</span>
        <span class="token comment">// 忽略.开头的文件。比如这里的.gitkeep，这个文件是指空文件夹也提交到git</span>
        <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.*&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 导出一个promise</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// p<wbr>rocess.env.PORT 可以在命令行指定端口号，比如PORT=2000 npm run dev，那访问就是http://localhost:2000</span>
  <span class="token comment">// config.dev.port 这里配置是 8080</span>
  portfinder<span class="token punctuation">.</span>basePort <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>port
  <span class="token comment">// 以配置的端口为基准，寻找可用的端口，比如：如果8080占用，那就8081,以此类推</span>
  <span class="token comment">// github仓库 https://github.com/indexzero/node-portfinder</span>
  portfinder<span class="token punctuation">.</span><span class="token function">getPort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> port</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// publish the new Port, necessary for e2e tests</span>
      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">=</span> port
      <span class="token comment">// add port to devServer config</span>
      devWebpackConfig<span class="token punctuation">.</span>devServer<span class="token punctuation">.</span>port <span class="token operator">=</span> port

      <span class="token comment">// Add FriendlyErrorsPlugin</span>
      devWebpackConfig<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FriendlyErrorsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">compilationSuccessInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Your application is running here: http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>devWebpackConfig<span class="token punctuation">.</span>devServer<span class="token punctuation">.</span>host<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// notifyOnErrors 这里配置是 true</span>
        <span class="token comment">// onErrors 是一个函数，出错输出错误信息，系统原生的通知</span>
        <span class="token literal-property property">onErrors</span><span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>notifyOnErrors
        <span class="token operator">?</span> utils<span class="token punctuation">.</span><span class="token function">createNotifierCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

      <span class="token function">resolve</span><span class="token punctuation">(</span>devWebpackConfig<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="build-utils-js-工具函数" tabindex="-1"><a class="header-anchor" href="#build-utils-js-工具函数" aria-hidden="true">#</a> <code>build/utils.js</code> 工具函数</h2><p>上文<code>build/webpack.dev.conf.js</code>提到引入了<code>build/utils.js</code>工具函数。<br> 该文件主要写了以下几个工具函数：<br> 1、<code>assetsPath</code>返回输出路径，<br> 2、<code>cssLoaders</code>返回相应的<code>css-loader</code>配置，<br> 3、<code>styleLoaders</code>返回相应的处理样式的配置，<br> 4、<code>createNotifierCallback</code>创建启动服务时出错时提示信息回调。</p><p>具体配置可以看该文件注释：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入配置文件config/index.js</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 提取css的插件</span>
<span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;extract-text-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入package.json配置</span>
<span class="token keyword">const</span> packageConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../package.json&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 返回路径</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">assetsPath</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">_path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> assetsSubDirectory <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span>
    <span class="token comment">// 二级目录 这里是 static</span>
    <span class="token operator">?</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>assetsSubDirectory
    <span class="token comment">// 二级目录 这里是 static</span>
    <span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>assetsSubDirectory

  <span class="token comment">// 生成跨平台兼容的路径</span>
  <span class="token comment">// 更多查看Node API链接：https://nodejs.org/api/path.html#path_path_posix</span>
  <span class="token keyword">return</span> path<span class="token punctuation">.</span>posix<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>assetsSubDirectory<span class="token punctuation">,</span> _path<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">cssLoaders</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 作为参数传递进来的options对象</span>
  <span class="token comment">// {</span>
  <span class="token comment">//   // sourceMap这里是true</span>
  <span class="token comment">//   sourceMap: true,</span>
  <span class="token comment">//   // 是否提取css到单独的css文件</span>
  <span class="token comment">//   extract: true,</span>
  <span class="token comment">//   // 是否使用postcss</span>
  <span class="token comment">//   usePostCSS: true</span>
  <span class="token comment">// }</span>
  options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">const</span> cssLoader <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> options<span class="token punctuation">.</span>sourceMap
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> postcssLoader <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> options<span class="token punctuation">.</span>sourceMap
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// generate loader string to be used with extract text plugin</span>
  <span class="token comment">// 创建对应的loader配置</span>
  <span class="token keyword">function</span> <span class="token function">generateLoaders</span> <span class="token punctuation">(</span><span class="token parameter">loader<span class="token punctuation">,</span> loaderOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 是否使用usePostCSS，来决定是否采用postcssLoader</span>
    <span class="token keyword">const</span> loaders <span class="token operator">=</span> options<span class="token punctuation">.</span>usePostCSS <span class="token operator">?</span> <span class="token punctuation">[</span>cssLoader<span class="token punctuation">,</span> postcssLoader<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span>cssLoader<span class="token punctuation">]</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>loader<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      loaders<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> loader <span class="token operator">+</span> <span class="token string">&#39;-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 合并 loaderOptions 生成options</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> loaderOptions<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> options<span class="token punctuation">.</span>sourceMap
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Extract CSS when that option is specified</span>
    <span class="token comment">// (which is the case during production build)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>extract<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果提取使用ExtractTextPlugin插件提取</span>
      <span class="token comment">// 更多配置 看插件中文文档：https://webpack.docschina.org/plugins/extract-text-webpack-plugin/</span>
      <span class="token keyword">return</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 指需要什么样的loader去编译文件</span>
        <span class="token comment">// loader 被用于将资源转换成一个 CSS 导出模块 (必填)</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> loaders<span class="token punctuation">,</span>
        <span class="token comment">// loader（例如 &#39;style-loader&#39;）应用于当 CSS 没有被提取(也就是一个额外的 chunk，当 allChunks: false)</span>
        <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token string">&#39;vue-style-loader&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;vue-style-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>loaders<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// https://vue-loader.vuejs.org/en/configurations/extract-css.html</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token function">generateLoaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token function">generateLoaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token function">generateLoaders</span><span class="token punctuation">(</span><span class="token string">&#39;less&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// sass indentedSyntax 语法缩进，类似下方格式</span>
    <span class="token comment">// #main</span>
    <span class="token comment">//   color: blue</span>
    <span class="token comment">//   font-size: 0.3em</span>
    <span class="token literal-property property">sass</span><span class="token operator">:</span> <span class="token function">generateLoaders</span><span class="token punctuation">(</span><span class="token string">&#39;sass&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">indentedSyntax</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token function">generateLoaders</span><span class="token punctuation">(</span><span class="token string">&#39;sass&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stylus</span><span class="token operator">:</span> <span class="token function">generateLoaders</span><span class="token punctuation">(</span><span class="token string">&#39;stylus&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styl</span><span class="token operator">:</span> <span class="token function">generateLoaders</span><span class="token punctuation">(</span><span class="token string">&#39;stylus&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Generate loaders for standalone style files (outside of .vue)</span>
<span class="token comment">// 最终会返回webpack css相关的配置</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">styleLoaders</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// {</span>
  <span class="token comment">//   // sourceMap这里是true</span>
  <span class="token comment">//   sourceMap: true,</span>
  <span class="token comment">//   // 是否提取css到单独的css文件</span>
  <span class="token comment">//   extract: true,</span>
  <span class="token comment">//   // 是否使用postcss</span>
  <span class="token comment">//   usePostCSS: true</span>
  <span class="token comment">// }</span>
  <span class="token keyword">const</span> output <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> loaders <span class="token operator">=</span> exports<span class="token punctuation">.</span><span class="token function">cssLoaders</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> extension <span class="token keyword">in</span> loaders<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> loader <span class="token operator">=</span> loaders<span class="token punctuation">[</span>extension<span class="token punctuation">]</span>
    output<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;\\\\.&#39;</span> <span class="token operator">+</span> extension <span class="token operator">+</span> <span class="token string">&#39;$&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> loader
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> output
<span class="token punctuation">}</span>

<span class="token comment">// npm run dev 出错时， FriendlyErrorsPlugin插件 配置 onErrors输出错误信息</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">createNotifierCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// &#39;node-notifier&#39;是一个跨平台系统通知的页面，当遇到错误时，它能用系统原生的推送方式给你推送信息</span>
  <span class="token keyword">const</span> notifier <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;node-notifier&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">severity<span class="token punctuation">,</span> errors</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>severity <span class="token operator">!==</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

    <span class="token keyword">const</span> error <span class="token operator">=</span> errors<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> filename <span class="token operator">=</span> error<span class="token punctuation">.</span>file <span class="token operator">&amp;&amp;</span> error<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    notifier<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> packageConfig<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> severity <span class="token operator">+</span> <span class="token string">&#39;: &#39;</span> <span class="token operator">+</span> error<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
      <span class="token literal-property property">subtitle</span><span class="token operator">:</span> filename <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;logo.png&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="build-webpack-base-conf-js-webpack基本配置文件" tabindex="-1"><a class="header-anchor" href="#build-webpack-base-conf-js-webpack基本配置文件" aria-hidden="true">#</a> <code>build/webpack.base.conf.js</code> <code>webpack</code>基本配置文件</h2><p>上文<code>build/webpack.dev.conf.js</code>提到引入了<code>build/webpack.base.conf.js</code>这个<code>webpack</code>基本配置文件。<br> 这个文件主要做了以下几件事情：<br> 1、引入各种插件、配置等，其中引入了<code>build/vue-loader.conf.js</code>相关配置，<br> 2、创建<code>eslint</code>规则配置，默认启用，<br> 3、导出<code>webpack</code>配置对象，其中包含<code>context</code>，入口<code>entry</code>，输出<code>output</code>，<code>resolve</code>，<code>module</code>下的<code>rules</code>（处理对应文件的规则），和<code>node</code>相关的配置等。</p><p>具体可以看这个文件注释：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用严格模式，更多严格模式可以查看</span>
<span class="token comment">// [阮一峰老师的es标准入门](http://es6.ruanyifeng.com/?search=%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F&amp;x=0&amp;y=0#docs/function#%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F)</span>
<span class="token string">&#39;use strict&#39;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入工具函数</span>
<span class="token keyword">const</span> utils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./utils&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入配置文件，也就是config/index.js文件</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入vue-loader的配置文件</span>
<span class="token keyword">const</span> vueLoaderConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./vue-loader.conf&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 定义获取绝对路径函数</span>
<span class="token keyword">function</span> <span class="token function">resolve</span> <span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">,</span> dir<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 创建eslint配置</span>
<span class="token keyword">const</span> <span class="token function-variable function">createLintingRule</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(js|vue)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 执行顺序，前置，还有一个选项是post是后置</span>
  <span class="token comment">// 把 eslint-loader 的执行顺序放到最前面，防止其它 Loader 把处理后的代码交给 eslint-loader 去检查</span>
  <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 包含文件夹</span>
  <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用友好的eslint提示插件</span>
    <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;eslint-friendly-formatter&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// eslint报错提示是否显示以遮罩形式显示在浏览器中</span>
    <span class="token comment">// 这里showEslintErrorsInOverlay配置是false</span>
    <span class="token literal-property property">emitWarning</span><span class="token operator">:</span> <span class="token operator">!</span>config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>showEslintErrorsInOverlay
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 运行环境的上下文，就是实际的目录，也就是项目根目录</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 入口</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 输出</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 路径 这里是根目录下的dist</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>assetsRoot<span class="token punctuation">,</span>
    <span class="token comment">// 文件名</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span>
      <span class="token comment">// 这里是 /，但要上传到github pages等会路径不对，需要修改为./</span>
      <span class="token operator">?</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>assetsPublicPath
      <span class="token comment">// 这里配置是 /</span>
      <span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>assetsPublicPath
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// Webpack 在启动后会从配置的入口模块出发找出所有依赖的模块，Resolve 配置 Webpack 如何寻找模块所对应的文件。</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置了这个，对应的扩展名可以省略</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 给定对象的键后的末尾添加 $，以表示精准匹配 node_modules/vue/dist/vue.esm.js</span>
      <span class="token comment">// 引用 import Vue from &#39;vue&#39;就是引入的这个文件最后export default Vue 导出的Vue;</span>
      <span class="token comment">// 所以这句可以以任意大写字母命名 比如：import V from &#39;vue&#39;</span>
      <span class="token string-property property">&#39;vue$&#39;</span><span class="token operator">:</span> <span class="token string">&#39;vue/dist/vue.esm.js&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// src别名 比如 ：引入import HelloWorld from &#39;@/components/HelloWorld&#39;</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 定义一些文件的转换规则</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 是否使用eslint 这里配置是true</span>
      <span class="token operator">...</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>useEslint <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token function">createLintingRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// vue-loader中文文档：https://vue-loader-v14.vuejs.org/zh-cn/</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> vueLoaderConfig
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// js文件使用babel-loader转换</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;node_modules/webpack-dev-server/client&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 图片文件使用url-loader转换</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|svg)(\\?.*)?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 限制大小10000B(bytes)以内，转成base64编码的dataURL字符串</span>
          <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
          <span class="token comment">// 输出路径 img/名称.7位hash.扩展名</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> utils<span class="token punctuation">.</span><span class="token function">assetsPath</span><span class="token punctuation">(</span><span class="token string">&#39;img/[name].[hash:7].[ext]&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 视频文件使用url-loader转换</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(mp4|webm|ogg|mp3|wav|flac|aac)(\\?.*)?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> utils<span class="token punctuation">.</span><span class="token function">assetsPath</span><span class="token punctuation">(</span><span class="token string">&#39;media/[name].[hash:7].[ext]&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(woff2?|eot|ttf|otf)(\\?.*)?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> utils<span class="token punctuation">.</span><span class="token function">assetsPath</span><span class="token punctuation">(</span><span class="token string">&#39;fonts/[name].[hash:7].[ext]&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 这里的node是一个对象，其中每个属性都是 Node.js 全局变量或模块的名称，每个 value 是以下其中之一</span>
  <span class="token comment">// empty 提供空对象。</span>
  <span class="token comment">// false 什么都不提供。</span>
  <span class="token comment">// 更多查看 中文文档：https://webpack.docschina.org/configuration/node/</span>
  <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// prevent webpack from injecting useless setImmediate polyfill because Vue</span>
    <span class="token comment">// source contains it (although only uses it if it&#39;s native).</span>
    <span class="token comment">// 防止webpack注入一些polyfill 因为Vue已经包含了这些。</span>
    <span class="token literal-property property">setImmediate</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// prevent webpack from injecting mocks to Node native modules</span>
    <span class="token comment">// that does not make sense for the client</span>
    <span class="token literal-property property">dgram</span><span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fs</span><span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">net</span><span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tls</span><span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">child_process</span><span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="build-vue-loader-conf-js-vue-loader配置文件" tabindex="-1"><a class="header-anchor" href="#build-vue-loader-conf-js-vue-loader配置文件" aria-hidden="true">#</a> <code>build/vue-loader.conf.js</code> <code>vue-loader</code>配置文件</h2><p>上文<code>build/webpack.dev.conf.js</code>提到引入了<code>build/vue-loader.conf.js</code>。</p><p>这个文件主要导出了一份<code>Vue-loader</code>的配置， 主要有：<code>loaders</code>，<code>cssSourceMap</code>，<code>cacheBusting</code>，<code>transformToRequire</code>。</p><p>具体看该文件注释：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>
<span class="token keyword">const</span> utils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./utils&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> isProduction <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span>
<span class="token keyword">const</span> sourceMapEnabled <span class="token operator">=</span> isProduction
  <span class="token comment">// 这里是true</span>
  <span class="token operator">?</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>productionSourceMap
  <span class="token comment">// 这里是true</span>
  <span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>cssSourceMap
<span class="token comment">// 更多配置 可以查看vue-loader中文文档：https://vue-loader-v14.vuejs.org/zh-cn/</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// cssLoaders 生成相应loader配置，具体看utils文件中的cssLoader</span>
  <span class="token literal-property property">loaders</span><span class="token operator">:</span> utils<span class="token punctuation">.</span><span class="token function">cssLoaders</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 是否开启sourceMap，便于调试</span>
    <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> sourceMapEnabled<span class="token punctuation">,</span>
    <span class="token comment">// 是否提取vue单文件的css</span>
    <span class="token literal-property property">extract</span><span class="token operator">:</span> isProduction
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否开启cssSourceMap，便于调试</span>
  <span class="token literal-property property">cssSourceMap</span><span class="token operator">:</span> sourceMapEnabled<span class="token punctuation">,</span>
  <span class="token comment">// 这里是true</span>
  <span class="token comment">// 缓存破坏，进行sourceMap debug时，设置成false很有帮助。</span>
  <span class="token literal-property property">cacheBusting</span><span class="token operator">:</span> config<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>cacheBusting<span class="token punctuation">,</span>
  <span class="token comment">// vue单文件中，在模板中的图片等资源引用转成require的形式。以便目标资源可以由 webpack 处理。</span>
  <span class="token literal-property property">transformToRequire</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">video</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;poster&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认配置会转换 &lt;img&gt; 标签上的 src 属性和 SVG 的 &lt;image&gt; 标签上的 xlink：href 属性。</span>
    <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&#39;xlink:href&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看完了这些文件相应配置，开发环境的相关配置就串起来了。其中<code>config/</code>文件夹下的配置，笔者都已经注释在<code>build/</code>文件夹下的对应的文件中，所以就不单独说明了。</p><p>那回过头来看，<code>package.json</code>的<code>scripts</code>中的<code>npm run build</code>配置，<code>node build/build.js</code>，其实就是用<code>node</code>去执行<code>build/build.js</code>文件。</p><h2 id="build-build-js-npm-run-build-指定执行的文件" tabindex="-1"><a class="header-anchor" href="#build-build-js-npm-run-build-指定执行的文件" aria-hidden="true">#</a> <code>build/build.js</code> <code>npm run build</code> 指定执行的文件</h2><p>这个文件主要做了以下几件事情：<br> 1、引入<code>build/check-versions</code>文件，检查<code>node</code>和<code>npm</code>的版本，<br> 2、引入相关插件和配置，其中引入了<code>webpack</code>生产环境的配置<code>build/webpack.prod.conf.js</code>，<br> 3、先控制台输出<code>loading</code>，删除<code>dist</code>目录下的文件，开始构建，构建失败和构建成功都给出相应的提示信息。</p><p>具体可以查看相应的注释：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>
<span class="token comment">// 检查node npm的版本</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./check-versions&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">&#39;production&#39;</span>
<span class="token comment">// 命令行中的loading</span>
<span class="token keyword">const</span> ora <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ora&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 删除文件或文件夹</span>
<span class="token keyword">const</span> rm <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;rimraf&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 路径相关</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 控制台输入样式 chalk 更多查看：https://github.com/chalk/chalk</span>
<span class="token keyword">const</span> chalk <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;chalk&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入webpack</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入config/index.js</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入 生产环境webpack配置</span>
<span class="token keyword">const</span> webpackConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.prod.conf&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 控制台输入开始构建loading</span>
<span class="token keyword">const</span> spinner <span class="token operator">=</span> <span class="token function">ora</span><span class="token punctuation">(</span><span class="token string">&#39;building for production...&#39;</span><span class="token punctuation">)</span>
spinner<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 删除原有构建输出的目录文件 这里是dist 和 static</span>
<span class="token function">rm</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>assetsRoot<span class="token punctuation">,</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>assetsSubDirectory<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果出错，抛出错误</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err
  <span class="token function">webpack</span><span class="token punctuation">(</span>webpackConfig<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> stats</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 关闭 控制台输入开始构建loading</span>
    spinner<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 如果出错，抛出错误</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err
    process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>stats<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// If you are using ts-loader, setting this to true will make TypeScript errors show up during build.</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunkModules</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;\\n\\n&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// 如果有错，控制台输出构建失败</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stats<span class="token punctuation">.</span><span class="token function">hasErrors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chalk<span class="token punctuation">.</span><span class="token function">red</span><span class="token punctuation">(</span><span class="token string">&#39;  Build failed with errors.\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 控制台输出构建成功相关信息</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span><span class="token string">&#39;  Build complete.\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chalk<span class="token punctuation">.</span><span class="token function">yellow</span><span class="token punctuation">(</span>
      <span class="token string">&#39;  Tip: built files are meant to be served over an HTTP server.\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;  Opening index.html over file:// won\\&#39;t work.\\n&#39;</span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="build-check-versions-检查node和npm版本" tabindex="-1"><a class="header-anchor" href="#build-check-versions-检查node和npm版本" aria-hidden="true">#</a> <code>build/check-versions</code> 检查<code>node</code>和<code>npm</code>版本</h2><p>上文提到<code>build/check-versions</code> 检查<code>node</code>和<code>npm</code>版本，这个文件主要引入了一些插件和配置，最后导出一个函数，版本不符合预期就输出警告。</p><p>具体查看这个配置文件注释：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>
<span class="token comment">// 控制台输入样式 chalk 更多查看：https://github.com/chalk/chalk</span>
<span class="token keyword">const</span> chalk <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;chalk&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 语义化控制版本的插件 更多查看：https://github.com/npm/node-semver</span>
<span class="token keyword">const</span> semver <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;semver&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// package.json配置</span>
<span class="token keyword">const</span> packageConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../package.json&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// shell 脚本 Unix shell commands for Node.js 更多查看：https://github.com/shelljs/shelljs</span>
<span class="token keyword">const</span> shell <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;shelljs&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">exec</span> <span class="token punctuation">(</span><span class="token parameter">cmd</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;child_process&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execSync</span><span class="token punctuation">(</span>cmd<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> versionRequirements <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">currentVersion</span><span class="token operator">:</span> semver<span class="token punctuation">.</span><span class="token function">clean</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>version<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 这里配置是&quot;node&quot;: &quot;&gt;= 6.0.0&quot;,</span>
    <span class="token literal-property property">versionRequirement</span><span class="token operator">:</span> packageConfig<span class="token punctuation">.</span>engines<span class="token punctuation">.</span>node
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token comment">// 需要使用npm</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>shell<span class="token punctuation">.</span><span class="token function">which</span><span class="token punctuation">(</span><span class="token string">&#39;npm&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  versionRequirements<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;npm&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">currentVersion</span><span class="token operator">:</span> <span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;npm --version&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 这里配置是&quot;npm&quot;: &quot;&gt;= 3.0.0&quot;</span>
    <span class="token literal-property property">versionRequirement</span><span class="token operator">:</span> packageConfig<span class="token punctuation">.</span>engines<span class="token punctuation">.</span>npm
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 导出一个检查版本的函数</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> warnings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> versionRequirements<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mod <span class="token operator">=</span> versionRequirements<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

    <span class="token comment">// 当前版本不大于所需版本</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>semver<span class="token punctuation">.</span><span class="token function">satisfies</span><span class="token punctuation">(</span>mod<span class="token punctuation">.</span>currentVersion<span class="token punctuation">,</span> mod<span class="token punctuation">.</span>versionRequirement<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      warnings<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>mod<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;: &#39;</span> <span class="token operator">+</span>
        chalk<span class="token punctuation">.</span><span class="token function">red</span><span class="token punctuation">(</span>mod<span class="token punctuation">.</span>currentVersion<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39; should be &#39;</span> <span class="token operator">+</span>
        chalk<span class="token punctuation">.</span><span class="token function">green</span><span class="token punctuation">(</span>mod<span class="token punctuation">.</span>versionRequirement<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果有警告，全部输出到控制台</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>warnings<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chalk<span class="token punctuation">.</span><span class="token function">yellow</span><span class="token punctuation">(</span><span class="token string">&#39;To use this template, you must update following to modules:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> warnings<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> warning <span class="token operator">=</span> warnings<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;  &#39;</span> <span class="token operator">+</span> warning<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="build-webpack-prod-conf-js-webpack生产环境配置" tabindex="-1"><a class="header-anchor" href="#build-webpack-prod-conf-js-webpack生产环境配置" aria-hidden="true">#</a> <code>build/webpack.prod.conf.js</code> <code>webpack</code>生产环境配置</h2><p>上文<code>build/build.js</code>提到，引入了这个配置文件。<br> 这个文件主要做了以下几件事情：<br> 1、引入一些插件和配置，其中引入了<code>build/webpack.base.conf.js</code> <code>webpack</code>基本配置文件，<br> 2、用<code>DefinePlugin</code>定义环境，<br> 3、合并基本配置，定义自己的配置<code>webpackConfig</code>，配置了一些<code>modules</code>下的<code>rules</code>，<code>devtools</code>配置，<code>output</code>输出配置，一些处理<code>js</code>、提取<code>css</code>、压缩<code>css</code>、输出<code>html</code>插件、提取公共代码等的 <code>plugins</code>，<br> 4、如果启用<code>gzip</code>，再使用相应的插件处理，<br> 5、如果启用了分析打包后的插件，则用<code>webpack-bundle-analyzer</code>，<br> 6、最后导出这份配置。</p><p>具体可以查看这个文件配置注释：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>
<span class="token comment">// 引入node路径相关</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入utils工具函数</span>
<span class="token keyword">const</span> utils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./utils&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入webpack</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入config/index.js配置文件</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 合并webpack配置的插件</span>
<span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 基本的webpack配置</span>
<span class="token keyword">const</span> baseWebpackConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.base.conf&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 拷贝文件和文件夹的插件</span>
<span class="token keyword">const</span> CopyWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;copy-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 压缩处理HTML的插件</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;extract-text-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 压缩处理css的插件</span>
<span class="token keyword">const</span> OptimizeCSSPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 压缩处理js的插件</span>
<span class="token keyword">const</span> UglifyJsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;uglifyjs-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 用DefinePlugin定义环境</span>
<span class="token keyword">const</span> env <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;testing&#39;</span>
  <span class="token comment">// 这里是 { NODE_ENV: &#39;&quot;testing&quot;&#39; }</span>
  <span class="token operator">?</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config/test.env&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 这里是 { NODE_ENV: &#39;&quot;production&quot;&#39; }</span>
  <span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config/prod.env&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 合并基本webpack配置</span>
<span class="token keyword">const</span> webpackConfig <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>baseWebpackConfig<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过styleLoaders函数生成样式的一些规则</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> utils<span class="token punctuation">.</span><span class="token function">styleLoaders</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// sourceMap这里是true</span>
      <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>productionSourceMap<span class="token punctuation">,</span>
      <span class="token comment">// 是否提取css到单独的css文件</span>
      <span class="token literal-property property">extract</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 是否使用postcss</span>
      <span class="token literal-property property">usePostCSS</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置使用sourceMap true 这里是 #source-map</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>productionSourceMap <span class="token operator">?</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>devtool <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里是根目录下的dist</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>assetsRoot<span class="token punctuation">,</span>
    <span class="token comment">// 文件名称 chunkhash</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> utils<span class="token punctuation">.</span><span class="token function">assetsPath</span><span class="token punctuation">(</span><span class="token string">&#39;js/[name].[chunkhash].js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// chunks名称 chunkhash</span>
    <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> utils<span class="token punctuation">.</span><span class="token function">assetsPath</span><span class="token punctuation">(</span><span class="token string">&#39;js/[id].[chunkhash].js&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// http://vuejs.github.io/vue-loader/en/workflow/production.html</span>
    <span class="token comment">// 定义具体是什么环境</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">&#39;p<wbr>rocess.env&#39;</span><span class="token operator">:</span> env
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 压缩js插件</span>
    <span class="token keyword">new</span> <span class="token class-name">UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">uglifyOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 警告</span>
          <span class="token literal-property property">warnings</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token comment">// 构建后的文件 常用的配置还有这些</span>
          <span class="token comment">// 去除console.log 默认为false。  传入true会丢弃对console函数的调用。</span>
          <span class="token comment">// drop_console: true,</span>
          <span class="token comment">// 去除debugger</span>
          <span class="token comment">// drop_debugger: true,</span>
          <span class="token comment">// 默认为null. 你可以传入一个名称的数组，而UglifyJs将会假定那些函数不会产生副作用。</span>
          <span class="token comment">// pure_funcs: [ &#39;console.log&#39;, &#39;console.log.apply&#39; ],</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 是否开启sourceMap 这里是true</span>
      <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>productionSourceMap<span class="token punctuation">,</span>
      <span class="token comment">// 平行处理（同时处理）加快速度</span>
      <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// extract css into its own file</span>
    <span class="token comment">// 提取css到单独的css文件</span>
    <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 提取到相应的文件名 使用内容hash contenthash</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> utils<span class="token punctuation">.</span><span class="token function">assetsPath</span><span class="token punctuation">(</span><span class="token string">&#39;css/[name].[contenthash].css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// Setting the following option to \`false\` will not extract CSS from codesplit chunks.</span>
      <span class="token comment">// Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.</span>
      <span class="token comment">// It&#39;s currently set to \`true\` because we are seeing that sourcemaps are included in the codesplit bundle as well when it&#39;s \`false\`,</span>
      <span class="token comment">// increasing file size: https://github.com/vuejs-templates/webpack/issues/1110</span>
      <span class="token comment">// allChunks 默认是false,true指提取所有chunks包括动态引入的组件。</span>
      <span class="token literal-property property">allChunks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// Compress extracted CSS. We are using this plugin so that possible</span>
    <span class="token comment">// duplicated CSS from different components can be deduped.</span>
    <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 这里配置是true</span>
      <span class="token literal-property property">cssProcessorOptions</span><span class="token operator">:</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>productionSourceMap
        <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">safe</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">inline</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
        <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">safe</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// generate dist index.html with correct asset hash for caching.</span>
    <span class="token comment">// you can customize output by editing /index.html</span>
    <span class="token comment">// see https://github.com/ampedandwired/html-webpack-plugin</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 输出html名称</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;testing&#39;</span>
        <span class="token operator">?</span> <span class="token string">&#39;index.html&#39;</span>
        <span class="token comment">// 这里是 根目录下的dist/index.html</span>
        <span class="token operator">:</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>index<span class="token punctuation">,</span>
      <span class="token comment">// 使用哪个模板</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// inject 默认值 true，script标签位于html文件的 body 底部</span>
      <span class="token comment">// body 通true, header, script 标签位于 head 标签内</span>
      <span class="token comment">// false 不插入生成的 js 文件，只是单纯的生成一个 html 文件</span>
      <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 压缩</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 删除注释</span>
        <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 删除空格和换行</span>
        <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 删除html标签中属性的双引号</span>
        <span class="token literal-property property">removeAttributeQuotes</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token comment">// 更多配置查看html-minifier插件</span>
        <span class="token comment">// more options:</span>
        <span class="token comment">// https://github.com/kangax/html-minifier#options-quick-reference</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// necessary to consistently work with multiple chunks via CommonsChunkPlugin</span>
      <span class="token comment">// 在chunk被插入到html之前，你可以控制它们的排序。允许的值 ‘none’ | ‘auto’ | ‘dependency’ | {function} 默认为‘auto’.</span>
      <span class="token comment">// dependency 依赖（从属）</span>
      <span class="token literal-property property">chunksSortMode</span><span class="token operator">:</span> <span class="token string">&#39;dependency&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// keep module.id stable when vendor modules does not change</span>
    <span class="token comment">// 根据代码内容生成普通模块的id，确保源码不变，moduleID不变。</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HashedModuleIdsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// enable scope hoisting</span>
    <span class="token comment">// 开启作用域提升 webpack3新的特性，作用是让代码文件更小、运行的更快</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>ModuleConcatenationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// split vendor js into its own file</span>
    <span class="token comment">// 提取公共代码</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vendor&#39;</span><span class="token punctuation">,</span>
      <span class="token function">minChunks</span> <span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// any required modules inside node_modules are extracted to vendor</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          module<span class="token punctuation">.</span>resource <span class="token operator">&amp;&amp;</span>
          <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>resource<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
          module<span class="token punctuation">.</span>resource<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>
            path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../node_modules&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// extract webpack runtime and module manifest to its own file in order to</span>
    <span class="token comment">// prevent vendor hash from being updated whenever app bundle is updated</span>
    <span class="token comment">// 提取公共代码</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 把公共的部分放到 manifest 中</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;manifest&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 传入 \`Infinity\` 会马上生成 公共chunk，但里面没有模块。</span>
      <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">Infinity</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// This instance extracts shared chunks from code splitted chunks and bundles them</span>
    <span class="token comment">// in a separate chunk, similar to the vendor chunk</span>
    <span class="token comment">// see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk</span>
    <span class="token comment">// 提取动态组件</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;app&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 如果设置为 \`true\`，一个异步的  公共chunk 会作为 \`options.name\` 的子模块，和 \`options.chunks\` 的兄弟模块被创建。</span>
      <span class="token comment">// 它会与 \`options.chunks\` 并行被加载。可以通过提供想要的字符串，而不是 \`true\` 来对输出的文件进行更换名称。</span>
      <span class="token literal-property property">async</span><span class="token operator">:</span> <span class="token string">&#39;vendor-async&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 如果设置为 \`true\`，所有  公共chunk 的子模块都会被选择</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 最小3个，包含3，chunk的时候提取</span>
      <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// copy custom static assets</span>
    <span class="token comment">// 把static资源复制到相应目录。</span>
    <span class="token keyword">new</span> <span class="token class-name">CopyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">from</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../static&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 这里配置是static</span>
        <span class="token literal-property property">to</span><span class="token operator">:</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>assetsSubDirectory<span class="token punctuation">,</span>
        <span class="token comment">// 忽略.开头的文件。比如这里的.gitkeep，这个文件是指空文件夹也提交到git</span>
        <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.*&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 如果开始gzip压缩，使用compression-webpack-plugin插件处理。这里配置是false</span>
<span class="token comment">// 需要使用是需要安装 npm i compression-webpack-plugin -D</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>productionGzip<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> CompressionWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;compression-webpack-plugin&#39;</span><span class="token punctuation">)</span>

  webpackConfig<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">CompressionWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// asset： 目标资源名称。 [file] 会被替换成原始资源。</span>
      <span class="token comment">// [path] 会被替换成原始资源的路径， [query] 会被替换成查询字符串。默认值是 &quot;[path].gz[query]&quot;。</span>
      <span class="token literal-property property">asset</span><span class="token operator">:</span> <span class="token string">&#39;[path].gz[query]&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// algorithm： 可以是 function(buf, callback) 或者字符串。对于字符串来说依照 zlib 的算法(或者 zopfli 的算法)。默认值是 &quot;gzip&quot;。</span>
      <span class="token literal-property property">algorithm</span><span class="token operator">:</span> <span class="token string">&#39;gzip&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// test： 所有匹配该正则的资源都会被处理。默认值是全部资源。</span>
      <span class="token comment">// config.build.productionGzipExtensions 这里是[&#39;js&#39;, &#39;css&#39;]</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>
        <span class="token string">&#39;\\\\.(&#39;</span> <span class="token operator">+</span>
        config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>productionGzipExtensions<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;|&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span>
        <span class="token string">&#39;)$&#39;</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// threshold： 只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。</span>
      <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span>
      <span class="token comment">// minRatio： 只有压缩率小于这个值的资源才会被处理。默认值是 0.8。</span>
      <span class="token literal-property property">minRatio</span><span class="token operator">:</span> <span class="token number">0.8</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 输出分析的插件 运行npm run build --report</span>
<span class="token comment">// config.build.bundleAnalyzerReport这里是 p<wbr>rocess.env.npm_config_report</span>
<span class="token comment">// build结束后会自定打开 http://127.0.0.1:8888 链接</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>bundleAnalyzerReport<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 更多查看链接地址：https://www.npmjs.com/package/webpack-bundle-analyzer</span>
  <span class="token keyword">const</span> BundleAnalyzerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-bundle-analyzer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>BundleAnalyzerPlugin
  webpackConfig<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BundleAnalyzerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 当然也可以用官方提供的网站 http://webpack.github.io/analyse/#home</span>
<span class="token comment">// 运行类似 webpack --profile --json &gt; stats.json 命令</span>
<span class="token comment">// 把生成的构建信息stats.json上传即可</span>


<span class="token comment">// 最终导出 webpackConfig</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> webpackConfig

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，我们就分析完了<code>package.json</code>中的<code>npm run dev</code>和<code>npm run build</code>两个命令。测试相关的类似就略过吧。</p>`,33),R=n("code",null,"npm run lint",-1),T=n("code",null,".eslintrc.js",-1),V={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},W={href:"http://eslint.cn/",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"eslint",-1),D=n("code",null,"eslint",-1),B=n("code",null,"git",-1),H=n("code",null,"husky",-1),I=n("code",null,"npm i husky -S",-1),$=n("code",null,"package.json",-1),F=n("code",null,"scripts",-1),G=n("code",null,"precommit",-1),U=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --ext .js,.vue src test/unit test/e2e/specs&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;precommit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run lint&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),J=n("code",null,"git commit -m",-1),Q=n("code",null,"eslint",-1),Y=n("code",null,"prepush",-1),K=n("code",null,"husky",-1),X={href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"},Z=n("code",null,"git-hooks",-1),nn=n("code",null,"pre-commit",-1),sn=n("code",null,"shell",-1),an=n("code",null,"pre-commit",-1),en=n("code",null,".git/hooks/pre-commit",-1),pn=n("code",null,"husky",-1),tn=n("code",null,"shell",-1),on=n("p",null,[s("最后提一下"),n("code",null,".babelrc"),s("文件中的配置。")],-1),cn=n("h2",{id:"babelrc-babel相关配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#babelrc-babel相关配置","aria-hidden":"true"},"#"),s(),n("code",null,".babelrc"),s(),n("code",null,"babel"),s("相关配置")],-1),ln={href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"},rn=n("code",null,"babel",-1),un={href:"https://babel.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},dn=n("code",null,"babel",-1),kn=p(`<p>具体看文件中的配置注释：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// presets指明转码的规则</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// env项是借助插件babel-preset-env，下面这个配置说的是babel对es6,es7,es8进行转码，并且设置amd,commonjs这样的模块化文件，不进行转码</span>
    <span class="token punctuation">[</span><span class="token string">&quot;env&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;browsers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&gt; 1%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;last 2 versions&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;not ie &lt;= 8&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stage-2&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// plugins 属性告诉 Babel 要使用哪些插件，插件可以控制如何转换代码。</span>
  <span class="token comment">// transform-vue-jsx 表明可以在项目中使用jsx语法，会使用这个插件转换</span>
  <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;transform-vue-jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;transform-runtime&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 在特定的环境中所执行的转码规则，当环境变量是下面的test就会覆盖上面的设置</span>
  <span class="token string-property property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// test 是提前设置的环境变量，如果没有设置BABEL_ENV则使用NODE_ENV，如果都没有设置默认就是development</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;env&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stage-2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;transform-vue-jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;transform-es2015-modules-commonjs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dynamic-import-node&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),vn=n("code",null,"presets",-1),mn=n("code",null,"env",-1),bn=n("code",null,"stage-2",-1),gn={href:"http://webpack.wuhaolin.cn/3%E5%AE%9E%E6%88%98/3-1%E4%BD%BF%E7%94%A8ES6%E8%AF%AD%E8%A8%80.html",target:"_blank",rel:"noopener noreferrer"},yn=n("code",null,"3-1",-1),hn=n("code",null,"ES6",-1),fn=n("br",null,null,-1),wn=p("<blockquote><p><code>presets</code> 属性告诉 <code>Babel</code> 要转换的源码使用了哪些新的语法特性，一个 Presets 对一组新语法特性提供支持，多个 <code>Presets</code> 可以叠加。 <code>Presets</code> 其实是一组 <code>Plugins</code> 的集合，每一个 <code>Plugin</code> 完成一个新语法的转换工作。<code>Presets</code> 是按照 <code>ECMAScript</code> 草案来组织的，通常可以分为以下三大类（书中就是说三大类，我发现就两点~~~）：<br> 1、已经被写入 ECMAScript 标准里的特性，由于之前每年都有新特性被加入到标准里，所以又可细分为：<br> es2015 包含在2015里加入的新特性；<br> es2016 包含在2016里加入的新特性；<br> es2017 包含在2017里加入的新特性；<br> es2017 包含在2017里加入的新特性；<br> env 包含当前所有 ECMAScript 标准里的最新特性。<br> 2、被社区提出来的但还未被写入 <code>ECMAScript</code> 标准里特性，这其中又分为以下四种：<br><code>stage0</code> 只是一个美好激进的想法，有 <code>Babel</code> 插件实现了对这些特性的支持，但是不确定是否会被定为标准；<br><code>stage1</code> 值得被纳入标准的特性；<br><code>stage2</code> 该特性规范已经被起草，将会被纳入标准里；<br><code>stage3</code> 该特性规范已经定稿，各大浏览器厂商和 `` 社区开始着手实现；<br><code>stage4</code> 在接下来的一年将会加入到标准里去。<br></p></blockquote>",1),_n=n("code",null,"Vue-cli",-1),xn=n("code",null,"v2.9.3",-1),jn=n("code",null,"webpack",-1),qn=n("br",null,null,-1),Pn=n("code",null,"github",-1),Sn={href:"https://github.com/ruochuan12/analyse-vue-cli",target:"_blank",rel:"noopener noreferrer"},En=n("code",null,"star",-1),Cn=n("code",null,"^_^",-1),Mn=n("br",null,null,-1),Ln=p('<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>1、分析这些，逐行注释，还是需要一些时间的。其中有些不是很明白的地方，及时查阅相应的官方文档和插件文档（建议看英文文档和最新的文档），不过文档没写明白的地方，可以多搜索一些别人的博客文章，相对比较清晰明了。<br> 2、前端发展太快，这个<code>Vue-cli@2.9.3</code> <code>webpack</code>版本还是<code>v3.x</code>，webpack现在官方版本已经是<code>v4.12.0</code>，相信不久后，<code>Vue-cli</code>也将发布支持<code>webpack v4.x</code>的版本，<code>v3.0.0</code>已经是<code>beta.16</code>了。<br> 3、后续有余力，可能会继续分析新版的<code>vue-cli</code>构建的<code>webpack</code>项目工程。</p><h2 id="关于" tabindex="-1"><a class="header-anchor" href="#关于" aria-hidden="true">#</a> 关于</h2>',3),Nn=n("strong",null,"若川",-1),On=n("br",null,null,-1),zn={href:"https://ruochuan12.github.io/",target:"_blank",rel:"noopener noreferrer"},Rn=n("br",null,null,-1),Tn={href:"https://juejin.im/user/1415826704971918/posts",target:"_blank",rel:"noopener noreferrer"},Vn=n("br",null,null,-1),Wn={href:"https://segmentfault.com/blog/lxchuan12",target:"_blank",rel:"noopener noreferrer"},An=n("code",null,"segmentfault",-1),Dn=n("strong",null,"前端视野",-1),Bn=n("br",null,null,-1),Hn={href:"https://zhuanlan.zhihu.com/lxchuan12",target:"_blank",rel:"noopener noreferrer"},In=n("strong",null,"前端视野",-1),$n=n("br",null,null,-1),Fn={href:"https://github.com/ruochuan12/blog",target:"_blank",rel:"noopener noreferrer"},Gn=n("code",null,"star",-1),Un=n("sup",null,"_",-1),Jn=n("h2",{id:"微信公众号-若川视野",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#微信公众号-若川视野","aria-hidden":"true"},"#"),s(" 微信公众号 若川视野")],-1),Qn=n("p",null,[s("可能比较有趣的微信公众号，长按扫码关注。也可以加微信 "),n("code",null,"ruochuan12"),s("，注明来源，拉您进【前端视野交流群】。")],-1),Yn=n("figure",null,[n("img",{src:t,alt:"若川视野",tabindex:"0",loading:"lazy"}),n("figcaption",null,"若川视野")],-1);function Kn(Xn,Zn){const a=i("ExternalLinkIcon");return c(),l("div",null,[u,d,k,n("blockquote",null,[n("p",null,[s("大家好，我是"),n("a",v,[s("若川"),e(a)]),s("。我倾力持续组织了一年"),n("a",m,[s("每周大家一起学习200行左右的源码共读活动"),e(a)]),s("，感兴趣的可以"),n("a",b,[s("点此扫码加我微信 "),g,s(" 参与"),e(a)]),s("。另外，想学源码，极力推荐关注我写的专栏"),n("a",y,[s("《学习源码整体架构系列》"),e(a)]),s("，目前是掘金关注人数（4.1k+人）第一的专栏，写有20余篇源码文章。")])]),h,n("p",null,[n("strong",null,[s("项目放在笔者的"),f,s("上，"),n("a",w,[s("分析vue-cli@2.9.3 搭建的webpack项目工程"),e(a)]),s("。方便大家克隆下载，或者在线查看。同时也求个"),_,s(),x,s("，也是对笔者的一种鼓励和支持。")])]),j,n("p",null,[s("更多"),q,s("如何工作的可以查看这篇文章"),n("a",P,[s("vue-cli是如何工作的"),e(a)]),s("，或者分析Vue-cli源码查看这篇"),n("a",S,[s("走进Vue-cli源码，自己动手搭建前端脚手架工具"),e(a)]),s("，再或者直接查看"),n("a",E,[s("vue-cli github仓库源码"),e(a)])]),n("p",null,[s("如果对"),C,s("还不是很了解，可以查看"),n("a",M,[s("webpack官方文档中的概念"),e(a)]),s("，虽然是最新版本的，但概念都是差不多的。")]),L,n("p",null,[s("更多"),N,s("的配置项，可以查看"),n("a",O,[s("阮一峰老师的文章 package.json文件"),e(a)])]),z,n("p",null,[R,s("，"),T,s("中的配置不多，更多可以查看"),n("a",V,[s("eslint英文文档"),e(a)]),s("或"),n("a",W,[A,s("中文官网"),e(a)]),s("，所以也略过吧。不过提一下，把"),D,s("整合到"),B,s("工作流。可以安装"),H,s("，"),I,s("。安装后，配置"),$,s("的"),F,s("中，配置"),G,s("，具体如下：")]),U,n("p",null,[s("配置好后，每次"),J,s("提交会检查代码是否通过"),Q,s("校验，如果没有校验通过则提交失败。还可以配置"),Y,s("。"),K,s("不断在更新，现在可能与原先的配置不太相同了，具体查看"),n("a",X,[s("husky github仓库"),e(a)]),s("。原理就是"),Z,s(","),nn,s("的钩子。对"),sn,s("脚本熟悉的同学也可以自己写一份"),an,s("。复制到项目的"),en,s("中。不需要依赖"),pn,s("包。我司就是用的"),tn,s("脚本。")]),on,cn,n("p",null,[s("配置了一些转码规则。这里附上两个链接："),n("a",ln,[rn,s("英文官网"),e(a)]),s("和"),n("a",un,[dn,s("的中文官网"),e(a)]),s("。")]),kn,n("p",null,[s("文件中"),vn,s("中有配置"),mn,s("和"),bn,s("，可能不知道是什么。这里引用"),n("a",gn,[s("深入浅出webpack"),e(a)]),s("书中，第三章，"),yn,s("使用"),hn,s("语言 小节的一段，解释一下。"),fn]),wn,n("p",null,[s("至此，就算相对完整的分析完了"),_n,s("(版本"),xn,s(")搭建的"),jn,s("项目工程。希望对大家有所帮助。"),qn,n("strong",null,[s("项目放在笔者的"),Pn,s("上，"),n("a",Sn,[s("分析vue-cli@2.9.3 搭建的webpack项目工程"),e(a)]),s("。方便大家克隆下载，或者在线查看。同时也求个"),En,s(),Cn,s("，也是对笔者的一种鼓励和支持。")]),Mn,s(" 笔者知识能力有限，文章有什么不妥之处，欢迎指出~")]),Ln,n("p",null,[s("作者：常以"),Nn,s("为名混迹于江湖。前端路上 | PPT爱好者 | 所知甚少，唯善学。"),On,n("a",zn,[s("个人博客"),e(a)]),Rn,n("a",Tn,[s("掘金专栏"),e(a)]),s("，欢迎关注~"),Vn,n("a",Wn,[An,s("前端视野专栏"),e(a)]),s("，开通了"),Dn,s("专栏，欢迎关注~"),Bn,n("a",Hn,[s("知乎前端视野专栏"),e(a)]),s("，开通了"),In,s("专栏，欢迎关注~"),$n,n("a",Fn,[s("github blog"),e(a)]),s("，相关源码和资源都放在这里，求个"),Gn,Un,s("~")]),Jn,Qn,Yn])}const as=o(r,[["render",Kn],["__file","index.html.vue"]]);export{as as default};
