<template>
  <div class="net-content">
    <!-- 网路设备测试 -->
    <div>
      <h4>网路设备测试</h4>
      <p>测试地址</p>
      <input type="text" v-model="state.testUrl">
      <p>测试结果</p>
      <textarea v-model="state.testResult"></textarea>
      <div class="device" @click="netWorkTest">
        网络设备测试
      </div>
    </div>
    <!-- 串口设备测试 -->
    <div>
      <h4>串口设备测试</h4>
      <p>测试串口</p>
      <el-select style="width:260"  placeholder="请选择" v-model="state.testGorge">
        <el-option
          v-for="item in state.gorgeList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <p>测试结果</p>
      <textarea v-model="state.gorgeResult"></textarea>
      <div class="device" @click="gorgeDeviceTest">
        串口设备测试
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
import { State } from '@/type/setting/networkGorge'
@Component
export default class NetWorkGorge extends Vue {
  private state: State = {
    testUrl: '',
    testResult: '',
    testGorge: '',
    gorgeResult: '',
    gorgeList: []
  }

  // 确定
  determine () {
    console.log('determine')
  }

  // 取消
  cancel () {
    console.log('cancel')
  }

  // 网络测试
  netWorkTest () {
    console.log('netWorkTest')
  }

  // 串口设备测试
  gorgeDeviceTest () {
    console.log('gorgeDeviceTest')
  }
}
</script>

<style lang="less">
    @import './index.less';
</style>
