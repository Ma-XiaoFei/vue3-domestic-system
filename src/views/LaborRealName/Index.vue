<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import type { TabsPaneContext } from 'element-plus';
import QueryComponent from './components/Index.vue';
import QueryGroup from '@/components/QueryGroup/Index.vue';
import echarts from '@/common/echart';
import { optionsR } from './chartOption';

const tableData = Array.from({ length: 10 }, (t, i) => ({
  date: i + 1,
  name: '车辆识别1号',
  state: '鄞州区中惠东路199号-东门',
  city: '项目',
  address: '在线',
  zip: '正常',
}));

const Darr = Array.from(
  { length: 30 },
  (t: undefined, i: number) => `05-${i + 1 < 10 ? '0' + (i + 1) : i + 1}`
);
const chartRef = ref();
const data = reactive({
  dateData: Array(30)
    .fill(undefined)
    .map((t) => Math.floor(Math.random() * (100 - 10) + 10)),
  groups: [
    {
      type: 'input',
      label: '地磅名称',
      name: 'a',
    },
    {
      type: 'select',
      label: '项目名称',
      name: 'b',
    },
    {
      type: 'select',
      label: '离在线状态',
      name: 'c',
    },
  ],
  params: {
    a: '',
    b: '',
    c: '',
  },
});

onMounted(() => {
  const chart = echarts.init(chartRef.value);
  chart.setOption(
    optionsR({
      xData: Darr,
      data: data.dateData,
    })
  );
  window.addEventListener('resize', chart.resize as any);
});
</script>

<template>
  <div class="cisco-manage">
    <div class="title">
      <img src="@/assets/劳务实名@2x.png" alt="" />
    </div>
    <div>
      <div class="flex-space">
        <h5 class="title-chart">近三十天考核统计图</h5>
        <span>
          <i class="dot"></i>
          <span style="font-size: 12px; color: #FFF; margin-left: 5px;">考勤人数</span>
        </span>
      </div>
      <div class="line-chart" ref="chartRef"></div>
    </div>

    <div class="table-content">
      <QueryGroup :groups="data.groups" v-model="data.params" />

      <el-table stripe :data="tableData" max-height="calc(100vh - 1000px)">
        <el-table-column prop="date" label="序号" />
        <el-table-column prop="name" label="车辆识别" />
        <el-table-column prop="state" label="位置（GPS定位）" />
        <el-table-column prop="city" label="项目名称" />
        <el-table-column prop="address" label="离在线状态" />
        <el-table-column prop="zip" label="报警状态" />
      </el-table>
    </div>
  </div>
</template>
<style lang="less" scoped>
.cisco-manage {
  padding: 40px 72px 0;

  .flex-space {
    align-items: center;
  }
}

.title {
  margin-bottom: 10px;
  img {
    width: 10%;
  }
}
.title-chart {
  font-size: 1em;
  color: #fff;
}

.line-chart {
  width: 100%;
  height: 25vh;
}
</style>
