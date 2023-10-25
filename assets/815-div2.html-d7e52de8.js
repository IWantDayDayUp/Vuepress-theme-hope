const e=JSON.parse('{"key":"v-782161a2","path":"/posts/Algorithm/Codeforces/815-div2.html","title":"815 (Div. 2)","lang":"en-US","frontmatter":{"title":"815 (Div. 2)","icon":"pen-to-square","date":"2022-08-18T00:00:00.000Z","category":["Codeforces"],"tag":["dp","字典树"],"description":"D1. Xor-Subsequence (easy version) (DP) https://codeforces.com/contest/1720/problem/D1 首先, 上来就是一个 O(n2)O(n^2)O(n2) 的DP, 定义 dp[i]dp[i]dp[i]: 表示前 iii数字可以形成的最长子序列","head":[["meta",{"property":"og:url","content":"https://iwantdaydayup.github.io/Vuepress-theme-hope/Vuepress-theme-hope/posts/Algorithm/Codeforces/815-div2.html"}],["meta",{"property":"og:site_name","content":"TayLock"}],["meta",{"property":"og:title","content":"815 (Div. 2)"}],["meta",{"property":"og:description","content":"D1. Xor-Subsequence (easy version) (DP) https://codeforces.com/contest/1720/problem/D1 首先, 上来就是一个 O(n2)O(n^2)O(n2) 的DP, 定义 dp[i]dp[i]dp[i]: 表示前 iii数字可以形成的最长子序列"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-25T07:41:14.000Z"}],["meta",{"property":"article:author","content":"TayLock"}],["meta",{"property":"article:tag","content":"dp"}],["meta",{"property":"article:tag","content":"字典树"}],["meta",{"property":"article:published_time","content":"2022-08-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-25T07:41:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"815 (Div. 2)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-25T07:41:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TayLock\\",\\"url\\":\\"https://github.com/IWantDayDayUp\\"}]}"]]},"headers":[{"level":2,"title":"D1. Xor-Subsequence (easy version) (DP)","slug":"d1-xor-subsequence-easy-version-dp","link":"#d1-xor-subsequence-easy-version-dp","children":[]},{"level":2,"title":"D2. Xor-Subsequence (hard version) (字典树+DP)","slug":"d2-xor-subsequence-hard-version-字典树-dp","link":"#d2-xor-subsequence-hard-version-字典树-dp","children":[]}],"git":{"createdTime":1698219674000,"updatedTime":1698219674000,"contributors":[{"name":"再也不敢","email":"1462959616@qq.com","commits":1}]},"readingTime":{"minutes":1.08,"words":325},"filePathRelative":"posts/Algorithm/Codeforces/815-div2.md","localizedDate":"August 18, 2022","excerpt":"<h2> D1. Xor-Subsequence (easy version) (DP)</h2>\\n<p><a href=\\"https://codeforces.com/contest/1720/problem/D1\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://codeforces.com/contest/1720/problem/D1</a></p>\\n<p>首先, 上来就是一个 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>O</mi><mo stretchy=\\"false\\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">O(n^2)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02778em;\\">O</span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">n</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span><span class=\\"mclose\\">)</span></span></span></span> 的DP, 定义 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>d</mi><mi>p</mi><mo stretchy=\\"false\\">[</mo><mi>i</mi><mo stretchy=\\"false\\">]</mo></mrow><annotation encoding=\\"application/x-tex\\">dp[i]</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\">d</span><span class=\\"mord mathnormal\\">p</span><span class=\\"mopen\\">[</span><span class=\\"mord mathnormal\\">i</span><span class=\\"mclose\\">]</span></span></span></span>: 表示前 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\\"application/x-tex\\">i</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6595em;\\"></span><span class=\\"mord mathnormal\\">i</span></span></span></span>数字可以形成的最长子序列</p>","autoDesc":true}');export{e as data};