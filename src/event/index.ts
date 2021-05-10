import { app, ipcMain, BrowserWindow } from 'electron'
import { stat } from 'original-fs'
import { CONFIG } from '../config/index'
export const status = {
  exportLogin: '',
  exportStatus: ''
}
export function createListenEvent (mainWindow: BrowserWindow) {
  /** 渲染进程调用关闭应用事件 */
  ipcMain.on('close-app', (event) => {
    mainWindow.destroy()
    app.quit()
  })
}
export function sendCameraIpList (mainWindow: BrowserWindow) {
  /** 获取摄像头地址事件 */
  ipcMain.on('camera-list', (event) => {
    mainWindow.webContents.send('cameralist-proxyurl', {
      proxyUrl: CONFIG.proxyUrl,
      camerasInfo: CONFIG.cameraIpInfo,
      cameraUrl: CONFIG.cameraUrl
    })
  })
}

export function exportLogin (exportWindow: BrowserWindow) {
  /** 登录通话记录 */
  console.log('登录通话记录已监听')
  ipcMain.on('export-login', (event) => {
    // 通过窗口对象调用脚本函数
    exportWindow.webContents.executeJavaScript(`window.login()`).then(value => {
      console.log('脚本执行结果', value)
      status.exportLogin = value
    })
  })
}

export function exportLoginStatus (mainWindow: BrowserWindow) {
  ipcMain.on('export-login-status', (event) => {
    // 通知前端窗口导出窗口登录状态
  mainWindow.webContents.send('export-login-status', status.exportLogin)
  })
}

export function exportLogs (exportWindow: BrowserWindow) {
  /** 导出通话记录 */
  console.log('导出通话记录已监听')
  ipcMain.on('export-logs', (event) => {
  // 通过窗口对象调用脚本函数
  exportWindow.webContents.executeJavaScript(`window.exportLogs()`).then(value => {
    console.log('脚本执行结果', value)
    status.exportStatus = value
  })
  })
}

export function exportLogStatus (mainWindow: BrowserWindow) {
  ipcMain.on('export-logs-status', (event) => {
    // 通知前端窗口导出窗口导出状态
    mainWindow.webContents.send('export-logs-status', status.exportStatus)
  })
}

