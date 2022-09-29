<template>
  <div class="container-fiuld">
    <div :id="domId" style="height: 100%; width: 100%"></div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Highcharts from "highcharts";
export default {
  name: "pieChart",
  props: ["domId", "buyData", "buyData1", "chartData"],
  setup(props) {
    const chart = ref(null);
    
    onMounted(() => {  
      // Make monochrome colors
      var pieColors = (function () {
        var colors = ['#24348A', '#FBB122', '#78B298','#C3E1FF', '#090C21'],
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

      var highchartsOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          renderTo: props.domId,
        },
        title: {
          text: "Income Categories",
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: false,
            cursor: "pointer",
            colors: pieColors,
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b><br>{point.percentage:.1f} %",
              distance: -50,
              filter: {
                property: "",
                operator: ">",
                value: 4,
              },

            },
              showInLegend: true,
          },
        },
        series: [
          {
            name: "Share",
            data: props.chartData
          },
        ],
      };

      chart.value = new Highcharts.chart(highchartsOptions);
    });

    return {
      chart,
    };
  },
};
</script>

<style scoped>

.container {
  height: 400px;
  width: 100%;
}
/* .highcharts-figure,
.highcharts-data-table table {
  min-width: 320px;
  max-width: 660px;
  margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}

.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}

.highcharts-data-table tr:hover {
  background: #f1f7ff;
} */
</style>