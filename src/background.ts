import { app, BrowserWindow, Menu, protocol } from 'electron'
import * as path from 'path'
import './lib/log'
import { createListenEvent, sendCameraIpList, exportLogs, exportLogin, exportLoginStatus, exportLogStatus } from './event'
import { CONFIG } from './config/index'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])
// 清除菜单栏
Menu.setApplicationMenu(null)
createPrintConfigWindow()
// 窗口对象
let mainWindow: BrowserWindow | null
let exportWindow: BrowserWindow | null
let bookWindow: BrowserWindow | null

// 创建主窗口
function createWindow () {
  mainWindow = new BrowserWindow({
    show: CONFIG.show,
    width: CONFIG.width,
    center: true,
    height: CONFIG.height,
    autoHideMenuBar: true,
    alwaysOnTop: false,
    useContentSize: true,
    // 窗口是否全屏
    fullscreen: CONFIG.fullscreen,
    // fullscreen: false,
    frame: true,
    resizable: false,
    webPreferences: {
      plugins: true,
      webSecurity: false,
      javascript: true,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
      devTools: true,
      preload:path.resolve(__dirname, 'renderer.js')
    }
  })
  const devServerUrl = process.env.WEBPACK_DEV_SERVER_URL
  // 开发环境
  if (devServerUrl) {
    mainWindow.loadURL(devServerUrl)
  } else {
    // 生产环境
    createProtocol('app')
    mainWindow.loadURL('app://./index.html')
  }

  /** 监听界面加载完成 */
  mainWindow.webContents.on('did-finish-load', () => {
    if (mainWindow) {
      mainWindow.show()
      // 引入视频流转码服务
      // const server = require('../serve')
    }
    if (CONFIG.debug && mainWindow) {
      mainWindow.webContents.openDevTools()
    }
  })
}

app.whenReady().then(() => {
  createWindow()
  if (mainWindow) {
    createListenEvent(mainWindow)
    sendCameraIpList(mainWindow)
    exportLoginStatus(mainWindow)
    exportLogStatus(mainWindow)
    mainWindow.on('closed', () => { // 监听主窗口关闭
      mainWindow = null
      app.quit()
    })
  }

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    mainWindow = null
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// 创建导出窗口
function _createPrintConfigWindow () {
  exportWindow = new BrowserWindow({
    show: false, // 是否显示窗口
    width: 1200,
    height: 600,
    autoHideMenuBar: true,
    center: true,
    alwaysOnTop: false,
    useContentSize: true,
    fullscreen: false,
    frame: true,
    resizable: false,
    webPreferences: {
      plugins: true,
      webSecurity: false,
      javascript: true,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
      devTools: true,
      preload:path.resolve(__dirname, 'renderer.js')
    }

  })
  exportWindow.loadURL('http://192.168.18.70/').then(() => {
    // exportWindow.webContents.openDevTools() //打开控制台
  })
}

function createPrintConfigWindow () {
  app.whenReady().then(() => {
    _createPrintConfigWindow()
    exportLogs(exportWindow)
    exportLogin(exportWindow)
    exportWindow.on('closed', () => { // 监听打印窗口关闭
      exportWindow = null
      app.quit()
    })
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      exportWindow = null
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      _createPrintConfigWindow()
    }
  })}

