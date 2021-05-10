export interface State {
  /** 查询表单 */
  searchInfo: {
    /** IC卡号 */
    cardNo: string
    /** 车牌号码 */
    numberPlate: string
    /** 放行结果 */
    releaseResult: number
    /** 过闸时间 */
    startTime: string
    endTime: string
  }
  /** 查询结果 */
  resultList: carModel[]
}

interface carModel {
  /** 业务序号 */
  bisNo: string
  /** 车牌颜色 */
  color: string
  /** 放行结果 */
  releaseResult: string
  /** 放行模式 */
  releaseMode: string
  /** IC卡ID */
  icId: string
  /** IC卡号 */
  icNo: string
  /** 车牌号 */
  vehicleNo: string
  /** LED显示海关放行指令 */
  customerCmd: string
}