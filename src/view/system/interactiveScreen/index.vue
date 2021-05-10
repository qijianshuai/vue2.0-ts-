<template>
  <main>
    <!-- 配置 -->
    <div class="serach">
      <div>
      </div>
      <div class="system" @click="$router.push('/system/interactiveScreensystem')">
        <img src="../../../assets/images/peizhi.png" alt="">
        <span>配置</span>
      </div>
    </div>
    <div class="in-cont">
      <div class="interactive-left">
        请选择要显示的内容
        <el-select v-model="content" placeholder="请选择显示的内容">
          <el-option label="只能4个" value="1"></el-option>
        </el-select>
        <p @click="getSmallLED">测试通道LED交互屏</p>
      </div>
      <div class="interactive-right">
          <div class="title">
            <i></i>
            <span>通道LED交互屏测试日志</span>
          </div>
          <div class="item" v-for="(item,index) in interactiveScreen" :key="item + index">
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
import { testSmallLED } from '@/api/system'
import { namespace } from 'vuex-class'
const interModel = namespace('deviceAll')

@Component
export default class InteractiveScreen extends Vue {
  @interModel.State(state => state.interactiveScreen) interactiveScreen !: string[]
  private text = ''
  private isUse = true
  private content = ''
  getSmallLED () {
    if (this.isUse) {
      if (this.text.trim()) {
        testSmallLED(this.text).then(data => {
          console.log(data)
        })
      } else {
        this.$message.error('显示内容不能为空！')
      }
    } else {
      this.$message.warning('该设备没有启用！')
    }
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
