import{_ as a,Q as s,S as n,W as e,a4 as o,a2 as t,a5 as i,E as d}from"./framework-291a1352.js";const c={},h=e("h1",{id:"corser",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#corser","aria-hidden":"true"},"#"),o(" Corser")],-1),l={href:"http://www.w3.org/TR/cors/",target:"_blank",rel:"noopener noreferrer"},u={href:"http://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},p={href:"http://travis-ci.org/agrueneberg/Corser",target:"_blank",rel:"noopener noreferrer"},f=e("img",{src:"https://secure.travis-ci.org/agrueneberg/Corser.png",alt:"Build Status",tabindex:"0",loading:"lazy"},null,-1),g=e("figcaption",null,"Build Status",-1),m=i(`<h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h2><h3 id="_2-0-march-22-2014" tabindex="-1"><a class="header-anchor" href="#_2-0-march-22-2014" aria-hidden="true">#</a> 2.0 (March 22, 2014)</h3><ul><li>Preflight requests are automatically closed. If there is a need for handling <code>OPTIONS</code> requests, check the <code>endPreflightRequests</code> option.</li><li>The parameters of the callback function in dynamic origin checking are now <code>(err, matches)</code> instead of just <code>(matches)</code>.</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="how-to-use-corser-as-a-middleware-in-express" tabindex="-1"><a class="header-anchor" href="#how-to-use-corser-as-a-middleware-in-express" aria-hidden="true">#</a> How to use Corser as a middleware in Express</h3><p>See <code>example/express/</code> for a working example.</p><pre><code>var express, corser, app;

express = require(&quot;express&quot;);
corser = require(&quot;corser&quot;);

app = express();

app.use(corser.create());

app.get(&quot;/&quot;, function (req, res) {
    res.writeHead(200);
    res.end(&quot;Nice weather today, huh?&quot;);
});

app.listen(1337);
</code></pre><h3 id="how-to-use-corser-as-a-middleware-in-connect" tabindex="-1"><a class="header-anchor" href="#how-to-use-corser-as-a-middleware-in-connect" aria-hidden="true">#</a> How to use Corser as a middleware in Connect</h3><p>See <code>example/connect/</code> for a working example.</p><pre><code>var connect, corser, app;

connect = require(&quot;connect&quot;);
corser = require(&quot;corser&quot;);

app = connect();

app.use(corser.create());

app.use(function (req, res) {
    res.writeHead(200);
    res.end(&quot;Nice weather today, huh?&quot;);
});

app.listen(1337);
</code></pre><h3 id="how-to-use-corser-with-plain-http" tabindex="-1"><a class="header-anchor" href="#how-to-use-corser-with-plain-http" aria-hidden="true">#</a> How to use Corser with plain <code>http</code></h3><pre><code>var http, corser, corserRequestListener;

http = require(&quot;http&quot;);
corser = require(&quot;corser&quot;);

// Create Corser request listener.
corserRequestListener = corser.create();

http.createServer(function (req, res) {
    // Route req and res through the request listener.
    corserRequestListener(req, res, function () {
        res.writeHead(200);
        res.end(&quot;Nice weather today, huh?&quot;);
    });
}).listen(1337);
</code></pre><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="creating-a-corser-request-listener" tabindex="-1"><a class="header-anchor" href="#creating-a-corser-request-listener" aria-hidden="true">#</a> Creating a Corser request listener</h3><p>Creating a Corser request listener that generates the appropriate response headers to enable CORS is as simple as:</p><pre><code>corser.create()
</code></pre><p>This is the equivalent of setting a response header of <code>Access-Control-Allow-Origin: *</code>. If you want to restrict the origins, or allow more sophisticated request or response headers, you have to pass a configuration object to <code>corser.create</code>.</p><p>Corser will automatically end preflight requests for you. A preflight request is a special <code>OPTIONS</code> request that the browser sends under certain conditions to negotiate with the server what methods, request headers and response headers are allowed for a CORS request. If you need to use the <code>OPTIONS</code> method for other stuff, just set <code>endPreflightRequests</code> to <code>false</code> and terminate those requests yourself:</p><pre><code>var corserRequestListener;

corserRequestListener = corser.create({
    endPreflightRequests: false
});

corserRequestListener(req, res, function () {
    if (req.method === &quot;OPTIONS&quot;) {
        // End CORS preflight request.
        res.writeHead(204);
        res.end();
    } else {
        // Implement other HTTP methods.
    }
});
</code></pre><h4 id="configuration-object" tabindex="-1"><a class="header-anchor" href="#configuration-object" aria-hidden="true">#</a> Configuration Object</h4><p>A configuration object with the following properties can be passed to <code>corser.create</code>.</p><h5 id="origins" tabindex="-1"><a class="header-anchor" href="#origins" aria-hidden="true">#</a> <code>origins</code></h5><p>A case-sensitive whitelist of origins. Unless unbound, if the request comes from an origin that is not in this list, it will not be handled by CORS.</p><p>To allow for dynamic origin checking, a function <code>(origin, callback)</code> can be passed instead of an array. <code>origin</code> is the Origin header, <code>callback</code> is a function <code>(err, matches)</code>, where <code>matches</code> is a boolean flag that indicates whether the given Origin header matches or not.</p><p>Default: unbound, i.e. every origin is accepted.</p><h5 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> <code>methods</code></h5><p>An uppercase whitelist of methods. If the request uses a method that is not in this list, it will not be handled by CORS.</p><p>Setting a value here will overwrite the list of default simple methods. To not lose them, concat the methods you want to add with <code>corser.simpleMethods</code>: <code>corser.simpleMethods.concat([&quot;PUT&quot;, &quot;DELETE&quot;])</code>.</p><p>Default: simple methods (<code>GET</code>, <code>HEAD</code>, <code>POST</code>).</p><h5 id="requestheaders" tabindex="-1"><a class="header-anchor" href="#requestheaders" aria-hidden="true">#</a> <code>requestHeaders</code></h5><p>A case-insensitive whitelist of request headers. If the request uses a request header that is not in this list, it will not be handled by CORS.</p><p>Setting a value here will overwrite the list of default simple request headers. To not lose them, concat the request headers you want to add with <code>corser.simpleRequestHeaders</code>: <code>corser.simpleRequestHeaders.concat([&quot;Authorization&quot;])</code>.</p><p>Default: simple request headers (<code>Accept</code>, <code>Accept-Language</code>, <code>Content-Language</code>, <code>Content-Type</code>, <code>Last-Event-ID</code>).</p><h5 id="responseheaders" tabindex="-1"><a class="header-anchor" href="#responseheaders" aria-hidden="true">#</a> <code>responseHeaders</code></h5><p>A case-insensitive whitelist of response headers. Any response header that is not in this list will be filtered out by the user-agent (the browser).</p><p>Setting a value here will overwrite the list of default simple response headers. To not lose them, concat the response headers you want to add with <code>corser.simpleResponseHeaders</code>: <code>corser.simpleResponseHeaders.concat([&quot;ETag&quot;])</code>.</p><p>Default: simple response headers (<code>Cache-Control</code>, <code>Content-Language</code>, <code>Content-Type</code>, <code>Expires</code>, <code>Last-Modified</code>, <code>Pragma</code>).</p><h5 id="supportscredentials" tabindex="-1"><a class="header-anchor" href="#supportscredentials" aria-hidden="true">#</a> <code>supportsCredentials</code></h5><p>A boolean that indicates if cookie credentials can be transferred as part of a CORS request. Currently, only a few HTML5 elements can benefit from this setting.</p><p>Default: <code>false</code>.</p><h5 id="maxage" tabindex="-1"><a class="header-anchor" href="#maxage" aria-hidden="true">#</a> <code>maxAge</code></h5><p>An integer that indicates the maximum amount of time in seconds that a preflight request is kept in the client-side preflight result cache.</p><p>Default: not set.</p><h5 id="endpreflightrequests" tabindex="-1"><a class="header-anchor" href="#endpreflightrequests" aria-hidden="true">#</a> <code>endPreflightRequests</code></h5><p>A boolean that indicates if CORS preflight requests should be automatically closed.</p><p>Default: <code>true</code>.</p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="ajax-call-returns-origin-x-is-not-allowed-by-access-control-allow-origin" tabindex="-1"><a class="header-anchor" href="#ajax-call-returns-origin-x-is-not-allowed-by-access-control-allow-origin" aria-hidden="true">#</a> Ajax call returns <code>Origin X is not allowed by Access-Control-Allow-Origin</code></h3><p>Check if the <code>Origin</code> header of your request matches one of the origins provided in the <code>origins</code> property of the configuration object. If you didn&#39;t set any <code>origins</code> property, jump to the next question.</p><h3 id="ajax-call-still-returns-origin-x-is-not-allowed-by-access-control-allow-origin" tabindex="-1"><a class="header-anchor" href="#ajax-call-still-returns-origin-x-is-not-allowed-by-access-control-allow-origin" aria-hidden="true">#</a> Ajax call still returns <code>Origin X is not allowed by Access-Control-Allow-Origin</code></h3><p>Your request might use a non-simple method or one or more non-simple headers. According to the specification, the set of simple methods is <code>GET</code>, <code>HEAD</code>, and <code>POST</code>, and the set of simple request headers is <code>Accept</code>, <code>Accept-Language</code>, <code>Content-Language</code>, <code>Content-Type</code>, and <code>Last-Event-ID</code>. If your request uses <strong>any</strong> other method or header, you have to explicitly list them in the <code>methods</code> or <code>requestHeaders</code> property of the configuration object.</p><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4><p>You want to allow requests that use an <code>X-Requested-With</code> header. Pass the following configuration object to <code>corser.create</code>:</p><pre><code>corser.create({
    requestHeaders: corser.simpleRequestHeaders.concat([&quot;X-Requested-With&quot;])
});
</code></pre><h3 id="getting-a-response-header-returns-refused-to-get-unsafe-header-x" tabindex="-1"><a class="header-anchor" href="#getting-a-response-header-returns-refused-to-get-unsafe-header-x" aria-hidden="true">#</a> Getting a response header returns <code>Refused to get unsafe header &quot;X&quot;</code></h3><p>Your browser blocks every non-simple response headers that was not explicitly allowed in the preflight request. The set of simple response headers is <code>Cache-Control</code>, <code>Content-Language</code>, <code>Content-Type</code>, <code>Expires</code>, <code>Last-Modified</code>, <code>Pragma</code>. If you want to access <strong>any</strong> other response header, you have to explicitly list them in the <code>responseHeaders</code> property of the configuration object.</p><h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h4><p>You want to allow clients to read the <code>ETag</code> header of a response. Pass the following configuration object to <code>corser.create</code>:</p><pre><code>corser.create({
    responseHeaders: corser.simpleResponseHeaders.concat([&quot;ETag&quot;])
});
</code></pre>`,59);function q(w,x){const r=d("ExternalLinkIcon");return s(),n("div",null,[h,e("p",null,[o("A highly configurable, middleware compatible implementation of "),e("a",l,[o("CORS"),t(r)]),o(" for "),e("a",u,[o("Node.js"),t(r)]),o(".")]),e("figure",null,[e("a",p,[f,t(r)]),g]),m])}const y=a(c,[["render",q],["__file","index.html.vue"]]);export{y as default};
