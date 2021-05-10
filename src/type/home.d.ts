export interface MonitoringLogModel {
  /* id */
  code: string
  /* 日期 内容 */
  obj: string
}

export interface State {
  /** 运行监控日志列表 */
  monitoringLogs: MonitoringLogModel[]
  /** 地感状态 */
  senseState: number
  /** 红外状态 */
  infraredState: number
  /** IC采集 */
  ic: number
  /** 网络状态 */
  networkState: number
  /** 基础信息 */
  baseInfo: {
    /** 业务序号 */
    businessNo: string
    /** 进闸时间 */
    lockInTime: string
    /** IC卡ID */
    cardId: string
    /** 光学车牌 */
    numberPlate: string
    /** 地磅重量 */
    weight: string
    /** 车牌颜色 */
    color: string
    /** 箱号 */
    caseNo: string
    /** chepai照片 */
    picPath: string
  }
  /** 海关业务平台返回放行指令信息 */
  result: string,
  content: string
}