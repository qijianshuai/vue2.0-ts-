import { Ajax, fetch } from '../utils/ajax'
/**
 * @author qijianshuai
 * @param action 1:报警
 * @description 测试报警
 */
export const testAlarm = (action = 1) => {
  return Ajax.get(`/testAlarm?action=${action}`)
}

/**
 * @author qijianshuai
 * @param align (center、left、right) color(green) size text valign(middle top botton)
 * @description 测试通道LED大屏
 */
export const testLedBigScreen = (align = 'center', color = 'green', size = '48', text = '', valign = 'middle') => {
  return Ajax.get(`/testBigLed?align=${align}&color=${color}&size=${size}&text=${text}&valign=${valign}`)
}

/**
 * @author qijianshuai
 * @param op dc、cp
 * @description 测试IC卡_收卡
 */
export const testICIn = (op: string) => {
  return Ajax.get(`/testICIn?op=${op}`)
}

/**
 * @author qijianshuai
 * @param op dh、es、dc、cp、sf
 * @description 测试IC卡_发卡
 */
export const testICOut = (op: string) => {
  return Ajax.get(`/testICOut?op=${op}`)
}

/**
 * @author qijianshuai
 * @param text
 * @description 测试配电柜LED屏（流程提示）
 */
export const testSmallLED = (text: string) => {
  return Ajax.get(`/testSmallLED?text=${text}`)
}

/**
 * @author qijianshuai
 * @param action 1红 2 绿
 * @description 测试入口红绿灯
 */
export const testInTrafficLights = (action = 1) => {
  return Ajax.get(`/testTrafficLights1?action=${action}`)
}

/**
 * @author qijianshuai
 * @param action 1红 2 绿
 * @description 测试出口红绿灯
 */
export const testOutTrafficLights = (action = 1) => {
  return Ajax.get(`/testTrafficLights2?action=${action}`)
}
