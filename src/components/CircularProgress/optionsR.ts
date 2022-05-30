import { ECOption } from "@/common/echart";

interface OptType {
  num: number;
}

export const optionsRender = ({ num = 0 }: OptType):ECOption => {
    const n = 100 - num;
  return {
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            fontSize: '16px',
            fill: '#00EAFF',
            text: '90%',
          },
        },
      ],
    },
    series: [
      {
        type: 'pie',
        radius: ['60%', '80%'],
        data: [
          {
            value: n,
            itemStyle: { opacity: 0 },
          },
          {
            value: num,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(0, 147, 255, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 234, 255, 1)',
                  },
                ],
              },
              borderRadius: '50%',
            },
          },
        ],
        labelLine: { show: false },
      },
      {
        emptyCircleStyle: {
          color: '#225892',
        },
        type: 'pie',
        radius: ['60%', '80%'],
      },
      {
        emptyCircleStyle: {
          color: '#2c6cb0',
        },
        type: 'pie',
        radius: ['90%', '92%'],
      },
    ],
  };
};
