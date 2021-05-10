<template>
  <div :class="{handrail: part ,'video-box': flag, 'channe': channe, 'demo': demo}">
    <iframe :src="src + vip" frameborder="0" :class="flag"></iframe>
    <span>暂无视频</span>
  </div>
</template>

<script lang="ts" scope>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class MVideo extends Vue {
  @Prop() vip !: string;
  @Prop() flag !: string;
  @Prop() part !: string;
  @Prop() channe !: boolean;
  @Prop({ default: true }) demo !: boolean
  private src = 'http://localhost:8083/stream/player/'
  mounted () {
    if (localStorage.getItem('camerasInfo')) {
      const data = JSON.parse(localStorage.getItem('cameraUrl'))
      this.src = data + '/stream/player/'
    }
  }
}
</script>

<style lang="less" scope>
.demo {
  width: 95%;
  height: 60%;
  position: relative;
  span{
    position: absolute;
    font-size: 24px;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 20;
  }
}
.video-box {
  width: 50%;
  height: 32.5vh;
  position: relative;
  span{
    position: absolute;
    font-size: 24px;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .big{
    width: 98%;
    height: 32.5vh;
    position: absolute;
    z-index: 20;
    margin-right: 10px;
  }
  .small {
    width: 100%;
    height: 22.5vh;
    position: absolute;
    z-index: 20;
  }
}
.handrail {
  width: 98%;
  height: 600px;
  position: relative;
  span{
    position: absolute;
    font-size: 24px;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 20;
  }
}
.channe {
  width: 95%;
  height: 45%;
  position: relative;
  span{
    position: absolute;
    font-size: 24px;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 20;
  }
}
</style>
