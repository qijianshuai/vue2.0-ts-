<template>
  <main>
    <!-- 配置 -->
    <div class="serach">
      <div>
      </div>
      <div class="system" @click="$router.push('/system/bigScreensystem')">
        <img src="../../../assets/images/peizhi.png" alt="">
        <span>配置</span>
      </div>
    </div>
    <div class="big-screen">
      <div class="big-screen-left">
        <div>
          <span class="span">水平对齐方式:</span>
          <el-select v-model="align" placeholder="水平对齐方式">
            <el-option
              label="居中对齐"
              value="center">
            </el-option>
            <el-option
              label="左对齐"
              value="left">
            </el-option>
            <el-option
              label="右对齐"
              value="right">
            </el-option>
          </el-select>
        </div>
        <div>
          <span class="span">垂直对齐方式:</span>
          <el-select v-model="valign" placeholder="垂直对齐方式">
            <el-option
              label="垂直居中"
              value="middle">
            </el-option>
            <el-option
              label="上对齐"
              value="top">
            </el-option>
            <el-option
              label="下对齐"
              value="bottom">
            </el-option>
          </el-select>
        </div>
        <div>
          <span class="span">颜色:</span>
          <el-input style="width: 220px;" v-model="color" placeholder="格式：英文单纯如green、red"></el-input>
        </div>
        <div>
          <span class="span">文字大小:</span>
          <el-input style="width: 220px;" v-model="size" placeholder="输入数字，如24、48"></el-input>
        </div>
        <div>
          <span class="span">显示内容:</span>
          <el-input style="width: 220px;" v-model="text" placeholder="请输入显示内容"></el-input>
        </div>
        <div class="last">
          <p @click="getLedBigScreen">测试通道大屏</p>
        </div>
      </div>
      <div class="right-big-screen">
        <div class="title">
          <i></i>
          <span>指示模块测试日志</span>
        </div>
        <div class="item" v-for="(item,index) in bigScreen" :key="item + index">
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
import { testLedBigScreen } from '@/api/system'
import { namespace } from 'vuex-class'
const bigScreenModel = namespace('deviceAll')

@Component
export default class BigScreen extends Vue {
  @bigScreenModel.State(state => state.bigScreen) bigScreen !: string[]
  private align = ''
  private valign = ''
  private color = ''
  private size = ''
  private text = ''

  getLedBigScreen () {
    if (this.text.trim()) {
      testLedBigScreen(this.align, this.color, this.size, this.text, this.valign).then(data => {
        console.log(data)
      })
    } else {
      this.$message.error('显示内容不能为空！')
    }
  }
}
</script>

<style lang="less">
    @import './index.less';
</style>
