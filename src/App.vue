<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Footer from '@/components/Footer.vue'


import HomeView from "@/views/HomeView.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div id="app">
    <div class="main-content">
      <navbar></navbar>
      <RouterView/>
    </div>

    <footer>
      <Footer/>
    </footer>
  </div>
</template>


<style scoped>
#app {
}

.main-content {
  max-width: 1200px; /* Maximale Breite der App */
  margin: 0 auto;
  padding: 20px 20px;
}


</style>
