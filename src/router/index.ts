import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { getCameralistAndProxyIp, closeApp } from '../utils/progress'
Vue.use(VueRouter)
// 第一次路由加载
let num = true
const routes: Array<RouteConfig> = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/view/home/index.vue')
  },
  // 历史
  {
    name: 'history',
    path: '/history',
    component: () => import('@/view/history/index.vue')
  },
  // 系统
  {
    name: 'system',
    path: '/system',
    component: () => import('../view/system/index.vue'),
    children: [
      // 中控模块
      {
        path: '/system/control',
        component: () => import('../view/system/control/index.vue')
      },
      // 采集传感器
      {
        path: '/system/transducer',
        component: () => import('../view/system/transducer/index.vue')
      },
      // 采集传感器-配置
      {
        path: '/system/transducersystem',
        component: () => import('../view/system/transducer/transducer-system/index.vue')
      },
      // 指示模块
      {
        path: '/system/instruct',
        component: () => import('../view/system/instruct/index.vue')
      },
      // 通道LED大屏
      {
        path: '/system/bigScreen',
        component: () => import('../view/system/bigScreen/index.vue')
      },
      // 通道LED大屏-配置
      {
        path: '/system/bigScreensystem',
        component: () => import('../view/system/bigScreen/big-system/index.vue')
      },
      // 车底相机
      {
        path: '/system/bottomCamera',
        component: () => import('../view/system/bottomCamera/index.vue')
      },
      // 车底相机-配置
      {
        path: '/system/bottomCamerasystem',
        component: () => import('../view/system/bottomCamera/bottom-system/index.vue')
      },
      // 可视化对讲
      {
        path: '/system/visualize',
        component: () => import('../view/system/visualize/index.vue')
      },
      // 环境监控
      {
        path: '/system/environment',
        component: () => import('../view/system/environment/index.vue')
      },
      // 环境监控-配置
      {
        path: '/system/environmentsystem',
        component: () => import('../view/system/environment/environment-system/index.vue')
      },
      // 通道LED交互屏
      {
        path: '/system/interactiveScreen',
        component: () => import('../view/system/interactiveScreen/index.vue')
      },
      // 通道LED交互屏-配置
      {
        path: '/system/interactiveScreensystem',
        component: () => import('../view/system/interactiveScreen/interactive-screen-system/index.vue')
      },
      // 二维码设备
      {
        path: '/system/qrcode',
        component: () => import('../view/system/qrcode/index.vue')
      },
      // 二维码设备-配置
      {
        path: '/system/qrcodesystem',
        component: () => import('../view/system/qrcode/qrcode-system/index.vue')
      },
      // 电子车牌
      {
        path: '/system/licenseplate',
        component: () => import('../view/system/licenseplate/index.vue')
      },
      // 车牌识别1
      {
        path: '/system/anpr',
        component: () => import('../view/system/anpr/index.vue')
      },
      // 车牌识别1-设置
      {
        path: '/system/anprsystem',
        component: () => import('../view/system/anpr/anpr-system/index.vue')
      },
      // 车牌识别2
      {
        path: '/system/anrp',
        component: () => import('../view/system/anrp/index.vue')
      },
      // 车牌识别2-设置
      {
        path: '/system/anrpsystem',
        component: () => import('../view/system/anrp/anrp-system/index.vue')
      },
      // 车牌发送
      {
        path: '/system/lprsend',
        component: () => import('../view/system/lprsend/index.vue')
      },
      // 车牌发送-设置
      {
        path: '/system/lprsendsystem',
        component: () => import('../view/system/lprsend/lprsend-system/index.vue')
      },
      // IC卡采集
      {
        path: '/system/ic-card',
        component: () => import('../view/system/ic-card/index.vue')
      },
      // IC卡采集-设置
      {
        path: '/system/ic-cardsystem',
        component: () => import('../view/system/ic-card/ic-system/index.vue')
      },
      // 地磅采集
      {
        path: '/system/scskd',
        component: () => import('../view/system/scskd/index.vue')
      },
      // 地磅采集-设置
      {
        path: '/system/scskdsystem',
        component: () => import('../view/system/scskd/scskd-system/index.vue')
      },
      // 集装箱识别
      {
        path: '/system/container',
        component: () => import('../view/system/container/index.vue')
      },
      // 集装箱识别-设置
      {
        path: '/system/containersystem/:key',
        component: () => import('../view/system/container/container-system/index.vue')
      },
      // 车道引导
      {
        path: '/system/driveway',
        component: () => import('../view/system/driveway/index.vue')
      },
      // 车道引导-设置
      {
        path: '/system/drivewaysystem',
        component: () => import('../view/system/driveway/driveway-system/index.vue')
      },
      // 通道监控
      {
        path: '/system/channe',
        component: () => import('../view/system/channe/index.vue')
      },
      // 通道监控-设置
      {
        path: '/system/channesystem/:id',
        component: () => import('../view/system/channe/channe-system/index.vue')
      },
      // 电子栏杆
      {
        path: '/system/handrail',
        component: () => import('../view/system/handrail/index.vue')
      },
      // 电子栏杆-设置
      {
        path: '/system/handrailsystem',
        component: () => import('../view/system/handrail/handrail-system/index.vue')
      },
      // 海关阅读
      {
        path: '/system/customs',
        component: () => import('../view/system/customs/index.vue')
      },
      // 海关阅读
      {
        path: '/system/customssystem',
        component: () => import('../view/system/customs/customs-system/index.vue')
      },
      {
        redirect: '/system/control',
        path: '/system'
      }
    ]
  },
  // 设置
  {
    name: 'setting',
    path: '/setting',
    component: () => import('../view/setting/index.vue'),
    children: [
      // 参数设置
      {
        name: 'preferences',
        path: '/setting/preferences',
        component: () => import('../view/setting/preferences/index.vue')
      },
      // 设备状态
      {
        path: '/setting/deviceState',
        component: () => import('../view/setting/deviceState/index.vue')
      },
      // 数据同步
      {
        path: '/setting/dataSync',
        component: () => import('../view/setting/dataSync/index.vue')
      },
      // 网络串口
      {
        path: '/setting/networkGorge',
        component: () => import('../view/setting/networkGorge/index.vue')
      },
      {
        redirect: '/setting/preferences',
        path: '/setting'
      }
    ]
  },
  // 设备状态
  {
    name: 'deviceAllState',
    path: '/deviceAllState',
    component: () => import('../view/deviceAllState/index.vue')
  },
  // 设备状态2
  {
    name: 'deviceAllState2',
    path: '/deviceAllState2',
    component: () => import('../view/deviceAllState/deviceSystem/index.vue')
  },
  {
    redirect: '/',
    path: '/home'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (num) {
    getCameralistAndProxyIp((data: any) => {
      localStorage.setItem('camerasInfo', JSON.stringify(data.camerasInfo))
      localStorage.setItem('proxyUrl', JSON.stringify(data.proxyUrl))
      localStorage.setItem('cameraUrl', JSON.stringify(data.cameraUrl))
    })
    setTimeout(() => {
      next()
      num = false
    })
  } else {
    next()
  }
})

export default router
