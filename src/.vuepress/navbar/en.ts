import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "Algorithm",
    icon: "pen-to-square",
    prefix: "/posts/Algorithm/",
    children: [
      {
        text: "Codeforces",
        icon: "pen-to-square",
        // prefix: "AtCoder/",
        // children: [
        //   // { text: "Apple1", icon: "pen-to-square", link: "1" },
        //   // { text: "Apple2", icon: "pen-to-square", link: "2" },
        //   // "3",
        //   // "4",
        // ],
        link: "Codeforces/",
      },
      {
        text: "AtCoder",
        icon: "pen-to-square",
        link: "AtCoder/",
      },
      {
        text: "LeetCode",
        icon: "pen-to-square",
        prefix: "LeetCode/",
        children: [
          // { text: "Apple1", icon: "pen-to-square", link: "1" },
          // { text: "Apple2", icon: "pen-to-square", link: "2" },
          // "3",
          // "4",
        ],
        link: "LeetCode/",
      },
    ],
  },
]);
