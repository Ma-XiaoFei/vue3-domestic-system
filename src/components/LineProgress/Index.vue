<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { optionsRender } from './optionR';
import echarts from '@/common/echart';
const props = defineProps<{
  safetyIndex: number;
}>();

const chartRef = ref();

onMounted(() => {
  const chart = echarts.init(chartRef.value);
  chart.setOption(optionsRender(parseFloat(getComputedStyle(chartRef.value).height)*0.8));
  window.addEventListener('resize', chart.resize as any);
});
</script>

<template>
  <div class="line-progress">
    <div style="position: absolute; width: 100%; z-index: 1; padding: 0 8px 0 3px;top: 50%;transform: translateY(-50%);">
     <p style="position: absolute;top: -10vh; font-size: 1vh;"><img src="@/assets/安全num.png" alt="" />本月安全指数</p>
      <p class="achieve" :style="{ left: `calc(${props.safetyIndex}% - 93px`, top: '-60px' }">
        已达到
        <span style="font-size: 32px; color: #00eaff">{{
          props.safetyIndex
        }}</span
        >%
      </p>
      <div class="outer-line">
        <div
          class="inner-line"
          :style="{ width: (props.safetyIndex-13) + '%' }"
        ></div>
        <div class="circle-top"></div>
      </div>
    </div>
    <div class="axis" ref="chartRef" style="height: 100%; width: 100%;"></div>
  </div>
</template>

<style lang="less">
.line-progress {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
  height: 100%;
  margin-left: 10%;
  margin-top: 10px;

  .achieve {
    position: absolute;
    top: 15px;
    width: 100px;
  }

  p {
    font-size: 12px;
    color: #fff;
    img {
      width: 1vw;
      height: 1vw;
      vertical-align: middle;
    }
  }

  .outer-line {
    width: 100%;
    background-color: #353c47;
    .inner-line {
      position: relative;
      height: 10px;
      background: linear-gradient(90deg, #00bbff 0%, #00f7ff 100%);

      &::after {
        content: '';
        position: absolute;
        right: -20px;
        top: -3px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #00eaff;
      }
      &::before {
        content: '';
        position: absolute;
        right: -25px;
        top: -9px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: black;
      }
    }
    // .circle-top {
    // }
  }
}
</style>
