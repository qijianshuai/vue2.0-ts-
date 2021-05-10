<template>
  <main class="container-system">
    <!-- 内容 -->
    <div class="container-system-content">
      <div>
        <div class="data">
          <div class="left">
            <p>车牌相机端口</p>
            <input type="text" class="no-btn" v-model="state.cameraPort">
            <p>相机密码</p>
            <input type="password" class="no-btn" v-model="state.cameraPasswd">
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
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { selectDevices, updateDevices } from '@/api/index'
import { DevicesModel } from '@/api/index.d'

@Component
export default class ContainerSystem extends Vue {
  private state = {
    cameraNo: '',
    cameraIp: '',
    cameraPort: '',
    cameraName: '',
    cameraPasswd: '',
    vehicleNoPic: ''
  }

  private selectQuery:DevicesModel = {
    deviceCode: 'container_front',
    json: {},
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
    selectDevices(this.selectQuery.deviceCode).then((data: any) => {
      if (data.result) {
        const { json, id, enabled, sort, remark, deviceName } = data.result
        this.selectQuery.id = id
        this.selectQuery.enabled = enabled
        this.selectQuery.sort = sort
        this.selectQuery.remark = remark
        this.selectQuery.deviceName = deviceName
        if (json) {
          this.state.cameraNo = json.cameraNo || ''
          this.state.cameraIp = json.cameraIp || ''
          this.state.cameraPort = json.cameraPort || ''
          this.state.cameraName = json.cameraName || ''
          this.state.cameraPasswd = json.cameraPasswd || ''
          this.state.vehicleNoPic = json.vehicleNoPic || ''
        }
      }
    })
  }

  // 修改设备
  startUpdateDevices () {
    this.selectQuery.json = this.state
    updateDevices(this.selectQuery).then((data) => {
      if (data.status === 0) {
        this.$message.success('修改成功')
        this.startSelectDevices()
      } else {
        this.$message.error('修改失败')
        this.startSelectDevices()
      }
    })
  }

  created () {
    const type = this.$route.params.key
    switch (type) {
      case 'top':
        this.selectQuery.deviceCode = 'container_front'
        break
      case 'left':
        this.selectQuery.deviceCode = 'container_left'
        break
      case 'right':
        this.selectQuery.deviceCode = 'container_right'
        break
      case 'bottom':
        this.selectQuery.deviceCode = 'container_after'
        break
    }
    this.startSelectDevices()
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
