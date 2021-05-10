<template>
  <main>
    <!-- 搜素 -->
    <div class="serach">
      <div class="st">
        <span >识别结果</span>
        <input type="text" :value="state.result">
      </div>
      <div class="system" @click="$router.push('/system/qrcodesystem')">
        <img src="../../../assets/images/peizhi.png" alt="">
        <span>配置</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="title">
        <i></i>
        <span>二维码设备运行日志</span>
      </div>
      <div class="item" v-for="(item,index) in qrcodeLogs" :key="item + index">
          <span class="content">
          {{item}}
          </span>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State } from '@/type/system/anpr'
import { namespace } from 'vuex-class'
const qrcodeModel = namespace('deviceAll')

@Component
export default class Qrcode extends Vue {
  @qrcodeModel.State(state => state.qrcodeLogs) qrcodeLogs !: string[]
  private state: State = {
    imgUrl: '',
    result: '',
    logList: []
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
