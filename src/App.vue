<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Footer from '@/global/Footer.vue'
import {useRoomsStore} from "@/stores/rooms";
import HomeView from "@/views/HomeView.vue";
import Navbar from "@/global/Navbar.vue";
import Spinner from "@/global/Spinner.vue";

const roomsStore = useRoomsStore();
</script>

<template>
  <navbar></navbar>
  <div id="app">
    <div class="main-content">
      <Spinner v-if="roomsStore.loading" />
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
