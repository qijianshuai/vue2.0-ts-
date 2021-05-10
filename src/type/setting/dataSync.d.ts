export interface State {
  /** 业务序号 */
  business: '',
  /** IC卡卡号 */
  icCard: '',
  /** 称重重量 */
  weight: '',
  /** 车牌号码 */
  numberplace: '',
  /** 场站编号 */
  terminal: string,
  /** 通道编号 */
  channel: string,
  /** 进出标志 */
  inOut: string,
  /** 进出标志选项 */
  inOutList: inOutModel[] ,
}
interface inOutModel {
  label: string,
  value: number
}
interface dataNodeModel {
  label: string,
  value: number
}