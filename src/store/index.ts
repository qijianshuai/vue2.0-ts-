import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { deviceAll } from './device'
import { business } from './business'
Vue.use(Vuex)

export const store: StoreOptions<any> = {
  state: {
    systemState: {
      instruct: [] as any[],
      bigScreen: [] as any[], // 大屏
      icCard: [] as any[], // ic
      interactiveScreen: [] as any[], // 交互屏
      handraild: [] as any[], // 道闸栏杆
      anpr: [] as any[], // 车牌识别相机
      transducer: [] as any[], // 采集传感器
      visualize: [] as any[], // 可视化对讲
      qrcode: [] as any[], // IC卡采集
      licensePlate: [] as any[], // 电子车牌
      container: [] as any[] // 集装箱识别
    },
    // 所有设备状态
    devicesState: {}
  },
  mutations: {},
  actions: {},
  modules: {
    deviceAll,
    business
  }
}
export default new Vuex.Store<any>(store)
