<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Products from './components/Products.vue'
import AboutMe from './components/AboutMe.vue'

</script>

<template>
<!-- <RouterLink to="/">Home</RouterLink>
<RouterLink to="/about">About</RouterLink> -->

<AboutMe />
  <!-- https://vuetifyjs.com/en/components/grids/#usage -->
        
   

  <!-- <v-container class="text-center" :style="{ color: '#4172B5' }"> -->
  <v-container>
     <h3>projects</h3>
  </v-container>



  <Products/> 

<v-container>
  <h3>Miscellaneous</h3>
  <li><a href="https://note.com/imnotkatsuma" target="_blank">海外生活体験記</a></li>
  <li><a href="https://kazfluent.com" target="_blank">カズマの「話せる英語」を身につけよう</a></li>
</v-container>
  




  
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
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
