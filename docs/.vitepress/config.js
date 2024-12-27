export default {
  title: "我的网站",
  description: "使用 VitePress 构建的网站",
  
  // 如果部署到 GitHub Pages，需要设置 base
  // 格式: /<仓库名>/
  base: '/ZuoglTools/',

  // 添加构建输出目录配置
  outDir: '../dist',

  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zuogl/ZuoglTools' }
    ]
  }
} 