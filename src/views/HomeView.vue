<template>
  <div class="home">
    <div class="side-bar">
      <Sidebar />
    </div>

    <div class="content-holder">
      <Nav />
      <MemberReport />

      <div class="chart-col">
        <div class="pay1">
          <ColumnChart />
        </div>
        <div class="pay1">
          <PieChart />
        </div>

        <!-- <div class="pay d-flex flex-column">
          <h5 class="m-3">Income categories</h5>
          <PieChartjs />
        </div> -->
      </div>

      <div class="trans">
        <div class="pay">
          <Latest />
        </div>
        <div class="pay">
          <Payment />
        </div>
        <div class="pay">
          <Celebrant />
        </div>
      </div>
      <div class="celebrant-section d-flex">
      </div>
      <div class="footer">
        <p> Memberly 2022 &copy;.</p>
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
import PieChartjs from "../components/DoghunutChartjs.vue";
import PieChart from "../components/PieData.vue";
import Latest from "../components/Latest-transaction.vue";
import Payment from "../components/Top-payment.vue";
import Celebrant from "../components/Celebrants.vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {
    Nav,
    Sidebar,
    MemberReport,
    ColumnChart,
    PieChartjs,
    PieChart,
    Latest,
    Payment,
    Celebrant,
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

  .home {
    background-color: #70bd9421;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas: 
    "sidebar sidebar . main main main main main main main main main main main";
    /* justify-content: space-between; */
    /* grid-template-columns: 5fr 8fr; */
    gap: 1rem;
    overflow: hidden;
  }

.chart-col {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
}

.side-bar {
  /* width: 20%; */
  max-width: 273px;
  padding: 1.5rem 0 1rem;
  height: 100%;
  max-height: 700px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-end;
  grid-area: sidebar;
}
  
  .content-holder {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 2rem;
    height: 100vh;
    overflow: auto;
    background-color: #fff;
    grid-area: main;
  }
.trans {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.content-holder::-webkit-scrollbar {
  display: none;
}

.pay {
  border-radius: 10px;
  background-color: #f9f9f9;
  border: 1px solid #e9edebcc;
}
.pay1 {
  width: 49%;
  border-radius: 10px;
  background-color: #f9f9f9;
  border: 1px solid #e9edebcc;
}

.footer {
  background-color: #ddd;
  text-align: center;
  color: #000;
  font-size: 1em;
  padding: 2rem 0;
}

@media (max-width: 991px) {
  .side-bar  {
    display: none
  }
  .home {
    grid-template-areas: 
    "main";
  }
}

@media (max-width: 650px) {
  .pay, .pay1 {
    width: 100%;
  }
}
</style>