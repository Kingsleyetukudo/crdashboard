<template>
  <div class="container-fiuld">
    <div :id="domId" style="height: 50vh"></div>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import { onMounted, ref } from '@vue/runtime-core'
export default {
    props:['domId', 'colData'],
setup(props) {

    const chart = ref(null)

     onMounted(() => {

      var pieColors = (function () {
        var colors = ['red', 'blue', 'yellow', 'pink'],
          base = Highcharts.getOptions().colors[0],
          i;

        for (i = 0; i < 10; i += 1) {
          // Start out with a darkened base color (negative brighten), and end
          // up with a much brighter color
          colors.push(
            Highcharts.color(base)
              .brighten((i - 3) / 7)
              .get()
          );
        }
        return colors;
      })();

       const columnCharts = {
  chart: {
    type: 'column',
    renderTo: props.domId
  },
  title: {
    text: 'Overview'
  },
  // subtitle: {
  //   text: 'Source: WorldClimate.com'
  // },
  xAxis: {
    categories: [
      'Mon',
      'Tus',
      'Wedn',
      'Thur',
      'Fri',
      'Sat',
      'Sun',
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
    text: ''
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:.4rem"><b>&#8358;{point.y:.1f}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      colors: pieColors,
    }
  },
  series: props.colData
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
 /* * {
    padding: 0;
    margin: 0;
  }
.container {
 
  width: 100%;
} */

</style>