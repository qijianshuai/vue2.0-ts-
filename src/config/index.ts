import { app } from 'electron'
import * as path from 'path'
import * as fs from 'fs'
import { ConfigInterface } from './config.d'
import { max } from 'moment'
import Store from 'electron-store'
// import log from 'electron-log'
// global.log = log
/** 系统名称 */
export const APP_NAME = 'Electron'
// 应用程序路径
export const APP_PATH = 'c:\\zyzh\\assist\\'
/** 系统默认配置数据 */
export const CONFIG: any = {
  show: true,
  width: 1366,
  height: 768,
  fullscreen: false,
  debug: true,
  loadUrl: 'http://localhost:8080/#/',
  // proxyUrl: `http://localhost:8000/web/index.html?num=${Math.random()}`,
  proxyUrl: "172.16.17.217:8081",
  cameraUrl: "http://localhost:8083",
  cameraIpInfo: {
    home: {
      big: 'traffic_pre',
      small: 'plate_pre'
    },
    handrail: 'traffic_pre',
    channe: {
      top: 'traffic_pre',
      bottom: 'traffic_next'
    },
    anpr: {
      pre: 'plate_pre',
      next: 'plate_next'
    },
    bottomCamera: 'bottom_car'
  }
}
export const store = new Store({
  name: 'config',
  fileExtension: 'json',
  cwd: APP_PATH,
  clearInvalidConfig: false
})

if (app.isPackaged) { // 已打包
  if (store.has('config')) {
    const data = store.get('config') as any
    for (const key in CONFIG) {
      if (Object.prototype.hasOwnProperty.call(CONFIG, key)) {
          CONFIG[key] = data[key]
      }
    }
    global.log.info('获取配置文件成功', JSON.stringify(CONFIG), JSON.stringify(data))
  } else { // 本地不存在配置文件
    store.set('config', CONFIG)
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