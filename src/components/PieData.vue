<template>
  <div class="pie-holder">
    <PieChart domId="chart" :chartData="chartData" />
  </div>
</template>

<script>
import PieChart from '../components/PieChart.vue'
import {ref} from 'vue'

export default {

    components: {
        PieChart
    },

    setup() {

        const chartData = ref([
            {name: 'Contribution', y: 35000},
            {name: 'Expenses', y: 85000},
            {name: 'Donations', y: 23000},
            {name: 'Payment', y: 2300},
            {name: 'Subscription', y: 2100},
        ])

        return {
            chartData
        }
    }

}
</script>

<style>

</style>