<template>
  <div class="col-holder">
    <ColumnChart domId="column" :colData="colData" />
  </div>
</template>

<script>
import ColumnChart from './ColumnChart.vue'
import {ref} from 'vue'

export default {

components: {
    ColumnChart
},

setup(){
    const colData = ref([{
            name: 'Expenses',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]

          }, {
            name: 'Inflow',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0]

          }])

    return {
        colData
    }
}

}
</script>

<style>

</style>