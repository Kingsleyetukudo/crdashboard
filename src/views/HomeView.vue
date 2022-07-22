<template>
  <div class="home">
    <div class="side-bar">
      <Sidebar />
    </div>
    <div class="main-view">
      <Nav />
      <MemberReport />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '../components/Navbar.vue'
import Sidebar from '../components/SidebarNav.vue'
import MemberReport from '../components/MemberReport.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    Sidebar,
    MemberReport
  }
}
</script>

<style scoped>
  .home {
    background-color: #f7faff;
    height: 100vh;
    padding: 2rem;
    display: flex;
    gap: 2rem;
  }

  .side-bar {
    width: 25%;
  }

  .main-view {
    width: 75%;
  }
</style>