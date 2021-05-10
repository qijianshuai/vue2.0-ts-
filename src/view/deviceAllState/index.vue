<template>
  <!-- 内容区域 -->
  <section class="history">
    <div class="search2">
      <div class="btn2" @click="$router.push('/deviceAllState2')">配置设置启用状态</div>
    </div>
    <!-- 表格 -->
    <div class="data-box">
      <table id="table">
        <!-- 表头 -->
        <tr>
          <th>设备名称</th>
          <th>设备状态</th>
          <th>是否启用</th>
        </tr>
        <!-- 内容行 -->
        <tr v-for="item in deviceAllList" :key="item.id">
          <td>{{item.name}}</td>
          <td v-if="item.state===1">正常运行</td>
          <td v-if="item.state===2">触发中</td>
          <td v-if="item.state===3">未启用</td>
          <td v-if="item.state===4">故障</td>
          <td v-if="item.enable===1">启用</td>
          <td v-else>未启用</td>
        </tr>
      </table>
      <!-- 暂无数据 -->
      <div class="data" v-if="deviceAllList.length < 1">
        <img class="no-data" src="../../assets/images/shuju.png" alt="">
        <span>暂无数据</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { selectDevicesAll } from '@/api/index'
import { namespace } from 'vuex-class'
import { State, DeviceInfo } from '@/store/device/index.d'
const someModel = namespace('deviceAll')
@Component
export default class DeviceAllState extends Vue {
  @someModel.State((state: State) => state.deviceAllList) deviceAllList: DeviceInfo[]
  @someModel.Mutation('updateAlldevice') updateAlldevice!: Function

  // 配置设置启用状态

  created () {
    selectDevicesAll().then((data: any) => {
      console.log(data.result)
      const deviceStartList = data.result.map((item: any) => {
        const obj = {
          code: item.deviceCode,
          name: item.deviceName,
          enable: item.enabled,
          state: 1
        }
        return obj
      })
      this.updateAlldevice(deviceStartList)
    })
  }
}
</script>

<style lang="less" scope>
  @import './index.less';
</style>
