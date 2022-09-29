<template>

          <div class="cont">

      
                <div class="text-col">
                  <h4 class="title">Things you can do</h4>
                    <p>Add member</p>
                    <p>Send SMS</p>
                    <p>Record Payments</p>
                    <p>New contribution</p>
                </div>

            <div class="income rounded gen">
                <div class="text rounded d-flex flex-column justify-content-between position-relative">
                  <img src="../assets/income.png" class="position-absolute end-0 p-2" alt="">
                  <h4 class="card-title p-4 mt-2">Income</h4>
                    <h3 class="card-text px-4"><Counter ref='counter' :startAmount='0' :endAmount='579000' :duration='10' prefix='&#8358;' suffix='' separator=',' decimalSeparator='.' :decimals='0' :autoinit='true' @finished='alert(`Counting finished!`)'/></h3>
                    <p class="align-self-end m-4 text-success">+6.5%</p>
                </div>
            </div>

            <div class="expenses rounded gen">
                <div class="text rounded d-flex flex-column justify-content-between position-relative">
                  <img src="../assets/expenses.png" class="position-absolute end-0 p-2" alt="">
                  <h4 class="card-title p-4 mt-2">Expenses</h4>
                    <h3 class="card-text px-4"><Counter ref='counter' :startAmount='0' :endAmount='579000' :duration='10' prefix='&#8358;' suffix='' separator=',' decimalSeparator='.' :decimals='0' :autoinit='true' @finished='alert(`Counting finished!`)'/></h3>
                    <p class="align-self-end m-4 text-danger">-3.21%</p>
                </div>
            </div>
            
            <div class="wallet rounded gen">
                 <div class="text rounded d-flex flex-column justify-content-between position-relative">
                    <img src="../assets/wallet.png" class="position-absolute end-0 p-2" alt="">
                  <h4 class="card-title mt-2 p-4">Wallet Balance</h4>
                    <h3 class="card-text px-4"><Counter ref='counter' :startAmount='0' :endAmount='579000' :duration='10' prefix='&#8358;' suffix='' separator=',' decimalSeparator='.' :decimals='0' :autoinit='true' @finished='alert(`Counting finished!`)'/></h3>
                    <p class="align-self-end m-4 p-1 withdraw">WITHDRAWAL</p>
                </div>
            </div>

            <div class="membership-sms">
                <div class=" membership rounded box d-flex flex-column me-2 position-relative">
                   <img src="../assets/group.png" alt="" class="position-absolute end-0 p-2">
                  <h4 class="card-title mt-2 p-4">Membership</h4>
                    <h3 class="card-text px-4">568</h3>
                    <p class="m-4 text-success">PRO PLAN</p>
                </div>

                <div class=" sms-box rounded box d-flex flex-column ms-2 position-relative">
                   <img src="../assets/sms.png" alt="" class="position-absolute end-0 p-2">
                  <h4 class="card-title mt-2 p-4">SMS Units</h4>
                    <h3 class="card-text px-4">569</h3>
                    <p class="align-self-end m-4 p-1 withdraw">Buy Units</p>
                </div>
            </div>
    </div>


</template>

<script>
// import {ref} from 'vue'

import Counter from 'vue3-autocounter'

export default {
    components: {
      Counter
    },
    setup() {
    
    },
}
</script>

<style scoped>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}



.cont {
  margin: 2rem 0rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

}

.gen {
  width: 17%;
  min-width: 150px;
}

.text {
  height: 100%;
}
.card-title {
  font-size: 1em;
  font-weight: 400px;
  font-family: 'Work Sans', sans-serif;
}
.card-text {
  font-size: 1.5em;
  font-weight: 600px;
  font-family: 'Work Sans', sans-serif;
}
.title {
  font-size: 1em;
  font-weight: 500px;
  font-family: 'Ubuntu', sans-serif;
}

.income {
  background-color: #F8F7F3;
}

.expenses {
  background-color: #F0F9FB;
}

.wallet {
  background-color: #DFECE6;
  /* background-image: url(../assets/income.png);
  background-repeat: no-repeat;
  background-position: top right; */
  /* height: 100%; */
}

.membership {
  background-color: #F0F4F0;
}
.sms-box {
  background-color: #F0F4F0;
}



.text-col {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

/* .text {
  width: 100%;
  max-width: 250px;
  height: 100%;
  max-height: 250px;
} */

.withdraw {
  background-color: #4E876D;
  color: #fff;
  font-size: .5em;
  font-weight: 500;
  letter-spacing: 0.5px;
}
.text p, .membership p {
  font-size: .6em;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.membership-sms {
  display: flex;
  justify-content: space-between;
}


@media (max-width: 991px) {
 .gen {
  width: 49%;
  min-width: 150px;
}
.text-col {
  order: 4;
}

.membership-sms {
  width: 49%;
}

.box {
  width: 50%;
}
}

@media (max-width: 796px) {
 .gen {
  width: 100%;
  min-width: 150px;
}



.box {
  width: 50%;
}

.membership-sms {
  width: 100%;
}
}

@media (min-width: 1500px) {
  .gen {
    width: 20%
  }
}




    
</style>