/*
 * @Author       : qijianshuai
 * @Description  :  electron主进程事件
 */
// import { ipcRenderer } from 'electron'
const ipcRenderer = window.ipcRenderer

/**
 * @author qijianshuai
 * @description 获取摄像头与代理ip
 */
export function getCameralistAndProxyIp (callback: Function) {
  if (ipcRenderer) {
    ipcRenderer.send('camera-list')
    ipcRenderer.on('cameralist-proxyurl', (event, config) => {
      callback(config)
    }) // 监听打印完成
  }
}

/**
 * @author qijianshuai
 * @description 关闭程序
 */
export function closeApp () {
  if (ipcRenderer) {
    ipcRenderer.send('close-app')
  }
}

/**
 * @author qijianshuai
 * @description 导出登录
 */
export function exportLogin () {
  if (ipcRenderer) {
    ipcRenderer.send('export-login')
  }
}

/**
 * @author qijianshuai
 * @description 导出登录状态
 */
export function exportLoginStatus (callback: Function) {
  if (ipcRenderer) {
    ipcRenderer.send('export-login-status')
    ipcRenderer.on('export-login-status', (event, config) => {
      callback(config)
    })
  }
}

/**
 * @author qijianshuai
 * @description 导出记录
 */
export function exportLogs () {
  if (ipcRenderer) {
    ipcRenderer.send('export-logs')
  }
}

/**
 * @author qijianshuai
 * @description 导出记录状态
 */
export function exportLogsStatus (callback: Function) {
  if (ipcRenderer) {
    ipcRenderer.send('export-logs-status')
    ipcRenderer.on('export-logs-status', (event, config) => {
      callback(config)
    })
  }
}
