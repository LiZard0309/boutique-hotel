<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="anfahrt-button">
      <div class="anfahrt-icon">
        <img alt="Anfahrt" src="../assets/Logos/Arrow_Anfahrt.png" height="100"/>
      </div>
      <div>
        <RouterLink to="/contact" class="hover-underline-animation"> So finden Sie zu unserem Hotel! </RouterLink>
        <!--a href="" class="hover-underline-animation left anfahrt-link">So finden Sie zu unserem Hotel! </a-->
      </div>
    </div>
  </div>

</template>


<style scoped>
.anfahrt-button {
  transform: scale(1.0) translateX(0);
  transition: transform 1s ease;
}

.anfahrt-button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
}

.anfahrt-button:hover {
  transform: scale(1.05) translateX(42px);
  transition: transform 0.4s ease;
  .anfahrt-icon {
    transition: transform 0.8s ease;
  }
}

.anfahrt-link {
  text-decoration: none; /* Entfernt die Unterstreichung */
  color: black; /* Standardfarbe für den Text */
  font-size: 1.1rem; /* Anpassung der Schriftgröße, wie h4 */
  font-weight: bold; /* Fett formatierter Text */
  transition: color 0.3s ease;
}

.anfahrt-link:hover {
  color: #0087ca; /* Farbe beim Hover ändern */
  text-decoration: none; /* Unterstreichung bleibt entfernt */
}

/* Hover-Animation für den Unterstrich */
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
}

.hover-underline-animation.left::after {
  transform-origin: bottom right;
}

.hover-underline-animation.left:hover::after {
  transform-origin: bottom left;
}

@media (max-width: 768px) {
  .anfahrt-icon{
    display: none;
  }
  .anfahrt-link {
    font-size: 1rem;
  }
}
</style>
