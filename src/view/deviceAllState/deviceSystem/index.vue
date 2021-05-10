<template>
  <!-- 内容区域 -->
  <section class="history">
    <div class="search2">
      <div class="btn" @click="$router.back()">返回</div>
      <!-- <div class="btn" @click="saveDevice">保存</div> -->
    </div>
    <!-- 表格 -->
    <div class="data-box">
      <table id="table">
        <!-- 表头 -->
        <tr>
          <th>设备名称</th>
          <th>设备状态</th>
          <th>是否启用</th>
          <th>操作</th>
        </tr>
        <!-- 内容行 -->
        <tr v-for="item in deviceStartList" :key="item.id">
          <td>{{item.name}}</td>
          <td v-if="item.state===1">正常运行</td>
          <td v-if="item.state===2">触发中</td>
          <td v-if="item.state===3">未启用</td>
          <td v-if="item.state===4">故障</td>
          <td v-if="item.enable">启用</td>
          <td v-else>未启用</td>
          <td>
            启用状态:
            <el-switch
              v-model="item.enable"
              @change="cutUse(item)"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { updateDevices, selectDevices } from '@/api/index'
import { namespace } from 'vuex-class'
import { State, DeviceInfo } from '@/store/device/index.d'
const someModel = namespace('deviceAll')
@Component
export default class DeviceSystem extends Vue {
  @someModel.State((state: State) => state.deviceAllList) deviceAllList: DeviceInfo[];

  private deviceStartList:DeviceInfo[] = []

  mounted () {
    this.deviceStartList = this.deviceAllList.map(item => {
      if (item.enable === 1) {
        item.enable = true
      }
      return item
    })
  }

  // 切换启用状态
  cutUse (item: any) {
    selectDevices(item.code).then((data: any) => {
      data.result.enabled = item.enable ? 1 : 0
      console.log('data', data)
      updateDevices(data.result).then(res => {
        if (res.status === 0) {
          this.$message.success(`${data.result.deviceName}设置成功`)
        } else {
          this.$message.error('启用状态修改失败')
        }
      })
    })
  }
}
</script>

<style lang="less" scope>
  @import './index.less';
</style>
