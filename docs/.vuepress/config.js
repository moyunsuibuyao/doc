module.exports = {
  title: '交易文档',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  description: '交易平台组件文档',
  markdown:{
    lineNumber: false
  },
  themeConfig : {
    // 添加侧边栏
    // sidebar: {
    //   '/search/': [
    //     ['', '基本用法'],
    //     ['controls', '搜索控件']
    //   ]
    // },
    sidebar: [
      {
        title: '搜索组件',
        collapsable: false,
        children: [
          ['/search/', '基本用法'],
          ['/search/controls', '搜索控件']
        ]
      },
    ],
    sidebarDepth: 2
  }
}