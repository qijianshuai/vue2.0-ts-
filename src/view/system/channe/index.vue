<template>
  <main>
    <!-- 配置 -->
    <div class="serach">
      <div>
      </div>
      <div class="system" @click="$router.push('/system/channesystem/top')">
        <img src="../../../assets/images/peizhi.png" alt="">
        <span>配置</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="channe-content">
      <m-video :vip="cameraFlags.top" channe='true'></m-video>
      <div class="serach">
        <div>

        </div>
        <div class="system" @click="$router.push('/system/channesystem/bottom')">
          <img src="../../../assets/images/peizhi.png" alt="">
          <span>配置</span>
        </div>
      </div>

      <m-video :vip="cameraFlags.bottom" channe='true'></m-video>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Channe extends Vue {
  // 摄像头播放地址标识
  private cameraFlags = {
    top: 'traffic_pre',
    bottom: 'traffic_next'
  }

  mounted () {
    if (localStorage.getItem('camerasInfo')) {
      const data = JSON.parse(localStorage.getItem('camerasInfo'))
      this.cameraFlags.top = data.channe.top
      this.cameraFlags.bottom = data.channe.bottom
    }
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
