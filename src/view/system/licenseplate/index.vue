<template>
  <main>
    <div class="licen">
      <div class="licen-left">
        <h4>天线</h4>
        <div>
          识别结果：
          <el-input type="text" style="width: 300px" v-model="mastResult"></el-input>
        </div>
        <h4>读写器</h4>
        <div class="rd">
          <span>读：</span>
          <el-input type="text" style="width: 320px" v-model="read" disabled maxlength="16"></el-input>
        </div>
        <div>
          <span>写：</span>
          <el-input :class="{red: flag}" style="width: 320px" type="text" show-word-limit v-model="write" maxlength="16" @input="rules" @blur="rules"></el-input>
        </div>
      </div>
      <div class="licen-right">
        <div class="title">
          <i></i>
          <span>电子车牌监测日志</span>
        </div>
        <div class="item" v-for="(item,index) in licenseplateLogs" :key="item + index">
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
import { namespace } from 'vuex-class'
const licenModel = namespace('deviceAll')

@Component
export default class LicensePlate extends Vue {
  @licenModel.State(state => state.licenseplateLogs) licenseplateLogs !: string[]
  private mastResult = ''
  private isMastUse = false
  private isReadAndWriteUse = true
  private read = ''
  private write = ''
  private rule = /[^\w]/g
  private flag = false
  // 文本校验
  rules () {
    if (this.rule.test(this.write)) {
      this.$message.error('只能输入数字或者字母')
      this.flag = true
      this.write = this.write.replace(/[^\w]/g, '')
    } else {
      this.flag = false
    }
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
