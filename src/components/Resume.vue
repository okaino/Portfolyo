<template>
    <div class="min-h-screen flex flex-col w-full items-center p-6 md:p-24">
      <!-- Header with line and text -->
      <div class="flex flex-col w-full relative items-start">
        <div class="h-3 w-full bg-red-700 absolute mt-16 md:w-52"></div>
        <p class="text-3xl md:text-9xl font-serif z-10  label-font">Academic Credentials</p>
      </div>
      <!-- Grid layout for academic credentials -->
      <div class="grid w-full grid-cols-1 md:grid-cols-2 p-2 gap-4 mt-20">
        <div class="border rounded-xl flex flex-col md:flex-row items-center p-4">
          <img class="w-full md:w-1/2 h-auto grayscale" src="../assets/hacettepe.png" alt="Hacettepe University">
          <div class="text-center md:text-left md:ml-4">
            <h2 class="text-xl font-serif mt-4 md:mt-0">Dentistry Degree</h2>
            <p class="mt-2">Hacettepe University</p>
          </div>
        </div>
        <div class="border rounded-xl p-4 flex justify-center items-center">
          <img class="w-96 h-auto grayscale" src="../assets/cukurova.png" alt="Cukurova University">
          <div class="text-center">
            <h2 class="text-xl font-serif">Master's Degree</h2>
            <p class="mt-2">Cukurova University</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script>
    export default {
        
    }
</script>

<style>
.label-font {
  font-family: 'Julius Sans One', sans-serif;
}

@media (max-width: 768px) {
  .label-font {
    font-size: 1.5rem;
    /* Adjust font size for mobile devices if necessary */
  }
}
</style>