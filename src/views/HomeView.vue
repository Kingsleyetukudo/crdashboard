<template>
  <div class="home">
    <div class="side-bar">
      <Sidebar />
    </div>

    <div class="main-view">
      <div class="content-holder">
        <Nav />
        <MemberReport />
        <!-- </div> -->
        <div class="chart container-fiuld">
          <div class="chart-holder">
            <ColumnChart />
          </div>

          <div class="chart-holder d-flex justify-content-center">
            <PieChartjs />
          </div>
        </div>
        <div class="table d-flex">
          <div class="chart-holder">
            <Latest />
          </div>
          <div class="chart-holder ms-5">
            <Payment />
          </div>
        </div>
        <div class="footer">
          <p>Lorem, ipsum dolor &copy;.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "../components/Navbar.vue";
import Sidebar from "../components/SidebarNav.vue";
import MemberReport from "../components/MemberReport.vue";
import ColumnChart from "../components/ColumnData.vue";
import PieChartjs from "../components/PieChartjs.vue";
import Latest from "../components/Latest-transaction.vue";
import Payment from "../components/Top-payment.vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {
    Nav,
    Sidebar,
    MemberReport,
    ColumnChart,
    PieChartjs,
    Latest,
    Payment,
  },

  setup() {},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.chart {
  display: flex;
  gap: 2rem;
  width: 100%;
  height: 500px;
  /* border: 1px solid blue; */
}

.chart-component,
.chart-holder {
  width: 50%;
  height: 100%;
  /* border: 1px solid red; */
  background-color: #f9f9f9;
  border: 1px solid rgba(233, 237, 235, 0.8);
}
.home {
  background-color: #70bd9421;
  width: 100%;
  height: 100vh;
  /* padding: 2.5rem 0 2.5rem 2.5rem; */
  display: flex;
  gap: 2.5rem;
  overflow: hidden;
}

.side-bar {
  width: 15%;
  max-width: 273px;
  padding: 1.5rem 0 1rem;
  height: 100%;
  max-height: 700px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-end;
}

.main-view {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  height: 100vh;
  overflow: auto;
  padding-bottom: 1rem;
}

.footer {
  background-color: #ddd;
  text-align: center;
  color: #000;
  font-size: 1em;
  padding: 2rem 0;
}

.main-view::-webkit-scrollbar {
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
  gap: 2rem;
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
    padding: 0;
    gap: 0;
  }
}

@media (max-width: 600px) {
  .chart {
    flex-wrap: wrap;
  }
  .cav {
    flex-wrap: wrap;
  }

  .chart-component,
  .chart-holder {
    width: 100%;
  }
}
</style>