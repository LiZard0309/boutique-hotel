<script>
import IconCar from "@/components/icons/IconCar.vue";
import IconTrain from "@/components/icons/IconTrain.vue";
import MediaMap from "@/components/media/MediaMap.vue";

export default {
  name: "Directions",
  components: {MediaMap, IconTrain, IconCar}
}
</script>

<template>
  <h4>So finden Sie uns: </h4>
  <div class="container">
    <MediaMap></MediaMap>
  </div>

  <div>
    <p class="subtitle">Anschrift:</p>
    <p> Hochstädtplatz 6, 1200 Wien </p>
  </div>

  <div>
    <p class="subtitle">Anfahrt:</p>
    <p>
     <IconCar></IconCar>
      mit dem Auto: Straße entlang fahren
    </p>

    <p>
      <IconTrain></IconTrain>
      mit den Öffis: in Zug oder Bus einsteigen
    </p>
  </div>


</template>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;

}

.subtitle {
  font-weight: bold;
}

h4 {
  font-weight: bold;
}



</style>