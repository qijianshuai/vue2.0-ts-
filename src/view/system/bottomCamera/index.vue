<template>
  <main>

    <!-- 搜素 -->
    <div class="serach">
      <div>
      </div>
      <div class="system" @click="$router.push('/system/bottomCamerasystem')">
        <img src="../../../assets/images/peizhi.png" alt="">
        <span>配置</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="bcamera-left">
        <m-video :vip="bottomCamera"></m-video>
      </div>
      <div class="art-cont">
        <div class="item" v-for="(item, index) in bottomCameraLogs" :key="item+index">
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
import { State } from '@/type/system/anpr'
import { namespace } from 'vuex-class'
const bottomModel = namespace('deviceAll')

@Component
export default class BottomCamera extends Vue {
  @bottomModel.State(state => state.bottomCameraLogs) bottomCameraLogs !: string[]
  private state: State = {
    imgUrl: '',
    result: '',
    logList: []
  }

  private bottomCamera = 'bottom_car'

  mounted () {
    if (localStorage.getItem('camerasInfo')) {
      const data = JSON.parse(localStorage.getItem('camerasInfo'))
      this.bottomCamera = data.bottomCamera
    }
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
