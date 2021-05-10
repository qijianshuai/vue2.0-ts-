<template>
  <main class="container-system">
    <!-- 内容 -->
    <div class="container-system-content">
      <div>
        <div class="data">
          <div class="left">
            <p>相机通道编号</p>
            <input type="text" class="no-btn" v-model="state.cameraNo">
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
        <button class="cancel">取消</button>
        <button class="determine">确定</button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class CustomsSystem extends Vue {
  private state = {
    cameraNo: '',
    cameraIp: '',
    cameraPort: '',
    cameraName: '',
    cameraPasswd: '',
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
