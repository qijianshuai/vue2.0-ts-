import { Ajax } from '../utils/ajax'
import { VehiclePageVOModel, HistoryMode, DevicesModel, ChannelModel, SelectChannelModel } from './index.d'
import { State } from '../type/system/anpr.d'
/**
 * @author qijianshuai
 * @returns d
 * @description 实时查询 抬杆
 */
export const getManualUpLever = (action: number) => {
  return Ajax.get(`/liftRailing/${action}`)
}

/**
 * @author qijianshuai
 * @description 历史查询
 */
export const getHistoryLogs = (currentPage: number, pageSize: number, vehiclePageVO: VehiclePageVOModel) => {
  return Ajax.post<HistoryMode>(`/vehicle/${currentPage}/${pageSize}`, vehiclePageVO)
}

/**
 * @author qijianshuai
 * @description 设备查询
 */
export const selectDevices = (deviceCode: string) => {
  return Ajax.get<State>(`/device/${deviceCode}`)
}

/**
 * @author qijianshuai
 * @description 所有设备查询
 */
export const selectDevicesAll = () => {
  return Ajax.get<State>('/device/')
}

/**
 * @author qijianshuai
 * @description 添加查询
 */
// export const addDevices = (data: DevicesModel) => {
//   return Ajax.post('/device/', {
//     channelId: data.channelId,
//     deviceCode: data.deviceCode,
//     json: data.json,
//     deviceIndex: data.channelId,
//     id: data.channelId
//   })
// }

/**
 * @author qijianshuai
 * @description 设备更新
 */
export const updateDevices = (data: DevicesModel) => {
  return Ajax.put('/device/', {
    deviceCode: data.deviceCode,
    enabled: data.enabled,
    json: data.json,
    remark: data.remark,
    deviceName: data.deviceName,
    sort: data.sort,
    id: data.id
  })
}

/**
 * @author qijianshuai
 * @description 查询所有通道
 */
export const selectChannels = () => {
  return Ajax.get<SelectChannelModel>('/channel/')
}

/**
 * @author qijianshuai
 * @description 添加通道
 */
export const addChannel = (data: ChannelModel) => {
  return Ajax.post('/channel/', {
    chalNo: data.chalNo,
    json: data.json,
    iEType: data.iEType,
    id: data.id,
    status: data.status,
    type: data.type
  })
}

/**
 * @author qijianshuai
 * @description 更新通道
 */
export const updateChannel = (data: ChannelModel) => {
  return Ajax.put('/channel/', {
    chalNo: data.chalNo,
    json: data.json,
    iEType: data.iEType,
    id: data.id,
    status: data.status,
    type: data.type
  })
}
