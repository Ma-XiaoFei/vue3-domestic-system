<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import echarts from '@/common/echart';
import { optionsRender } from './optionsR';

interface PropType {
  num: number;
}

const chartRef = ref();
const chart = ref();

const props = defineProps<PropType>();

const renderChart = () => {
  chart.value.setOption(
    optionsRender({
      num: props.num,
    })
  );
};

watch(props, renderChart);

onMounted(() => {
  chart.value = echarts.init(chartRef.value);
  renderChart();
});
</script>

<template>
  <div class="chart" ref="chartRef"></div>
</template>

<style lang="less" scoped>
.chart {
    width: 100px;
    height: 100px;
}
</style>
