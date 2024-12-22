<script>
export default {
  name: "Spinner"
}
</script>

<template>
  <div class="spinner-overlay">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Lade...</span>
    </div>
  </div>
</template>

<style scoped>
.spinner-overlay {
  position: fixed; /* Sticks to the viewport */
  top: 0;
  left: 0;
  width: 100%; /* Covers the entire screen */
  height: 100%; /* Covers the entire screen */
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Horizontally center the spinner */
  align-items: center; /* Vertically center the spinner */
  z-index: 1050; /* Ensure it's above all other content */
}
</style>