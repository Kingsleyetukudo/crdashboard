<template>
  <div class="sildebar-col">
    <div class="dashboard-image">
        <img src="../assets/logo.png" class="img-fluid" alt="">
    </div>
    <ul>
        <li> <font-awesome-icon icon="fa-solid fa-house" />Dashboard</li>
        <li> <font-awesome-icon icon="fa-solid fa-file-lines" /> Pages</li>
        <li> <font-awesome-icon icon="fa-solid fa-bars" /> Applications </li>
        <li> <font-awesome-icon icon="fa-solid fa-palette" /> UI Components</li>
        <li> <font-awesome-icon icon="fa-solid fa-palette" /> Widgets</li>
        <li> <font-awesome-icon icon="fa-solid fa-address-card" />Forms</li>
        <li> <font-awesome-icon icon="fa-solid fa-chart-line" /> Charts</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

*{padding: 0; margin: 0; box-sizing: border-box;}

.sildebar-col {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: #a5adc6;
    /* position: fixed;
    left: 2rem; */
}
    ul {
    list-style: none;
    font-size: 1em;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

li {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

li img {
    width: 15px;
}

.dashboard-image {
    background-color: #fff;
    padding: 2rem;
    border-radius: 5px;
}

.dashboard-image img {
    width: 100%;
    height: 100%;
}
</style>