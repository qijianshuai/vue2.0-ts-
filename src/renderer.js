import log from './lib/log'
window.electron = require('electron')
window.ipcRenderer = require('electron').ipcRenderer
window.remote = require('electron').remote
window.electronLog = log

// 登录
window.login = function () {
  const from = document.getElementById('login')
  console.log(from)
  // 当前是否是登录页
  if (from) {
    // 未登录，输入账户密码登录
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const select = document.getElementById('langSelect')
    const button = document.getElementById('logonButton')
    username.value = 'admin'
    password.value = 'admin'
    select.value = 'cn'
    button.click()
    return 'success'
  } else {
    return '已登录或者网路断开，请尝试导出功能，如导出失败，检查网路或者设备'
  }
}

// 导出
window.exportLogs = function () {
  // 在判断当前是否已经登陆
  const menu = parent[1].document.querySelector('#callLog a')
  if (menu) {
    // 已经登陆，进入通话记录界面
    menu.click()
    // 获取导出全部按钮
    const Etime = setInterval(() => {
      const exportAll = parent[2].document.querySelector('input[lang="XSTR_LBL_CERT_EXPORT_ALL"]')
      if (exportAll) {
        clearInterval(Etime)
        console.log(exportAll)
        setTimeout(() => {
          exportAll.click()
        }, 3000)
      }
    }, 500)
    return 'success'
  } else {
    return 'error'
  }
}
