<template>
  <div class="min-h-screen flex  flex-col w-full gap-5 justify-between items-center p-6 md:p-24 "
    style="background-size: 100% auto;">
    <div class="flex justify-start w-full">
      <div class="h-3 w-1/2 absolute mt-16 md:w-52 bg-red-700"></div>
      <p class="text-3xl md:text-9xl font-serif z-10 label-font">BLOG</p>
    </div>
    <div class="cards flex flex-wrap justify-between w-full">
      <!-- Card 1 -->
      <div class="card flex flex-col p-5 md:p-10 w-full md:w-1/3 ">
        <img class="w-full h-60 border shadow rounded-md "  src="../assets/card1.jpeg" alt="">
        <h6 class="text-xl md:text-4xl mt-2" style="font-family: 'Julius Sans One', sans-serif;">Multiple Diastemas</h6>
        <p class="text text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit vel neque sequi excepturi</p>
      </div>
      <!-- Repeating for other cards with similar changes -->
      <div class="card flex flex-col p-5 md:p-10 w-full md:w-1/3">
        <img class="w-full h-60 border shadow rounded-md " src="../assets/card2.jpeg" alt="">
        <h6 class="text-xl md:text-4xl mt-2 " style="font-family: 'Julius Sans One', sans-serif;">Multiple Diastemas</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit vel neque sequi excepturi</p>
      </div>
      <div class="card flex flex-col p-5 md:p-10 w-full md:w-1/3">
        <img class="w-full h-60 border shadow rounded-md " src="../assets/card3.jpeg" alt="">
        <h6 class="text-xl md:text-4xl mt-2" style="font-family: 'Julius Sans One', sans-serif;">Multiple Diastemas</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit vel neque sequi excepturi</p>
      </div>
      
    </div>
    <div class="cards flex flex-wrap justify-between w-full">
      <div class="card flex flex-col p-5 md:p-10 w-full md:w-1/3">
        <img class="w-full h-60 border shadow rounded-md " src="../assets/card4.jpeg" alt="">
        <h6 class="text-xl md:text-4xl mt-2" style="font-family: 'Julius Sans One', sans-serif;">Multiple Diastemas</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit vel neque sequi excepturi.</p>
      </div>
      <div class="card flex flex-col p-5 md:p-10 w-full md:w-1/3">
        <img class="w-full h-60 border shadow rounded-md " src="../assets/card5.jpeg" alt="">
        <h6 class="text-xl md:text-4xl mt-2" style="font-family: 'Julius Sans One', sans-serif;">Multiple Diastemas</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit vel neque sequi excepturi
          accusantium corporis autem eum ex.</p>
      </div>
      <div class="card flex flex-col p-5 md:p-10 w-full md:w-1/3">
        <img class="w-full h-60 border shadow rounded-md " src="./assets/card6.jpeg" alt="">
        <h6 class="text-xl md:text-4xl mt-2" style="font-family: 'Julius Sans One', sans-serif;">Multiple Diastemas</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit vel neque sequi excepturi
          accusantium corporis autem eum ex.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.label-font {
  font-family: 'Julius Sans One', sans-serif;
}

@media (max-width: 768px) {
  .label-font {
    font-size: 1.5rem;
    /* Adjust font size for mobile devices if necessary */
  }
  .cards{
    margin-top: 3rem;
    gap: 15px;
  }
  .cards div{
    
  }
  .cards2{
    margin-top: 3rem;
    gap: 15px;
  }
  .cards div{
    
  }
}
</style>