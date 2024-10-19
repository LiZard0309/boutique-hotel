<script setup>
import ImageSlider from "@/components/ImageSlider.vue";
import Welcome from "@/components/WelcomeHeadline.vue";
import WelcomeText from "@/components/WelcomeText.vue";
import Activities from "@/components/Activities.vue";
import ButtonToAnfahrt from "@/components/ButtonToAnfahrt.vue";


const hotelImages = [
  { src: 'https://www.swissinfo.ch/content/wp-content/uploads/sites/13/2023/08/f21eec453fb9a1c4136412b125797a31-26ed3e-data.png?crop=0px,41px,960px,641px&w=880&ver=de9bab0d', alt: 'First Slide' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Belvedere_Furka.jpg', alt: 'Second Slide' },
  { src: 'https://static1.thetravelimages.com/wordpress/wp-content/uploads/2022/08/Hotel-on-the-Alpine-pass-in-Switzerland.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5', alt: 'Third Slide' },
  { src: 'https://www.smilesfromabroad.at/wp-content/uploads/2021/07/ausflugsziel-furkapass-schweiz-16.jpg', alt: 'Fourth Slide' }
];

</script>

<template>
  <main>
    <image-slider :images="hotelImages"/>
    <welcome/>
    <welcome-text/>
    <activities/>
    <button-to-anfahrt/>
  </main>
</template>


<style scoped>

</style>