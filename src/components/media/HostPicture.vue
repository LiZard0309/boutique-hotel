<script>
import hostPicture from '@/assets/hosts.jpeg';

export default {
  name: 'ImageComponent',
  data() {
    return {
      imageSrc: hostPicture,
    };
  },
};
</script>

<template>
  <div class="image-container">
    <img :src="imageSrc" :alt="altText" class="styled-image" />
  </div>
</template>

<style scoped>

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 100%;
}

.styled-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 8px;
}

</style>

