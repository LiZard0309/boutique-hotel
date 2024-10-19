<script>
export default {
  data() {
    return {
      images: [
        { src: "https://picsum.photos/800/600/?image=35" },
        { src: "https://picsum.photos/800/600/?image=34" },
        { src: "https://picsum.photos/800/600/?image=33" },
        { src: "https://picsum.photos/800/600/?image=32" },
        { src: "https://picsum.photos/800/600/?image=31" },
        { src: "https://picsum.photos/800/600/?image=30" },
      ],
      isOverlayVisible: false,
      activeImage: "",
    };
  },
  methods: {
    openOverlay(image) {
      if (window.innerWidth > 768) {
        this.activeImage = image;
        this.isOverlayVisible = true;
      }
    },
    closeOverlay() {
      this.isOverlayVisible = false;
    },
  },
};
</script>

<template>
  <div>
    <h2 class="headline">Das erwartet dich</h2>
    <div class="container">
      <div class="image-item" v-for="(image, index) in images" :key="index">
        <img
            :src="image.src"
            :alt="`Slide ${index + 1}`"
            class="img-fluid"
            @click="openOverlay(image.src)"
        />
      </div>
    </div>

    <div v-if="isOverlayVisible" class="overlay" @click="closeOverlay">
      <div class="overlay-content">
        <img :src="activeImage" class="large-image" />
      </div>
    </div>
  </div>
</template>



<style scoped>
.headline {
  margin-left: 20px;
  color: dimgray;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.image-item {
  width: 100%;
  max-width: 400px;
  height: auto;
  flex: 1 0 30%;
  margin: 10px;
  position: relative;
}

.image-item img {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-item img:hover {
  transform: scale(1.05);
  transition: transform 0.4s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.overlay-content {
  position: relative;
}

.large-image {
  width: auto;
  height: 90%;
}

.overlay-content img {
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);


}

.overlay-content:after {
  content: "✕";
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .image-item {
    flex: 1 0 80%;
  }
}
</style>
