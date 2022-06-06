<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import day from 'dayjs';

const mapDay = ['', '一', '二', '三', '四', '五'];

const route = useRoute();
const router = useRouter();

const timeStr = ref('');
const dateStr = ref('');
const dayStr = ref('');

const renderNowTime = () => {
  const instance = day();
  timeStr.value = instance.format('HH:mm:ss');
  dateStr.value = instance.format('YYYY.MM.DD');
  dayStr.value = mapDay[instance.get('day')];
};

const headTitle = computed(() => {
  const classObj = {
    'regulatory-platform': true,
    house: route.query.type === 'house' || ['/'].includes(route.path),
    digital: route.query.type === 'platform' || ['/labor-real-name','/community-platform'].includes(route.path),
  };
  return classObj;
});

onMounted(() => {
  renderNowTime();
  setInterval(renderNowTime, 1000);
});
</script>

<template>
  <div class="headerPage">
    <div class="header">
      <div class="address">
        <template v-if="route.path === '/'">
          <span>宁波市</span>
          <span class="weather">雷阵雨</span>
        </template>
        <template v-else>
          <span class="back" @click="router.back()">
            <img src="@/assets/back.png" alt="" /> 返回</span
          >
        </template>
      </div>
      <div :class="headTitle"></div>
      <span class="time">
        <span class="t">{{ timeStr }}</span>
        <span class="date">{{ dateStr }} 星期{{ dayStr }}</span></span
      >
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
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .house {
    background-image: url(@/assets/regulatory-platform@2.png);
  }
  .digital {
    background-image: url(@/assets/数字社区监管平台@2x.png);
  }
  span {
    color: #abb0b9;
  }

  .address,
  .time {
    margin-top: 10px;

    .t {
      display: inline-block;
      width: 80px;

      font-size: 20px;
    }
    .date {
      margin-left: 5px;
      font-size: 16px;
    }
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
