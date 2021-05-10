<template>
  <div class="lp-sys-content">
    <div>
      <div class="data">
        <div class="left">
          <p>整点定数</p>
          <input type="text" class="no-btn" v-model="state.point">
          <p>集中监控中心图片接收程序端口号</p>
          <input type="text" class="no-btn" v-model="state.servePort">
        </div>
        <div class="right">
          <p>集中监控中心图片接收服务器地址</p>
          <input type="text" v-model="state.serveIp">
        </div>
      </div>
    </div>
    <!-- 光学车牌照片路径IMAGES -->
    <div class="no-tmp">
      <p>光学车牌照片路径IMAGES (D:\...\IMAGES\TMP)</p>
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
      <button class="cancel">取消</button>
      <button class="determine">确定</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class LprsendSystem extends Vue {
  private state = {
    point: '',
    serveIp: '',
    servePort: '',
    vehicleNoPic: ''
  }

  // 选择本地文件路径
  fileChange (event: any, flag: boolean) {
    if (flag) {
      this.state.vehicleNoPic = event.target.value
    } else {
      this.state.vehicleNoPic = event.target.value
    }
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
