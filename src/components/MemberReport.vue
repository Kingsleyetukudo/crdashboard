<template>

          <div class="cont">

            <div class="income rounded">
              <div class="income-total text-holder rounded">
                <div class="text">
                  <h4 class="card-title">Net Profit Margin</h4>
                    <h3 class="card-text"><Counter ref='counter' :startAmount='0' :endAmount='579000' :duration='10' prefix='&#8358;' suffix='' separator=',' decimalSeparator='.' :decimals='0' :autoinit='true' @finished='alert(`Counting finished!`)'/></h3>
                    <p>Saved 65%</p>
                </div>
              </div>
            </div>

            <div class="total rounded">
              <div class="total-expense text-holder rounded">
                <div class="text">
                  <h4 class="card-title">Net Profit Margin</h4>
                    <h3 class="card-text"><Counter ref='counter' :startAmount='0' :endAmount='579000' :duration='10' prefix='&#8358;' suffix='' separator=',' decimalSeparator='.' :decimals='0' :autoinit='true' @finished='alert(`Counting finished!`)'/></h3>
                    <p>Saved 65%</p>
                </div>
              </div>
            </div>
            
            <div class="cash rounded">
              <div class="cash-hand text-holder rounded">
                 <div class="text">
                  <h4 class="card-title">Net Profit Margin</h4>
                    <h3 class="card-text"><Counter ref='counter' :startAmount='0' :endAmount='579000' :duration='10' prefix='&#8358;' suffix='' separator=',' decimalSeparator='.' :decimals='0' :autoinit='true' @finished='alert(`Counting finished!`)'/></h3>
                    <p>Saved 65%</p>
                </div>
              </div>
            </div>

            <div class="profit rounded">
              <div class="profit-margin text-holder rounded">
                <div class="text">
                  <h4 class="card-title">Net Profit Margin</h4>
                    <h3 class="card-text"><Counter ref='counter' :startAmount='0' :endAmount='579000' :duration='10' prefix='&#8358;' suffix='' separator=',' decimalSeparator='.' :decimals='0' :autoinit='true' @finished='alert(`Counting finished!`)'/></h3>
                    <p>Saved 65%</p>
                </div>
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
}

h3{ font-weight: 700;}
h4{font-weight: 500;}
.text{
  padding: .9rem .5rem; 
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 600;
}

.cont {
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}
.income{
    background-image: url(../assets/ethereum-small.png) ;
    background-repeat: no-repeat;
    background-position: top right;
    color: #fff;
    transition: .5s;
}

.rounded {
  border-radius: 10px !important;
}
.income-total{
    background-color:blue;
    height: 100%;
}
.income-total:hover{
    background-color:  #3b77efc8;
}

.text-holder {
  padding: 5rem 2rem;
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

@media (max-width: 567px) {
  .cont {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
}

.text-holder {
  padding: .6rem;
}

.text{
  gap: .5rem;
}
}

@media (min-width: 568px) and (max-width: 1500px) {
  .cont {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.text-holder {
  padding: 1.5rem 1rem;
  font-weight: 600;
}
}

@media (min-width: 1501px) {
  .cont {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
}





    
</style>