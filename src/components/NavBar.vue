<template>
  <nav class="bg-white dark:bg-slate-950 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-slate-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/ORCUN.png" class="h-6" alt="Flowbite Logo" />
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" class="text-white dark:bg-slate-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-sm px-4 py-2 text-center hover:text-black dark:hover:bg-slate-200 dark:focus:ring-gray-800"  @click="goToSection('contact')">Contact Us</button>
        <button @click="toggleMenu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" :aria-expanded="isOpen ? 'true' : 'false'">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div v-show="isOpen" class="items-center bg-slate-950 justify-between w-full md:hidden" id="navbar-sticky">
        <ul class="flex flex-col p-4 mt-4 font-medium border border-slate-900 rounded-lg bg-slate-950 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-slate-900 dark:border-slate-700">
          <li @click="goToSection('home')">
            <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white" >Home</a>
          </li>
          <li @click="goToSection('blog')">
            <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Blog</a>
          </li>
          <li @click="goToSection('resume')">
            <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Academic</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    goToSection(sectionId) {
      event.stopPropagation();
      this.$emit('navigate', sectionId);
    }
  }
};
</script>
