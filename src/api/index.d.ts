export interface VehiclePageVOModel {
  /** IC卡号 */
  icNo: string,
  /** 过闸时间_开始 */
  passGateBegin: string,
  /** 过闸时间_结束 */
  passGateEnd: string,
  /** 放行结果 0放行 1不放行 */
  releaseResult: number,
  /** 车牌号码 */
  vehicleNo: string
}

export interface HistoryMode {
  /** 当前页码 */
  pageNum: number;
  /** 当前页大小 */
  pageSize: number;
  /** 总页数 */
  totalPages: number
  /** 总条数 */
  totalSize: number
  /** 数据 */
  content: any
}

export interface DevicesModel {
  /** 是否启用 */
  enabled: number
  /** 设备code */
  deviceCode: string
  /** 设备描述 */
  json: any
  /** 名称 */
  deviceName: string
  /** 备注 */
  remark: string
  /** 状态 */
  sort: number
  /** id */
  id: number
}

export interface ChannelModel {
  chalNo: string
  json: {
    LED: string
    PLC: string
    dataNode: number,
    ip: string
    localPort: string
    plateUrl: string
    port: string
  }
  iEType: string
  id: number
  status: number
  type: number
}

//查询所有通道
export interface SelectChannelModel {
  /** 通道号 */
  chalNo: string,
  /** 进出标志 */
  iEType: string
  id: number,
  /** 其他数据JSON串 */
  json: {
    LED: string
    PLC: string
    dataNode: number,
    ip: string
    localPort: string
    plateUrl: string
    port: string
  }
  /** 通道状态 */
  status: number,
  /** 通道类型 */
  type: number
}

export interface VideoModel {
  result: string,
  status: number,
  message: string
}