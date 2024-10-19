<script setup>
import TheWelcome from '../components/ImageSlider.vue'
import Navbar from "@/components/Navbar.vue";
import ImageSlider from "@/components/ImageSlider.vue";
import Welcome from "@/components/Welcome.vue";
</script>

<template>
  <main>
    <div class="main-headline">
      <welcome/>
    </div>
    <image-slider/>
  </main>
</template>


<style scoped>

.main-headline {
  text-align: center;
  margin: 2rem 0;
  color: dimgrey;
}
</style>