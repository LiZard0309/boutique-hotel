<script>
import Contact from "@/components/staticHotelInfo/Contact.vue";
import Directions from "@/components/staticHotelInfo/Directions.vue";

export default {
  name: "ContactView",
  components: {Directions, Contact}
}
</script>

<template>
  <body>
  <Directions></Directions>

  <h4>Noch Fragen? </h4>
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