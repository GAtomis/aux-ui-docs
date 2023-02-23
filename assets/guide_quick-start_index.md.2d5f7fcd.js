import{_ as s,c as n,o as a,e as l}from"./app.4c3fa5d8.js";const y=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"完整引入","slug":"完整引入","link":"#完整引入","children":[]},{"level":2,"title":"组件手动按需加载","slug":"组件手动按需加载","link":"#组件手动按需加载","children":[]},{"level":2,"title":"跳转到组件","slug":"跳转到组件","link":"#跳转到组件","children":[]}],"relativePath":"guide/quick-start/index.md"}'),p={name:"guide/quick-start/index.md"},e=l(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-hidden="true">#</a></h1><p>本次内容是基于上一章包管理工具安装后来进行使用。</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-hidden="true">#</a></h2><p>分以下两种用法使用aux-ui组件</p><h2 id="完整引入" tabindex="-1">完整引入 <a class="header-anchor" href="#完整引入" aria-hidden="true">#</a></h2><blockquote><p>完整引入后,所有组件都会自动注册到项目中,不用像手动按需加载,去注册模块使用</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ui from &quot;aux-ui&quot;/组件</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;aux-ui/build/style.css&quot; //组件样式</span></span>
<span class="line"><span style="color:#A6ACCD;">createApp(App).use(ui).mount(&#39;#app&#39;)//挂在组件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">main.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="组件手动按需加载" tabindex="-1">组件手动按需加载 <a class="header-anchor" href="#组件手动按需加载" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在vue3.2中SFC语法定义setup标签中加载组件</p></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;aux-noble-button&gt;button&lt;/aux-noble-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { computed, ref } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {AuxNobleButton} from &#39;aux-ui&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在vue3 setup函数使用组件</p></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;aux-noble-button&gt;button&lt;/aux-noble-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { defineComponent, ref } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {AuxNobleButton} from &#39;aux-ui&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineComponent({</span></span>
<span class="line"><span style="color:#A6ACCD;">    components:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    AuxNobleButton:AuxNobleButton</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    setup() {</span></span>
<span class="line"><span style="color:#A6ACCD;">     return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      position: ref([&#39;bottom-start&#39;, &#39;top-start&#39;]),</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="跳转到组件" tabindex="-1"><a href="/aux-ui-docs/components/noble/button/">跳转到组件</a> <a class="header-anchor" href="#跳转到组件" aria-hidden="true">#</a></h2>`,13),t=[e];function o(c,i,r,A,C,u){return a(),n("div",null,t)}const h=s(p,[["render",o]]);export{y as __pageData,h as default};
