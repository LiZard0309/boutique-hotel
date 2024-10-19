<script setup>
import ImageSlider from "@/components/ImageSlider.vue";
import Welcome from "@/components/WelcomeHeadline.vue";
import WelcomeText from "@/components/WelcomeText.vue";
import Activities from "@/components/Activities.vue";


const hotelImages = [
  { src: 'https://picsum.photos/1024/480/?image=10', alt: 'First Slide' },
  { src: 'https://picsum.photos/1024/480/?image=12', alt: 'Second Slide' },
  { src: 'https://picsum.photos/1024/480/?image=22', alt: 'Third Slide' },
  { src: 'https://picsum.photos/1024/480/?image=24', alt: 'Fourth Slide' }
];

</script>

<template>
  <main>
    <image-slider :images="hotelImages"/>
    <welcome/>
    <welcome-text/>
    <activities/>
  </main>
</template>


<style scoped>

</style>