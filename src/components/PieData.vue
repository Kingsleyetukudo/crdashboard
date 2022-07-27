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
            {name: 'Rice', y: 35000},
            {name: 'Beans', y: 85000},
            {name: 'Garri', y: 23000},
            {name: 'oil', y: 2300},
            {name: 'onions', y: 2100},
        ])

        return {
            chartData
        }
    }

}
</script>

<style>

</style>