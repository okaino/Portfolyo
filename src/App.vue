<template>
  <NavBar></NavBar>
  <div class="w-max bg-no-repeat bg-cover bg-center" style="background-size: 100% auto;">
    <img src="./assets/dentistAi.png" class="h-max w-max filter grayscale" alt="Flowbite Logo"></img>
  </div>
  <Footer></Footer>
  </template>
  
<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
  export default {
    components: {
      NavBar,
      Footer
    },
  data() {
    return {

    }
  },
  methods: {

  }
  }
</script>
