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
  width: 100%;
}

.styled-image {
  width: 70%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 8px;
}

</style>

