<script>
import {RouterLink} from "vue-router";

export default {
  name: "Footer",
  components: {RouterLink}
}
</script>

<template>
  <div class="footer-container">
    <RouterLink to="/imprint">Impressum</RouterLink>
  </div>
</template>

<style scoped>
.footer-container {
  background-color: #657383;
  min-height: 4rem;
  color: #ffffff;
  padding-top: 1rem;
  padding-left: 1.5rem;
}

.footer-container a {
  color: #ffffff;
}

</style>