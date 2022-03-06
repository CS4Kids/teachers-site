module.exports = {
    base: "/",
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    title: "CS4Kids",
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
      themeConfig: {
        
      },
      lastUpdated: "Last Updated",
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
        
      ],
      sidebar: [
        {
          text: 'Resources',
          link: '/resources/',
          children: [
            {
              text: 'Section 1: The Missing Fireflies',
              collapsible: true,
              children: [
                { text: 'Chapter 1', link: 'ch1',children: ['lesson plan','further resources'], },
                { text: 'Chapter 2', link: 'ch2',children: ['lesson plan','further resources'], },  
                { text: 'Chapter 3', link: 'ch3',children: ['lesson plan','further resources'], },
                { text: 'Chapter 4', link: 'ch4',children: ['lesson plan','further resources'], },
                { text: 'Chapter 5', link: 'ch5',children: ['lesson plan','further resources'], },
                { text: 'Chapter 6', link: 'ch5',children: ['lesson plan','further resources'], },
                  
              ],
            },
            {
              text: 'Section 2: The Glowing Moss',
              collapsible: true,
              children: ['lesson plan','further resources'],
            },
            {
              text: 'Section 3: The Tumbled Geodes',
              collapsible: true,
              children: ['lesson plan','further resources'],
            },
            {
              text: 'Section 4: The Petrified Forest',
              collapsible: true,
              children: ['lesson plan','further resources'],
            },
            
            
          ],
        },
     
      ],
      
    },
  };
  

