<script>
import Contact from "@/components/Contact.vue";
import Directions from "@/components/Directions.vue";

export default {
  name: "ContactView",
  components: {Directions, Contact}
}
</script>

<template>
  <body>
  <Directions></Directions>
  <Contact></Contact>
  </body>


</template>

<style scoped>
body {
  margin: 2rem;
}
</style>