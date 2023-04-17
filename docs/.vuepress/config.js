import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

const mode = process.env.NODE_ENV || "development";

export default defineUserConfig({
  base: "/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  description: "Computer Science for Kids, lesson plans",
  theme: defaultTheme({
    lastUpdated: true,
    logo: "/assets/art/fox.png",
    sidebar: {
      "/blog/": [
        {
          children: [
            {
              //text: "Coming soon",
              //collapsable: false,
              //link: "1"
            }
          ]
        }
      ],
      "/lessons/": [
        {
          children: [
            {
              text: "1: The Missing Fireflies",
              collapsable: false,
              children: [
                { text: "Chapter 1", link: "ch1" },
                { text: "Chapter 2", link: "ch2" },
                { text: "Chapter 3", link: "ch3" },
                { text: "Chapter 4", link: "ch4" }
              ]
            },
            {
              text: "2: The Glowing Moss",
              collapsable: false,
              children: [
                { text: "Chapter 5", link: "ch5" },
                { text: "Chapter 6", link: "ch6" },
                { text: "Chapter 7", link: "ch7" },
                { text: "Chapter 8", link: "ch8" }
              ]
            },
            {
              text: "3: Geode Quest",
              collapsable: false,
              children: [
                { text: "Chapter 9", link: "ch9" },
                { text: "Chapter 10", link: "ch10" },
                { text: "Chapter 11", link: "ch11" },
                { text: "Chapter 12", link: "ch12" }
              ]
            },
            {
              text: "4: The Petrified Forest",
              collapsable: false,
              children: [
                { text: "Chapter 13", link: "ch13" },
                { text: "Chapter 14", link: "ch14" },
                { text: "Chapter 15", link: "ch15" },
                { text: "Chapter 16", link: "ch16" }
              ]
            },
            {
              text: "5: Legends of the Field Mice",
              collapsable: false,
              children: [
                { text: "Chapter 17", link: "ch17" },
                { text: "Chapter 18", link: "ch18" },
                { text: "Chapter 19", link: "ch19" },
                { text: "Chapter 20", link: "ch20" }
              ]
            }
          ]
        }
      ]
    },
    navbar: [
      // NavbarItem
      {
        text: "Contact",
        link: "/contact/"
      },
      // NavbarGroup
      {
        text: "About",
        link: "/about/"
      },
      {
        text: "For Teachers",
        link: "/lessons/"
      },
      {
        text: "Quests",
        link: "/quests/"
      },
      {
        text: "Articles",
        link: "/blog/"
      },
      {
        text: "Forum",
        link: "https://github.com/CS4Kids/website/discussions"
      },
      {
        text: "Textbook",
        link: "https://www.amazon.com/Computer-Science-Kids-Storytelling-Approach/dp/1119912512"
      }
    ]
  })
});
