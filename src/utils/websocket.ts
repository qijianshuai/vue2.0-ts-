export class Websocket {
  private websock!: WebSocket
  private callback!: Function
  private isReconnection = true // 用于区分是否触发重连机制,true：重连，false：不重连
  private url: string
  /**
   * @author limingyang
   * @description 构造器
   * @param {string} url websocket地址
   * @param {Function} callback 收到消息时的回调函数
  */

  constructor (url: string, callback: (data: any) => void) {
    this.url = url
    this.callback = callback
    this.initwebsocke(url)
  }

  initwebsocke (url: string) {
    if (this.websock) {
      this.isReconnection = false
      this.websock.close() // 关闭websocket连接
    }
    this.websock = new WebSocket(url)
    this.websock.onopen = () => {
      this.websocketonopen()
    }
    this.websock.onerror = (e) => {
      this.websocketonerror(e)
    }
    this.websock.onmessage = (e) => {
      this.websocketonmessage(e)
    }
    this.websock.onclose = (e) => {
      this.websocketclose(e)
    }
  }

  websocketonopen () { // webSocket打开
    console.log('WebSocket连接成功')
    this.isReconnection = true
  }

  websocketonerror (e: Event) { // webSocket连接发生错误
    console.log('WebSocket连接发生错误' + e)
    setTimeout(() => { // 五秒后重新连接
      this.initwebsocke(this.url)
    }, 5000)
  }

  websocketonmessage (e: MessageEvent) { // webSocket接收数据
    const data = JSON.parse(e.data)
    this.callback && this.callback(data)
  }

  websocketsend () { // webSocket发送数据
    // this.websock.send(param)
  }

  websocketclose (e: CloseEvent) { // webSocket关闭
    console.log('connection closed (' + e.code + ')')
    if (this.isReconnection) {
      setTimeout(() => { // 两秒后重新连接
        this.initwebsocke(this.url)
      }, 5000)
    }
  }

  closeWebsocket (reconnection: boolean) { // 关闭websocket
    console.log('关闭websocket')
    this.isReconnection = reconnection
    this.websock.close()
  }
}
