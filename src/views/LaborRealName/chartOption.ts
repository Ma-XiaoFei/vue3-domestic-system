import echarts from '@/common/echart';
import { ECOption } from '@/common/echart';
export const optionsR = ({xData= [], data=[]}: any):ECOption => ({
  grid: {
    top: 20,
    left: 0,
    bottom: 0,
    right: 0,
    containLabel: true,
  },
  tooltip:{

  },
  dataZoom:{
    type: "inside"
  },
  xAxis: {
    data: xData,
    axisLabel: {
      color: '#97a0a7',
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
          color: '#1E2C58'
      }
    },
    z: 10,
  },
  yAxis: {
    splitLine: {
        lineStyle: {
            color: '#1E2C58'
        }
    },
    axisLine: {
     
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: '#999',
    },
  },
  //   dataZoom: [
  //     {
  //       type: 'inside',
  //     },
  //   ],
  series: [
    {
      type: 'line',
      label: {
        show: true,
        position: 'top',
        color: '#0093FF'
      },
      itemStyle: {
         color: '#59c7de'
      },
      data: data
    },
  ],
});
