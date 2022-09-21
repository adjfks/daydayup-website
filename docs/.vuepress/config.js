const sidebarConfig = require('./sidebar.config.json')

module.exports = {
  title: 'corner的前端知识库',
  description: '前端学习笔记，个人博客',
  base: '/daydayup-website/',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
      subSidebar: 'auto',
      nav: [
          { text: '首页', link: '/' },
          { 
              text: '关于我', 
              items: [
                  { text: 'Github', link: 'https://github.com/adjfks' },
                  { text: '掘金', link: 'https://juejin.cn/user/1574934799719240' },
                  { text: 'CSDN', link: 'https://blog.csdn.net/laplacepoisson?spm=1011.2415.3001.5343' }
              ]
          }
    ],
    sidebar: sidebarConfig
  }
}
