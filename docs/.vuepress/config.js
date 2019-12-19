module.exports = {
  title: '交易文档',
  dest: './dist',  // 设置输出目录
  base: '/docs/', // 设置站点根路径
  head: [],
  description: '交易平台组件文档',
  markdown:{
    lineNumber: false
  },
  themeConfig : {
    // 假定 GitHub。也可以是一个完整的 GitLab 网址
    repo: 'moyunsuibuyao/sanmi-component.git',
    // 如果你的文档不在仓库的根部
    // docsDir: '../../docs.git',
    // 可选，默认为 master
    // docsBranch: 'master',
    // 默认为 true，设置为 false 来禁用
    editLinks: false,
    // 添加侧边栏
    sidebar: [
      {
        title: '搜索组件',
        collapsable: true,
        children: [
          ['/Search/', '基本用法和功能'],
          ['/Search/Base', '基本属性'],
          ['/Search/Input', '文本框'],
          ['/Search/Select', '下拉选项框'],
          ['/Search/Date', '日期选择'],
        ]
      },
    ],
    sidebarDepth: 2
  }
};
