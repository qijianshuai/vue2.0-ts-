<template>
  <main>
  <!-- 配置 -->
    <div class="serach">
      <div>
      </div>
      <div class="system" @click="$router.push('/system/ic-cardsystem')">
        <img src="../../../assets/images/peizhi.png" alt="">
        <span>配置</span>
      </div>
    </div>

    <div class="ic-card">
      <div class="ic-left">
        <h4>测试IC卡_收卡</h4>
        <div class="ic-in">
          <p @click="getIC('in', 'dc')">卡箱发卡至卡嘴（DC)</p>
          <p @click="getIC('in', 'cp')">回收卡片（CP）</p>
        </div>
        <h4>测试IC卡_发卡</h4>
        <div class="ic-out">
          <div>
            <p @click="getIC('out', 'dh')">卡箱发卡至读卡位置(DH)</p>
          </div>
          <div>
            <p @click="getIC('out', 'es')">读卡位置发卡至卡嘴（ES）</p>
          </div>
          <div>
            <p @click="getIC('out', 'dc')">卡箱发卡至卡嘴（DC）</p>
          </div>
          <div>
            <p @click="getIC('out', 'cp')">回收卡片（CP）</p>
          </div>
          <div>
            <p @click="getIC('out', 'sf')">状态(SF)</p>
          </div>
        </div>
        <h4>测试IC卡_读写器</h4>
        <div class="rd">
          <span>读：</span>
          <el-input type="text" style="width: 320px" v-model="read" disabled maxlength="16"></el-input>
        </div>
        <div>
          <span>写：</span>
          <el-input :class="{red: flag}" style="width: 320px" type="text" show-word-limit v-model="write" maxlength="16" @input="rules" @blur="rules"></el-input>
        </div>
      </div>
      <div class="ic-right">
        <div class="title">
          <i></i>
          <span>IC卡测试日志</span>
        </div>
        <div class="item" v-for="(item,index) in icLogs" :key="item + index">
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
import { testICIn, testICOut } from '@/api/system'
import { namespace } from 'vuex-class'
const icModel = namespace('deviceAll')

@Component
export default class IcCard extends Vue {
  @icModel.State(state => state.icLogs) icLogs !: string[]
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

  // 测试
  getIC (type: string, op: string) {
    if (type === 'in') {
      testICIn(op).then(data => {
        console.log(data)
      })
    } else {
      testICOut(op).then(data => {
        console.log(data)
      })
    }
  }
}
</script>

<style lang="less">
    @import './index.less';
</style>
