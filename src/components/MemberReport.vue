<template>
  <div class="income-holder">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <div class=" col-11 ">
          <div class="row">
            <div class=" col-sm-12 col-md-6">
              <div class="d-flex justify-content-center">
                <div class=" income col-12 border bg-primary text-white  rounded pb-3 pt-4">
                  <div class="income-total ">
                    <div class="logo"><img src="../assets/ethereum-small.png" ></div>
                    <div class="middle">
                    <h4 class="card-title">Total Income</h4>
                    <h3 class="card-text">$579,000</h3>
                    <p>Saved 25%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-12 mt-3 mt-md-0 col-md-6">
              <div class="d-flex justify-content-center">
                <div class=" total col-12 border rounded pb-3 pt-4">
                  <div class="total-expense">
                    <h4 class="card-title">Total Expense</h4>
                    <h3 class="card-text">$79,000</h3>
                    <p>Saved 25%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-6 mt-3">
              <div class="d-flex justify-content-center">
                <div class=" cash col-12 border  rounded pb-3 pt-4">
                  <div class="cash-hand">
                    <h4 class="card-title">Cash On Hand</h4>
                    <h3 class="card-text">$73</h3>
                    <p>Saved 25%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-12  col-md-6 mt-3">
              <div class="d-flex justify-content-center">
                <div class=" net col-12 border rounded pb-3 pt-4">
                  <div class="profit-margin">
                    <h4 class="card-title">Net Profit Margin</h4>
                    <h3 class="card-text">$214</h3>
                    <p>Saved 65%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  
</template>

<script>
export default {};
</script>

<style scoped>
.logo{
    position: relative;
    border: 2px solid red;
}

 .logo  img{
    opacity: 1;
    height: auto;
    transition: .5s ease;
    backface-visibility:hidden ;
 }
 .middle{
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
    -ms-transform: translate(-50% -50%);
    text-align: center;
    /* z-index: 1; */
 }

    .income:hover{
     background-color: #3B76Ef;
        background-repeat: no-repeat;
        background-position: top right;
}

    .total{
        background-color: rgb(69, 180, 232);
        color: white;
     
    }
    .total:hover{
        background-color: #3B76Ef;
    }
    .cash{
        background-color: #A66DD4;
        color: white;
    }
    .cash:hover{
        background-color: #3B76Ef;
    }
    .net{
        background-color: #6DD4B1;
        color: white;
    }
    .net:hover{
         background-color: #3B76Ef;
    }
</style>