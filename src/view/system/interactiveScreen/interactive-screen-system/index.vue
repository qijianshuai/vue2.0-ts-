<template>
  <main class="container-system">
    <!-- 内容 -->
    <div class="container-system-content">
      <div>
        <div class="data">
          <div class="right">
            <p>通道LED小屏IP</p>
            <input type="text" v-model="selectQuery.json.ip">
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
export default class InteractiveScreenSystem extends Vue {
  private selectQuery:DevicesModel = {
    deviceCode: 'led_guide',
    json: {
      ip: ''
    },
    id: 0,
    enabled: 1,
    sort: 1,
    remark: '',
    deviceName: ''
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
          this.selectQuery.json.ip = json.ip
        }
      }
    })
  }

  // 修改设备
  startUpdateDevices () {
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
    this.startSelectDevices()
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
