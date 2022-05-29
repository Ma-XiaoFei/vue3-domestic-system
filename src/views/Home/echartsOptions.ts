import echarts from '@/common/echart';
import { ECOption } from '@/common/echart';
export const optionsR = ({xData= [], data=[]}: any):ECOption => ({
  grid: {
    top: 20,
    left: 0,
    bottom: 0,
    containLabel: true,
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
      type: 'bar',
      barMaxWidth: 40,
      showBackground: true,
      label: {
        show: true,
        position: 'top',
        color: '#0093FF'
      },
      itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(0, 147, 255, 0.7)' 
            }, {
                offset: 1, color: 'rgba(0, 147, 255, 0)'
            }],
            global: false // 缺省为 false
          }
      },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(0, 147, 255, .6)' },
              { offset: 1, color: 'rgba(0, 147, 255, .4)' },
            ]),
          },
        },
      data: data
    },
  ],
});
