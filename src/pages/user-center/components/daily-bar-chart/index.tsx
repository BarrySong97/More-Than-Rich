import React, { FC } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
interface DailyBarChartProps {}

const DailyBarChart: FC<DailyBarChartProps> = (props) => {
  const option = {
    backgroundColor: '#fff',
    grid: {
      top: '15%',
      right: '10%',
      left: '10%',
      bottom: '12%',
    },
    xAxis: [
      {
        type: 'category',
        color: '#59588D',
        data: ['2019Q1', '2019Q2', '2019Q3', '2019Q4'],
        axisLabel: {
          margin: 20,
          color: '#999',
          textStyle: {
            fontSize: 18,
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(107,107,107,0.37)',
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        axisLabel: {
          formatter: '{value}%',
          color: '#999',
          textStyle: {
            fontSize: 18,
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(107,107,107,0.37)',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(131,101,101,0.2)',
            type: 'dashed',
          },
        },
      },
    ],
    series: [
      {
        type: 'bar',
        data: [40, 80, 20],
        barWidth: '20px',
        itemStyle: {
          normal: {
            color: function (params: any) {
              //展示正值的柱子，负数设为透明
              let colorArr = ['#89f7fe', '#66a6ff'];
              return new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: colorArr[0], // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: colorArr[1], // 100% 处的颜色
                  },
                ],
                false,
              );
            },
          },
        },
        label: {
          normal: {
            show: true,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
            position: 'top',
          },
        },
      },
    ],
  };
  return (
    <div>
      <ReactECharts option={option} />
    </div>
  );
};

export default DailyBarChart;
