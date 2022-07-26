<template>
  <div class="container-fluid">
    <div :id="domId" style="height: 50vh"></div>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import { onMounted, ref } from '@vue/runtime-core'
export default {
    props:['domId', 'columnChart'],
setup(props) {

    const chart = ref(null)

     onMounted(() => {
       const columnCharts = {
  chart: {
    type: 'column',
    renderTo: props.domId
  },
  title: {
    text: 'Monthly Average Rainfall'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
    text: 'Rainfall (mm)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: props.columnChart
};

chart.value = new Highcharts.chart(columnCharts)
     })

     return {
        chart
     }
}

}
</script>

<style>

</style>