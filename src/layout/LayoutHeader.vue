<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div class="headerPage">
    <div class="header">
      <div class="address">
        <template v-if="route.path === '/'">
          <span>上海</span>
          <span class="weather">雷阵雨</span>
        </template>
        <template v-else>
          <span class="back" @click="router.back()">
            <img src="@/assets/back.png" alt="" /> 返回</span
          >
        </template>
      </div>
      <div class="regulatory-platform"></div>
      <span class="time">20:30:59 2022.06.10星期四</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.header {
  position: relative;
  height: 80px;
  padding: 0 42px;
  background: url(@/assets/headerBg@2x.png) no-repeat;
  background-size: 100% 80px;
  background-position: left;

  .regulatory-platform {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 20%;
    height: 54px;
    background-image: url(@/assets/regulatory-platform@2.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  span {
    color: #abb0b9;
  }

  .address,
  .time {
    margin-top: 10px;
  }
  .address {
    float: left;

    .weather {
      margin-left: 28px;
    }
  }

  .back {
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
      vertical-align: top;
    }
  }

  .time {
    float: right;
  }
}
</style>
