<template>
  <!-- 内容 -->
  <div class="content">
    <div class="left">
      <!-- 地感状态 -->
      <div class="serach">
        <div>
          <span>地感状态</span>
          <img class="box" src="../../../assets/images/liangdeng.png" alt="">
        </div>
        <div class="system" @click="$router.push('/system/scskdsystem')">
          <img src="../../../assets/images/peizhi.png" alt="">
          <span>配置</span>
        </div>
      </div>

      <img src="../../../assets/images/an-01.jpg" alt="">
      <div class="bot">
        <div class="title">
          地磅仪表串口实时数据
        </div>
        <div class="cont">
          <ul>
            <li v-for="item in meterList" :key="item">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="art-cont">
      <div class="title">
        <i></i>
        <span>卡口称重量采集日志</span>
      </div>
      <div class="item" v-for="item in logList" :key="item.code">
          <span class="content">
          {{item.obj}}
          </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Scskd extends Vue {
  private result = ''
  private logList = [
    {
      id: '1',
      date: '2021-01-19 09:08:21:',
      content: '卡口放行指令已结束，未匹配搭配车辆放行信息！'
    },
    {
      id: '2',
      date: '2021-01-19 09:08:21:',
      content: '卡口放行指令已结束，未匹配搭配车辆放行信息！'
    },
    {
      id: '3',
      date: '2021-01-19 09:08:21:',
      content: '卡口放行指令已结束，未匹配搭配车辆放行信息！'
    },
    {
      id: '4',
      date: '2021-01-19 09:08:21:',
      content: '卡口放行指令已结束，未匹配搭配车辆放行信息！'
    },
    {
      id: '5',
      date: '2021-01-19 09:08:21:',
      content: '卡口放行指令已结束，未匹配搭配车辆放行信息！'
    },
    {
      id: '6',
      date: '2021-01-19 09:08:21:',
      content: '卡口放行指令已结束，未匹配搭配车辆放行信息！'
    }
  ]

  private meterList: any[] = []
}
</script>

<style lang="less">
    @import './index.less';
</style>
