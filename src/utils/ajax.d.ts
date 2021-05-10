import { AxiosRequestConfig } from 'axios'

/** 接口响应基本数据 */
export declare class BaseResponse<T> {
  /** 状态, 0:成功，1:失败 */
  status: 0 | 1

  /** 消息 */
  message: string

  /** 结果 */
  result: T
}

/** 基本 Ajax 格式 */
export declare class BaseAjax {
  get: <T>(url: string, config?: AxiosRequestConfig) => Promise<BaseResponse<T>>

  delete: <T>(url: string, config?: AxiosRequestConfig) => Promise<BaseResponse<T>>

  head: <T>(url: string, config?: AxiosRequestConfig) => Promise<BaseResponse<T>>

  options: <T>(url: string, config?: AxiosRequestConfig) => Promise<BaseResponse<T>>

  post: <T>(url: string, data?: object, config?: AxiosRequestConfig) => Promise<BaseResponse<T>>

  put: <T>(url: string, data?: object, config?: AxiosRequestConfig) => Promise<BaseResponse<T>>

  patch: <T>(url: string, data?: object, config?: AxiosRequestConfig) => Promise<BaseResponse<T>>
}
