<template>
  <div class="dev-content">
    <el-table
      :data="deviceList"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="设备名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="说明">
      </el-table-column>
    </el-table>
    <!-- 暂无数据 -->
    <div class="data" v-if="deviceList.length < 1">
      <img class="no-data" src="../../../assets/images/shuju.png" alt="">
      <span>暂无数据</span>
    </div>
    <!-- 操作 -->
    <ul>
      <li class="box" @click="send">
        设备模拟发送
      </li>
      <li class="box" @click="selfTest">
        设备自检
      </li>
      <li class="box" @click="deviceReboot">
        通道设备重启
      </li>
      <li class="box" @click="EVOCreboot">
        工控机重启
      </li>
    </ul>
    <!-- 按钮 -->
    <div class="btns">
      <button class="cancel" @click="cancel">取消</button>
      <button class="determine" @click="determine">确定</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class DeviceState extends Vue {
  private deviceList: any[] = []

  // 模拟发送
  send () {
    console.log('send')
  }

  // 设备自检
  selfTest () {
    console.log('selfTest')
  }

  // 设备重启
  deviceReboot () {
    console.log('deviceReboot')
  }

  // 工控机重启
  EVOCreboot () {
    console.log('EVOCreboot')
  }

  // 确定
  determine () {
    console.log('determine')
  }

  // 取消
  cancel () {
    console.log('cancel')
  }
}
</script>

<style lang="less">
    @import './index.less';
</style>
