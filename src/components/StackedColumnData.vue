<template>
  <div class="stackedcol-holder">
     <Stacked domId="stackcol" :stackedData="stackedData" :details="details"/>
  </div>
</template>

<script>
import Stacked from '../components/Stackedcolumn.vue'
import {ref} from 'vue'
export default {
    components: {
        Stacked
    },

    setup() {

        const stackedData = ref([{
    name: 'John',
    data: [5, 3, 4, 7, 2, 6, 2]
  }, {
    name: 'Jane',
    data: [2, 2, 3, 2, 1, 4, 7]
  }, {
    name: 'Joe',
    data: [3, 4, 4, 2, 5, 0, 0]
  }])

  const details = ref(['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas', 'Rice', 'Garri'])

        return {
            stackedData, details
        }
    }

}
</script>

<style>

</style>