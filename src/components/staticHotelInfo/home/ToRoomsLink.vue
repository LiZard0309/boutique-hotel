<script>
import {RouterLink} from "vue-router";

export default {
  name: "ToRoomsLink",
  components: {RouterLink}
}
</script>

<template>
  <div class="zimmer-button">
    <i-PepiconsPopArrowRight width="48" height="48" color="#2e2e2e"/>
    <RouterLink to="/rooms" class="hover-underline-animation left zimmer-link ">
      Unsere Zimmer
    </RouterLink>
  </div>
</template>

<style scoped>

.zimmer-button {
  display: flex;
  align-items: center;
}

.zimmer-link {
  font-size: 1.5rem;
  margin-right: 45px;
  color: black;
  text-decoration: none; /* Entfernt die Unterstreichung */
  font-weight: bold; /* Optional: Text fett darstellen */
}

.zimmer-link:hover {
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

</style>