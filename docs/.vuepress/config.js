const { path } = require('@vuepress/utils')

module.exports = {
    base: "/",
    head: [["link", { rel: "icon", href: "/favicon.ico" }],["script", {src : "https://cdn.auth0.com/js/auth0-spa-js/1.13/auth0-spa-js.production.js"}]],
    title: "Computer Science for Kids",
    theme: path.resolve(__dirname, './theme'),
    description:
      "Computer Science for Kids, lesson plans",
      plugins: [
        [
          '@vuepress/docsearch',
          {
            apiKey: '9b7a092b1c2ced928fcb302010fd432d',
            indexName: 'jenlooper',
            
          },
          
        ], 
      ],
    themeConfig: {
      darkMode: false,
      lastUpdated: "Last Updated",
      sidebar: {
        '/teachers/': [
          {
            children: [
              {
                text: '1: The Missing Fireflies',
                children: [
                  { text: 'Chapter 1', link: 'ch1'},
                  { text: 'Chapter 2', link: 'ch2'},  
                  { text: 'Chapter 3', link: 'ch3'},
                   
                ],
              },
              {
                text: '2: The Glowing Moss',
                children: [ { text: 'Chapter 4', link: 'ch4'},
                { text: 'Chapter 5', link: 'ch5'},
                { text: 'Chapter 6', link: 'ch6npm'},
                ],
              },
              {
                text: '3: Geode Quest',
                children: [ { text: 'Chapter 7', link: 'ch7'},
                { text: 'Chapter 8', link: 'ch8'},
                { text: 'Chapter 9', link: 'ch9'},
                ],
              },
              {
                text: '4: The Petrified Forest',
                children: [ { text: 'Chapter 10', link: 'ch10'},
                { text: 'Chapter 11', link: 'ch11'},
                { text: 'Chapter 12', link: 'ch12'},
                { text: 'Chapter 13', link: 'ch13'},
                { text: 'Chapter 14', link: 'ch14'},
                { text: 'Chapter 15', link: 'ch15'},
                ],
              },
              {
                text: '5: Assembling the Defenders',
                children: [ { text: 'Chapter 16', link: 'ch16'},
                { text: 'Chapter 17', link: 'ch17'},
                { text: 'Chapter 18', link: 'ch18'},
                { text: 'Chapter 19', link: 'ch19'},
                ],
              },
              {
                text: '5: Building for Sustainability',
                children: [ { text: 'Chapter 20', link: 'ch20'},
                { text: 'Chapter 21', link: 'ch21'},
                { text: 'Chapter 22', link: 'ch22'},
                { text: 'Chapter 23', link: 'ch23'},
                ],
              },
              
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
  };
  
  