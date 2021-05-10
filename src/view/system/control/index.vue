<template>
  <main>
    <!-- 内容 -->
    <div class="control">
      <div class="left">
        <div>
          <span>中控模块IP: </span><el-input style="width:200px" type="text" v-model="control.json.ip"></el-input>
        </div>
        <div>
          <span>中控模块端口:</span><el-input style="width:200px" type="text" v-model="control.json.port"></el-input>
        </div>
        <p @click="saveControl">保存</p>
      </div>
      <div class="right">
        <p @click="add">添加串口模块</p>
        <div>
          <span>串口服务器IP: </span><el-input style="width:200px" type="text" v-model="serial.json.ip"></el-input>
        </div>
        <div v-for="(item, index) in serial.json.serialnum" :key="index">
          <div>
            <span>串口服务器端口:</span><el-input style="width:200px" type="text" v-model="item.serialPort"></el-input>
          </div>
          <p @click="saveSerial(item)">保存</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { selectDevices, updateDevices } from '@/api/index'
@Component
export default class Control extends Vue {
  private control = {
    deviceCode: 'plc',
    enabled: 1,
    id: 0,
    json: {
      ip: '',
      port: ''
    },
    remark: '',
    deviceName: '',
    sort: 0
  }

  private serial = {
    deviceCode: 'com_server',
    enabled: 1,
    id: 0,
    json: {
      ip: '',
      serialnum: [] as any[]
    },
    remark: '',
    deviceName: '',
    sort: 0
  }

  add () {
    this.serial.json.serialnum.push({
      serialPort: ''
    })
  }

  saveControl () {
    if (this.control.json.ip.trim() && this.control.json.port.trim()) {
      updateDevices({
        deviceCode: this.control.deviceCode,
        enabled: this.control.enabled,
        json: this.control.json,
        remark: this.control.remark,
        deviceName: this.control.deviceName,
        sort: this.control.sort,
        id: this.control.id
      })
    } else {
      this.$message.error('IP或端口不能为空')
    }
  }

  saveSerial (item: any) {
    if (this.serial.json.ip.trim() && item.serialPort.trim()) {
      if (!item) {
        updateDevices({
          deviceCode: this.control.deviceCode,
          enabled: this.control.enabled,
          json: this.control.json,
          remark: this.control.remark,
          deviceName: this.control.deviceName,
          sort: this.control.sort,
          id: this.control.id
        })
      } else {
        updateDevices({
          deviceCode: this.serial.deviceCode,
          enabled: this.serial.enabled,
          json: this.serial.json,
          remark: this.serial.remark,
          deviceName: this.serial.deviceName,
          sort: this.serial.sort,
          id: this.serial.id
        })
      }
    } else {
      this.$message.error('IP或端口不能为空')
    }
  }

  created () {
    selectDevices('plc').then((data: any) => {
      if (data.status === 0) {
        this.control.deviceCode = data.result.deviceCode
        this.control.enabled = data.result.enabled
        this.control.remark = data.result.remark
        this.control.deviceName = data.result.deviceName
        this.control.sort = data.result.sort
        this.control.id = data.result.id
        if (data.result.json) {
          this.control.json.ip = data.result.json.ip || ''
          this.control.json.port = data.result.json.port || ''
        }
      }
    })
    selectDevices('com_server').then((data: any) => {
      if (data.status === 0) {
        console.log(data.result.json)
        this.serial.deviceCode = data.result.deviceCode
        this.serial.enabled = data.result.enabled
        this.serial.remark = data.result.remark
        this.serial.deviceName = data.result.deviceName
        this.serial.sort = data.result.sort
        this.serial.id = data.result.id
        if (data.result.json) {
          this.serial.json.ip = data.result.json.ip || ''
          this.serial.json.serialnum = data.result.json.serialnum || []
        }
      }
    })
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
