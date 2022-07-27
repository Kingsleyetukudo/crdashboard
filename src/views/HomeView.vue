<template>
  <div class="home">
    <div class="side-bar">
      <Sidebar />
    </div>
    <div class="main-view">
      <Nav />
      <div class="content-holder">
        <MemberReport />
      <div class="chart container-fiuld">
        <div class="chart-holder">
          <ColumnChart />
        </div>
        <div class="chart-holder">
          <NewChart />
        </div>
      </div>
      <div class="cav"> 
      <LineChart domId="LineChart"  class="chart-component"/>
      <StackChart class="chart-component"/>
      </div>
      <LineCol domId="linecol" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '../components/Navbar.vue'
import Sidebar from '../components/SidebarNav.vue'
import MemberReport from '../components/MemberReport.vue'
import LineChart from '../components/LineChart.vue'
import NewChart from '../components/PieData.vue'
import ColumnChart from '../components/ColumnData.vue'
import StackChart from '../components/StackedColumnData.vue'
import LineCol from '../components/LineAndColumnChart.vue'
import {ref} from 'vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    Sidebar,
    MemberReport,
    ColumnChart,
    LineChart,
    NewChart,
    StackChart,
    LineCol
  },

  setup() {

  }
  
}
</script>

<style scoped>

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100%;
}

.chart {
  display: grid;
  grid-template-columns: repeat(2, 1fr );
  width: 100%;
}

.chart-component{
  width: 50%;
}
  .home {
    background-color: #f7faff;
    width: 100%;
    height: 100vh;
    padding: 2.5rem 0 2.5rem 2.5rem;
    display: flex;
    gap: 2.5rem;
    overflow: hidden;
 
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
    height: 100vh;
    overflow: auto;
    padding-bottom: 1rem;
  }

  .main-view::-webkit-scrollbar{
    display: none;
  }

  .content-holder {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 2rem;
    background-color: #fff;
  }

  .cav {
    /* width: 200px;
    height: 300px; */
    display: flex;
    width: 100%;
  }

  @media (max-width: 991px) {
    .side-bar {
      display: none;
    }

    .main-view {
    width: 100%;
  }

  .home {
    padding:0;
    gap:0;
  }

  }

  @media (max-width: 600px) {
    .chart {
    grid-template-columns: repeat(1, 1fr );
  }
  .cav {
    flex-wrap: wrap;
  }
  }
</style>