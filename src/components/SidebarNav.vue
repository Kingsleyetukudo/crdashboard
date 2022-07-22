<template>
  <div class="sildebar-col">
    <div class="dashboard-image">
        <!-- <img src="../assets/logo.png" class="img-fluid" alt=""> -->
        <h4>Lorem, ipsum.</h4>
    </div>
    <ul>
        <li> <img src="../assets/house-solid.svg" alt=""> Dashboard</li>
        <li> <img src="../assets/file-lines-regular.svg" alt=""> Pages</li>
        <li><img src="../assets/file-lines-regular.svg" alt=""> Applications</li>
        <li><img src="../assets/file-lines-regular.svg" alt=""> UI Components</li>
        <li><img src="../assets/file-lines-regular.svg" alt=""> Widgets</li>
        <li><img src="../assets/file-lines-regular.svg" alt=""> Forms</li>
        <li><img src="../assets/file-lines-regular.svg" alt=""> Charts</li>
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