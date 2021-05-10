<template>
  <main>
    <div class="visualize">
      <div class="visualize-left">
        <div class="main">
          <h4>主机</h4>
          <div>
            <span>IP地址: </span>
            <el-input type="text" style="width: 300px;" v-model="main.json.ip"></el-input>
          </div>
          <div>
            <span>端口: </span>
            <el-input type="text" style="width: 300px;" v-model="main.json.port"></el-input>
          </div>
          <div>
            <span>账户: </span>
            <el-input type="text" style="width: 300px;" v-model="main.json.username"></el-input>
          </div>
          <div>
            <span>密码: </span>
            <el-input type="text" style="width: 300px;" v-model="main.json.password"></el-input>
          </div>
          <p @click="saveMain">保存主机</p>
        </div>
        <h4>分机</h4>
        <p @click="addExtension">添加分机</p>
        <div class="extension">
          <div v-for="(item, index) in extensionList" :key="index">
            <div>
              <span>IP地址: </span>
              <el-input type="text" style="width: 300px;" v-model="item.ip"></el-input>
            </div>
            <div>
              <span>端口: </span>
              <el-input type="text" style="width: 300px;" v-model="item.port"></el-input>
            </div>
            <div>
              <span>账户: </span>
              <el-input type="text" style="width: 300px;" v-model="item.username"></el-input>
            </div>
            <div>
              <span>密码: </span>
              <el-input type="text" style="width: 300px;" v-model="item.password"></el-input>
            </div>
            <p @click="saveExtension(item)">保存分机</p>
          </div>
        </div>
      </div>
      <div class="visualize-right">
        <div class="title">
          <i></i>
          <span>可视化对讲运行日志</span>
        </div>
        <div class="item" v-for="(item,index) in visualizeLogs" :key="item + index">
            <span class="content">
            {{item}}
            </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { selectDevices, updateDevices } from '@/api/index'
import { namespace } from 'vuex-class'
const visuakuzeModel = namespace('deviceAll')

@Component
export default class Visualize extends Vue {
  @visuakuzeModel.State(state => state.visualizeLogs) visualizeLogs !: string[]
  private main = {
    deviceCode: '',
    enabled: 1,
    json: {
      ip: '',
      port: '',
      username: '',
      password: ''
    },
    remark: '',
    deviceName: '',
    sort: 0,
    id: 0
  }

  private extensionList: any[] = []

  // 保存主机
  saveMain () {
    updateDevices({
      deviceCode: this.main.deviceCode,
      enabled: this.main.enabled,
      json: this.main.json,
      remark: this.main.remark,
      deviceName: this.main.deviceName,
      sort: this.main.sort,
      id: this.main.id
    })
  }

  // 保存分级
  saveExtension (item: any) {
    console.log('保存分机')
  }

  // 添加分级
  addExtension () {
    this.extensionList.push({
      ip: '',
      port: '',
      username: '',
      password: ''
    })
  }

  created () {
    selectDevices('video_intercom_server').then((data: any) => {
      if (data.status === 0) {
        this.main.deviceCode = data.result.deviceCode
        this.main.enabled = data.result.enabled
        this.main.remark = data.result.remark
        this.main.deviceName = data.result.deviceName
        this.main.sort = data.result.sort
        this.main.id = data.result.id
        if (data.result.json) {
          this.main.json.ip = data.result.json.ip || ''
          this.main.json.port = data.result.json.port || ''
          this.main.json.username = data.result.json.username || ''
          this.main.json.password = data.result.json.password || ''
        }
      }
    })
    // selectDevices('com_server').then((data: any) => {
    //   if (data.status === 0) {
    //     console.log(data.result.json)
    //     this.serial.deviceCode = data.result.deviceCode
    //     this.serial.enabled = data.result.enabled
    //     this.serial.json.ip = data.result.json.ip || ''
    //     this.serial.json.serialnum = data.result.json.serialnum || []
    //     this.serial.remark = data.result.remark
    //     this.serial.deviceName = data.result.deviceName
    //     this.serial.sort = data.result.sort
    //     this.serial.id = data.result.id
    //   }
    // })
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
