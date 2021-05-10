import { Module, ActionTree, MutationTree } from 'vuex'
import { State, DeviceInfo } from './index.d'
export const state: State = {
  mode: 0,
  deviceAllList: [],
  homeDeviceInfo: {
    /** 入口地感 */
    senseCoilEntry: 1,
    /** 出口地感 */
    senseCoilExit: 1,
    /** 入口光栅 */
    rasterEntry: 1,
    /** 到位光栅1 */
    rasterArrive1: 1,
    /** 到位光栅2 */
    rasterArrive2: 1,
    /** 出口光栅 */
    rasterExit: 1,
    /** ic读写卡 */
    icReaderWriter: 1,
    /** 上位机 */
    wincc: 1
  },
  containerData: {
    left: '',
    right: '',
    top: '',
    bottom: ''
  },
  /** 电子栏杆与闸机 */
  handrailLogs: [],
  /** 车牌识别相机1 */
  anprLogs: [],
  /** 车牌识别相机2 */
  anrpLogs: [],
  /** 红绿灯报警 */
  instructLogs: [],
  /** LED大屏 */
  bigScreen: [],
  /** 车底相机 */
  bottomCameraLogs: [],
  /** 对讲机主机 分机 */
  visualizeLogs: [],
  /** LED交互屏 */
  interactiveScreen: [],
  /** IC相关 */
  icLogs: [],
  /** 二维码 */
  qrcodeLogs: [],
  /** 天线 */
  licenseplateLogs: [],
  /** 集装箱 */
  containerLogs: [],
  /** 漏水 温湿度 地感雷达 */
  environmentLogs: []
}

export const mutations: MutationTree<State> = {
  /** 获取全部设备 */
  updateAlldevice (state, data) {
    state.deviceAllList = data
  },
  /** 修改单独设备 */
  updateDevice (state, data: DeviceInfo) {
    const index = state.deviceAllList.findIndex(el => el.code === data.code)
    state.deviceAllList.splice(index, 1, data)
  },
  // 修改工作模式
  updateMode (state, value: number) {
    state.mode = value
  },
  // 修改日志
  updateLogs (state, data: DeviceInfo) {
    switch (data.code) {
      // 集装箱前置摄像机
      case 'container_front':
        state.containerLogs.push(data.text)
        break
      // 集装箱后置摄像机
      case 'container_after':
        state.containerLogs.push(data.text)
        break
      // 集装箱左置摄像机
      case 'container_left':
        state.containerLogs.push(data.text)
        break
      // 集装箱右置摄像机
      case 'container_right':
        state.containerLogs.push(data.text)
        break
      // 车底相机
      case 'car_bottom_camera':
        state.bottomCameraLogs.push(data.text)
        break
      // 漏水
      case 'water_leakage':
        state.environmentLogs.push(data.text)
        break
      // 温湿度
      case 'temp':
        state.environmentLogs.push(data.text)
        break
      // 声光报警
      case 'alarm':
        state.instructLogs.push(data.text)
        break
      // 电子栏杆
      case 'railing':
        state.handrailLogs.push(data.text)
        break
      // 闸机
      case 'gate':
        state.handrailLogs.push(data.text)
        break
      // 地感雷达
      case 'radar':
        state.environmentLogs.push(data.text)
        break
      // 入口红绿灯
      case 'traffic_light_entry':
        state.instructLogs.push(data.text)
        break
      // 出口红绿灯
      case 'traffic_light_exit':
        state.instructLogs.push(data.text)
        break
      // IC卡进卡设备
      case 'ic_in':
        state.icLogs.push(data.text)
        break
      // IC卡出卡设备
      case 'ic_out':
        state.icLogs.push(data.text)
        break
      // 二维码
      case 'qrcode':
        state.qrcodeLogs.push(data.text)
        break
      // 通道LED交互屏
      case 'led_guide':
        state.interactiveScreen.push(data.text)
        break
      // 通道LED大屏
      case 'led_remind':
        state.bigScreen.push(data.text)
        break
      // RFID天线
      case 'rfid_antenna':
        state.licenseplateLogs.push(data.text)
        break
      // RFID读写器
      case 'rfid_reader_writer':
        state.licenseplateLogs.push(data.text)
        break
      // 可视对讲总机
      case 'video_intercom_server':
        state.visualizeLogs.push(data.text)
        break
      // 可视对讲分机1
      case 'video_intercom_client1':
        state.visualizeLogs.push(data.text)
        break
      // 可视对讲分机2
      case 'video_intercom_client2':
        state.visualizeLogs.push(data.text)
        break
      // 车牌识别相机1
      case 'vehicle_front':
        state.anprLogs.push(data.text)
        break
      // 车牌识别相机2
      case 'vehicle_after':
        state.anrpLogs.push(data.text)
        break
      default:
        break
    }
  },
  // 集装箱修改
  updateContainerData (state, data: DeviceInfo) {
    switch (data.code) {
      case 'container_front':
        state.containerData.top = data.data
        break
      case 'container_after':
        state.containerData.bottom = data.data
        break
      case 'container_left':
        state.containerData.left = data.data
        break
      case 'container_right':
        state.containerData.right = data.data
        break
      default:
        break
    }
  }
}

export const actions = {}

export const deviceAll: Module<State, State> = {
  namespaced: true,
  state,
  mutations,
  actions
}
