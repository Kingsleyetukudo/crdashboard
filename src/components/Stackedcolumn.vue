<template>
  <div class="container">
    <div :id="domId" style="height: 50vh"></div>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue'
import Highcharts from 'highcharts'
export default {
    props: ['domId', 'stackedData', 'details'],
    setup(props) {
        const chartStacked = ref(null)

       onMounted(() => {
         const stackChart = {
  chart: {
    type: 'column',
    renderTo: props.domId
  },
  title: {
    text: 'Stacked column chart'
  },
  xAxis: {
    categories: props.details
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total fruit consumption'
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: ( // theme
          Highcharts.defaultOptions.title.style &&
          Highcharts.defaultOptions.title.style.color
        ) || 'gray',
        textOutline: 'none'
      }
    }
  },
  legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor:
    Highcharts.defaultOptions.legend.backgroundColor || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true
      }
    }
  },
  series: props.stackedData
};
    chartStacked.value = new Highcharts.chart(stackChart)

       })
        return {
            chartStacked
        }
    }

}
</script>

<style>

</style>