<template>
  <main>
    <div class="hand-sear">
      <!-- <div class="system" @click="$router.push('/system/handrailsystem')">
        <img src="../../../assets/images/peizhi.png" alt="">
        <span>配置</span>
      </div> -->
    </div>
    <!-- 内容 -->
    <div class="hand-content">
      <div class="hand-left">
        <m-video :vip="handrail" part="handrail"></m-video>
        <div class="right">
          <img src="../../../assets/images/taigan.png" ref="img" alt="" @click="manualUpLever(1)">
          <div class="active">手动抬杆</div>
          <div class="flow" @click="manualUpLever(2)">
            落干
          </div>
        </div>
      </div>
      <div class="hand-right">
        <div class="title">
          <i></i>
          <span>闸机栏杆运行日志</span>
        </div>
        <div class="item" v-for="(item,index) in handrailLogs" :key="item + index">
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
import { getManualUpLever } from '@/api/index'
import { namespace } from 'vuex-class'
const handrailModel = namespace('deviceAll')
@Component
export default class Handrail extends Vue {
  $refs !: {
    img: HTMLImageElement;
  }

  @handrailModel.State(state => state.handrailLogs) handrailLogs !: string[]
  private handrail = 'traffic_pre'

  async manualUpLever (action: number) {
    if (action === 1) {
      this.$refs.img.style.display = 'none'
    }
    const result = await getManualUpLever(action)
    this.$refs.img.style.display = 'block'
    if (action === 1) {
      if (result.status === 0) {
        this.$message.success('抬杆成功')
      } else {
        this.$message.error(result.message)
      }
    } else {
      if (result.status === 0) {
        this.$message.success('落干成功')
      } else {
        this.$message.error(result.message)
      }
    }
  }

  mounted () {
    if (localStorage.getItem('camerasInfo')) {
      const data = JSON.parse(localStorage.getItem('camerasInfo'))
      this.handrail = data.handrail
    }
  }
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
