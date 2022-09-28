<template>
  <div class="sildebar-col">
    <div class="logo-menu d-flex flex-column">
      <div class="dashboard-image mb-5 pe-4">
        <img src="../assets/logo.png" class="img-fluid" alt="" />
      </div>
      <ul>
        <li>
          <a href="#"><Home :size="30" /> Dashboard</a>
        </li>
        <li>
          <a href="#"><UserPlus class="font-s" :size="35" /> Membership </a>
        </li>
        <li>
          <a href="#"><Wallet :size="30" /> Financials </a>
        </li>
        <li>
          <a href="#"><Events :size="30" /> Events </a>
        </li>
        <li>
          <a href="#"><Report :size="30" /> Report </a>
        </li>
      </ul>
    </div>

    <div class="logout-settings">
      <ul>
        <li>
          <a href="#"><Settings :size="30" /> Settings </a>
        </li>
        <li>
          <a href="#"><Logout :size="30" /> Logout </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import UserPlus from "vue-material-design-icons/AccountPlus.vue";
import Home from "vue-material-design-icons/Home.vue";
import Wallet from "vue-material-design-icons/Wallet.vue";
import Events from "vue-material-design-icons/Calendar.vue";
import Report from "vue-material-design-icons/Flag.vue";
import Settings from "vue-material-design-icons/Cog.vue";
import Logout from "vue-material-design-icons/Logout.vue";
export default {
  components: {
    MenuIcon,
    UserPlus,
    Home,
    Wallet,
    Events,
    Report,
    Settings,
    Logout,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}

/* .icon {
  color: aqua;
  width: 40px;
} */

.sildebar-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  gap: 2rem;
  background-color: #f9f9f9;
}

.logout-settings {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
ul {
  list-style: none;
  font-size: 1em;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

li a {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
  color: #898989;
  padding: 0.5rem;
}
li a:hover,
li a:focus {
  background-color: #70bd9421;
  border-left: 5px solid #4e876d;
  padding-left: 10px;
  color: #3e6c57;
}

li img {
  width: 15px;
}

/* .dashboard-image {
    background-color: #fff;
    padding: 2rem;
    border-radius: 5px;
} */

.dashboard-image img {
  width: 100%;
  height: 100%;
}
</style>