import { defineConfig } from 'vitePress'


module.exports = defineConfig({
  title: 'Jl Ui',
  description: 'vue3 Component Libraries',
  base: '/jili-ui/',
  appearance: false,
  ignoreDeadLinks: true,
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    theme: 'dark-plus'
  },
  titleTemplate: 'JlUi',
  themeConfig: {
    logo: '../logo/logo@2x.png',
    outlineTitle: 'CONTENTS',
    nav: [
      { text: '指南', link: '/guide' },
      {
        text: '组件', link: '/components/input'
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xudaotutou/jiliui/tree/dev'
      }
    ],
    sidebar: {
      '/components': [
        {
          text: 'BackToTop 回到顶部',
          link: '/components/backToTop'
        },
        {
          text: 'Input 输入框',
          link: '/components/input'
        },
        {
          text: 'Input Number 数字输入框',
          link: '/components/inputNumber'
        },
        {
          text: 'Scrollbar 滚动条',
          link: '/components/scrollbar'
        },
        {
          text: 'Layout 布局',
          link: '/components/layout'
        }
      ]
    }
  }
})