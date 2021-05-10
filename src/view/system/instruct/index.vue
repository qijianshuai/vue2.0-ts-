<template>
  <main>
    <div class="instruct">
      <div class="instruct-left">
        <h4>入口红绿灯测试</h4>
        <div class="light">
          <p @click="getInTrafficLights('in', 1)">测试入口红灯</p>
          <p @click="getInTrafficLights('in', 2)">测试入口绿灯</p>
        </div>
        <h4>出口红绿灯测试</h4>
        <div class="light">
          <p @click="getInTrafficLights('out', 1)">测试出口红灯</p>
          <p @click="getInTrafficLights('out', 2)">测试出口绿灯</p>
        </div>
        <h4>报警测试</h4>
        <div class="alarm">
          <p @click="getAlarm">报警测试</p>
        </div>
      </div>
      <div class="instruct-right">
        <div class="title">
          <i></i>
          <span>通道LED大屏测试日志</span>
        </div>
        <div class="item" v-for="(item,index) in instructLogs" :key="item + index">
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
import { testInTrafficLights, testOutTrafficLights, testAlarm } from '@/api/system'
import { namespace } from 'vuex-class'
const instructModel = namespace('deviceAll')

@Component
export default class Instruct extends Vue {
  @instructModel.State(state => state.instructLogs) instructLogs !: string[]
  // 红绿灯测试
  getInTrafficLights (type: string, num: number) {
    // 入口
    if (type === 'in') {
      testInTrafficLights(num).then((data) => {
        console.log(data)
      })
    } else {
      testOutTrafficLights(num).then((data) => {
        console.log(data)
      })
    }
  }

  // 报警测试
  getAlarm () {
    testAlarm().then(data => {
      console.log(data)
    })
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
