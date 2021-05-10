<template>
  <main>
    <!-- 配置 -->
    <div class="serach">
      <div>
      </div>
      <div class="system" @click="$router.push('/system/transducersystem')">
        <img src="../../../assets/images/peizhi.png" alt="">
        <span>配置</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="art-cont">
        <div class="title">
          <i></i>
          <span>采集传感器运行日志</span>
        </div>

        <div class="item" v-for="(item,index) in $store.state.systemState.transducer" :key="item.code + index">
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
import { State } from '@/type/system/anpr'
@Component
export default class Transducer extends Vue {
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
