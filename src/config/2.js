'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
// eslint-disable-next-line no-void
exports.store = exports.CONFIG = exports.APP_PATH = exports.APP_NAME = void 0
// eslint-disable-next-line camelcase
var electron_1 = require('electron')
var Store = require('electron-store')
/** 系统名称 */
exports.APP_NAME = 'Electron'
// 应用程序路径
exports.APP_PATH = 'c:\\zyzh\\assist\\'
/** 系统默认配置数据 */
exports.CONFIG = {
  show: true,
  width: 800,
  height: 400,
  fullscreen: true,
  debug: true,
  loadUrl: 'http://localhost:8080/#/',
  // proxyUrl: `http://localhost:8000/web/index.html?num=${Math.random()}`,
  proxyUrl: '172.16.17.217:8081',
  cameraIpInfo: {
    home: [
      { id: 1, rtsp: 'rtsp://admin:zyzh.1234@172.16.16.234', el: 'video1' },
      { id: 2, rtsp: 'rtsp://admin:zyzh.1234@172.16.16.234', el: 'video2' }
    ],
    handrail: [
      { id: 1, rtsp: 'rtsp://admin:zyzh.1234@172.16.16.234', el: 'video1' }
    ]
  }
}
exports.store = new Store({
  name: 'config',
  fileExtension: 'json',
  cwd: exports.APP_PATH,
  clearInvalidConfig: false
})
if (electron_1.app.isPackaged) { // 已打包
  if (exports.store.has('config')) {
    var data = exports.store.get('config')
    for (var key in exports.CONFIG) {
      if (Object.prototype.hasOwnProperty.call(exports.CONFIG, key)) {
        exports.CONFIG[key] = data[key]
      }
    }
    global.log.info('获取配置文件成功', JSON.stringify(exports.CONFIG), JSON.stringify(data))
  } else { // 本地不存在配置文件
    exports.store.set('config', exports.CONFIG)
    global.log.info('配置文件创建成功')
  }
  // const isConfig = fs.existsSync('C:/SetUpDeclare/web-client/conf.json')
  // if (isConfig) { // 存在配置文件
  //   const data = fs.readFileSync('C:/SetUpDeclare/web-client/conf.json', {
  //     encoding: 'utf-8'
  //   })
  //   const config = JSON.parse(data)
  //   for (const key in CONFIG) {
  //     if (Object.prototype.hasOwnProperty.call(CONFIG, key)) { // 配置文件字段正常
  //       CONFIG[key] = config[key]
  //     }
  //   }
  //   global.log.info('获取配置文件成功', JSON.stringify(CONFIG), JSON.stringify(config))
  // } else { // 不存在配置文件
  //   fs.writeFile('C:/SetUpDeclare/web-client/conf.json', JSON.stringify(CONFIG), { encoding: 'utf-8' }, err => {
  //     if (err) {
  //       global.log.error('文件创建失败' + err)
  //       throw err
  //     } else {
  //       global.log.info('配置文件创建成功')
  //     }
  //   })
  // }
}
