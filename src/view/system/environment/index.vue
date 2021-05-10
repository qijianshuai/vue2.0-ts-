<template>
  <main>
    <div class="serach">
      <div>
      </div>
      <div class="system" @click="$router.push('/system/environmentsystem')">
        <img src="../../../assets/images/peizhi.png" alt="">
        <span>配置</span>
      </div>
    </div>
    <div class="log">
      <div class="title">
        <i></i>
        <span>环境监测运行日志</span>
      </div>
      <div class="item" v-for="(item,index) in environmentLogs" :key="item + index">
          <span class="content">
          {{item}}
          </span>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const enModel = namespace('deviceAll')

@Component
export default class Environment extends Vue {
  @enModel.State(state => state.environmentLogs) environmentLogs !: string[]
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
