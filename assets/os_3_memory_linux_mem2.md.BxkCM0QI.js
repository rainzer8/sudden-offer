import{c as n,Q as a,j as e,m as p}from"./chunks/framework.BPKcPtvA.js";const b=JSON.parse('{"title":"深入理解 Linux 虚拟内存管理","description":"","frontmatter":{},"headers":[],"relativePath":"os/3_memory/linux_mem2.md","filePath":"os/3_memory/linux_mem2.md","lastUpdated":1779806814000}'),l={name:"os/3_memory/linux_mem2.md"};function i(r,s,c,t,m,o){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="深入理解-linux-虚拟内存管理" tabindex="-1">深入理解 Linux 虚拟内存管理 <a class="header-anchor" href="#深入理解-linux-虚拟内存管理" aria-label="Permalink to &quot;深入理解 Linux 虚拟内存管理&quot;">​</a></h1><blockquote><p>从内核视角理解虚拟内存的分配、映射与回收机制。</p></blockquote><hr><h2 id="🗺️-进程虚拟地址空间布局" tabindex="-1">🗺️ 进程虚拟地址空间布局 <a class="header-anchor" href="#🗺️-进程虚拟地址空间布局" aria-label="Permalink to &quot;🗺️ 进程虚拟地址空间布局&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>高地址</span></span>
<span class="line"><span>┌─────────────┐</span></span>
<span class="line"><span>│  内核空间     │</span></span>
<span class="line"><span>├─────────────┤</span></span>
<span class="line"><span>│  栈          │  ← 向下增长</span></span>
<span class="line"><span>│  ...        │</span></span>
<span class="line"><span>│  内存映射区   │</span></span>
<span class="line"><span>│  ...        │</span></span>
<span class="line"><span>│  堆          │  ← 向上增长</span></span>
<span class="line"><span>│  BSS 段      │</span></span>
<span class="line"><span>│  数据段       │</span></span>
<span class="line"><span>│  代码段       │</span></span>
<span class="line"><span>└─────────────┘</span></span>
<span class="line"><span>低地址</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr><blockquote><p>📖 更多内存管理内容：<a href="/os/3_memory/vmem.html">操作系统内存管理</a></p></blockquote>`,7)])])}const d=n(l,[["render",i]]);export{b as __pageData,d as default};
