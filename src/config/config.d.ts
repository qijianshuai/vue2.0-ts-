export interface ConfigInterface {
  /** 是否显示窗口 */
  show: boolean,
  /** 窗口宽度 */
  width: number,
  /** 窗口高度 */
  height: number,
  /** 是否全屏 */
  fullscreen: boolean,
  /** 是否打开调试 */
  debug: boolean,
  /** 加载地址 */
  loadUrl: string,
  /** 代理地址 */
  proxyUrl: string;
  /** 转码服务 */
  cameraUrl: string;
  /** 摄像头IP地址 */
  cameraIpInfo: {}
}

export interface PrintInterface {
  /** 打印数据刷新等待时间（毫秒） */
  dataWaitTime: number,
  /** 是否显示打印窗口 */
  show: boolean,
  /** 打印区域宽度 */
  width: string;
  /** 打印区域高度 */
  height: string;
}