<template>

          <div class="row">

            <div class=" col-sm-12 col-md-6 md-mb-3">
              <div class="d-flex justify-content-center">
                <div class=" income col-12 border rounded">
                  <div class="income-total p-4">
                    <h4 class="card-title">Total Income</h4>
                    <h3 class="card-text">$579,000</h3>
                    <p>Saved 25%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-12  col-md-6 mt-3 mt-md-0 rounded">
              <div class="d-flex justify-content-center">
                <div class=" total col-12 border  rounded">
                  <div class="total-expense p-4">
                    <h4 class="card-title">Total Expense</h4>
                    <h3 class="card-text">$79,000</h3>
                    <p>Saved 25%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-12  col-md-6 mt-3">
              <div class="d-flex justify-content-center">
                <div class=" cash  col-12 border rounded">
                  <div class="cash-hand  p-4">
                    <h4 class="card-title">Cash On Hand</h4>
                    <h3 class="card-text">$73</h3>
                    <p>Saved 25%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-12  col-md-6 mt-3">
              <div class="d-flex justify-content-center">
                <div class=" profit col-12 border rounded">
                  <div class="profit-margin p-4">
                    <h4 class="card-title">Net Profit Margin</h4>
                    <h3 class="card-text">$214</h3>
                    <p>Saved 65%</p>
                  </div>
                </div>
              </div>
            </div>
    </div>


</template>

<script>
import pieChart from "./PieChart.vue"
export default {
    components: {
        pieChart,
    },
    setup() {
        
    },
}
</script>

<style scoped>
    .income{
        background-image: url(../assets/ethereum-small.png) ;
        background-repeat: no-repeat;
        background-position: top right;
        color: #fff;
    }
    .income-total{
        background-color:blue;
        height: 100%;
    }
    .income-total:hover{
        background-color:  #3b77efc8;
    }

     .total{
        background-image: url(../assets/ethereum-small.png) ;
        background-repeat: no-repeat;
        background-position: top right;
        color: #fff;
    }
    .total-expense{
        background-color:#61C2FE;
        height: 100%;
        
    }
    .total-expense:hover{
        background-color:  #3b77efc8;
    }
    .cash{
         background-image: url(../assets/ethereum-small.png) ;
        background-repeat: no-repeat;
        background-position: top right;
        color: #fff;
    }
    .cash-hand{
        background-color:#A66DD4;
        height: 100%;
    }
    .cash-hand:hover{
         background-color:  #3b77efc8;
    }
    .profit{
         background-image: url(../assets/ethereum-small.png) ;
        background-repeat: no-repeat;
        background-position: top right;
        color: #fff;
    }
    .profit-margin{
        background-color:#6DD4B1;
        height: 100%;
    }
        .profit-margin:hover{
         background-color:  #3b77efc8;
    }
    
</style>