import { Module, ActionTree, MutationTree } from 'vuex'
import { BusinessState } from './index.d'
export const state: BusinessState = {
  homeBusiness: {
    /** 业务序号 */
    businessNo: '',
    /** 进闸时间 */
    lockInTime: '',
    /** ic卡id */
    cardId: '',
    /** 光学车牌 */
    numberPlate: '',
    /** 地磅重量 */
    weight: '',
    /** 车牌颜色 */
    color: '',
    /** 箱号 */
    caseNo: '',
    /** 车牌图片地址 */
    picPath: '',
    /** 放行指令 */
    release: 0,
    /** 放行指令文本 */
    message: '',
    /** 二维码 */
    qrcode: ''
  }
}

export const mutations: MutationTree<BusinessState> = {

}

export const actions = {}

export const business: Module<BusinessState, BusinessState> = {
  namespaced: true,
  state,
  mutations,
  actions
}
