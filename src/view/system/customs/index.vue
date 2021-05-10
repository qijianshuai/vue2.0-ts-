<template>
  <main>
    <!-- 搜素 -->
    <div class="cys-serach">
        <div class="system" @click="$router.push('/system/customssystem')">
          <img src="../../../assets/images/peizhi.png" alt="">
          <span>配置</span>
        </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="art-cont">
        <div class="item" v-for="item in state.logList" :key="item.code">
            <span class="content">
            {{item.obj}}
            </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Customs extends Vue {
  private state = {
    logList: [
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
  }
}
</script>

<style lang="less">
    @import './index.less';
</style>
