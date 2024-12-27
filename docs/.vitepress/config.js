export default {
  title: "ZuoglTools",
  description: "个人工具集与技术博客",
  base: '/ZuoglTools/',

  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '工具集', 
        items: [
          { text: '浏览器插件', link: '/tools/browser-extensions/' },
          { text: '效率工具', link: '/tools/efficiency/' },
        ]
      },
      { 
        text: '博客', 
        items: [
          { text: '技术文章', link: '/blog/tech/' },
          { text: '开发笔记', link: '/blog/notes/' },
        ]
      },
      { text: '隐私政策', link: '/privacy/' }
    ],

    sidebar: {
      '/tools/': [
        {
          text: '浏览器插件',
          items: [
            { text: '插件介绍', link: '/tools/browser-extensions/' },
            { text: '使用指南', link: '/tools/browser-extensions/guide' },
          ]
        },
        {
          text: '效率工具',
          items: [
            { text: '工具列表', link: '/tools/efficiency/' },
            { text: '使用说明', link: '/tools/efficiency/guide' },
          ]
        }
      ],
      '/blog/': [
        {
          text: '技术文章',
          items: [
            { text: '最新文章', link: '/blog/tech/' },
            { text: '文章归档', link: '/blog/tech/archives' },
          ]
        },
        {
          text: '开发笔记',
          items: [
            { text: '笔记列表', link: '/blog/notes/' },
            { text: '笔记归档', link: '/blog/notes/archives' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zuogl/ZuoglTools' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024-present Zuogl'
    }
  },

  head: [
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'KnaRizWOpSs3Ho2y7l_3J25QwfKPa9VgKkwMDSv8T7M' // 替换成你的验证码
      }
    ]
  ]
} 