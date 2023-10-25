import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as p}from"./app-5f1d7514.js";const t={},o=p(`<h2 id="e-blackout-2-dsu" tabindex="-1"><a class="header-anchor" href="#e-blackout-2-dsu" aria-hidden="true">#</a> E. Blackout 2 (DSU)</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">DSU</span> <span class="token punctuation">{</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> p<span class="token punctuation">;</span>

    <span class="token function">DSU</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> m<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        a<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>n <span class="token operator">+</span> m<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        b<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>n <span class="token operator">+</span> m<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>n <span class="token operator">+</span> m<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">+</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> <span class="token function">root</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            p<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">root</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> p<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">bool</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">root</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">root</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> <span class="token function">get_a</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token function">root</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> <span class="token function">get_b</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> b<span class="token punctuation">[</span><span class="token function">root</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">to_union</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> px <span class="token operator">=</span> <span class="token function">root</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> py <span class="token operator">=</span> <span class="token function">root</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>

        p<span class="token punctuation">[</span>px<span class="token punctuation">]</span> <span class="token operator">=</span> py<span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>py<span class="token punctuation">]</span> <span class="token operator">+=</span> a<span class="token punctuation">[</span>px<span class="token punctuation">]</span><span class="token punctuation">;</span>
        b<span class="token punctuation">[</span>py<span class="token punctuation">]</span> <span class="token operator">+=</span> b<span class="token punctuation">[</span>px<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ios<span class="token double-colon punctuation">::</span><span class="token function">sync_with_stdio</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cin<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> n<span class="token punctuation">,</span> m<span class="token punctuation">,</span> e<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n <span class="token operator">&gt;&gt;</span> m <span class="token operator">&gt;&gt;</span> e<span class="token punctuation">;</span>

    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">u</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">v</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> e<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cin <span class="token operator">&gt;&gt;</span> u<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;&gt;</span> v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        u<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
        v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> q<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> q<span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">x</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token operator">&gt;</span> <span class="token function">ok</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> q<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cin <span class="token operator">&gt;&gt;</span> x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>

        ok<span class="token punctuation">[</span>x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    DSU <span class="token function">dsu</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> e<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ok<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dsu<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>u<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">int</span> ua <span class="token operator">=</span> dsu<span class="token punctuation">.</span><span class="token function">get_a</span><span class="token punctuation">(</span>u<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> va <span class="token operator">=</span> dsu<span class="token punctuation">.</span><span class="token function">get_a</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">int</span> ub <span class="token operator">=</span> dsu<span class="token punctuation">.</span><span class="token function">get_b</span><span class="token punctuation">(</span>u<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> vb <span class="token operator">=</span> dsu<span class="token punctuation">.</span><span class="token function">get_b</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>ub <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> vb <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    cnt <span class="token operator">+=</span> va<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>ub <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> vb <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    cnt <span class="token operator">+=</span> ua<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                dsu<span class="token punctuation">.</span><span class="token function">to_union</span><span class="token punctuation">(</span>u<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">ans</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> q <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> cnt<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dsu<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>u<span class="token punctuation">[</span>x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> v<span class="token punctuation">[</span>x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">int</span> ua <span class="token operator">=</span> dsu<span class="token punctuation">.</span><span class="token function">get_a</span><span class="token punctuation">(</span>u<span class="token punctuation">[</span>x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> va <span class="token operator">=</span> dsu<span class="token punctuation">.</span><span class="token function">get_a</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span>x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">int</span> ub <span class="token operator">=</span> dsu<span class="token punctuation">.</span><span class="token function">get_b</span><span class="token punctuation">(</span>u<span class="token punctuation">[</span>x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> vb <span class="token operator">=</span> dsu<span class="token punctuation">.</span><span class="token function">get_b</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span>x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>ub <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> vb <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                cnt <span class="token operator">+=</span> va<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>vb <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> ub <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                cnt <span class="token operator">+=</span> ua<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            dsu<span class="token punctuation">.</span><span class="token function">to_union</span><span class="token punctuation">(</span>u<span class="token punctuation">[</span>x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> v<span class="token punctuation">[</span>x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> <span class="token operator">&amp;</span> num <span class="token operator">:</span> ans<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> num <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[o];function e(u,i){return s(),a("div",null,c)}const r=n(t,[["render",e],["__file","abc-264.html.vue"]]);export{r as default};
