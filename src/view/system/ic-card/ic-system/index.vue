<template>
  <main class="container-system">
    <!-- 进卡 -->
    <div class="data">
      <h2>IC卡进卡</h2>
      <div class="left">
        <p>串口号</p>
        <input type="text" class="no-btn" v-model="icIn.json.port">
        <p>波特率</p>
        <input type="text" class="no-btn" v-model="icIn.json.rate">
      </div>
      <!-- 按钮 -->
      <div class="btns">
        <button class="cancel" @click="$router.back()">取消</button>
        <button class="determine" @click="startUpdateDevices('in')">确定</button>
      </div>
    </div>
    <!-- 出卡 -->
    <div class="data">
      <h2>IC卡出卡</h2>
      <div class="left">
        <p>串口号</p>
        <input type="text" class="no-btn" v-model="icOut.json.port">
        <p>波特率</p>
        <input type="text" class="no-btn" v-model="icOut.json.rate">
      </div>
      <!-- 按钮 -->
      <div class="btns">
        <button class="cancel" @click="$router.back()">取消</button>
        <button class="determine" @click="startUpdateDevices('out')">确定</button>
      </div>
    </div>
    <!-- IC读写器 -->
    <div class="data">
      <h2>IC读写器</h2>
      <div class="left">
        <p>串口号</p>
        <input type="text" class="no-btn" v-model="icReadWrite.json.port">
        <p>波特率</p>
        <input type="text" class="no-btn" v-model="icReadWrite.json.rate">
      </div>
      <!-- 按钮 -->
      <div class="btns">
        <button class="cancel" @click="$router.back()">取消</button>
        <button class="determine" @click="startUpdateDevices('')">确定</button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { selectDevices, updateDevices } from '@/api/index'
import { DevicesModel } from '@/api/index.d'

@Component
export default class IcCardSystem extends Vue {
  private icIn:DevicesModel = {
    deviceCode: 'ic_in',
    json: {
      port: '',
      rate: ''
    },
    id: 0,
    enabled: 1,
    sort: 1,
    remark: '',
    deviceName: ''
  }

  private icOut:DevicesModel = {
    deviceCode: 'ic_out',
    json: {
      port: '',
      rate: ''
    },
    id: 0,
    enabled: 1,
    sort: 1,
    remark: '',
    deviceName: ''
  }

  private icReadWrite:DevicesModel = {
    deviceCode: 'ic_reader_writer',
    json: {
      port: '',
      rate: ''
    },
    id: 0,
    enabled: 1,
    sort: 1,
    remark: '',
    deviceName: ''
  }

  // 查询设备
  startSelectDevices () {
    selectDevices(this.icIn.deviceCode).then((data: any) => {
      if (data.result) {
        const { json, id, enabled, sort, remark, deviceName } = data.result
        this.icIn.id = id
        this.icIn.enabled = enabled
        this.icIn.sort = sort
        this.icIn.remark = remark
        this.icIn.deviceName = deviceName
        if (json) {
          this.icIn.json.port = json.port
          this.icIn.json.rate = json.rate
        }
      }
    })
    selectDevices(this.icOut.deviceCode).then((data: any) => {
      if (data.result) {
        const { json, id, enabled, sort, remark, deviceName } = data.result
        this.icOut.id = id
        this.icOut.enabled = enabled
        this.icOut.sort = sort
        this.icOut.remark = remark
        this.icOut.deviceName = deviceName
        if (json) {
          this.icOut.json.port = json.port
          this.icOut.json.rate = json.rate
        }
      }
    })
    selectDevices(this.icReadWrite.deviceCode).then((data: any) => {
      if (data.result) {
        const { json, id, enabled, sort, remark, deviceName } = data.result
        this.icReadWrite.id = id
        this.icReadWrite.enabled = enabled
        this.icReadWrite.sort = sort
        this.icReadWrite.remark = remark
        this.icReadWrite.deviceName = deviceName
        if (json) {
          this.icReadWrite.json.port = json.port
          this.icReadWrite.json.rate = json.rate
        }
      }
    })
  }

  // 修改设备
  startUpdateDevices (type: string) {
    if (type === 'in') {
      updateDevices(this.icIn).then((data) => {
        if (data.status === 0) {
          this.$message.success('修改成功')
          this.startSelectDevices()
        } else {
          this.$message.error('修改失败')
          this.startSelectDevices()
        }
      })
    } else if (type === 'out') {
      updateDevices(this.icOut).then((data) => {
        if (data.status === 0) {
          this.$message.success('修改成功')
          this.startSelectDevices()
        } else {
          this.$message.error('修改失败')
          this.startSelectDevices()
        }
      })
    } else {
      updateDevices(this.icReadWrite).then((data) => {
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
