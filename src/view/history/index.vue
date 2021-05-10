<template>
  <!-- 内容区域 -->
  <section class="history">
    <div class="search">
      <div class="item">
        <span>IC卡卡号</span>
        <input type="text" v-model="state.searchInfo.cardNo">
      </div>
      <div class="item">
        <span>车牌号码</span>
        <input type="text" v-model="state.searchInfo.numberPlate">
      </div>
      <div class="item">
        <span>放行结果</span>
        <select v-model="state.searchInfo.result">
          <option value="0">放行</option>
          <option value="1">不放行</option>
        </select>
      </div>
      <div class="item">
        <span>过闸时间</span>
        <input type="date" v-model="state.searchInfo.startTime">
      </div>
      <div class="tit">-</div>
      <div class="item">
        <input type="date" v-model="state.searchInfo.endTime">
      </div>
      <div class="btn" @click="search">搜索</div>
    </div>
    <!-- 表格 -->
    <div class="data-box">
      <table id="table">
        <!-- 表头 -->
        <tr>
          <th>业务序号</th>
          <th>放行结果</th>
          <th>放行模式</th>
          <th>IC卡ID号</th>
          <th>IC卡卡号</th>
          <th>光学车牌号</th>
          <th>光学车牌颜色</th>
          <th>LED显示海关放行指令</th>
        </tr>
        <!-- 内容行 -->
        <tr v-for="item in state.resultList" :key="item.businessNo">
          <td>{{item.bisNo}}</td>
          <td>{{item.releaseResult}}</td>
          <td>{{item.releaseMode}}</td>
          <td>{{item.icId}}</td>
          <td>{{item.icNo}}</td>
          <td>{{item.vehicleNo}}</td>
          <td>{{item.color}}</td>
          <td>{{item.customerCmd}}</td>
        </tr>
      </table>
      <!-- 暂无数据 -->
      <div class="data" v-if="state.resultList.length < 1">
        <img class="no-data" src="../../assets/images/shuju.png" alt="">
        <span>暂无数据</span>
      </div>
    </div>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageInfo.currentPage"
      :page-sizes="pageInfo.pageSizes"
      :page-size="pageInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.total">
    </el-pagination>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getHistoryLogs } from '@/api/index'
import { State } from '@/type/history'
import moment from 'moment'
@Component
export default class History extends Vue {
  private state: State = {
    searchInfo: {
      cardNo: '',
      numberPlate: '',
      releaseResult: 0,
      startTime: moment(Date.now()).format('YYYY-MM-DD'),
      endTime: moment(Date.now()).format('YYYY-MM-DD')
    },
    resultList: []
  }

  // 分页对象
  private pageInfo = {
    currentPage: 1,
    pageSizes: [10, 20, 50, 100],
    pageSize: 20,
    total: 0
  }

  // 搜索
  async search () {
    const { currentPage, pageSize } = this.pageInfo
    this.getHistory(currentPage, pageSize)
  }

  // 分页数量改变
  handleSizeChange (pageSize: number) {
    this.getHistory(this.pageInfo.currentPage, pageSize)
  }

  // 当前页改变
  handleCurrentChange (page: number) {
    this.getHistory(page, this.pageInfo.pageSize)
  }

  // 请求数据
  async getHistory (currentPage: number, pageSize: number) {
    const { cardNo, startTime, endTime, releaseResult, numberPlate } = this.state.searchInfo
    const { result } = await getHistoryLogs(currentPage, pageSize, {
      icNo: cardNo,
      passGateBegin: startTime,
      passGateEnd: endTime,
      releaseResult: releaseResult,
      vehicleNo: numberPlate
    })
    this.pageInfo.pageSize = result.pageSize
    this.pageInfo.currentPage = result.pageNum
    this.pageInfo.total = result.totalSize
    this.state.resultList = result.content
  }

  created () {
    this.getHistory(1, 20)
  }
}
</script>

<style lang="less" scope>
  @import './index.less';
</style>
