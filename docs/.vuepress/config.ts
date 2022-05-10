import { defineUserConfig } from 'vuepress'
import { cs4kidsTheme } from './theme'

export default defineUserConfig({
    base: "/",
    head: [["link", { rel: "icon", href: "/favicon.ico" }],["script", {src : "https://cdn.auth0.com/js/auth0-spa-js/1.13/auth0-spa-js.production.js"}]],
    title: "Computer Science for Kids",
    description:
      "Computer Science for Kids, lesson plans",
    
    /*plugins: [
        [
          '@vuepress/docsearch',
          {
            apiKey: '31059fbf1460d9eb3d374ba01171251d',
            indexName: 'netlify_987e0ee0-53f6-4341-8a60-a41a45490b77_main_all',
            appId: 'XA3NW25D4I'
          },
          
        ], 
      ],*/
      theme: cs4kidsTheme({
      lastUpdated: true,
      
      sidebar: {
        '/teachers/': [
          {
            children: [
              {
                text: '1: The Missing Fireflies',
                collapsible: false,
                children: [
                  { text: 'Chapter 1', link: 'ch1'},
                  { text: 'Chapter 2', link: 'ch2'},  
                  { text: 'Chapter 3', link: 'ch3'},
                  { text: 'Chapter 4', link: 'ch4'},
                ],
              },
              {
                text: '2: The Glowing Moss',
                collapsible: false,
                children: [ 
                  { text: 'Chapter 5', link: 'ch5'},
                  { text: 'Chapter 6', link: 'ch6'},
                  { text: 'Chapter 7', link: 'ch7'},
                  { text: 'Chapter 8', link: 'ch8'},
                ],
              },
              {
                text: '3: Geode Quest',
                collapsible: false,
                children: [ 
                  { text: 'Chapter 9', link: 'ch9'},
                  { text: 'Chapter 10', link: 'ch10'},
                  { text: 'Chapter 11', link: 'ch11'},
                  { text: 'Chapter 12', link: 'ch12'},
                ],
              },
              {
                text: '4: The Petrified Forest',
                collapsible: false,
                children: [ 
                  { text: 'Chapter 13', link: 'ch13'},
                  { text: 'Chapter 14', link: 'ch14'},
                  { text: 'Chapter 15', link: 'ch15'},
                  { text: 'Chapter 16', link: 'ch16'},
                ],
              },
              {
                text: '5: Legends of the Field Mice',
                collapsible: false,
                children: [ 
                  { text: 'Chapter 17', link: 'ch17'},
                  { text: 'Chapter 18', link: 'ch18'},
                  { text: 'Chapter 19', link: 'ch19'},
                  { text: 'Chapter 20', link: 'ch20'},
                ]
              }
              
            ],
          },
        ],
        
        '/': [
         
        ]
      },
      navbar: [
        // NavbarItem
        {
          text: 'Contact',
          link: '/contact/',
        },
        // NavbarGroup
        {
          text: 'About',
          link: '/about/',
        },
        {
          text: 'For Parents',
          link: '/parents/',
        },
        {
          text: 'For Teachers',
          link: '/teachers/',
        },
        {
          text: 'Textbook',
          link: 'https://amazon.com',
        },
        
      ],
    
      
      
    },
      )
  });
  
  