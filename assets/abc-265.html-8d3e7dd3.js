const a=JSON.parse('{"key":"v-dfa80136","path":"/posts/Algorithm/AtCoder/abc-265.html","title":"ABC-265","lang":"en-US","frontmatter":{"title":"ABC-265","icon":"pen-to-square","date":"2022-08-21T00:00:00.000Z","category":["AtCoder"],"tag":["dp"],"description":"E. Warp (DP) 定义 dp[n][i][j]dp[n][i][j]dp[n][i][j]: the number of paths that end up in (x,y)(x,y)(x,y) after nnn teleportations","head":[["meta",{"property":"og:url","content":"https://iwantdaydayup.github.io/Vuepress-theme-hope/Vuepress-theme-hope/posts/Algorithm/AtCoder/abc-265.html"}],["meta",{"property":"og:site_name","content":"TayLock"}],["meta",{"property":"og:title","content":"ABC-265"}],["meta",{"property":"og:description","content":"E. Warp (DP) 定义 dp[n][i][j]dp[n][i][j]dp[n][i][j]: the number of paths that end up in (x,y)(x,y)(x,y) after nnn teleportations"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-25T07:41:14.000Z"}],["meta",{"property":"article:author","content":"TayLock"}],["meta",{"property":"article:tag","content":"dp"}],["meta",{"property":"article:published_time","content":"2022-08-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-25T07:41:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ABC-265\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-25T07:41:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TayLock\\",\\"url\\":\\"https://github.com/IWantDayDayUp\\"}]}"]]},"headers":[{"level":2,"title":"E. Warp (DP)","slug":"e-warp-dp","link":"#e-warp-dp","children":[]}],"git":{"createdTime":1698219674000,"updatedTime":1698219674000,"contributors":[{"name":"再也不敢","email":"1462959616@qq.com","commits":1}]},"readingTime":{"minutes":1.67,"words":500},"filePathRelative":"posts/Algorithm/AtCoder/abc-265.md","localizedDate":"August 21, 2022","excerpt":"<h2> E. Warp (DP)</h2>\\n<p>定义 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>d</mi><mi>p</mi><mo stretchy=\\"false\\">[</mo><mi>n</mi><mo stretchy=\\"false\\">]</mo><mo stretchy=\\"false\\">[</mo><mi>i</mi><mo stretchy=\\"false\\">]</mo><mo stretchy=\\"false\\">[</mo><mi>j</mi><mo stretchy=\\"false\\">]</mo></mrow><annotation encoding=\\"application/x-tex\\">dp[n][i][j]</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\">d</span><span class=\\"mord mathnormal\\">p</span><span class=\\"mopen\\">[</span><span class=\\"mord mathnormal\\">n</span><span class=\\"mclose\\">]</span><span class=\\"mopen\\">[</span><span class=\\"mord mathnormal\\">i</span><span class=\\"mclose\\">]</span><span class=\\"mopen\\">[</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05724em;\\">j</span><span class=\\"mclose\\">]</span></span></span></span>: the number of paths that end up in <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mo stretchy=\\"false\\">(</mo><mi>x</mi><mo separator=\\"true\\">,</mo><mi>y</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">(x,y)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mclose\\">)</span></span></span></span> after <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\\"application/x-tex\\">n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">n</span></span></span></span> teleportations</p>","autoDesc":true}');export{a as data};
