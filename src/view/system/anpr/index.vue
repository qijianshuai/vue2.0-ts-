<template>
  <main>
    <div class="serach">
      <div class="st">
      </div>
      <div class="system" @click="$router.push('/system/anprsystem')">
        <img src="../../../assets/images/peizhi.png" alt="">
        <span>配置</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="art-left">
        <h5>识别结果</h5>
        <span>车牌号: </span>
        <el-input style="width: 300px" type="text" :value="state.no"></el-input>
        <span>颜色: </span>
        <el-input style="width: 300px" type="text" :value="state.color"></el-input>
        <p>车牌照片: </p>
        <img :src="state.url" alt="">
        <m-video :vip="cameraUrl"></m-video>
      </div>
      <div class="art-cont">
        <div class="title">
          <i></i>
          <span>车牌识别相机运行日志</span>
        </div>
        <div class="item" v-for="(item,index) in anprLogs" :key="item + index">
            <span class="content">
            {{item}}
            </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { State, DeviceInfo } from '@/store/device/index.d'
import { namespace } from 'vuex-class'
const anprModel = namespace('deviceAll')
@Component
export default class Anpr extends Vue {
  @anprModel.State((state:State) => state.deviceAllList) deviceAllList!:DeviceInfo[];
  @anprModel.State((state:State) => state.anprLogs) anprLogs!:string[];
  private state = {
    no: '',
    color: '',
    url: ''
  }

  private cameraUrl = 'plate_pre'

  private anprLogList: string[] = []

  @Watch('deviceAllList', { immediate: true, deep: true })
  updateState () {
    const data = this.deviceAllList.find(el => el.code === 'vehicle_front')
    if (!data) return false
    this.state.no = data.data.no
    this.state.color = data.data.color
    this.state.url = data.data.url
  }

  mounted () {
    if (localStorage.getItem('camerasInfo')) {
      const data = JSON.parse(localStorage.getItem('camerasInfo'))
      this.cameraUrl = data.anpr.pre
    }
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
