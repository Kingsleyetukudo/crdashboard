<template>
 <div class="table">
  <h4 class="mx-5 pt-5">Latest Transaction</h4>
  <div class="table-col">
    <table>
  <thead>
    <tr>
      <th></th>
      <th>Coustomer Name</th>
      <th>Fund</th>
      <th>Amount</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> 
        <div class="image">
        <img src="../assets/avatar.png" alt="">
        </div> 
        </td>
      <td>Mark</td>
      <td>Otto</td>
      <td>50,569</td>
      <td>21/05/2022</td>
    </tr>
    <tr>
      <td> 
        <div class="image">
        <img src="../assets/avatar.png" alt="">
        </div> 
        </td>
      <td>Mark</td>
      <td>Otto</td>
      <td>50,569</td>
      <td>21/05/2022</td>
    </tr>
    <tr>
      <td> 
        <div class="image">
        <img src="../assets/avatar.png" alt="">
        </div> 
        </td>
      <td>Mark</td>
      <td>Otto</td>
      <td>50,569</td>
      <td>21/05/2022</td>
    </tr>
    <tr>
      <td> 
        <div class="image">
        <img src="../assets/avatar.png" alt="">
        </div> 
        </td>
      <td>Mark</td>
      <td>Otto</td>
      <td>50,569</td>
      <td>21/05/2022</td>
    </tr>
    <tr>
      <td> 
        <div class="image">
        <img src="../assets/avatar.png" alt="">
        </div> 
        </td>
      <td>Mark</td>
      <td>Otto</td>
      <td>50,569</td>
      <td>21/05/2022</td>
    </tr>
    
  </tbody>
</table>
  </div>

<div class="pagination d-flex align-items-center justify-content-between px-4 flex-wrap">
  <div class="page-counter d-flex align-items-center">
    <div class="par w-sm-100">showing <span>1- 5</span> of <span>100</span> of data</div>
  </div>

  <div class="page-move"> 
  <div class="turn"><Play /> </div>
   <div class=" num active">1</div>
   <div class="num">2</div>
   <div class="num">3</div>
  <div> <Play /></div>
  </div>
</div>
 </div>
</template>

<script>
import Play from 'vue-material-design-icons/Play.vue'
export default {
  components: {
    Play
  },

  data() {
    return {

    }
  }

}
</script>

<style scoped>

.turn {
  transform: rotate(60deg);
}

.table {
  display: flex;
  /* height: 100%; */
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 1rem
}

h4 {
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.table-col {
  overflow: auto;
}

table {
  /* width: 100%; */
  border-collapse: collapse;
  /* margin-top: 2rem; */
  overflow: auto;
}

th, td {
  padding: 1rem 2rem;
}

th {
  font-size: 10px;
  font-weight: 500;
}

tr {
border-bottom: 0.5px solid #E4E4E4
}

td {
  font-size: 11px;
  font-weight: 400;
  color: #000;
}

 .image {
  width: 30px;
  height: 30px;
 }

 img {
  width: 100%;
  height: 100%;
 }

 

 .page-counter .par{
  font-size: 10px;
  font-weight: 400;
 }

 .page-counter span {
  font-size: 1.2em;
  font-weight: 600;
 }


 .page-move {
  display: flex;
  align-items:center ;
  justify-content: space-between;
  gap: 1rem;

 }

.page-move .num {
  width: 30px;
  height: 30px;
  border: 0.5px solid #4E876D;
  border-radius: 100px;
  padding: .3rem;
  display: flex;
  align-items: center;
  justify-content: center;
 }

 .active {
  background-color: #4E876D;
 }

 @media (max-width: 520px) {

 .pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
 }
</style>