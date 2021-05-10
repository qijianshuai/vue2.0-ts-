<template>
    <!-- 内容区域 -->
    <section class="setting">
      <!-- 侧边栏 -->
      <aside>
        <ul>
            <li :class="{active: $route.path === '/setting/preferences'}" @click="$router.push('/setting/preferences')">
              <img v-show="$route.path === '/setting/preferences'" src="../../assets/images/canshushezhi.png" alt="">
              <span>参数设置</span>
            </li>
            <!-- <li :class="{active: $route.path === '/setting/deviceState'}" @click="$router.push('/setting/deviceState')">
              <img v-show="$route.path === '/setting/deviceState'" src="../../assets/images/shebeizhuangtai.png" alt="">
              <span>设备状态</span>
            </li> -->
            <li :class="{active: $route.path === '/setting/dataSync'}" @click="$router.push('/setting/dataSync')">
              <img v-show="$route.path === '/setting/dataSync'" src="../../assets/images/shujutongbu.png" alt="">
              <span>数据同步</span>
            </li>
            <li :class="{active: $route.path === '/setting/networkGorge'}" @click="$router.push('/setting/networkGorge')">
              <img v-show="$route.path === '/setting/networkGorge'" src="../../assets/images/wangluojiekou.png" alt="">
              <span>网络串口</span>
            </li>
            <li :class="{active: $route.path === '/setting/weiding'}">
              <!-- <img v-show="$route.path === '/setting/weiding'" src="../../assets/images" alt=""> -->
              <span>关于版本</span>
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
@Component
export default class Setting extends Vue {
}
</script>

<style lang="less">
    @import './index.less';
</style>
