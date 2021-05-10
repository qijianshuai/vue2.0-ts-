import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import { BaseAjax, BaseResponse } from './ajax.d'
const getAxiosInstance = (): AxiosInstance => {
  // 设置跨域路径与超时时间
  const ajax: AxiosInstance = Axios.create({
    baseURL: 'http://172.16.17.217:8081',
    timeout: 1000 * 12
  })
  // 配置请求拦截器
  ajax.interceptors.request.use((config: any) => {
    // 添加token
    return config
  }, (error: any) => {
    throw new Error(error)
  })

  // 配置响应拦截器
  ajax.interceptors.response.use((response: any) => {
    // 判断response 返回值是否存在
    if (response) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error('response 不存在'))
    }
  }, (error: any) => {
    throw new Error(error)
  })

  return ajax
}

const GetAxios = () => {
  const baseAjax: AxiosInstance = getAxiosInstance()
  const request = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
    return new Promise((resolve, reject) => {
      // 此处向后端发送请求
      baseAjax.request<BaseResponse<T>>(config).then((data: any) => {
        // 后端返回数据第一次处理
        const _data = data.data
        if (_data.status === 0) {
          resolve(_data)
        } else {
          reject(_data.message)
        }
      })
    })
  }
  // 封装各类型请求方法
  const Ajax: BaseAjax = {
    get: function<T> (url: string, config: object = {}): Promise<BaseResponse<T>> {
      const target: AxiosRequestConfig = {}
      const params = Object.assign(target, config, {
        method: 'GET',
        url: url
      })
      return request<T>(params)
    },
    delete: function<T> (url: string, config: object = {}): Promise<BaseResponse<T>> {
      const target: AxiosRequestConfig = {}
      return request<T>(
        Object.assign(target, config, {
          method: 'DELETE',
          url: url
        })
      )
    },
    head: function<T> (url: string, config: object = {}): Promise<BaseResponse<T>> {
      const target: AxiosRequestConfig = {}
      return request<T>(
        Object.assign(target, config, {
          method: 'HEAD',
          url: url
        })
      )
    },
    options: function<T> (url: string, config: object = {}): Promise<BaseResponse<T>> {
      const target: AxiosRequestConfig = {}
      return request<T>(
        Object.assign(target, config, {
          method: 'OPTIONS',
          url: url
        })
      )
    },
    post: function<T> (url: string, data: object = {}, config: object = {}): Promise<BaseResponse<T>> {
      const target: AxiosRequestConfig = {}
      return request<T>(
        Object.assign(target, config, {
          method: 'POST',
          url: url,
          data: data
        })
      )
    },
    put: function<T> (url: string, data: object = {}, config: object = {}): Promise<BaseResponse<T>> {
      const target: AxiosRequestConfig = {}
      return request<T>(
        Object.assign(target, config, {
          method: 'PUT',
          url: url,
          data: data
        })
      )
    },
    patch: function<T> (url: string, data: object = {}, config: object = {}): Promise<BaseResponse<T>> {
      const target: AxiosRequestConfig = {}
      return request<T>(
        Object.assign(target, config, {
          method: 'PATCH',
          url: url,
          data: data
        })
      )
    }
  }
  return Ajax
}

const service = Axios.create({
  baseURL: 'http://localhost:8083',
  timeout: 60 * 1000 // 1分钟超时
})

export const fetch = (options: any) => {
  return new Promise<any>(resolve => {
    service(options).then((response: any) => {
      if (options.response) {
        // 返回全部数据
        resolve(response)
      } else {
        // 不返回全部数据，只返回result数据
        if (response.status === 200) {
          if (response.data.status === 0) {
            // 成功
            resolve(response.data.result) // 把请求到的数据发到引用请求的地方
          } else {
            console.log(response.data.message || '接口请求失败')
          }
        } else {
          // Toast(response.data.message || '接口请求失败')
        }
      }
    }).catch((err: AxiosError) => {
      console.log('请求异常信息：' + err)
    })
  })
}
export const Ajax: BaseAjax = GetAxios()
