<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
          v-for="(image, index) in images"
          :key="index"
          type="button"
          :data-bs-target="'#carouselExampleIndicators'"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0"
          :aria-label="'Slide ' + (index + 1)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
      >
        <img :src="image.src" class="d-block w-100 slider-image" :alt="image.alt">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});
</script>



<style scoped>
.slider-image{
  height: 500px;
  object-fit: cover;
  width: 100%;
}
</style>
