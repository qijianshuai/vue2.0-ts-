<template>
  <main class="container-system">
    <!-- 内容 -->
    <div class="container-system-content">
      <div>
        <h2>道闸栏杆入口相机</h2>
        <div class="data">
          <div class="left">
            <p>车牌相机端口</p>
            <input type="text" class="no-btn" v-model="state.cameraPort">
            <p>相机密码</p>
            <input type="text" class="no-btn" v-model="state.cameraPasswd">
          </div>
          <div class="right">
            <p>车牌相机IP</p>
            <input type="text" v-model="state.cameraIp">
            <p>相机用户名</p>
            <input type="text" v-model="state.cameraName">
          </div>
        </div>
      </div>
      <!-- 光学车牌照片路径IMAGES -->
      <div class="no-tmp">
        <p>光学车牌照片路径IMAGES (非TMP)</p>
        <div class="path">
          <input id="path-name2" type="text" disabled v-model="state.vehicleNoPic">
          <div class="btn">
            <img src="../../../../assets/images/sandian.png" alt="">
            <input type="file"  @change="(e) => fileChange(e,false)" id="path2">
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="btns">
        <button class="cancel" @click="$router.back()">取消</button>
        <button class="determine" @click="startUpdateDevices">确定</button>
      </div>
    </div>
    <div class="container-system-content">
      <div>
        <h2>道闸栏杆出口相机</h2>
        <div class="data">
          <div class="left">
            <p>车牌相机端口</p>
            <input type="text" class="no-btn" v-model="state2.cameraPort">
            <p>相机密码</p>
            <input type="text" class="no-btn" v-model="state2.cameraPasswd">
          </div>
          <div class="right">
            <p>车牌相机IP</p>
            <input type="text" v-model="state2.cameraIp">
            <p>相机用户名</p>
            <input type="text" v-model="state2.cameraName">
          </div>
        </div>
      </div>
      <!-- 光学车牌照片路径IMAGES -->
      <div class="no-tmp">
        <p>光学车牌照片路径IMAGES (非TMP)</p>
        <div class="path">
          <input id="path-name3" type="text" disabled v-model="state2.vehicleNoPic">
          <div class="btn">
            <img src="../../../../assets/images/sandian.png" alt="">
            <input type="file"  @change="(e) => fileChange(e,false)" id="path2">
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="btns">
        <button class="cancel" @click="$router.back()">取消</button>
        <button class="determine" @click="startUpdateDevices">确定</button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { selectDevices, updateDevices } from '@/api/index'
import { DevicesModel } from '@/api/index.d'
@Component
export default class HandrailSystem extends Vue {
  private state = {
    cameraNo: '',
    cameraIp: '',
    cameraPort: '',
    cameraName: '',
    cameraPasswd: '',
    vehicleNoPic: ''
  }

  private state2 = {
    cameraNo: '',
    cameraIp: '',
    cameraPort: '',
    cameraName: '',
    cameraPasswd: '',
    vehicleNoPic: ''
  }

  // 入口相机
  private selectPreQuery: DevicesModel = {
    deviceCode: 'vehicle_front',
    json: {},
    enabled: 1,
    sort: 1,
    remark: '',
    deviceName: '',
    id: 0
  }

  // 出口相机
  private selectPNextQuery: DevicesModel = {
    deviceCode: 'vehicle_after',
    json: {
      ip: ''
    },
    enabled: 1,
    sort: 1,
    remark: '',
    deviceName: '',
    id: 0
  }

  // 选择本地文件路径
  fileChange (event: any, flag: boolean) {
    if (flag) {
      this.state.vehicleNoPic = event.target.value
    } else {
      this.state.vehicleNoPic = event.target.value
    }
  }

  // 查询设备
  startSelectDevices () {
    selectDevices(this.selectPreQuery.deviceCode).then((data: any) => {
      const { json, id, enabled, sort, remark, deviceName } = data.result
      this.selectPreQuery.id = id
      this.selectPreQuery.enabled = enabled
      this.selectPreQuery.sort = sort
      this.selectPreQuery.remark = remark
      this.selectPreQuery.deviceName = deviceName
      if (json) {
        this.state.cameraNo = json.cameraNo || ''
        this.state.cameraIp = json.cameraIp || ''
        this.state.cameraPort = json.cameraPort || ''
        this.state.cameraName = json.cameraName || ''
        this.state.cameraPasswd = json.cameraPasswd || ''
        this.state.vehicleNoPic = json.vehicleNoPic || ''
      }
    })
    selectDevices(this.selectPNextQuery.deviceCode).then((data: any) => {
      const { json, id, enabled, sort, remark, deviceName } = data.result
      this.selectPNextQuery.id = id
      this.selectPNextQuery.enabled = enabled
      this.selectPNextQuery.sort = sort
      this.selectPNextQuery.remark = remark
      this.selectPreQuery.deviceName = deviceName
      if (json) {
        this.state2.cameraNo = json.cameraNo || ''
        this.state2.cameraIp = json.cameraIp || ''
        this.state2.cameraPort = json.cameraPort || ''
        this.state2.cameraName = json.cameraName || ''
        this.state2.cameraPasswd = json.cameraPasswd || ''
        this.state2.vehicleNoPic = json.vehicleNoPic || ''
      }
    })
  }

  // 修改设备
  startUpdateDevices (type: string) {
    if (type === 'in') {
      this.selectPreQuery.json = this.state
      updateDevices(this.selectPreQuery).then((data) => {
        if (data.status === 0) {
          this.$message.success('修改成功')
          this.startSelectDevices()
        } else {
          this.$message.error('修改失败')
          this.startSelectDevices()
        }
      })
    } else {
      this.selectPNextQuery.json = this.state2
      updateDevices(this.selectPNextQuery).then((data) => {
        if (data.status === 0) {
          this.$message.success('修改成功')
          this.startSelectDevices()
        } else {
          this.$message.error('修改失败')
          this.startSelectDevices()
        }
      })
    }
  }

  created () {
    this.startSelectDevices()
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
