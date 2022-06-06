<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import {useRouter} from 'vue-router';
import { optionsR } from './echartsOptions';
import echart from '@/common/echart';

const router = useRouter();
const echartRef = ref();
const data = reactive({});

onMounted(() => {
  console.log(echartRef);
  const chart = echart.init(echartRef.value);
  chart.setOption(optionsR(
      {
          xData: ['混凝土工','泥工','钢筋工','其他'],
          data: [68,42,26,22]
      }
  ));
  window.addEventListener('resize',chart.resize as any );
});
</script>

<template>
  <div class="block" @click="router.push({name: 'laborRealName'})">
    <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
    <img class="title" src="@/assets/劳务实名@2x.png" alt="" />
    <div class="line"></div>

    <div>
      <div class="title-box">
        <div>
          <h3 class="before">168</h3>
          <span>总人数</span>
        </div>
        <div>
          <h3 class="before">131</h3>
          <span>实名制人数</span>
        </div>
        <div>
          <h3 class="after">228</h3>
          <span>进场人数</span>
        </div>
        <div>
          <h3 class="after">98</h3>
          <span>今日考勤人员</span>
        </div>
      </div>
      <div class="content-box">
        <div class="flex-space">
          <span>人员工种类型统计</span>
          <span> <i class="circle"></i> 人员数</span>
        </div>
        <div class="echartRef" ref="echartRef"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.block {
  cursor: pointer;
  margin-top: 30px;
  // flex: 1;

  .title {
    width: 70px;
  }
  .title-box {
    color: #97a0a7;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    div {
      h3.before {
        color: #0088ff;
      }
      h3.after {
        color: #00eaff;
      }
    }
  }
  .content-box {
    // max-height: 25vh;
    // min-height: 300px;
    overflow: auto;
    color: #97a0a7;
    margin-top: 14px;

    .circle {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #009eff;
    }

    .echartRef {
       height: 20vh
    }
  }
}
</style>
