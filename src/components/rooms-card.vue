<script>
import IconBedKingOutline from "@/components/icons/IconBedKingOutline.vue";
import bedroomImage from "@/assets/bedroom.jpg";

export default {
  name: "rooms-card",
  components: {IconBedKingOutline},
  data() {
    return {
      bedroomImage,
    };
  },
}
</script>

<template>
  <div>
    <b-card
        title="Zimmer Name"
        :img-src="bedroomImage"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
      <b-card-text>
        Preis €/Nacht
      </b-card-text>

      <b-button href="#" variant="primary">Verfügbarkeit prüfen</b-button>
      <br/>
      <IconBedKingOutline></IconBedKingOutline>
      <p>2 Betten</p>

    </b-card>
  </div>
</template>

<style scoped>

</style>