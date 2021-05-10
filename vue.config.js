const webpack = require('webpack')
module.exports = {
  pluginOptions: {
    electronBuilder: {
      preload: {
        renderer: 'src/renderer.js'
      },
      appId: 'com.inspection.Declaration',
      productName: 'Declaration',
      copyright: 'Copyright © 2021',
      win: {
        icon: './logo.ico',
        target: ['portable']
      },
      nsis: {
        oneClick: false, // 是否一键安装
        allowElevation: true,
        allowToChangeInstallationDirectory: true,
        installerIcon: './logo.ico', // 安装图片
        uninstallerIcon: './logo.ico', // 卸载图标
        installerHeaderIcon: './logo.ico', // 安装头部图标
        createDesktopShortcut: true,
        createStartMenuShortcut: true,
        shortcutName: 'Declaration' // 图标名称
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.FLUENTFFMPEG_COV': false
      })
    ]
  }
}
