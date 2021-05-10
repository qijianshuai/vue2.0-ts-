import { MonitoringLogModel } from '../home'
export interface State {
  /** 识别结果 */
  result: string
  /** 图片 */
  imgUrl: string
  color?: string,
  logList?: ItemModel[]
}

export interface ItemModel {
  code: string
  obj: any
}
