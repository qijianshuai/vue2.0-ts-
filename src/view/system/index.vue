<template>
  <!-- 内容区域 -->
  <section class="system-wrap">
    <!-- 侧边栏 -->
    <aside>
      <ul>
          <li :class="{active: $route.path.indexOf('/system/control') !== -1}" @click="$router.push('/system/control')">
            <img v-show="$route.path.indexOf('/system/control') !== -1" src="../../assets/images/chepaishibie.png" alt="">
            <span>中控模块</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/handrail') !== -1}" @click="$router.push('/system/handrail')">
            <img v-show="$route.path.indexOf('/system/handrail') !== -1" src="../../assets/images/langan.png" alt="">
            <span>道闸栏杆</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/anpr') !== -1}" @click="$router.push('/system/anpr')">
            <img v-show="$route.path.indexOf('/system/anpr') !== -1" src="../../assets/images/chepaishibie.png" alt="">
            <span>车牌识别相机1</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/anrp') !== -1}" @click="$router.push('/system/anrp')">
            <img v-show="$route.path.indexOf('/system/anrp') !== -1" src="../../assets/images/chepaishibie.png" alt="">
            <span>车牌识别相机2</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/scskd') !== -1}" @click="$router.push('/system/scskd')">
            <img v-show="$route.path.indexOf('/system/scskd') !== -1" src="../../assets/images/dibang.png" alt="">
            <span>电子地磅</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/channe') !== -1}" @click="$router.push('/system/channe')">
            <img v-show="$route.path.indexOf('/system/channe') !== -1" src="../../assets/images/tongdao.png" alt="">
            <span>通道监控</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/transducer') !== -1}" @click="$router.push('/system/transducer')">
            <img v-show="$route.path.indexOf('/system/transducer') !== -1" src="../../assets/images/tongdao.png" alt="">
            <span>采集传感器</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/instruct') !== -1}" @click="$router.push('/system/instruct')">
            <img v-show="$route.path.indexOf('/system/instruct') !== -1" src="../../assets/images/tongdao.png" alt="">
            <span>指示模块</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/bigScreen') !== -1}" @click="$router.push('/system/bigScreen')">
            <img v-show="$route.path.indexOf('/system/bigScreen') !== -1" src="../../assets/images/chepaifasong.png" alt="">
            <span>通道LED大屏</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/bottomCamera') !== -1}" @click="$router.push('/system/bottomCamera')">
            <img v-show="$route.path.indexOf('/system/bottomCamera') !== -1" src="../../assets/images/chepaifasong.png" alt="">
            <span>车底相机</span>
          </li>
          <li :class="{active: $route.path === '/system/visualize'}"  @click="$router.push('/system/visualize')">
            <img v-show="$route.path === '/system/visualize'" src="../../assets/images/chepaishibie.png" alt="">
            <span>可视化对讲</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/environment') !== -1}" @click="$router.push('/system/environment')">
            <img v-show="$route.path.indexOf('/system/environment') !== -1" src="../../assets/images/chepaifasong.png" alt="">
            <span>环境监控</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/interactiveScreen') !== -1}" @click="$router.push('/system/interactiveScreen')">
            <img v-show="$route.path.indexOf('/system/interactiveScreen') !== -1" src="../../assets/images/chepaifasong.png" alt="">
            <span>通道LED交互屏</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/ic-card') !== -1}" @click="$router.push('/system/ic-card')">
            <img v-show="$route.path.indexOf('/system/ic-card') !== -1" src="../../assets/images/iccard.png" alt="">
            <span>IC卡采集</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/qrcode') !== -1}" @click="$router.push('/system/qrcode')">
            <img v-show="$route.path.indexOf('/system/qrcode') !== -1" src="../../assets/images/iccard.png" alt="">
            <span>二维码设备</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/licenseplate') !== -1}" @click="$router.push('/system/licenseplate')">
            <img v-show="$route.path.indexOf('/system/licenseplate') !== -1" src="../../assets/images/iccard.png" alt="">
            <span>电子车牌</span>
          </li>
          <li :class="{active: $route.path.indexOf('/system/container') !== -1}" @click="$router.push('/system/container')">
            <img v-show="$route.path.indexOf('/system/container') !== -1" src="../../assets/images/jizhuangxiang.png" alt="">
            <span>集装箱识别</span>
          </li>
          <!-- <li :class="{active: $route.path.indexOf('/system/driveway') !== -1}" @click="$router.push('/system/driveway')">
            <img v-show="$route.path.indexOf('/system/driveway') !== -1" src="../../assets/images/chedao.png" alt="">
            <span>车道引导</span>
          </li> -->
          <li :class="{active: $route.path.indexOf('/system/customs') !== -1}" @click="$router.push('/system/customs')">
            <img v-show="$route.path.indexOf('/system/customs') !== -1" src="../../assets/images/haiguan.png" alt="">
            <span>海关锁阅读</span>
          </li>
      </ul>
    </aside>
    <!-- 内容区域 -->
    <article>
      <router-view></router-view>
    </article>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Websocket } from '@/utils/websocket'
@Component
export default class System extends Vue {
  private wsInstance: Websocket

  created () {
    // const baseurl = '172.16.17.217:8081'
    // let baseurl = ''
    // if (localStorage.getItem('proxyUrl')) {
    //   baseurl = JSON.parse(localStorage.getItem('proxyUrl') as string)
    // } else {
    //   baseurl = 'localhost:8080'
    // }

    // this.wsInstance = new Websocket(`ws://${baseurl}/websocket/running`, (data: any) => {
    //   console.log(data)
    //   // 指示模块：当日超出200条，剔除第一条，加入最后一行
    //   if (this.$store.state.systemState.instruct.length >= 200) {
    //     this.$store.state.systemState.instruct.splice(0, 1)
    //     this.$store.state.systemState.instruct.push(data)
    //   } else {
    //     this.$store.state.systemState.instruct.push(data)
    //   }
    // })
  }

  beforeDestroy () {
    this.wsInstance.closeWebsocket(false)
  }
}
</script>

<style lang="less">
    @import './index.less';
</style>
