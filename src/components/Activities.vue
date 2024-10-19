<template>
  <div>
    <h2>Das erwartet dich</h2>
    <div class="container">
      <div class="image-item">
        <img src="https://picsum.photos/400/300/?image=35" class="img-fluid" alt="Slide 1">
      </div>
      <div class="image-item">
        <img src="https://picsum.photos/400/300/?image=34" class="img-fluid" alt="Slide 2">
      </div>
      <div class="image-item">
        <img src="https://picsum.photos/400/300/?image=33" class="img-fluid" alt="Slide 3">
      </div>
      <div class="image-item">
        <img src="https://picsum.photos/400/300/?image=32" class="img-fluid" alt="Slide 4">
      </div>
      <div class="image-item">
        <img src="https://picsum.photos/400/300/?image=31" class="img-fluid" alt="Slide 5">
      </div>
      <div class="image-item">
        <img src="https://picsum.photos/400/300/?image=30" class="img-fluid" alt="Slide 6">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activities"
}
</script>

<style scoped>
h2 {
  color: dimgrey;
  margin-left: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.image-item {
  flex: 1 0 30%; /* 30% Basis für die Breite, damit 3 Bilder in einer Reihe Platz haben */
  margin: 10px; /* Abstand zwischen den Bildern */
}

/* Auf kleinen Bildschirmen die Bilder in voller Breite darstellen */
@media (max-width: 768px) {
  .image-item {
    flex: 1 0 100%; /* Auf kleinen Bildschirmen 100% Breite für jedes Bild */
  }
}
</style>
