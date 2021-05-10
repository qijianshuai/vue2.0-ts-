<template>
  <div class="data-content">
    <div>
      <div class="data">
        <div class="left">
          <p>场站编号</p>
          <input type="text" class="no-btn" v-model="state.terminal">
          <p>进出标志</p>
            <el-select style="width:260" v-model="state.inOut" placeholder="请选择">
              <el-option
                v-for="item in state.inOutList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          <ul id="sel-node">
            <li>I</li>
            <li>H</li>
          </ul>
          <p>IC卡卡号</p>
          <input type="text" class="no-btn" v-model="state.icCard">
          <p>车牌号码</p>
          <input type="text" class="no-btn" v-model="state.numberplace">
        </div>
        <div class="right">
          <p>通道编号</p>
          <input type="text" v-model="state.channel">
          <p>业务序号</p>
          <input type="text" v-model="state.business">
          <p>称重重量</p>
          <input type="text" v-model="state.weight">
        </div>
      </div>
    </div>
    <!-- 按钮 -->
    <div class="btns">
      <button class="cancel" @click="cancel">取消</button>
      <button class="determine" @click="determine">确定</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State } from '@/type/setting/dataSync'
@Component
export default class DataSync extends Vue {
  private state: State = {
    terminal: '',
    channel: '',
    inOut: '',
    business: '',
    icCard: '',
    weight: '',
    numberplace: '',
    inOutList: []
  }

  // 确定
  determine () {
    console.log('determine')
  }

  // 取消
  cancel () {
    console.log('cancel')
  }
}
</script>

<style lang="less">
    @import './index.less';
</style>
