<template>
  <div class="home">
    <div class="side-bar">
      <Sidebar />
    </div>
    <div class="main-view">
      <Nav />
      <MemberReport />
      <PieChart domId="chart2" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '../components/Navbar.vue'
import Sidebar from '../components/SidebarNav.vue'
import MemberReport from '../components/MemberReport.vue'
import PieChart from '../components/PieChart.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    Sidebar,
    MemberReport,
    PieChart
  },

  data() {
    return {
     
    }
  }
}
</script>

<style scoped>
  .home {
    background-color: #f7faff;
    /* height: 100vh; */
    padding: 2rem;
    display: flex;
    gap: 2rem;
  }

  .side-bar {
    width: 25%;
  }

  .main-view {
    width: 75%;
    border: 1px solid red;
  }
</style>