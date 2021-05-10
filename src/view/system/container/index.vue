<template>
  <!-- 内容 -->
  <div class="content">
    <!-- 方向 -->
    <ul class="direaction">
      <li>
        <div class="dir">
          <img src="../../../assets/images/zuo.png" alt="">
          左
          <img src="../../../assets/images/peizhi_huise.png" alt="" class="right" @click="$router.push('/system/containersystem/left')">
        </div>
        <div class="c-dir">
          <img src="../../../assets/images/dir-01.jpg" alt="">
          <div class="bot">
            识别结果
            <span>{{containerData.left}}</span>
          </div>
        </div>
      </li>
      <li>
        <div class="dir">
          <img src="../../../assets/images/you.png" alt="">
          右

          <img src="../../../assets/images/peizhi_huise.png" alt="" class="right" @click="$router.push('/system/containersystem/right')">
        </div>
        <div class="c-dir">
          <img src="../../../assets/images/dir-01.jpg" alt="">
          <div class="bot">
            识别结果
            <span>{{containerData.right}}</span>
          </div>
        </div>
      </li>
      <li>
        <div class="dir">
          <img src="../../../assets/images/shang.png" alt="">
          上

          <img src="../../../assets/images/peizhi_huise.png" alt="" class="right" @click="$router.push('/system/containersystem/top')">
        </div>
        <div class="c-dir">
          <img src="../../../assets/images/dir-01.jpg" alt="">
          <div class="bot">
            识别结果
            <span>{{containerData.top}}</span>
          </div>
        </div>
      </li>
      <li>
        <div class="dir">
          <img src="../../../assets/images/xia.png" alt="">
          后

          <img src="../../../assets/images/peizhi_huise.png" alt="" class="right" @click="$router.push('/system/containersystem/bottom')">
        </div>
        <div class="c-dir">
          <img src="../../../assets/images/dir-01.jpg" alt="">
          <div class="bot">
            识别结果
            <span>{{containerData.bottom}}</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="art-cont">
      <div class="title">
        <i></i>
        <span>集装箱识别运行日志</span>
      </div>
      <div class="item" v-for="(item,index) in containerLogs" :key="item + index">
          <span class="content">
          {{item}}
          </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scope>
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const containerModel = namespace('deviceAll')

@Component
export default class Container extends Vue {
  @containerModel.State(state => state.containerLogs) containerLogs !: string[]
  @containerModel.State(state => state.containerData) containerData !: any
}
</script>

<style lang="less">
    @import './index.less';
</style>
