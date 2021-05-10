<template>
  <main>
        <div class="pre-content">
          <!-- 卡口前端数据库设计 -->
          <!-- <div>
            <h4>卡口前端数据库设计</h4>
            <div class="data">
              <div class="left">
                <p>卡口前端数据库路径</p>
                <div class="path">
                  <input id="path-name" type="text" v-model="state.dataUrl" disabled>
                  <div class="btn">
                    <img src="../../../assets/images/sandian.png" alt="">
                    <input type="file" @change="(e) => fileChange(e,true)" id="path">
                  </div>
                </div>
              </div>
              <div class="right">
                <p>用户密码</p>
                <div class="pass">
                  <input type="password"  v-model="state.password">
                  <div class="btn" @click="testLink">
                    测试链接
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- 卡口通道信息 -->
          <div>
            <h4>卡口通道信息</h4>
            <div class="data">
              <div class="left">
                <p>通道状态</p>
                <!-- <input type="text" class="no-btn" v-model="state.terminal"> -->
                <el-select style="width:260" v-model="state.status" placeholder="请选择">
                  <el-option
                    v-for="item in state.statusList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>

                <p>进出标志</p>
                <el-select style="width:260" v-model="state.iEType" placeholder="请选择">
                  <el-option
                    v-for="item in state.iETypeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="right">
                <p>通道编号</p>
                <input type="text" v-model="state.chalNo">
                <p>是否为行政通道</p>
                <el-select style="width:260" v-model="state.type" placeholder="请选择">
                  <el-option
                    v-for="item in state.typeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <!-- 卡口采集数据传输设置 -->
          <div>
            <h4>卡口采集数据传输设置</h4>
            <div class="data">
              <div class="left">
                <p>数据发送节点</p>
                <el-select style="width:260" v-model="state.dataNode" placeholder="请选择">
                  <el-option
                    v-for="item in state.dataNodeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <p>集中监控中心端口</p>
                <input type="text" class="no-btn" v-model="state.port">
                <p>PLC控制器串口</p>
                <input type="text" class="no-btn" v-model="state.PLC">
              </div>
              <div class="right">
                <p>集中监控中心地址</p>
                <input type="text" v-model="state.ip">
                <p>本机监听端口</p>
                <input type="text" v-model="state.localPort">
                <p>LED显示屏串口</p>
                <input type="text" v-model="state.LED">
              </div>
            </div>
          </div>
          <div>
            <h4>工作模式</h4>
            <el-radio @change="cutMode(0)" v-model="mode1" label="0">工作模式</el-radio>
            <el-radio @change="cutMode(1)" v-model="mode1" label="1">测试模式</el-radio>
          </div>
          <!-- 光学车牌照片路径IMAGES -->
          <div class="no-tmp">
            <p>光学车牌照片路径IMAGES(非TMP)</p>
            <div class="path">
              <input id="path-name2" type="text" disabled v-model="state.plateUrl">
              <div class="btn">
                <img src="../../../assets/images/sandian.png" alt="">
                <input type="file"  @change="(e) => fileChange(e,false)" id="path2">
              </div>
            </div>
          </div>
          <!-- 按钮 -->
          <div class="btns">
            <button class="cancel" @click="cancel">取消</button>
            <button class="determine" @click="endUpdateChannel" v-if="flag">确定</button>
            <button class="determine" @click="startAddChannel" v-else>确定</button>
          </div>
        </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { selectChannels, addChannel, updateChannel } from '@/api/index'
import { State } from '@/store/device/index.d'
import { namespace } from 'vuex-class'
import { PreferencesModel } from '@/type/preferences'
const deviceModel = namespace('deviceAll')
@Component
export default class Preferences extends Vue {
  @deviceModel.State((state:State) => state.mode) mode!:number;
  @deviceModel.Mutation('updateMode') updateMode!: Function;
  private state: PreferencesModel = {
    id: 0,
    dataUrl: '',
    password: '',
    status: 2, // 通道状态
    chalNo: '', // 通道
    iEType: 'I', // 进出
    type: 1, // 通道类型
    dataNode: 0, // 数据发送节点
    ip: '', // 监控地址
    port: '', // 端口
    localPort: '', // 本机端口
    PLC: '', // PLC
    LED: '', // LED
    plateUrl: '', // 车牌照片路径
    iETypeList: [
      {
        label: '进',
        value: 'I'
      },
      {
        label: '出',
        value: 'E'
      }
    ], // 进出口标志列表
    // 数据发送节点列表
    dataNodeList: [
      {
        label: 'IC卡或光学车牌',
        value: 0
      }
    ],
    // 通道状态
    statusList: [
      {
        label: '暂停',
        value: 1
      },
      {
        label: '关闭',
        value: 2
      },
      {
        label: '待机',
        value: 3
      },
      {
        label: '启用中',
        value: 4
      }
    ],
    // 通道类型列表
    typeList: [
      {
        label: '行政通道',
        value: 1
      },
      {
        label: '载货通道',
        value: 2
      },
      {
        label: '空货通道',
        value: 3
      }
    ]
  }

  private flag = false
  private mode1 = ''
  // 选择本地文件路径
  fileChange (event: any, flag: boolean) {
    if (flag) {
      this.state.dataUrl = event.target.value
    } else {
      this.state.plateUrl = event.target.value
    }
  }

  // 确认
  cnfirmation () {
    console.log('确认')
  }

  // 取消
  cancel () {
    console.log('取消')
  }

  // 查询通道信息
  selectChannel () {
    selectChannels().then((data) => {
      if (data.result) {
        const { chalNo, iEType, json, status, type, id } = data.result
        this.state.status = status
        this.state.iEType = iEType
        this.state.chalNo = chalNo
        this.state.type = type
        this.state.id = id
        this.state.LED = json.LED || ''
        this.state.PLC = json.PLC || ''
        this.state.dataNode = json.dataNode || 0
        this.state.ip = json.ip || ''
        this.state.plateUrl = json.plateUrl
        this.state.port = json.port || ''
        this.flag = true
        console.log('this', this.state, iEType)
      }
    }).catch((err) => {
      console.error(err)
    })
  }

  // 添加通道
  startAddChannel () {
    const channel = {
      chalNo: this.state.chalNo,
      json: {
        dataNode: this.state.dataNode,
        ip: this.state.ip,
        port: this.state.port,
        localPort: this.state.localPort,
        PLC: this.state.PLC,
        LED: this.state.LED,
        plateUrl: this.state.plateUrl
      },
      iEType: this.state.iEType,
      id: this.state.id,
      status: this.state.status,
      type: this.state.type
    }
    console.log('post')
    addChannel(channel).then((data) => {
      this.selectChannel()
    }).catch(err => {
      console.log(err)
    })
  }

  // 修改通道
  endUpdateChannel () {
    console.log('put')
    const channel = {
      chalNo: this.state.chalNo,
      json: {
        dataNode: this.state.dataNode,
        ip: this.state.ip,
        port: this.state.port,
        localPort: this.state.localPort,
        PLC: this.state.PLC,
        LED: this.state.LED,
        plateUrl: this.state.plateUrl
      },
      iEType: this.state.iEType,
      id: this.state.id,
      status: this.state.status,
      type: this.state.type
    }

    updateChannel(channel).then((data) => {
      this.selectChannel()
    }).catch(err => {
      console.log(err)
    })
  }

  cutMode (num: number) {
    this.updateMode(num)
  }

  created () {
    this.selectChannel()
    console.log(this.mode)
    this.mode1 = this.mode + ''
  }
}
</script>

<style lang="less">
    @import './index.less';
</style>
