<template>
  <main>
    <!-- 搜素 -->
    <div class="serach">
      <div class="st">
        <span >识别结果</span>
        <input type="text" :value="result">
      </div>
        <div class="system" @click="$router.push('/system/lprsendsystem')">
          <img src="../../../assets/images/peizhi.png" alt="">
          <span>配置</span>
        </div>
    </div>
    <!-- 内容 -->
    <div class="lpr-content">
      <div class="art-cont">
        <div class="item" v-for="item in logList" :key="item.code">
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
import { ItemModel } from '@/type/system/anpr'
@Component
export default class Lprsend extends Vue {
  private result = ''
  private logList: ItemModel[] = []
}
</script>

<style lang="less" scope>
    @import './index.less';
</style>
