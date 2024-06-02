<template>
  <div class="min-h-screen flex flex-col w-full gap-5 justify-between items-center p-6 md:p-24"
    style="background-size: 100% auto;">
    <header class="flex justify-start w-full">
      <div class="h-3 w-1/2 absolute mt-16 md:w-52 bg-red-700"></div>
      <h1 class="text-3xl md:text-9xl font-serif z-10 label-font">BLOG</h1>
    </header>
    <main class="cards flex flex-wrap justify-between w-full">
      <!-- Card 1 -->
      <article class="card flex flex-col p-5 md:p-10 w-full md:w-1/3">
        <img class="w-full h-60 border shadow rounded-md" src="../assets/card1.jpeg" alt="Featured image for Multiple Diastemas">
        <h6 class="text-xl md:text-4xl mt-2" style="font-family: 'Julius Sans One', sans-serif;">Multiple Diastemas</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit vel neque sequi excepturi</p>
      </article>
      <!-- Card 2 -->
      <article class="card flex flex-col p-5 md:p-10 w-full md:w-1/3">
        <img class="w-full h-60 border shadow rounded-md" src="../assets/card2.jpeg" alt="Featured image for Multiple Diastemas">
        <h6 class="text-xl md:text-4xl mt-2" style="font-family: 'Julius Sans One', sans-serif;">Cultural Insights</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit vel neque sequi excepturi</p>
      </article>
      <!-- Card 3 -->
      <article class="card flex flex-col p-5 md:p-10 w-full md:w-1/3">
        <img class="w-full h-60 border shadow rounded-md" src="../assets/card3.jpeg" alt="Featured image for Multiple Diastemas">
        <h6 class="text-xl md:text-4xl mt-2" style="font-family: 'Julius Sans One', sans-serif;">Health Trends</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit vel neque sequi excepturi</p>
      </article>
      <!-- Card 4 -->
      <article class="card flex flex-col p-5 md:p-10 w-full md:w-1/3">
        <img class="w-full h-60 border shadow rounded-md" src="../assets/card4.jpeg" alt="Featured image for Multiple Diastemas">
        <h6 class="text-xl md:text-4xl mt-2" style="font-family: 'Julius Sans One', sans-serif;">Global Economics</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit vel neque sequi excepturi</p>
      </article>
      <!-- Card 5 -->
      <article class="card flex flex-col p-5 md:p-10 w-full md:w-1/3">
        <img class="w-full h-60 border shadow rounded-md" src="../assets/card5.jpeg" alt="Featured image for Multiple Diastemas">
        <h6 class="text-xl md:text-4xl mt-2" style="font-family: 'Julius Sans One', sans-serif;">Technology Updates</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit vel neque sequi excepturi</p>
      </article>
      <!-- Card 6 -->
      <article class="card flex flex-col p-5 md:p-10 w-full md:w-1/3">
        <img class="w-full h-60 border shadow rounded-md" src="../assets/card6.jpeg" alt="Featured image for Multiple Diastemas">
        <h6 class="text-xl md:text-4xl mt-2" style="font-family: 'Julius Sans One', sans-serif;">Artistic Expressions</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit vel neque sequi excepturi</p>
      </article>
    </main>
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
    font-size: 1.5rem; /* Adjusted font size for mobile devices */
  }
  .cards {
    margin-top: 3rem;
    gap: 15px;
  }
}
</style>
