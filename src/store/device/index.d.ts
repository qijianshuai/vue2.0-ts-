export interface State {
  /** 工作模式 */
  mode: number
  /** 所有设备列表 */
  deviceAllList: DeviceInfo[]
  /** 实时运行设备 */
  homeDeviceInfo: HomeDeviceModel
  containerData: {
    left: string
    right: string
    top: string
    bottom: string
  }
  /** 闸机 栏杆 */
  handrailLogs: string[]
  /** 车牌识别相机1 */
  anprLogs: string[],
  /** 车牌识别相机2 */
  anrpLogs: string[],
  /** 红绿灯报警 */
  instructLogs: string[]
  /** LED大屏 */
  bigScreen: string[]
  /** 车底相机 */
  bottomCameraLogs: string[]
  /** 对讲机主机 分机 */
  visualizeLogs: string[]
  /** LED交互屏 */
  interactiveScreen: string[]
  /** IC相关 */
  icLogs: string[]
  /** 二维码 */
  qrcodeLogs: string[]
  /** 天线 */
  licenseplateLogs: string[]
  /** 集装箱 */
  containerLogs: string[]
  /** 漏水 温湿度 */
  environmentLogs: string[]
}

export interface DeviceInfo {
  code: string
  name: string
  /** 运行日志 */
  text?: string
  data?: any
  /** 是否启用 */
  enable: number | boolean
  /** 状态 1正常运行 蓝-2触发中 灰-3未启用(未启动) 红-4故障 */
  state: number
}

export interface HomeDeviceModel {
  /** 入口地感 */
  senseCoilEntry: number
  /** 出口地感 */
  senseCoilExit: number
  /** 入口光栅 */
  rasterEntry: number
  /** 到位光栅1 */
  rasterArrive1: number
  /** 入口光栅 */
  rasterArrive2: number
  /** 出口光栅 */
  rasterExit: number
  /** ic读写卡 */
  icReaderWriter: number
  /** 上位机 */
  wincc: number
}