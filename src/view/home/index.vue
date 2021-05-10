<template>
  <!-- 内容区域 -->
  <section class="home">
    <!-- <button @click="ac">导出通话记录</button> -->
    <!-- 左侧内容 -->
    <aside>
      <!-- 图片区域 -->
      <div class="img">
        <!-- 视频1 -->
        <!-- <video class="big" id="video1" muted autoplay></video> -->
        <m-video :vip="cameraFlags.big" flag='big'></m-video>
        <m-video :vip="cameraFlags.small" flag='small'></m-video>
        <img :src="homeBusiness.picPath" class="num" alt="" v-if="homeBusiness.picPath">
        <div v-else class="num">
          暂无图片
        </div>
      </div>
      <!-- 设备状态 -->
      <div class="status">
        <div class="tit">
          <i></i>
          设备状态
        </div>
        <div class="cont">
          <ul>
            <li>
              地感状态
              <!-- 亮1正常运行 蓝-2触发中 灰-3未启用(未启动) 红-4故障 -->
              <img v-show="homeDeviceInfo.senseCoilEntry === 1" src="../../assets/images/liangdeng.png" alt="">
              <!-- 不亮 -->
              <div v-show="homeDeviceInfo.senseCoilEntry === 2" class="blue"></div>
              <div v-show="homeDeviceInfo.senseCoilEntry === 3" class="no"></div>
              <div v-show="homeDeviceInfo.senseCoilEntry === 4" class="red"></div>
              <!-- 亮1正常运行 蓝-2触发中 灰-3未启用(未启动) 红-4故障 -->
              <img v-show="homeDeviceInfo.senseCoilExit === 1" src="../../assets/images/liangdeng.png" alt="">
              <!-- 不亮 -->
              <div v-show="homeDeviceInfo.senseCoilExit === 2" class="blue"></div>
              <div v-show="homeDeviceInfo.senseCoilExit === 3" class="no"></div>
              <div v-show="homeDeviceInfo.senseCoilExit === 4" class="red"></div>
            </li>
            <li>
              红外状态
              <!-- 1 -->
              <img v-show="homeDeviceInfo.rasterEntry === 1" src="../../assets/images/liangdeng.png" alt="">
              <div v-show="homeDeviceInfo.rasterEntry === 3" class="no"></div>
              <div v-show="homeDeviceInfo.rasterEntry === 2" class="blue"></div>
              <div v-show="homeDeviceInfo.rasterEntry === 4" class="red"></div>
              <!-- 2 -->
              <img v-show="homeDeviceInfo.rasterArrive1 === 1" src="../../assets/images/liangdeng.png" alt="">
              <div v-show="homeDeviceInfo.rasterArrive1 === 3" class="no"></div>
              <div v-show="homeDeviceInfo.rasterArrive1 === 2" class="blue"></div>
              <div v-show="homeDeviceInfo.rasterArrive1 === 4" class="red"></div>
              <!-- 3 -->
              <img v-show="homeDeviceInfo.rasterArrive2 === 1" src="../../assets/images/liangdeng.png" alt="">
              <div v-show="homeDeviceInfo.rasterArrive2 === 3" class="no"></div>
              <div v-show="homeDeviceInfo.rasterArrive2 === 2" class="blue"></div>
              <div v-show="homeDeviceInfo.rasterArrive2 === 4" class="red"></div>
              <!-- 4 -->
              <img v-show="homeDeviceInfo.rasterExit === 1" src="../../assets/images/liangdeng.png" alt="">
              <div v-show="homeDeviceInfo.rasterExit === 3" class="no"></div>
              <div v-show="homeDeviceInfo.rasterExit === 2" class="blue"></div>
              <div v-show="homeDeviceInfo.rasterExit === 4" class="red"></div>
            </li>
            <li>
              IC采集
              <!-- 亮 -->
              <img v-show="homeDeviceInfo.icReaderWriter === 1" src="../../assets/images/liangdeng.png" alt="">
              <!-- 不亮 -->
              <div v-show="homeDeviceInfo.icReaderWriter === 3" class="no"></div>
              <div v-show="homeDeviceInfo.icReaderWriter === 2" class="blue"></div>
              <div v-show="homeDeviceInfo.icReaderWriter === 4" class="red"></div>
            </li>
            <li>
              网络状态
              <main v-show="homeDeviceInfo.wincc === 1">
                <!-- 良好 -->
                <img src="../../assets/images/wifi.png" alt="">
                <span>良好</span>
              </main>
              <main v-show="homeDeviceInfo.wincc !== 1">
                <!-- 不通 -->
                <img src="../../assets/images/wifi-error.png" alt="">
                <span class="gray">断开</span>
              </main>
            </li>
          </ul>
        </div>
      </div>
      <!-- 基础信息 -->
      <div class="status">
        <div class="tit">
          <i></i>
          基础信息
        </div>
        <div class="info">
          <ul>
            <li>
              <span>业务序号</span>
              <input type="text" :value="homeBusiness.businessNo">
            </li>
            <li>
              <span>进闸时间</span>
              <input type="text" :value="homeBusiness.lockInTime">
            </li>
            <li>
              <span>IC卡ID</span>
              <input type="text" :value="homeBusiness.cardId">
            </li>
            <li>
              <span>光学车牌</span>
              <input type="text" :value="homeBusiness.numberPlate">
            </li>
            <li>
              <span>地磅重量</span>
              <input type="text" :value="homeBusiness.weight">
            </li>
            <li>
              <span>车牌颜色</span>
              <input type="text" :value="homeBusiness.color">
            </li>
            <li>
              <span>箱号</span>
              <input type="text" :value="homeBusiness.caseNo">
            </li>
          </ul>
        </div>
      </div>
      <!-- 海关业务平台返回放行指令信息 -->
      <div class="status sea">
        <div class="tit">
          <i></i>
          海关业务平台返回放行指令信息
        </div>
        <div class="last">
          <!-- 未匹配到车辆放行信息 -->
          <div class="left" v-show="homeBusiness.release === 1">
            <div class="bo"></div>
            <span>
              {{homeBusiness.message}}
            </span>
          </div>
          <!-- 放行 -->
          <div class="left yes" v-show="homeBusiness.release !== 1 && homeBusiness.release !== 2">
            <div class="bo yes"></div>
            <span>
              {{homeBusiness.message}}
            </span>
          </div>
          <!-- 禁止通过 -->
          <div class="left no-yes" v-show="homeBusiness.release === 2">
            <div class="bo no-yes"></div>
            <span>
              {{homeBusiness.message}}
            </span>
          </div>
          <div class="right" @click="manualUpLever">
            <img ref="img" src="../../assets/images/taigan.png" alt="">
            <div class="active">
              手动抬杆
            </div>
          </div>
        </div>
      </div>
    </aside>
    <!-- 右侧区域 -->
    <article>
      <div class="head-tip">
        <i></i>
        <span>运行监控日志</span>
        <div class="rest" @click="restLog">
          清空
          <img src="../../assets/images/qinkong.png" alt="">
        </div>
      </div>
      <!-- 消息 -->
      <div class="art-cont">
        <div class="item" v-for="(item, index) in state.monitoringLogs" :key="index">
          <!-- <span class="time">
            {{item.date}}
            </span> -->
            <span class="content">
              {{item.text}}
            </span>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" scope>
import { Vue, Component } from 'vue-property-decorator'
import { getManualUpLever } from '@/api/index'
import { Websocket } from '../../utils/websocket'
import { exportLogs, exportLogin, exportLoginStatus, exportLogsStatus } from '@/utils/progress'
import { namespace } from 'vuex-class'
import { State, HomeDeviceModel } from '@/store/device/index.d'
import { HomeBusiness, BusinessState } from '@/store/business/index.d'
import mqtt from 'mqtt'
const ipcRenderer = window.ipcRenderer
const deviceModel = namespace('deviceAll')
const businessModel = namespace('business')
@Component({
})
export default class Home extends Vue {
  $refs !: {
    img: HTMLImageElement;
  }

  @deviceModel.State((state:State) => state.homeDeviceInfo) homeDeviceInfo!:HomeDeviceModel;
  @businessModel.State((state:BusinessState) => state.homeBusiness) homeBusiness!:HomeBusiness;
  private state = {
    monitoringLogs: [] as any[],
    senseState: 0,
    infraredState: [1, 2, 3, 4],
    ic: 1,
    networkState: 1,
    result: 0,
    content: '放行'
  }

  private ac = () => {
    exportLogs()
  }

  private wsInstance: Websocket

  // 摄像头播放地址标识
  private cameraFlags = {
    big: 'traffic_pre',
    small: 'plate_pre'
  }

  // 登陆导出
  exportLogs () {
    exportLogin()
    exportLoginStatus((data: any) => {
      console.log('登陆返回状态', data)
      // 尝试导出
      exportLogs()
      exportLogsStatus((data: any) => {
        console.log('导出返回状态', data)
        if (data === 'error') {
          console.log('导出失败', data)
        }
      })
    })
  }

  // 清空
  private restLog () {
    this.state.monitoringLogs = []
  }

  // 手动抬杆
  manualUpLever = async () => {
    this.$refs.img.style.display = 'none'
    const result = await getManualUpLever(1)
    this.$refs.img.style.display = 'block'
    if (result.status === 0) {
      this.$message.success('抬杆成功')
    } else {
      this.$message.error(result.message)
    }
  }

  created () {
    // const baseurl = '172.16.17.217:8081'
    let baseurl = ''
    if (localStorage.getItem('proxyUrl')) {
      baseurl = JSON.parse(localStorage.getItem('proxyUrl') as string)
    } else {
      baseurl = 'localhost:8080'
    }
    this.wsInstance = new Websocket(`ws://${baseurl}/websocket/running`, (data: any) => {
      if (this.state.monitoringLogs.length >= 200) {
        this.state.monitoringLogs.splice(0, 1)
        this.state.monitoringLogs.push(data)
      } else {
        this.state.monitoringLogs.push(data)
      }
    })
  }

  mounted () {
    if (localStorage.getItem('camerasInfo')) {
      const data = JSON.parse(localStorage.getItem('camerasInfo'))
      this.cameraFlags.big = data.home.big
      this.cameraFlags.small = data.home.small
    }
    // 登陆导出页面，接收导出页面登录状态
    exportLogin()
    exportLoginStatus((data: any) => {
      console.log(data)
    })
  }

  beforeDestroy () {
    this.wsInstance.closeWebsocket(false)
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
