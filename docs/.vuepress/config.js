module.exports = {
  title: '交易文档',
  dest: './dist',  // 设置输出目录
  base: '/docs/', // 设置站点根路径
  repo: 'https://github.com/moyunsuibuyao/docs.git', // 添加 github 链接
  head: [],
  description: '交易平台组件文档',
  markdown:{
    lineNumber: false
  },
  themeConfig : {
    // 添加侧边栏
    sidebar: [
      {
        title: '搜索组件',
        collapsable: false,
        children: [
          ['/search/', '基本用法和功能'],
          ['/search/Base', '基本属性'],
          ['/search/button', '按钮控件'],
        ]
      },
    ],
    sidebarDepth: 2
  }
};
