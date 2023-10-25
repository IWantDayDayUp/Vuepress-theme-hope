const s=JSON.parse('{"key":"v-5e25e0c4","path":"/posts/Algorithm/Codeforces/722-div1.html","title":"722 (Div. 1)","lang":"en-US","frontmatter":{"title":"722 (Div. 1)","icon":"pen-to-square","date":"2022-06-28T00:00:00.000Z","category":["Codeforces"],"tag":["tree dp"],"description":"1. 题目 https://codeforces.com/contest/1528/problem/A 有一棵包含 nnn 个节点的树, 每个节点 vvv 的值存在一个取值范围: [lv,rv][l_v, r_v][lv​,rv​]","head":[["meta",{"property":"og:url","content":"https://iwantdaydayup.github.io/Vuepress-theme-hope/Vuepress-theme-hope/posts/Algorithm/Codeforces/722-div1.html"}],["meta",{"property":"og:site_name","content":"TayLock"}],["meta",{"property":"og:title","content":"722 (Div. 1)"}],["meta",{"property":"og:description","content":"1. 题目 https://codeforces.com/contest/1528/problem/A 有一棵包含 nnn 个节点的树, 每个节点 vvv 的值存在一个取值范围: [lv,rv][l_v, r_v][lv​,rv​]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-25T07:41:14.000Z"}],["meta",{"property":"article:author","content":"TayLock"}],["meta",{"property":"article:tag","content":"tree dp"}],["meta",{"property":"article:published_time","content":"2022-06-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-25T07:41:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"722 (Div. 1)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-25T07:41:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TayLock\\",\\"url\\":\\"https://github.com/IWantDayDayUp\\"}]}"]]},"headers":[{"level":2,"title":"1. 题目","slug":"_1-题目","link":"#_1-题目","children":[]},{"level":2,"title":"2. 思路","slug":"_2-思路","link":"#_2-思路","children":[]},{"level":2,"title":"3. code","slug":"_3-code","link":"#_3-code","children":[]}],"git":{"createdTime":1698219674000,"updatedTime":1698219674000,"contributors":[{"name":"再也不敢","email":"1462959616@qq.com","commits":1}]},"readingTime":{"minutes":1.7,"words":509},"filePathRelative":"posts/Algorithm/Codeforces/722-div1.md","localizedDate":"June 28, 2022","excerpt":"<h2> 1. 题目</h2>\\n<p><a href=\\"https://codeforces.com/contest/1528/problem/A\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://codeforces.com/contest/1528/problem/A</a></p>\\n<p>有一棵包含 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\\"application/x-tex\\">n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">n</span></span></span></span> 个节点的树, 每个节点 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>v</mi></mrow><annotation encoding=\\"application/x-tex\\">v</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">v</span></span></span></span> 的值存在一个取值范围: <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mo stretchy=\\"false\\">[</mo><msub><mi>l</mi><mi>v</mi></msub><mo separator=\\"true\\">,</mo><msub><mi>r</mi><mi>v</mi></msub><mo stretchy=\\"false\\">]</mo></mrow><annotation encoding=\\"application/x-tex\\">[l_v, r_v]</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">[</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.01968em;\\">l</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.1514em;\\"><span style=\\"top:-2.55em;margin-left:-0.0197em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.03588em;\\">v</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02778em;\\">r</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.1514em;\\"><span style=\\"top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.03588em;\\">v</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mclose\\">]</span></span></span></span></p>","autoDesc":true}');export{s as data};
