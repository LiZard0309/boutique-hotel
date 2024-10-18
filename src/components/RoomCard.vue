<script>
import IconBedKingOutline from "@/components/icons/IconBedKingOutline.vue";

export default {
  name: "RoomCard",
  components: {IconBedKingOutline},
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <b-card
        :title="title"
        :img-src="image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
      <b-card-text>
        Preis {{ price }} €/Nacht
      </b-card-text>

      <b-button href="#" variant="primary">Verfügbarkeit prüfen</b-button>
      <br/>
      <IconBedKingOutline></IconBedKingOutline>
      <p>{{ beds }} Betten</p>

    </b-card>
  </div>
</template>

<style scoped>

</style>