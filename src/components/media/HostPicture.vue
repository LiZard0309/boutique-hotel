<script>
export default {
  name: 'ImageComponent',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: 'Image',
    },
    caption: {
      type: String,
      default: '',
    },
  },
};

</script>

<template>
  <div class="image-container">
    <img :src="require('@/assets/hosts.jpeg')" :alt="altText" class="styled-image" />
    <p>{{ caption }}</p>
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
}

.styled-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 8px;
}
</style>