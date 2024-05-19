import{_ as p,Q as o,S as i,W as n,a4 as s,a2 as e,a5 as t,E as c}from"./framework-291a1352.js";const l={},r=t(`<h1 id="common-style-for-javascript" tabindex="-1"><a class="header-anchor" href="#common-style-for-javascript" aria-hidden="true">#</a> Common Style for JavaScript</h1><blockquote><p>If you have comments on this or <strong>disagree about rules</strong> then please reach out to me directly. I want to hear it!</p></blockquote><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of Contents</h2><p><strong><em>Basics</em></strong></p><ul><li><a href="#compliance-levels">Compliance Levels</a></li><li><a href="#ground-rules">Ground Rules</a></li><li><a href="#semicolons">Semicolons</a></li><li><a href="#braces">Braces</a></li></ul><p><strong><em>Identifiers and Primitives</em></strong></p><ul><li><a href="#naming-conventions">Naming Contentions</a></li><li><a href="#variable-declarations">Variable Declarations</a></li><li><a href="#objects">Objects</a></li><li><a href="#arrays">Arrays</a></li><li><a href="#strings">Strings</a></li><li><a href="#code-comments">Comments</a></li><li><a href="#constructors">Constructors</a></li></ul><p><strong><em>Statements and Techniques</em></strong></p><ul><li><a href="#control-flow">Control-flow</a></li><li><a href="#function">Functions</a></li><li><a href="#conditionals">Conditionals</a></li><li><a href="#type-casting--coercion">Type Casting &amp; Coercion</a></li><li><a href="#ternary-operators">Ternary Operators</a></li><li><a href="#errors">Errors</a></li><li><a href="#exports">Exports</a></li><li><a href="#async-programming">Async</a></li></ul><blockquote><p><a href="#attribution">Attribution</a></p></blockquote><h2 id="compliance-levels" tabindex="-1"><a class="header-anchor" href="#compliance-levels" aria-hidden="true">#</a> Compliance Levels</h2><h3 id="good-and-bad" tabindex="-1"><a class="header-anchor" href="#good-and-bad" aria-hidden="true">#</a> GOOD and BAD</h3><ul><li><strong>always / must</strong>: This is <strong><em>mandatory</em></strong>. <em>Seriously</em></li><li><strong>never / must not</strong>: Don&#39;t <strong><em>ever</em></strong> do this. Seriously.</li></ul><h3 id="ok" tabindex="-1"><a class="header-anchor" href="#ok" aria-hidden="true">#</a> OK</h3><ul><li><strong>should</strong>: <strong><em>Try to</em></strong> do this. It is encouraged but not strictly enforced.</li><li><strong>should not</strong>: <strong><em>Try not to</em></strong> do this. It is discouraged but not prohibited.</li></ul><h2 id="ground-rules" tabindex="-1"><a class="header-anchor" href="#ground-rules" aria-hidden="true">#</a> Ground Rules</h2><ul><li><strong>RULE</strong>: <strong>Always</strong> 2-space soft indents (no tabs)</li><li><strong>RULE</strong>: <strong>Always</strong> semicolons (with <a href="#semicolons">one exception</a>).</li><li><strong>RULE</strong>: <strong>Never use comma first</strong></li><li><strong>RULE</strong>: <strong>Never use</strong> <code>()</code> around statements like <code>typeof</code> or <code>delete</code>.</li></ul><h2 id="semicolons" tabindex="-1"><a class="header-anchor" href="#semicolons" aria-hidden="true">#</a> Semicolons</h2><ul><li><strong>RULE</strong>: Semicolons <code>;</code> <strong>must</strong> be added at the end of every statement, <strong>except</strong> when the next character is a closing bracket <code>}</code>. In that case, they may be omitted.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a <span class="token operator">*</span> <span class="token number">2</span> <span class="token punctuation">}</span>   <span class="token comment">// No \`;\` here.</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="braces" tabindex="-1"><a class="header-anchor" href="#braces" aria-hidden="true">#</a> Braces</h2><ul><li><strong>RULE</strong>: Braces <strong>must</strong> be used in all circumstances. They <strong>may</strong> be used on a single line around simple statements.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    i <span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
  <span class="token comment">//...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Opening Braces <strong>must never</strong> be on a line of their own.</li><li><strong>Rule</strong>: Closing braces <strong>must never</strong> be followed by a conditional statement</li></ul><blockquote><p>Vertical screen space is precious, and ease of scanning code is more previous.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Closing Braces <strong>must always</strong> be on a line of their own unless they also start on that line.</li></ul><blockquote><p>This makes it easy to see the end of a function or statement</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">return</span> callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> bar <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">return</span> callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> bar
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">return</span> callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> bar <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">return</span> callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> bar
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="naming-conventions" tabindex="-1"><a class="header-anchor" href="#naming-conventions" aria-hidden="true">#</a> Naming Conventions</h2><ul><li><strong>RULE</strong>: Avoid single letter names. Be descriptive with your naming.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">function</span> <span class="token function">q</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...stuff...</span>
<span class="token punctuation">}</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ..stuff..</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Use camelCase when naming objects, functions, and instances</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> OBJEcttsssss <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> this_is_my_object <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token keyword">this</span><span class="token operator">-</span>is<span class="token operator">-</span>my<span class="token operator">-</span>object <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">user</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Bob Parr&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> thisIsMyObject <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">thisIsMyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Bob Parr&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Use PascalCase when naming constructors or classes</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// BAD</span>
<span class="token keyword">function</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> options<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> bad <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">user</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;nope&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// GOOD</span>
<span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> options<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> good <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;yup&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Use a leading underscore <code>_</code> when naming private properties</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// BAD</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>__firstName__ <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>firstName_ <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// GOOD</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>_firstName <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Saved references to <code>this</code> (which is a prototypal object) <strong>must</strong> use <code>self</code>.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    self<span class="token punctuation">.</span>ready <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    that<span class="token punctuation">.</span>ready <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Saved references to <code>this</code> (which is an arbitrary scope) <strong>should</strong> use <code>that</code>.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_this<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>that<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Functions <strong>should</strong> be named. This is helpful for stack traces.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// OK</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="variable-declarations" tabindex="-1"><a class="header-anchor" href="#variable-declarations" aria-hidden="true">#</a> Variable declarations</h2><ul><li><strong>RULE</strong>: Variables <strong>must</strong> always be declared, prior to use.</li><li><strong>RULE</strong>: Variable declarations <strong>must</strong> appear at the top of functions, and not inside other blocks. The exception is <em>for</em> loops.</li></ul><blockquote><p>Variable declarations are moved up to the top of the function scope anyway, so that&#39;s where they belong.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> k<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    k <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> k <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Variables <strong>must</strong> always align when they are declared</li></ul><blockquote><p>This makes it easy to scan what is declared in a single block.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> bazz<span class="token punctuation">,</span>
    foo<span class="token punctuation">,</span>
    bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> bazz<span class="token punctuation">,</span>
  foo<span class="token punctuation">,</span>
  bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Declare unassigned variables last.</li></ul><blockquote><p>This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> i<span class="token punctuation">,</span> len<span class="token punctuation">,</span> dragonball<span class="token punctuation">,</span>
    items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> i<span class="token punctuation">,</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    dragonball<span class="token punctuation">,</span>
    goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    len<span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    dragonball<span class="token punctuation">,</span>
    length<span class="token punctuation">,</span>
    i<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Variables <strong>should</strong> always be declared in decreasing length.</li></ul><blockquote><p>This also makes it easier to scan what is declared in a single block (trust me).</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> reallyLongVar<span class="token punctuation">,</span>
    shorterVar<span class="token punctuation">,</span>
    fooBar<span class="token punctuation">,</span>
    foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> fooBar<span class="token punctuation">,</span>
    shorterVar<span class="token punctuation">,</span>
    foo<span class="token punctuation">,</span>
    reallyLongVar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Variable assignments <strong>must</strong> come before declarations.</li><li><strong>RULE</strong>: Variable assignments <strong>should</strong> align <strong>when convenient</strong> depending on additional length.</li></ul><blockquote><p>This also makes it easier to scan what is declared in a single block (trust me).</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> reallyLongVar <span class="token operator">=</span> <span class="token number">10e3</span><span class="token punctuation">,</span>
    shorterVar    <span class="token operator">=</span> <span class="token number">5e2</span><span class="token punctuation">,</span>
    fooBar        <span class="token operator">=</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
    foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// OK</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> reallyLongVar <span class="token operator">=</span> <span class="token number">10e3</span><span class="token punctuation">,</span>
    shorterVar <span class="token operator">=</span> <span class="token number">5e2</span><span class="token punctuation">,</span>
    fooBar <span class="token operator">=</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
    foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> foo<span class="token punctuation">,</span>
    reallyLongVar <span class="token operator">=</span> <span class="token number">10e3</span><span class="token punctuation">,</span>
    shorterVar <span class="token operator">=</span> <span class="token number">5e2</span><span class="token punctuation">,</span>
    fooBar <span class="token operator">=</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Multi-line object literals <strong>must be</strong> assigned outside of multi-line variable declaration blocks.</li></ul><blockquote><p>It&#39;s what god would have wanted.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> obj  <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">expired</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    bazz <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
    foo<span class="token punctuation">,</span>
    bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> bazz <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
    foo<span class="token punctuation">,</span>
    bar<span class="token punctuation">,</span>
    obj<span class="token punctuation">;</span>

obj  <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">expired</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> obj  <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">expired</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
    bazz <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
    foo<span class="token punctuation">,</span>
    bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> bazz <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
    foo<span class="token punctuation">,</span>
    bar<span class="token punctuation">,</span>
    obj <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">expired</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Assignment depending on multi-line functions or multiple functions <strong>must be</strong> assigned outside of multi-line variable declaration blocks.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> memo <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> i <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    bazz <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
    foo<span class="token punctuation">,</span>
    bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> bazz <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
    memo<span class="token punctuation">,</span>
    foo<span class="token punctuation">,</span>
    bar<span class="token punctuation">;</span>

memo <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> memo <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> i <span class="token operator">&lt;</span> <span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    bazz <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
    foo<span class="token punctuation">,</span>
    bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> bazz <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
    foo<span class="token punctuation">,</span>
    bar<span class="token punctuation">,</span>
    memo <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> bazz <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
    foo<span class="token punctuation">,</span>
    bar<span class="token punctuation">,</span>
    memo <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> i <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="objects" tabindex="-1"><a class="header-anchor" href="#objects" aria-hidden="true">#</a> Objects</h2><ul><li><strong>RULE</strong>: Single line object <strong>must</strong> have a trailing space after <code>{</code> and a leading space before <code>}</code>.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Properties in objects <strong>must</strong> be followed by a <code>:</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">bar</span>  <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bazz</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bazz</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span>  <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bazz</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Multi-line assignment statements <strong>inside an object literal</strong> are <strong>encouraged.</strong></li></ul><blockquote><p>Reduces the number of variables managed and object creation is cheap.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foos</span><span class="token operator">:</span> list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> i<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bars</span><span class="token operator">:</span> list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> i<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Use the literal syntax for object creation.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> item <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,125),u={href:"https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Reserved_Words",target:"_blank",rel:"noopener noreferrer"},d=n("em",null,"it is valid Javascript.",-1),v=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// OK</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> superman <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;superhero&#39;</span><span class="token punctuation">,</span>
 <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">clark</span><span class="token operator">:</span> <span class="token string">&#39;kent&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token keyword">private</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="arrays" tabindex="-1"><a class="header-anchor" href="#arrays" aria-hidden="true">#</a> Arrays</h2><ul><li><strong>RULE</strong>: Use the literal syntax for array creation</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// GOOD</span>
<span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: If you don&#39;t know array length use Array#push.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> someStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
someStack<span class="token punctuation">[</span>someStack<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;abracadabra&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
someStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;abracadabra&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,9),k=n("strong",null,"RULE",-1),m={href:"http://jsperf.com/converting-arguments-to-an-array/7",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> len <span class="token operator">=</span> items<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
    itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    i<span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  itemsCopy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
itemsCopy <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="strings" tabindex="-1"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> Strings</h2><ul><li><strong>RULE</strong>: Use single quotes <code>&#39;&#39;</code> for strings</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;Bob Parr&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;Bob Parr&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> fullName <span class="token operator">=</span> <span class="token string">&quot;Bob &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> fullName <span class="token operator">=</span> <span class="token string">&#39;Bob &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Strings longer than 80 characters should be written across multiple lines using string concatenation.</li></ul>`,7),g={href:"http://jsperf.com/ya-string-concat",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/airbnb/javascript/issues/40",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> errorMessage <span class="token operator">=</span> <span class="token string">&#39;This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> errorMessage <span class="token operator">=</span> <span class="token string">&#39;This is a super long error that \\
was thrown because of Batman. \\
When you stop to think about \\
how Batman had anything to do \\
with this, you would get nowhere \\
fast.&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> errorMessage <span class="token operator">=</span> <span class="token string">&#39;This is a super long error that &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;was thrown because of Batman.&#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;When you stop to think about &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;how Batman had anything to do &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;with this, you would get nowhere &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;fast.&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> errorMessage <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;This is a super long error that &#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;was thrown because of Batman.&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;When you stop to think about&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;how Batman had anything to do&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;with this, you would get nowhere&#39;</span>
  <span class="token string">&#39;fast.&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,2),y=n("strong",null,"RULE",-1),w={href:"http://jsperf.com/string-vs-array-concat/2",target:"_blank",rel:"noopener noreferrer"},j=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> items<span class="token punctuation">,</span>
    messages<span class="token punctuation">,</span>
    length<span class="token punctuation">,</span>
    i<span class="token punctuation">;</span>

messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;This one worked.&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;This one worked as well.&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;This one did not work.&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

length <span class="token operator">=</span> messages<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">function</span> <span class="token function">inbox</span><span class="token punctuation">(</span><span class="token parameter">messages</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  items <span class="token operator">=</span> <span class="token string">&#39;&lt;ul&gt;&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    items <span class="token operator">+=</span> <span class="token string">&#39;&lt;li&gt;&#39;</span> <span class="token operator">+</span> messages<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>message <span class="token operator">+</span> <span class="token string">&#39;&lt;/li&gt;&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> items <span class="token operator">+</span> <span class="token string">&#39;&lt;/ul&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">function</span> <span class="token function">inbox</span><span class="token punctuation">(</span><span class="token parameter">messages</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    items<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> messages<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>message<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token string">&#39;&lt;ul&gt;&lt;li&gt;&#39;</span> <span class="token operator">+</span> items<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;/li&gt;&lt;li&gt;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&lt;/li&gt;&lt;/ul&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="code-comments" tabindex="-1"><a class="header-anchor" href="#code-comments" aria-hidden="true">#</a> Code Comments</h2><ul><li><strong>RULE</strong>: You <strong>should not</strong> use JSDoc.</li><li><strong>RULE</strong>: Block comments <strong>should only</strong> be used in file headers.</li><li><strong>RULE</strong>: You <strong>should not</strong> use single-line block comments</li><li><strong>RULE</strong>: Put an emptyline before a comment.</li></ul><blockquote><p>Having appropriate space in your code comments makes writing complex code easier to read. It&#39;s the &quot;almost literate coding&quot; approach.</p></blockquote><ul><li><strong>REMARK</strong>: JSDoc should be considered <strong>deprecated.</strong> When time is available to improve the <code>docco</code>-style comments we have historically used we will replace it all together.</li></ul><h3 id="good" tabindex="-1"><a class="header-anchor" href="#good" aria-hidden="true">#</a> GOOD</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * a-js-file.js: This is some file
 *
 * (C) 2013 Whomever
 * MIT LICENSE
 *
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// ### function myFunction (a, b, c)</span>
<span class="token comment">// #### @a {string} A variable</span>
<span class="token comment">// #### @b {boolean} Another variable</span>
<span class="token comment">// #### @c {object|Array} An object or an array</span>
<span class="token comment">//</span>
<span class="token comment">// This is the description to my function.</span>
<span class="token comment">//</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// Adding additional padding in your code comments</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// Along with additional whitespace</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Makes your code easier to read.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;What are you running out of bytes?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ok-1" tabindex="-1"><a class="header-anchor" href="#ok-1" aria-hidden="true">#</a> OK</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// One line comments</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// and no whitespace</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;make your code harder to read&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;seriously.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * I&#39;m using block comments anywhere but the file header.
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Use <code>// FIXME:</code> to annotate problems.</li><li><strong>RULE</strong>: Use <code>// TODO:</code> to annotate solutions to problems.</li><li><strong>RULE</strong>: Use <code>// REMARK:</code> to annotate possible annotations or open implementation questions (which are not obvious problems).</li><li><strong>RULE</strong>: Sign these comments with your Github username.</li></ul><h3 id="good-1" tabindex="-1"><a class="header-anchor" href="#good-1" aria-hidden="true">#</a> GOOD</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// FIXME (index zero): shouldn&#39;t use a global here</span>
  total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// TODO (indexzero): total should be configurable by an options param</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bad" tabindex="-1"><a class="header-anchor" href="#bad" aria-hidden="true">#</a> BAD</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// shouldn&#39;t use a global here</span>
  total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// TODO: total should be configurable by an options param</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h2><ul><li><strong>RULE</strong>: Assign methods to the prototype object. You <strong>must never</strong> overwrite the prototype with a new object completely.</li></ul><blockquote><p>Overwriting the prototype makes inheritance impossible: by resetting the prototype you&#39;ll overwrite the base!</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;new jedi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">fight</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fighting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">block</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;blocking&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">fight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fighting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">block</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;blocking&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Methods can return <code>this</code> to help with method chaining.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// OK</span>
<span class="token comment">//</span>
<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">jump</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>jumping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setHeight</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> luke <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
luke<span class="token punctuation">.</span><span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; true</span>
luke<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; undefined</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">jump</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>jumping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setHeight</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> luke <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

luke<span class="token punctuation">.</span><span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: It&#39;s okay to write a custom toString() method, just make sure it works successfully and causes no side effects.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Jedi</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  options <span class="token operator">||</span> <span class="token punctuation">(</span>options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> options<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&#39;no name&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Jedi - &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="control-flow" tabindex="-1"><a class="header-anchor" href="#control-flow" aria-hidden="true">#</a> Control-flow</h2><ul><li><strong>RULE</strong>: Control-flow statements, such as <code>if</code>, <code>while</code> and <code>for</code> <strong>must</strong> have a space between the keyword and the left parenthesis.</li></ul><blockquote><p>They aren&#39;t functions, and thus better distinguished like this.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Eager returns <strong>must be</strong> preferred over <code>if else</code> blocks.</li></ul><blockquote><p>Eager returns simplifies most control-flow, especially more complex and high-level control-flow.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h2><ul><li><strong>RULE</strong>: Anonymous functions <strong>must</strong> have a space between the <code>function</code> keyword and the left parenthesis.</li></ul><blockquote><p>To emphasise the lack of identifier and differentiate them with named functions.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Named functions <strong>must not</strong> have a space between the function name and the left parenthesis.</li><li><strong>RULE</strong>: Function calls <strong>must not</strong> have a space between the function name and the left parenthesis.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="conditionals" tabindex="-1"><a class="header-anchor" href="#conditionals" aria-hidden="true">#</a> Conditionals</h2><ul><li><strong>RULE</strong>: Multi-line conditional statements <strong>must</strong> be properly indented.</li><li><strong>RULE</strong>: Newlines in multi-line conditional statements <strong>must</strong> be be followed by a boolean operator or <code>(</code>.</li><li><strong>RULE</strong>: Conditional <strong>should not</strong> contain complex logic.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>something <span class="token operator">===</span> <span class="token string">&#39;foo&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>somethingElse <span class="token operator">===</span> <span class="token string">&#39;bar&#39;</span>
    <span class="token operator">&amp;&amp;</span> ohYeahThisToo <span class="token operator">===</span> <span class="token string">&#39;bazz&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>something <span class="token operator">===</span> <span class="token string">&#39;foo&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>somethingElse <span class="token operator">===</span> <span class="token string">&#39;bar&#39;</span> <span class="token operator">&amp;&amp;</span>
ohYeahThisToo <span class="token operator">===</span> <span class="token string">&#39;bazz&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>something <span class="token operator">===</span> <span class="token string">&#39;foo&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>somethingElse <span class="token operator">===</span> <span class="token string">&#39;bar&#39;</span> <span class="token operator">&amp;&amp;</span>
    ohYeahThisToo <span class="token operator">===</span> <span class="token string">&#39;bazz&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// OK</span>
<span class="token comment">//</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> i<span class="token punctuation">.</span>ok <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="type-casting-coercion" tabindex="-1"><a class="header-anchor" href="#type-casting-coercion" aria-hidden="true">#</a> Type Casting &amp; Coercion</h2><ul><li><strong>RULE</strong>: Perform type coercion at the beginning of the statement.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  =&gt; this.reviewScore = 9;</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> totalScore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> totalScore <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore<span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> totalScore <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore <span class="token operator">+</span> <span class="token string">&#39; total score&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> totalScore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore <span class="token operator">+</span> <span class="token string">&#39; total score&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Use <code>parseInt</code> for Numbers and always with a radix for type casting.</li></ul>`,66),x=n("code",null,"parseInt",-1),O={href:"http://jsperf.com/coercion-vs-casting/3",target:"_blank",rel:"noopener noreferrer"},D=t(`<p><strong>Numbers</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> inputValue <span class="token operator">=</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// OK</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token operator">+</span>inputValue<span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> inputValue <span class="token operator">&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>

<span class="token comment">//</span>
<span class="token comment">// parseInt was the reason my code was slow.</span>
<span class="token comment">// Bitshifting the String to coerce it to a</span>
<span class="token comment">// Number made it a lot faster.</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> inputValue <span class="token operator">&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Booleans</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> hasAge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> hasAge <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> hasAge <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>age<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="ternary-operators" tabindex="-1"><a class="header-anchor" href="#ternary-operators" aria-hidden="true">#</a> Ternary operators</h2><ul><li><strong>RULE</strong>: Ternary operators are OK, but <strong>must never be combined</strong>.</li></ul><blockquote><p>More than one and it&#39;s spaghetti.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
    x <span class="token operator">=</span> i <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">?</span> i <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
    j <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>
    x <span class="token operator">=</span> i <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">?</span> j <span class="token operator">&gt;</span> <span class="token number">4</span> <span class="token operator">?</span> j <span class="token operator">:</span> i <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Multi-line Ternary operators are OK, but <strong>must be single line statements.</strong>.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">//</span>
  <span class="token comment">// GOOD</span>
  <span class="token comment">//</span>
  <span class="token keyword">return</span> foo
    <span class="token operator">?</span> foo <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token operator">:</span> bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">//</span>
  <span class="token comment">// GOOD</span>
  <span class="token comment">//</span>
  <span class="token keyword">return</span> foo <span class="token operator">?</span> foo <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">//</span>
  <span class="token comment">// GOOD</span>
  <span class="token comment">//</span>
  <span class="token keyword">return</span> foo
    <span class="token operator">?</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> foo <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span>
    <span class="token operator">:</span> bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">//</span>
  <span class="token comment">// GOOD</span>
  <span class="token comment">//</span>
  <span class="token keyword">return</span> err
    <span class="token operator">?</span> <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">//</span>
  <span class="token comment">// BAD</span>
  <span class="token comment">//</span>
  <span class="token keyword">return</span> foo <span class="token operator">?</span>
    foo <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span>
    bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">//</span>
  <span class="token comment">// BAD</span>
  <span class="token comment">//</span>
  <span class="token keyword">return</span> foo
    <span class="token operator">?</span> foo <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span>
    bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">//</span>
  <span class="token comment">// BAD</span>
  <span class="token comment">//</span>
  <span class="token keyword">return</span> foo
    <span class="token operator">?</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">wtf</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> foo <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// No multi-line return values!</span>
    <span class="token punctuation">}</span>
    <span class="token operator">:</span> bar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: Ternary operators combined with <code>return</code> <strong>should be</strong> preferred over <code>if (err) { return }</code> blocks.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">//</span>
  <span class="token comment">// OK</span>
  <span class="token comment">//</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">//</span>
  <span class="token comment">// GOOD</span>
  <span class="token comment">//</span>
  <span class="token keyword">return</span> err
    <span class="token operator">?</span> <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2>`,25),B=n("strong",null,"RULE",-1),A=n("strong",null,"must always",-1),E={href:"http://www.devthought.com/2011/12/22/a-string-is-not-an-error/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/flatiron/errs",target:"_blank",rel:"noopener noreferrer"},U=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;I have a call-stack and other good things.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;I have a call-stack and other good things.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">throw</span> <span class="token string">&#39;I have no call-stack no interesting properties.&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token function">callback</span><span class="token punctuation">(</span><span class="token string">&#39;I have no call-stack no interesting properties.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">throw</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;I have no call-stack no interesting properties.&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;I have no call-stack no interesting properties.&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="exports" tabindex="-1"><a class="header-anchor" href="#exports" aria-hidden="true">#</a> Exports</h2><ul><li><strong>RULE</strong>: If you are exporting something, it <strong>should</strong> be exported on the same line as the declaration.</li></ul><blockquote><p>Makes it easier to understand what the exports are immediately in the same context.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> Foo <span class="token operator">=</span> exports<span class="token punctuation">.</span><span class="token function-variable function">Foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> <span class="token function-variable function">Foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//</span>
<span class="token comment">// Lots of other code changing my mental context</span>
<span class="token comment">// by the time I see Foo again I forgot what it was.</span>
<span class="token comment">//</span>

exports<span class="token punctuation">.</span>Foo <span class="token operator">=</span> Foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h2 id="async-programming" tabindex="-1"><a class="header-anchor" href="#async-programming" aria-hidden="true">#</a> Async Programming</h2>`,14),R=n("li",null,[n("strong",null,"RULE"),s(": You "),n("strong",null,"must not"),s(" use promises.")],-1),L=n("strong",null,"RULE",-1),G=n("strong",null,"must",-1),q={href:"https://github.com/caolan/async",target:"_blank",rel:"noopener noreferrer"},T=t(`<blockquote><p>Just use async. If you love promises then sorry; this decision is final and <em>not up for debate</em> <strong><em>â€¦ ever.</em></strong></p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// GOOD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> async <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;async&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// BAD</span>
<span class="token comment">//</span>
<span class="token keyword">var</span> <span class="token constant">Q</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;q&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><strong>RULE</strong>: A given function <strong>must not</strong> have more than <strong>three</strong> callback functions.</li></ul><blockquote><p>Rule of three. What? It works in fairy tales.</p></blockquote><blockquote><p>INSERT CODE EXAMPLES HERE</p></blockquote><ul><li><strong>RULE</strong>: Named functions <strong>should</strong> be preferred over anonymous inline functions.</li></ul><p><strong><a href="#table-of-contents">[â¬†]</a></strong></p><h3 id="attribution-with-modifications-and-additions" tabindex="-1"><a class="header-anchor" href="#attribution-with-modifications-and-additions" aria-hidden="true">#</a> Attribution (with modifications and additions)</h3>`,10),S={href:"https://github.com/cloudhead/styleguide/blob/master/JavaScript.md",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"};function z(C,V){const a=c("ExternalLinkIcon");return o(),i("div",null,[r,n("ul",null,[n("li",null,[s("Using "),n("a",u,[s("reserved words"),e(a)]),s(" is fine as "),d])]),v,n("ul",null,[n("li",null,[k,s(": When you need to copy an array use Array#slice. "),n("a",m,[s("jsPerf"),e(a)])])]),b,n("blockquote",null,[n("p",null,[s("If overused, long strings with concatenation could impact performance. "),n("a",g,[s("jsPerf"),e(a)]),s(" & "),n("a",h,[s("Discussion"),e(a)])])]),f,n("ul",null,[n("li",null,[y,s(": When programatically building up a string, use Array#join instead of string concatenation. Mostly for IE: "),n("a",w,[s("jsPerf"),e(a)]),s(".")])]),j,n("blockquote",null,[n("p",null,[s("If for whatever reason you are doing something wild and "),x,s(" is your bottleneck and need to use Bitshift for "),n("a",O,[s("performance reasons"),e(a)]),s(", leave a comment explaining why and what you're doing.")])]),D,n("ul",null,[n("li",null,[B,s(": You "),A,s(" throw or return an error. "),n("a",E,[s("A string is not an Error"),e(a)]),s(".")])]),n("blockquote",null,[n("p",null,[s("If you want more descriptive Errors, use "),n("a",_,[s("errs"),e(a)]),s(".")])]),U,n("ul",null,[R,n("li",null,[L,s(": You "),G,s(" use "),n("a",q,[s("async"),e(a)]),s(".")])]),T,n("ul",null,[n("li",null,[n("a",S,[s("https://github.com/cloudhead/styleguide/blob/master/JavaScript.md"),e(a)])]),n("li",null,[n("a",I,[s("https://github.com/airbnb/javascript"),e(a)])])])])}const J=p(l,[["render",z],["__file","index.html.vue"]]);export{J as default};
