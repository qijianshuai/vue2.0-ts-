export interface PreferencesModel {
  id: number
  dataUrl: string
  password: string
  status: number // 通道状态
  chalNo: string // 通道
  iEType: string // 进出
  type: number // 通道类型
  dataNode: number // 数据发送节点
  ip: string // 监控地址
  port: string // 端口
  localPort: string // 本机端口
  PLC: string // PLC
  LED: string // LED
  plateUrl: string // 车牌照片路径
  iETypeList: ieTypeModel[] // 进出口标志列表
  // 数据发送节点列表
  dataNodeList: ieTypeModel[]
  // 通道状态
  statusList: ieTypeModel[]
  // 通道类型列表
  typeList: ieTypeModel[]
}

interface ieTypeModel {
  label: string
  value: string | number
}