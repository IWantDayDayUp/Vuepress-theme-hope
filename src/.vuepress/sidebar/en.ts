import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  // "/": [
  //   "",
  //   {
  //     text: "Demo",
  //     icon: "laptop-code",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "Posts",
  //     icon: "book",
  //     prefix: "posts/",
  //     children: "structure",
  //   },
  // ],
  "/posts/Algorithm/":[
    "",
    {
      text: "AtCoder",
      icon: "note",
      // collapsable: true,
      prefix: "AtCoder/",
      children: "structure",
    },
    {
      text: "Codeforces",
      icon: "note",
      // collapsable: true,
      prefix: "Codeforces/",
      children: "structure",
    },
    {
      text: "LeetCode",
      icon: "note",
      // collapsable: true,
      prefix: "LeetCode/",
      children: "structure",
    },
  ],
  // "/posts/Code/":[
  //   "",
  //   {
  //     text: "AtCoder",
  //     icon: "note",
  //     prefix: "AtCoder/",
  //     children: "structure",
  //   },
  //   {
  //     text: "Codeforces",
  //     icon: "note",
  //     prefix: "Codeforces/",
  //     children: "structure",
  //   },
  //   {
  //     text: "LeetCode",
  //     icon: "note",
  //     prefix: "LeetCode/",
  //     children: "structure",
  //   },
  // ],
  // "/posts/Vlog/":[
  //   "",
  //   {
  //     text: "Vlog",
  //     icon: "note",
  //     // prefix: "AtCoder/",
  //     children: "structure",
  //   }
  // ],
  // "/posts/YouTube/":[
  //   "",
  //   {
  //     text: "TouTube",
  //     icon: "note",
  //     // prefix: "AtCoder/",
  //     children: "structure",
  //   }
  // ],
});
