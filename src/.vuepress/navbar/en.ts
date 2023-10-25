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
        prefix: "Codeforces/",
        children: [
          // { text: "Apple1", icon: "pen-to-square", link: "1" },
          // { text: "Apple2", icon: "pen-to-square", link: "2" },
          // { text: "项目骨架", link: "https://github.com/macrozheng/mall-tiny",},
          // "3",
          // "4",

        ],
      },
      {
        text: "AtCoder",
        icon: "pen-to-square",
        prefix: "AtCoder/",
        children: [
          // { text: "Apple1", icon: "pen-to-square", link: "1" },
          // { text: "Apple2", icon: "pen-to-square", link: "2" },
          // "3",
          // "4",
        ],
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
      },
    ],
  },
]);
