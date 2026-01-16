  <template>
  <div class="kLine">
    <div ref="chartRef" class="chartRefs"></div>
  </div>
</template>

  <script setup>
import * as echarts from "echarts";
import {
  defineProps,
  onMounted,
  ref,
  nextTick,
  watch,
  onBeforeUnmount,
} from "vue";

const props = defineProps({
  dayLst7: {
    type: Array,
    default: () => [],
  },
});

const chartRef = ref(null);
let chartInstance = null;

const getDayLst7 = () => {
  if (!chartRef.value) return;

  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }

  if (!props.dayLst7 || props.dayLst7.length === 0) {
    drawEmptyChart();
    return;
  }
  const xData = [];
  const explorationData = [];
  const executionData = []; 
  const investmentData = []; 
  props.dayLst7.reverse().forEach((item) => {
    if (item && item.createDate !== undefined) {
      let dateStr = "";
      if (typeof item.createDate === "string") {
        dateStr = item.createDate.replace(/-/g, "/");
      } else {
        dateStr = String(item.createDate);
      }
      xData.push(dateStr);

      const explorationVal = Number(item.exploration) || 0;
      const executionVal = Number(item.executionCapability) || 0;
      const investmentVal = Number(item.investment) || 0;

      explorationData.push(explorationVal);
      executionData.push(executionVal);
      investmentData.push(investmentVal);
    }
  });

  drawChart(xData, explorationData, executionData, investmentData);
};

const drawChart = (xData, explorationData, executionData, investmentData) => {
  try {
    chartInstance = echarts.init(chartRef.value);

    const colors = {
      exploration: "#A1FF27",
      execution: "#1890FF", 
      investment: "#FF6B6B",
    };

    const option = {
      backgroundColor: "transparent",
      color: [colors.exploration, colors.execution, colors.investment],

      grid: {
        top: "10%",
        left: "0%",
        right: "5%",
        bottom: "0%",
        containLabel: true,
      },

      tooltip: {
        trigger: "axis",
        confine: true, 
        backgroundColor: "#fff7dd", 
        borderWidth: 0,
        textStyle: {
          color: "#000",
          fontSize: 12,
          fontFamily: "jtFont",
        },
      },

      xAxis: {
        type: "category",
        data: xData,
        axisLabel: {
          color: "#000",
          fontSize: 10,
          fontFamily: "jtFont",
          formatter: function (value) {
            if (value && typeof value === "string" && value.includes("/")) {
              const parts = value.split("/");
              if (parts.length >= 2) {
                return `${parts[1]}/${parts[2] || parts[1]}`;
              }
            }
            return value;
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#000", 
          },
        },
        axisTick: {
          show: false,
        },
      },

      yAxis: {
        type: "value",
        show: true,
        axisLabel: {
          color: "#000",
          fontSize: 12,
          fontFamily: "jtFont",
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#000",
            width: 1,
          },
        },
        splitLine: {
          show: false,
        },
      },

      series: [
        {
          name: "探索力指数",
          type: "line",
          data: explorationData,
          smooth: true,
          symbol: "circle",
          symbolSize: 6,
          lineStyle: {
            color: colors.exploration,
            width: 2,
          },
          itemStyle: {
            color: colors.exploration,
          },
          areaStyle: {
            color: "none",
          },
          emphasis: {
            focus: "series",
            itemStyle: {
              color: colors.exploration,
              borderColor: "#fff",
              borderWidth: 2,
            },
          },
        },
        {
          name: "行动力指数",
          type: "line",
          data: executionData,
          smooth: true,
          symbol: "circle",
          symbolSize: 6,
          lineStyle: {
            color: colors.execution,
            width: 2,
          },
          itemStyle: {
            color: colors.execution,
          },
          areaStyle: {
            color: "none",
          },
          emphasis: {
            focus: "series",
            itemStyle: {
              color: colors.execution,
              borderColor: "#000",
              borderWidth: 2,
            },
          },
        },

        {
          name: "投入指数",
          type: "line",
          data: investmentData,
          smooth: true,
          symbol: "circle",
          symbolSize: 6,
          lineStyle: {
            color: colors.investment,
            width: 2,
          },
          itemStyle: {
            color: colors.investment,
          },
          areaStyle: {
            color: "none",
          },
          emphasis: {
            focus: "series",
            itemStyle: {
              color: colors.investment,
              borderColor: "#fff",
              borderWidth: 2,
            },
          },
        },
      ],

      dataZoom: [
        {
          type: "inside",
          xAxisIndex: 0,
          start: 0,
          end: 100,
        },
      ],
    };

    chartInstance.setOption(option);

    const resizeHandler = () => {
      if (chartInstance) {
        chartInstance.resize();
      }
    };

    window.addEventListener("resize", resizeHandler);
  } catch (error) {
  }
};

const drawEmptyChart = () => {
  if (!chartRef.value) return;

  if (chartInstance) {
    chartInstance.dispose();
  }

  chartInstance = echarts.init(chartRef.value);
  const option = {
    title: {
      text: "暂无数据",
      left: "center",
      top: "center",
      textStyle: {
        color: "#000",
        fontSize: 12,
        fontFamily: "jtFont",
      },
    },
    xAxis: { show: false },
    yAxis: { show: false },
    series: [],
  };

  chartInstance.setOption(option);
};

onMounted(() => {
  setTimeout(() => {
    getDayLst7();
  }, 1000);
});

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }
});
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .kLine {
    .chartRefs {
      width: 100%;
      height: 260px;
    }
  }
}
</style>