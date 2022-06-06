import { ECOption } from '@/common/echart';

export const optionsRender = (h: number): ECOption => {
  return {
    grid: {
        top: '25%',
      left: 3,
      right: 9,
      bottom: '15%',
      containLabel: true,
    },
    xAxis: {
      boundaryGap: false,
      data: [0, 20, 40, 60, 80, {value: 90, textStyle: {color: 'red'}}, 100],
      axisLine: {
        show: false,
      },
      axisTick: {
          show: false
      },
      splitLine: {
        lineStyle: {
            type: 'dashed',
            color: ['rgba(255, 255, 255, .2)','rgba(255, 255, 255, .2)','rgba(255, 255, 255, .2)','rgba(255, 255, 255, .2)','rgba(255, 255, 255, .2)','red','rgba(255, 255, 255, .2)']
        },
        show: true
    }
    },
    yAxis: {
        show: false
    },
  };
};
