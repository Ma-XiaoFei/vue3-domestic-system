<script lang="ts" setup>
const props = defineProps<{
  safetyIndex: number;
}>();
</script>

<template>
  <div class="line-progress">
    <p><img src="@/assets/安全num.png" alt="" />本月安全指数</p>
    <p class="achieve" :style="{ left: `calc(${props.safetyIndex}% - 50px` }">
      已达到
      <span style="font-size: 32px; color: #00eaff">{{props.safetyIndex}}</span>%
    </p>
    <div class="outer-line">
      <div class="inner-line" :style="{ width: props.safetyIndex + '%' }"></div>
      <div class="circle-top"></div>
    </div>
  </div>
</template>

<style lang="less">
.line-progress {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
  height: 20%;
  margin-left: 10%;
  margin-top: 10px;

  .achieve {
    position: absolute;
    top: 15px;
    width: 100px;
  }

  p {
    font-size: 12px;
    margin-bottom: 40px;
    color: #fff;
    img {
      width: 20px;
      vertical-align: bottom;
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
