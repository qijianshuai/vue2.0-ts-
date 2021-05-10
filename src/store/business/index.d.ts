export interface BusinessState {
  homeBusiness: HomeBusiness
}

export interface HomeBusiness{
  /** 业务序号 */
  businessNo: string,
  /** 进闸时间 */
  lockInTime: string,
  /** ic卡id */
  cardId: string,
  /** 光学车牌 */
  numberPlate: string,
  /** 地磅重量 */
  weight: string,
  /** 车牌颜色 */
  color: string,
  /** 箱号 */
  caseNo: string,
  /** 车牌图片地址 */
  picPath: string
  /** 放行指令 */
  release: number
  /** 放行指令文本 */
  message: string
  /** 二维码 */
  qrcode: string
}
