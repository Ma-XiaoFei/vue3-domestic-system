<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import QueryGroup from '@/components/QueryGroup/Index.vue';
import echarts from '@/common/echart';
import { optionsR } from './chartOption';

const tableData = Array.from({ length: 10 }, (t, i) => ({
  date: i + 1,
  1: '车辆识别1号',
  2: '鄞州区中惠东路199号-东门',
  3: '项目',
  4: '在线',
  5: '正常',
  6: '建筑电工',
  7: '2021-12-22',
  8: '08:32',
  9: 'https://alipic.lanhuapp.com/SketchPng34c958decd182af147477e22175e4604dce1a52b2e8af53e176fab5646a50efe',
  10: '08:32',
  11: '',
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
      label: '姓名',
      name: 'a',
    },
    {
      type: 'select',
      label: '考勤时间',
      name: 'b',
    },
    {
      type: 'select',
      label: '参建单位',
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
          <span style="font-size: 12px; color: #fff; margin-left: 5px"
            >考勤人数</span
          >
        </span>
      </div>
      <div class="line-chart" ref="chartRef"></div>
    </div>

    <div class="table-content">
      <h5 class="title-chart">考勤数据表</h5>
      <QueryGroup :groups="data.groups" v-model="data.params" />

      <el-table
        stripe
        :data="tableData"
        max-height="calc(100vh - 25vh - 400px)"
      >
        <el-table-column prop="date" label="序号" />
        <el-table-column prop="2" label="姓名" />
        <el-table-column prop="3" label="参建单位" />
        <el-table-column prop="4" label="班组" />
        <el-table-column prop="5" label="人员类别" />
        <el-table-column prop="6" label="工种" />
        <el-table-column prop="7" label="日期" />
        <el-table-column prop="8" label="入场时间" />
        <el-table-column prop="9" label="入场照片">
          <template #default="scope">
            <div style="width: 40px; height: 40px">
              <img style="width: 100%" :src="scope.row[9]" alt="" />
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="10" label="出场时间" />
        <el-table-column prop="11" label="出场照片">
          <template #default="scope">
            <div style="width: 40px; height: 40px">
              <img style="width: 100%" :src="scope.row[9]" alt="" />
            </div>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="slot,prev, pager, next"
        :total="50"
        class="mt-4"
      >
        <span class="total-num">共50条</span>
      </el-pagination>
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
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #fff;
}

.line-chart {
  width: 100%;
  height: 25vh;
}

.table-content {
  margin-top: 30px;
}
</style>
