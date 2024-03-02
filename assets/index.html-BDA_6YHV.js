import{_ as l,r as p,o as i,c as o,a as n,b as e,d as a,e as t}from"./app-CF-kiATc.js";const c={},r=n("h1",{id:"v-idle",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#v-idle"},[n("span",null,"v-idle")])],-1),u={href:"https://codecov.io/gh/malekim/v-idle",target:"_blank",rel:"noopener noreferrer"},d=n("img",{src:"https://codecov.io/gh/malekim/v-idle/branch/master/graph/badge.svg",alt:"codecov"},null,-1),v=t(`<p>V-idle is a universal Vue plugin compatible with Vue 2 and Vue 3 to detect idle/non-active users.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><p>The plugin can be installed by npm, yarn or pnpm. Alternatively it can be used through jsdelivr CDN.</p><h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm"><span>NPM</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> v-idle <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn"><span>Yarn</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> v-idle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm"><span>PNPM</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> v-idle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="jsdelivr-cdn" tabindex="-1"><a class="header-anchor" href="#jsdelivr-cdn"><span>Jsdelivr CDN</span></a></h3>`,10),m={href:"https://cdn.jsdelivr.net/npm/v-idle@latest/build/vidle.umd.min.js",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"basic-usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#basic-usage"},[n("span",null,"Basic usage")])],-1),h=n("p",null,"From 1.0.0 version the plugin supports vue 2 and vue 3 with the help of vue-demi package.",-1),b=n("p",null,[a("Starting with this version, the plugin no longer requires installation via "),n("code",null,"Vue.use()"),a(". Simply import the 'Vidle' component where needed.")],-1),g=n("h3",{id:"vue-2-6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-2-6"},[n("span",null,"Vue 2.6+")])],-1),f={href:"https://github.com/vuejs/composition-api",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> VueCompositionAPI <span class="token keyword">from</span> <span class="token string">&#39;@vue/composition-api&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueCompositionAPI<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/composition-api&#39;</span>
<span class="token keyword">import</span> Vidle <span class="token keyword">from</span> <span class="token string">&#39;v-idle&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Vidle<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-2-7-2" tabindex="-1"><a class="header-anchor" href="#vue-2-7-2"><span>Vue 2.7.2</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vidle <span class="token keyword">from</span> <span class="token string">&#39;v-idle&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Vidle<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-3" tabindex="-1"><a class="header-anchor" href="#vue-3"><span>Vue 3</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vidle <span class="token keyword">from</span> <span class="token string">&#39;v-idle&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Vidle<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="component" tabindex="-1"><a class="header-anchor" href="#component"><span>Component</span></a></h2><p>Inside template use v-idle component:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Vidle</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It will show timer counting down from 05:00 by default.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="idle" tabindex="-1"><a class="header-anchor" href="#idle"><span>@idle</span></a></h3><p>Type: Function</p><p>Default: none</p><p>Executes when the timer reaches 00:00</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Vidle</span> <span class="token attr-name">@idle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onidle<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="remind" tabindex="-1"><a class="header-anchor" href="#remind"><span>@remind</span></a></h3><p>Type: Function</p><p>Default: none</p><p>Executes when the timer reaches time in seconds before 00:00</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Vidle</span>
  <span class="token attr-name">@remind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onremind<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:reminders</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[5, 10, 20, 60]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="refresh" tabindex="-1"><a class="header-anchor" href="#refresh"><span>@refresh</span></a></h3><p>Type: Function</p><p>Argument: object with type of event (for example &#39;mousemove&#39;) and key (if timer was refreshed with keyboard)</p><p>Default: none</p><p>Executes when activity is detected</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Vidle</span> <span class="token attr-name">@refresh</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onrefresh<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onrefresh</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> string
      <span class="token literal-property property">key</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;keydown&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>key <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">&#39;Escape&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Escape clicked&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reminders" tabindex="-1"><a class="header-anchor" href="#reminders"><span>reminders</span></a></h3><p>Type: Array</p><p>Default: empty array</p><p>Array with seconds. Each value will execute @remind</p><h3 id="loop" tabindex="-1"><a class="header-anchor" href="#loop"><span>loop</span></a></h3><p>Type: Boolean</p><p>Default: false</p><p>If set to true, timer will start execution again after 00:00</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Vidle</span> <span class="token attr-name">:loop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="synckey" tabindex="-1"><a class="header-anchor" href="#synckey"><span>syncKey</span></a></h3><p>Type: String</p><p>Default: &#39;&#39;</p><p>Setting <code>syncKey</code> to a non-empty string activates the propagation of the <code>refresh</code> event across all browser tabs and windows for component instances sharing the same <code>syncKey</code>.</p><p>However, it&#39;s important to note that while the <code>refresh</code> event is synchronized, the internal timer associated with each component instance continues to count independently from the moment when the component is mounted in each tab or window. In fact, the first <code>refresh</code> event will reset timer in all the component instances.</p><p>The synchronization feature is implemented using the browser&#39;s BroadcastChannel API, which is supported by all major browsers. For environments where BroadcastChannel is not supported, such as in some older browsers, consider integrating a polyfill to ensure compatibility.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Vidle</span> <span class="token attr-name">syncKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>key-to-sync-between-tabs-and-windows<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>events</span></a></h3><p>Type: Array</p><p>Default: [&#39;mousemove&#39;, &#39;keypress&#39;]</p><p>Each event will break countdown.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Vidle</span> <span class="token attr-name">:events</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;mousemove&#39;]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="wait" tabindex="-1"><a class="header-anchor" href="#wait"><span>wait</span></a></h3><p>Type: Number</p><p>Default: 0</p><p>How many second to wait before starting countdown.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Vidle</span> <span class="token attr-name">:wait</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="duration" tabindex="-1"><a class="header-anchor" href="#duration"><span>duration</span></a></h3><p>Type: Number</p><p>Default: 60 * 5</p><p>Should be in seconds, default value is 60 * 5 seconds, so 5 minutes.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Vidle</span> <span class="token attr-name">:duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Create a timer for 300 seconds (5 minutes) with loop, remind 10 and 15 second before 00:00 with function onremind(), wait 5 seconds before showing user the timer, execute function onidle() when the timer reaches 00:00.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Vidle</span>
  <span class="token attr-name">@idle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onidle<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@remind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onremind<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:loop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:reminders</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[10, 15]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:wait</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onidle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;You have been logged out&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onremind</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// alert seconds remaining to 00:00</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tests" tabindex="-1"><a class="header-anchor" href="#tests"><span>Tests</span></a></h2><p>To run tests type:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> run <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To run particular test type:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> run <span class="token builtin class-name">test</span> -- <span class="token parameter variable">-t</span> <span class="token string">&quot;test_name&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="roadmap" tabindex="-1"><a class="header-anchor" href="#roadmap"><span>Roadmap</span></a></h2><ul><li>Add option to show seconds timer instead of clock timer</li></ul><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>License</span></a></h2>`,71),w=n("code",null,"v-idle",-1),x={href:"https://github.com/malekim/v-idle/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"};function q(_,V){const s=p("ExternalLinkIcon");return i(),o("div",null,[r,n("p",null,[n("a",u,[d,e(s)])]),v,n("p",null,[a("Latest version of the plugin is available here: "),n("a",m,[a("https://cdn.jsdelivr.net/npm/v-idle@latest/build/vidle.umd.min.js"),e(s)])]),k,h,b,g,n("p",null,[a("For Vue 2.6+, ensure you have the "),n("a",f,[a("@vue/composition-api"),e(s)]),a(" installed.")]),y,n("p",null,[w,a(" uses the MIT License (MIT). Please see the "),n("a",x,[a("license file"),e(s)]),a(" for more information.")])])}const T=l(c,[["render",q],["__file","index.html.vue"]]),C=JSON.parse('{"path":"/docs/","title":"v-idle","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[{"level":3,"title":"NPM","slug":"npm","link":"#npm","children":[]},{"level":3,"title":"Yarn","slug":"yarn","link":"#yarn","children":[]},{"level":3,"title":"PNPM","slug":"pnpm","link":"#pnpm","children":[]},{"level":3,"title":"Jsdelivr CDN","slug":"jsdelivr-cdn","link":"#jsdelivr-cdn","children":[]}]},{"level":2,"title":"Basic usage","slug":"basic-usage","link":"#basic-usage","children":[{"level":3,"title":"Vue 2.6+","slug":"vue-2-6","link":"#vue-2-6","children":[]},{"level":3,"title":"Vue 2.7.2","slug":"vue-2-7-2","link":"#vue-2-7-2","children":[]},{"level":3,"title":"Vue 3","slug":"vue-3","link":"#vue-3","children":[]}]},{"level":2,"title":"Component","slug":"component","link":"#component","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"@idle","slug":"idle","link":"#idle","children":[]},{"level":3,"title":"@remind","slug":"remind","link":"#remind","children":[]},{"level":3,"title":"@refresh","slug":"refresh","link":"#refresh","children":[]},{"level":3,"title":"reminders","slug":"reminders","link":"#reminders","children":[]},{"level":3,"title":"loop","slug":"loop","link":"#loop","children":[]},{"level":3,"title":"syncKey","slug":"synckey","link":"#synckey","children":[]},{"level":3,"title":"events","slug":"events","link":"#events","children":[]},{"level":3,"title":"wait","slug":"wait","link":"#wait","children":[]},{"level":3,"title":"duration","slug":"duration","link":"#duration","children":[]}]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Tests","slug":"tests","link":"#tests","children":[]},{"level":2,"title":"Roadmap","slug":"roadmap","link":"#roadmap","children":[]},{"level":2,"title":"License","slug":"license","link":"#license","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"docs/README.md"}');export{T as comp,C as data};