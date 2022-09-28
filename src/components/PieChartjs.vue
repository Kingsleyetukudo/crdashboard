<template>
   <div class="box">
     <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
   </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  props: {
    chartId: {
      type: String,
      default: 'doughnut-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        datasets: [ { data: [10.33, 4.19, 10.33,4.19, 10.33], backgroundColor: ['#24348A', '#FBB122', '#78B298','#C3E1FF', '#090C21'] } ],
        labels: [ 'Contribution', 'Expenses', 'Donations','Payment', 'Subscription' ],
      },
      chartOptions: {
        responsive: true,
         legend: {
             position: 'right',
            display: false
        }
      }
    }
  }
}
</script>

<style scoped>
.box {
  width: 450px;
  height: 200px;
}
</style>