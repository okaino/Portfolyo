<template>
  <NavBar @navigate="handleNavigation"></NavBar>
  <Home></Home>
  <Blog id="blog"></Blog>
  <BackGround id="background1"></BackGround>
  <Resume id="resume"></Resume>
  <BackGround2 id="background2"></BackGround2>
  <Form id="contact"></Form>
  <Footer id="footer"></Footer>
</template>

  
<script>
import NavBar from './components/NavBar.vue';
import Home from './components/Home.vue';
import BackGround from './components/BackGround.vue';
import BackGround2 from './components/BackGround2.vue';
import Resume from './components/Resume.vue';
import Blog from './components/Blog.vue';
import Form from './components/Form.vue';
import Footer from './components/Footer.vue';
import Card from './components/Card.vue';
  export default {
    components: {
      NavBar,
      Footer,
      BackGround,
      BackGround2,
      Form,
      Card,
      Resume,
      Home,
      Blog
    },
  data() {
    return {
      card1:'../assets/card1.jpeg' 

    }
  },
  methods: {
    handleNavigation(sectionId) {
      let section = document.getElementById(sectionId);
      console.log(section)
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }
  }
</script>
<style>
.card {
 width: 360px;
 height: 450px;
 border-radius: 50px;
 background: #e0e0e0;
 box-shadow: 20px 20px 60px #bebebe,
               -20px -20px 60px #ffffff;
}
</style>