<template>
  <div class="home">
    <div class="side-bar">
      <Sidebar />
    </div>
    <div class="main-view">
      <Nav />
      <div class="content-holder">
        <MemberReport />
      <div class="chart d-flex">
      <PieChart domId="chart2" :buyData="buyData"/>
      </div>
      <div class="cav">
      <ColumnChart domId="column" :columnChart="colData"/>
      <LineChart domId="LineChart" />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '../components/Navbar.vue'
import Sidebar from '../components/SidebarNav.vue'
import MemberReport from '../components/MemberReport.vue'
import PieChart from '../components/PieChart.vue'
import ColumnChart from '../components/ColumnChat.vue'
import LineChart from '../components/LineChart.vue'
import {ref} from 'vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    Sidebar,
    MemberReport,
    PieChart,
    ColumnChart,
    LineChart,
  },

  setup() {
    const buyData = ref([
        {name: 'kingsley', y: 80},
        {name: 'kingsley', y: 50},
        {name: 'kingsley', y: 50},
      ])

       const buyData1 = ref([
        {name: 'kingsley', y: 80},
        {name: 'kingsley', y: 50},
        {name: 'kingsley', y: 50},
        {name: 'Joy', y: 20},
      ])

      const num = ref([50, 20, 7, 12, 98, 52])

      const colData = ref([{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

          }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

          }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

          }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

          }])

      return{
        buyData, buyData1, num, colData
        }
  }
  
}
</script>

<style scoped>

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
  .home {
    background-color: #f7faff;
    width: 100%;
    /* height: 100vh; */
    padding: 2.5rem 0 0 2.5rem;
    display: flex;
    gap: 2.5rem;
  }

  .side-bar {
    width: 200px;
  }

  .main-view {
    width: 80%;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .content-holder {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 1.5rem;
    background-color: #fff;
  }

  .cav {
    width: 300px;
    height: 300px;
    border: 1px solid red;
  }

  @media (max-width: 991px) {
    .side-bar {
      display: none;
    }

    .main-view {
    width: 100%;
    border: 1px solid red;
  }

  .home {
    padding:0;
    gap:0;
  }
  }
</style>