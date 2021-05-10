export interface State {
  id: number,
  /** 前端数据库路径 */
  dataUrl: string,
  /** 用户密码 */
  password: string,
  /** 通道状态 */
  status: number,
  /** 通道编号 */
  chalNo: string,
  /** 进出标志 */
  iEType: string,
  /** 通道类型 */
  type: number,
  /** 数据发送节点 */
  dataNode: number,
  /** 监控地址 */
  ip: string,
  /** 端口 */
  port: string,
  /** 本机端口 */
  localPort: string,
  /** PLC */
  PLC: string ,
  /** LED */
  LED: string,
  /** 车牌照片路径 */
  plateUrl: string,
  /** 进出标志选项 */
  iETypeList: typeModel[] ,
  /** 数据发送节点选项 */
  dataNodeList: typeModel[]
  /** 通道状态 */
  statusList: typeModel[],
  /** 通道类型 */
  typeList: typeModel[]
}
interface typeModel {
  label: string,
  value: number | string
}
// interface dataNodeModel {
//   label: string,
//   value: number
// }