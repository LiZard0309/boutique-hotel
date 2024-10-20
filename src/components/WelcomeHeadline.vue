<script>
import RoomsButton from "@/components/RoomsButton.vue";

export default {
  name: "Welcome",
  components: {RoomsButton}
}
</script>

<template>
  <div class="container">
    <div>
      <h1>__________</h1>
      <h1>4 Sterne Superior Alpenblick Boutique Resort</h1>
      <h3> – wo Luxus auf Herzlichkeit trifft –</h3>
    </div>
    <div>
      <rooms-button/>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

h3 {
  color: dimgray;
  font-weight: lighter;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
  margin: 10px;
  color: dimgrey;
}

</style>