const s=JSON.parse('{"key":"v-f0b8776c","path":"/posts/Algorithm/AtCoder/abc-260.html","title":"ABC-260","lang":"en-US","frontmatter":{"title":"ABC-260","icon":"pen-to-square","date":"2022-07-17T00:00:00.000Z","category":["AtCoder"],"tag":["sliding window"],"description":"1. E - 滑动窗口 https://atcoder.jp/contests/abc260/tasks/abc260_e 1.1 Problem Statement 给定整数 MMM 和 NNN 个整数对: (A1,B1),(A2,B2),...,(AN,BN)(A_1, B_1), (A_2, B_2),..., (A_N, B_N)(A1​,B1​),(A2​,B2​),...,(AN​,BN​), 满足: 1≤Ai≤Bi≤M1 \\\\le A_i \\\\le B_i \\\\le M1≤Ai​≤Bi​≤M","head":[["meta",{"property":"og:url","content":"https://iwantdaydayup.github.io/Vuepress-theme-hope/Vuepress-theme-hope/posts/Algorithm/AtCoder/abc-260.html"}],["meta",{"property":"og:site_name","content":"TayLock"}],["meta",{"property":"og:title","content":"ABC-260"}],["meta",{"property":"og:description","content":"1. E - 滑动窗口 https://atcoder.jp/contests/abc260/tasks/abc260_e 1.1 Problem Statement 给定整数 MMM 和 NNN 个整数对: (A1,B1),(A2,B2),...,(AN,BN)(A_1, B_1), (A_2, B_2),..., (A_N, B_N)(A1​,B1​),(A2​,B2​),...,(AN​,BN​), 满足: 1≤Ai≤Bi≤M1 \\\\le A_i \\\\le B_i \\\\le M1≤Ai​≤Bi​≤M"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-25T07:41:14.000Z"}],["meta",{"property":"article:author","content":"TayLock"}],["meta",{"property":"article:tag","content":"sliding window"}],["meta",{"property":"article:published_time","content":"2022-07-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-25T07:41:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ABC-260\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-25T07:41:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TayLock\\",\\"url\\":\\"https://github.com/IWantDayDayUp\\"}]}"]]},"headers":[{"level":2,"title":"1. E - 滑动窗口","slug":"_1-e-滑动窗口","link":"#_1-e-滑动窗口","children":[{"level":3,"title":"1.1 Problem Statement","slug":"_1-1-problem-statement","link":"#_1-1-problem-statement","children":[]},{"level":3,"title":"1.2 分析","slug":"_1-2-分析","link":"#_1-2-分析","children":[]},{"level":3,"title":"1.3 code","slug":"_1-3-code","link":"#_1-3-code","children":[]}]}],"git":{"createdTime":1698219674000,"updatedTime":1698219674000,"contributors":[{"name":"再也不敢","email":"1462959616@qq.com","commits":1}]},"readingTime":{"minutes":1.87,"words":562},"filePathRelative":"posts/Algorithm/AtCoder/abc-260.md","localizedDate":"July 17, 2022","excerpt":"<h2> 1. E - 滑动窗口</h2>\\n<p><a href=\\"https://atcoder.jp/contests/abc260/tasks/abc260_e\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://atcoder.jp/contests/abc260/tasks/abc260_e</a></p>\\n<h3> 1.1 Problem Statement</h3>\\n<p>给定整数 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>M</mi></mrow><annotation encoding=\\"application/x-tex\\">M</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">M</span></span></span></span> 和 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\\"application/x-tex\\">N</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">N</span></span></span></span> 个整数对: <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mo stretchy=\\"false\\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo separator=\\"true\\">,</mo><msub><mi>B</mi><mn>1</mn></msub><mo stretchy=\\"false\\">)</mo><mo separator=\\"true\\">,</mo><mo stretchy=\\"false\\">(</mo><msub><mi>A</mi><mn>2</mn></msub><mo separator=\\"true\\">,</mo><msub><mi>B</mi><mn>2</mn></msub><mo stretchy=\\"false\\">)</mo><mo separator=\\"true\\">,</mo><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mo separator=\\"true\\">,</mo><mo stretchy=\\"false\\">(</mo><msub><mi>A</mi><mi>N</mi></msub><mo separator=\\"true\\">,</mo><msub><mi>B</mi><mi>N</mi></msub><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">(A_1, B_1), (A_2, B_2),..., (A_N, B_N)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">A</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05017em;\\">B</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mclose\\">)</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">A</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05017em;\\">B</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mclose\\">)</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">...</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">A</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3283em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.10903em;\\">N</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05017em;\\">B</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3283em;\\"><span style=\\"top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.10903em;\\">N</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mclose\\">)</span></span></span></span>, 满足: <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mn>1</mn><mo>≤</mo><msub><mi>A</mi><mi>i</mi></msub><mo>≤</mo><msub><mi>B</mi><mi>i</mi></msub><mo>≤</mo><mi>M</mi></mrow><annotation encoding=\\"application/x-tex\\">1 \\\\le A_i \\\\le B_i \\\\le M</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.7804em;vertical-align:-0.136em;\\"></span><span class=\\"mord\\">1</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">≤</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">A</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">≤</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05017em;\\">B</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">≤</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">M</span></span></span></span></p>","autoDesc":true}');export{s as data};