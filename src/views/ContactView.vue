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

  <h3>Noch Fragen? </h3>
  <br>
  <Contact></Contact>
  <br>
  </body>


</template>

<style scoped>
body {
  margin: 2rem;
}

h4 {
  font-weight: bold;
}

</style>