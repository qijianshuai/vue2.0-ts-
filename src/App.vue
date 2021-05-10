<template>
  <div id="app" style="-webkit-app-region: drag">
    <!-- 头部导航 -->
    <header class="home-header">
      <h1>
        <img src="./assets/images/logo.png" alt="logo">
        海关只能卡口前端采集系统
      </h1>
      <div class="center">
          <div v-if="mode=== 0" class="select-item" :class="{active: state.currentRoutePath === '/'}" @click="$router.push('/')">
            <img v-show="state.currentRoutePath === '/'" src="./assets/images/yunxing_xuanzhong.png" alt="实时运行">
            <img v-show="state.currentRoutePath !== '/'" src="./assets/images/ynxing_weixuan.png" alt="实时运行">
            <span>实时运行</span>
          </div>
          <div v-if="mode=== 0" class="select-item" :class="{active: state.currentRoutePath === '/history'}" @click="$router.push('/history')">
            <img v-show="state.currentRoutePath === '/history'" src="./assets/images/lishi_xuanzhong.png" alt="历史查询">
            <img v-show="state.currentRoutePath !== '/history'" src="./assets/images/lishi_weixuan.png" alt="历史查询">
            <span>历史查询</span>
          </div>
          <div v-if="mode=== 1" class="select-item" :class="{active: state.currentRoutePath === '/system'}"  @click="$router.push('/system')">
            <img v-show="state.currentRoutePath.indexOf('/system') === -1" src="./assets/images/xitong_weixuan.png" alt="系统">
            <img v-show="state.currentRoutePath.indexOf('/system') !== -1" src="./assets/images/xitong_xuanzhong.png" alt="系统">
            <span>系统</span>
          </div>
          <div v-if="mode=== 0" class="select-item" :class="{active: state.currentRoutePath.indexOf('/deviceAllState') !== -1}"  @click="$router.push('/deviceAllState')">
            <img v-show="state.currentRoutePath.indexOf('/deviceAllState') === -1" src="./assets/images/xitong_weixuan.png" alt="系统">
            <img v-show="state.currentRoutePath.indexOf('/deviceAllState') !== -1" src="./assets/images/xitong_xuanzhong.png" alt="系统">
            <span>设备状态</span>
          </div>
          <div class="select-item" :class="{active: $route.path === '/preferences'}"  @click="$router.push('/setting')">
            <img v-show="$route.path.indexOf('/setting') === -1" src="./assets/images/shezhi-weixuan.png" alt="设置">
            <img v-show="$route.path.indexOf('/setting') !== -1" src="./assets/images/shezhi_xuanzhong.png" alt="设置">
            <span>设置</span>
          </div>
      </div>
      <div class="close" @click="closeMyApp">
        <img src="./assets/images/tuichu.png" alt="关闭">
      </div>
    </header>
    <router-view></router-view>
    <!-- 底部 -->
    <footer>
      <ul>
        <li>
          · 欢迎使用只能卡口前端数据采集系统
        </li>
        <li id="cur-date">
          · {{state.currentTime}}
        </li>
        <li>
          · 版权所有@中云智慧2016-2020
        </li>
        <li>
          · 版本号：4.0.0.1
        </li>
      </ul>
    </footer>
  </div>
</template>
<script lang='ts'>
import { Vue, Component, Watch } from 'vue-property-decorator'
import { closeApp } from './utils/progress'
import { Websocket } from './utils/websocket'
import { namespace } from 'vuex-class'
import { State, HomeDeviceModel } from '@/store/device/index.d'
import { BusinessState, HomeBusiness } from '@/store/business/index.d'
import moment from 'moment'
const deviceModel = namespace('deviceAll')
const businessModel = namespace('business')
@Component
export default class App extends Vue {
  @deviceModel.State((state:State) => state.homeDeviceInfo) homeDeviceInfo!:HomeDeviceModel;
  @deviceModel.State((state:State) => state.mode) mode!:number;
  @deviceModel.Mutation('updateDevice') updateDevice!: Function;
  @businessModel.State((state:BusinessState) => state.homeBusiness) homeBusiness!:HomeBusiness;
  private state = {
    currentRoutePath: this.$route.path,
    currentTime: moment(Date.now()).format('yyyy-MM-DD HH:mm:ss')
  }

  private wsInstance: Websocket
  private wsInstanceBusiness: Websocket
  @Watch('$route.path')
  path () {
    this.state.currentRoutePath = this.$route.path
  }

  timer = setInterval(() => {
    this.state.currentTime = moment(Date.now()).format('yyyy-MM-DD HH:mm:ss')
  }, 1000)

  closeMyApp () {
    closeApp()
  }

  created () {
    const baseurl = '172.16.17.217:8081'
    // let baseurl = ''
    // if (localStorage.getItem('proxyUrl')) {
    //   baseurl = JSON.parse(localStorage.getItem('proxyUrl') as string)
    // } else {
    //   baseurl = 'localhost:8080'
    // }
    // 设备
    this.wsInstance = new Websocket(`ws://${baseurl}/websocket/monitor`, (data: any) => {
      switch (data.code) {
        // 入口地感
        case 'sense_coil_entry':
          this.homeDeviceInfo.senseCoilEntry = data.state
          // 修改设备状态
          this.updateDevice(data)
          break
        // 出口地感
        case 'sense_coil_exit':
          this.homeDeviceInfo.senseCoilExit = data.state
          // 修改设备状态
          this.updateDevice(data)
          break
        // 入口光栅
        case 'raster_entry':
          this.homeDeviceInfo.rasterEntry = data.state
          // 修改设备状态
          this.updateDevice(data)
          break
        // 到位光栅1
        case 'raster_arrive1':
          this.homeDeviceInfo.rasterArrive1 = data.state
          // 修改设备状态
          this.updateDevice(data)
          break
        // 到位光栅2
        case 'raster_arrive2':
          this.homeDeviceInfo.rasterArrive2 = data.state
          // 修改设备状态
          this.updateDevice(data)
          break
        // 出口光栅
        case 'raster_exit':
          this.homeDeviceInfo.rasterExit = data.state
          // 修改设备状态
          this.updateDevice(data)
          break
        // ic读写卡
        case 'ic_reader_writer':
          this.homeDeviceInfo.icReaderWriter = data.state
          // 修改设备状态
          this.updateDevice(data)
          break
        // 上位机
        case 'wincc':
          this.homeDeviceInfo.wincc = data.state
          // 修改设备状态
          this.updateDevice(data)
          break
        // 通道前置摄像机
        case 'vehicle_front':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 通道后置摄像机
        case 'vehicle_after':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 集装箱前置摄像机
        case 'container_front':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 集装箱后置摄像机
        case 'container_after':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 集装箱左置摄像机
        case 'container_left':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 集装箱右置摄像机
        case 'container_right':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 车底相机
        case 'car_bottom_camera':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 中控
        case 'plc':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 串口服务器
        case 'com_server':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 地磅
        case 'gross_weight':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 入口监控
        case 'monitor_entry':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 出口监控
        case 'monitor_exit':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 漏水
        case 'water_leakage':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 温湿度
        case 'temp':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 声光报警
        case 'alarm':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 电子栏杆
        case 'railing':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 闸机
        case 'gate':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 地感雷达
        case 'radar':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 入口红绿灯
        case 'traffic_light_entry':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 出口红绿灯
        case 'traffic_light_exit':
          // 修改设备状态
          this.updateDevice(data)
          break
        // IC卡进卡设备
        case 'ic_in':
          // 修改设备状态
          this.updateDevice(data)
          break
        // IC卡出卡设备
        case 'ic_out':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 二维码
        case 'qrcode':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 通道LED交互屏
        case 'led_guide':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 通道LED大屏
        case 'led_remind':
          // 修改设备状态
          this.updateDevice(data)
          break
        // RFID天线
        case 'rfid_antenna':
          // 修改设备状态
          this.updateDevice(data)
          break
        // RFID读写器
        case 'rfid_reader_writer':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 可视对讲总机
        case 'video_intercom_server':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 可视对讲分机1
        case 'video_intercom_client1':
          // 修改设备状态
          this.updateDevice(data)
          break
        // 可视对讲分机2
        case 'video_intercom_client2':
          // 修改设备状态
          this.updateDevice(data)
          break
        default:
          break
      }
    })
    // 业务
    this.wsInstanceBusiness = new Websocket(`ws://${baseurl}/websocket/business`, (data: any) => {
      console.log(data)
      switch (data.code) {
        // ic
        case 'ic_reader_writer':
          this.homeBusiness.cardId = data.data
          break
        // 业务 进闸时间
        case 'entry_gate':
          this.homeBusiness.lockInTime = data.data.entry_time
          this.homeBusiness.businessNo = data.data.bis_id
          break
        // 地磅
        case 'gross_weight':
          this.homeBusiness.weight = data.data
          break
        // 车牌
        case 'vehicle':
          this.homeBusiness.numberPlate = data.data.licenseNumber
          this.homeBusiness.color = data.data.licensePlateColor
          this.homeBusiness.picPath = data.data.picPath
          break
        // 箱号
        case 'container':
          this.homeBusiness.caseNo = data.data
          break
        // 旅行指令
        case 'release':
          this.homeBusiness.release = data.data.release
          this.homeBusiness.message = data.data.message
          break
        // 二维码
        case 'qrcode':
          this.homeBusiness.qrcode = data.data
          break
        // 清空上一辆车信息
        case 'clear':
          this.homeBusiness.businessNo = ''
          this.homeBusiness.lockInTime = ''
          this.homeBusiness.cardId = ''
          this.homeBusiness.numberPlate = ''
          this.homeBusiness.weight = ''
          this.homeBusiness.color = ''
          this.homeBusiness.caseNo = ''
          this.homeBusiness.picPath = ''
          break
        default:
          break
      }
    })
  }

  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
<style lang="less">
body, ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.home-header{
  // background-color: yellowgreen;
  position: relative;
  height: 8.25vh;
  box-shadow: 0px 3px 8px 0px rgba(104, 185, 144, 0.1);
  h1 {
    position: relative;
    float: left;
    margin: 0 40px;
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #333333;
    line-height: 66px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 32px;
      height: 23px;
      margin-right: 8px;
    }
  }
  .center{
    position: absolute;
    width: 100%;
    height: 8.25vh;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    .select-item {
      height: 100%;
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 26px;
        height: 24px;
      }
      &.active {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #56BF8A;
        background-image: url('./assets/images/xuanzhongbeijing.png');
      }
    }
  }
  .close {
    cursor: pointer;
    position: absolute;
    right: 40px;
    padding-top: 20px;
    box-sizing: border-box;
  }
}
footer {
  position: absolute;
  bottom: 0;
  height: 40px;
  line-height: 40px;
  width: 100%;
  box-shadow: 0px 3px 8px 0px rgba(104, 185, 144, 0.1);
  ul {
    display: flex;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #BABABA;
    justify-content: space-evenly;
  }
}
</style>
