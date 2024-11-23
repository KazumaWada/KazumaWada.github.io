<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Products from './components/Products.vue'
import AboutMe from './components/AboutMe.vue'
import Miscellaneous from './components/Miscellaneous.vue'
import Footer from './components/Footer.vue'
</script>

<template>

<!-- <div class="text-center">
<h1>kazumawada.org</h1>
<br>
<RouterLink to="/">Home</RouterLink> /
<RouterLink to="/about">About</RouterLink>
</div> -->


<AboutMe />  
<Products/> 
<Miscellaneous/>
<Footer/>





  
  <RouterView />
</template>

<style scoped>
.no-bullets{
  list-style: none;
  padding: 0;
}
.rounded-image {
  border-radius: 10%;
  overflow: hidden; /* 画像が丸枠からはみ出ないようにします */
}

</style>
