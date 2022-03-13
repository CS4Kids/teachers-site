const { path } = require('@vuepress/utils')

module.exports = {
    base: "/",
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
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
          '@vuepress/plugin-palette',
          { 
            preset: 'sass' 
          },
        ], 
      ],
    themeConfig: {
      lastUpdated: "Last Updated",
      sidebar: {
        '/teachers/': [
          {
            children: [
              {
                text: '1: The Missing Fireflies',
                collapsible: true,
                children: [
                  { text: 'Chapter 1', link: 'ch1',children: ['lesson plan','further resources'], },
                  { text: 'Chapter 2', link: 'ch2',children: ['lesson plan','further resources'], },  
                  { text: 'Chapter 3', link: 'ch3',children: ['lesson plan','further resources'], },
                   
                ],
              },
              {
                text: '2: The Glowing Moss',
                collapsible: true,
                children: [ { text: 'Chapter 4', link: 'ch4',children: ['lesson plan','further resources'], },
                { text: 'Chapter 5', link: 'ch5',children: ['lesson plan','further resources'], },
                { text: 'Chapter 6', link: 'ch5',children: ['lesson plan','further resources'], },
                ],
              },
              {
                text: '3: Geode Quest',
                collapsible: true,
                children: [ { text: 'Chapter 7', link: 'ch7',children: ['lesson plan','further resources'], },
                { text: 'Chapter 8', link: 'ch8',children: ['lesson plan','further resources'], },
                { text: 'Chapter 9', link: 'ch9',children: ['lesson plan','further resources'], },
                ],
              },
              {
                text: '4: The Petrified Forest',
                collapsible: true,
                children: [ { text: 'Chapter 10', link: 'ch10',children: ['lesson plan','further resources'], },
                { text: 'Chapter 11', link: 'ch11',children: ['lesson plan','further resources'], },
                { text: 'Chapter 12', link: 'ch12',children: ['lesson plan','further resources'], },
                { text: 'Chapter 13', link: 'ch13',children: ['lesson plan','further resources'], },
                { text: 'Chapter 14', link: 'ch14',children: ['lesson plan','further resources'], },
                { text: 'Chapter 15', link: 'ch15',children: ['lesson plan','further resources'], },
                ],
              },
              {
                text: '5: Assembling the Defenders',
                collapsible: true,
                children: [ { text: 'Chapter 16', link: 'ch16',children: ['lesson plan','further resources'], },
                { text: 'Chapter 17', link: 'ch17',children: ['lesson plan','further resources'], },
                { text: 'Chapter 18', link: 'ch18',children: ['lesson plan','further resources'], },
                { text: 'Chapter 19', link: 'ch19',children: ['lesson plan','further resources'], },
                ],
              },
              {
                text: '5: Building for Sustainability',
                collapsible: true,
                children: [ { text: 'Chapter 20', link: 'ch20',children: ['lesson plan','further resources'], },
                { text: 'Chapter 21', link: 'ch21',children: ['lesson plan','further resources'], },
                { text: 'Chapter 22', link: 'ch22',children: ['lesson plan','further resources'], },
                { text: 'Chapter 23', link: 'ch23',children: ['lesson plan','further resources'], },
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
  
  