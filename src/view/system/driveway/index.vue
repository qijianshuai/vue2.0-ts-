<template>
  <main>

    <!-- 配置 -->
    <div class="serach">
      <div class="system" @click="$router.push('/system/drivewaysystem')">
        <img src="../../../assets/images/peizhi.png" alt="">
        <span>配置</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="img-left">
        <img src="../../../assets/images/de-01.jpg" alt="">
      </div>
      <div class="img-right">
        <img src="../../../assets/images/de-02.png" alt="">
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Driveway extends Vue {
}
</script>

<style lang="less">
    @import './index.less';
</style>
