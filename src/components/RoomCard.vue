<script>
import IconBedKingOutline from "@/components/icons/IconBedKingOutline.vue";
import IconImage from "@/components/icons/IconImage.vue";
import { BCard, BButton, BCollapse } from "bootstrap-vue-3";

export default {
  name: "RoomCard",
  components: {IconBedKingOutline, IconImage, BCard, BButton, BCollapse},
  props: {
    roomName: {
      type: String,
      required: true,
    },
    pricePerNight: {
      type: Number,
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
    extras: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showDetails: false, // Controls the accordion visibility
    };
  },
};
</script>

<template>
  <div>
    <b-card
        :title="roomName"
        :img-src="image"
        img-alt="Image"
        img-top="true"
        tag="article"
        style="max-width: 50rem;"
        class="mb-4"
    >
      <b-card-text>
        Preis {{ pricePerNight }} €/Nacht
      </b-card-text>

      <b-button href="#" variant="primary">Verfügbarkeit prüfen</b-button>
      <br/>

      <div class="room-info">
        <div class="left-content">
          <IconBedKingOutline />
          <p>{{ beds }} Betten</p>
        </div>

        <div class="right-content">
          <a href="#" @click.prevent="showDetails = !showDetails" class="details-link">
            Weitere Details
            <span class="arrow" v-if="!showDetails">▼</span>
            <span class="arrow" v-else>▲</span>
          </a>
        </div>
      </div>

      <b-collapse :visible="showDetails">
        <div class="extras">
          <div v-for="(extra, index) in extras" :key="index" class="extra-icon">
            <IconImage class="image-icon"/>
          </div>
        </div>
      </b-collapse>

    </b-card>
  </div>
</template>

<style scoped>

.room-card {
  max-width: 20rem;
  margin: auto;
}


@media (min-width: 1024px) {
  .room-card {
    max-width: 30rem;
  }
}


.room-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.left-content {
  display: flex;
  align-items: center;
}

.left-content p {
  margin-left: 8px;
  margin-bottom: 0;
  font-weight: bold;
}

.details-link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

.details-link .arrow {
  margin-left: 5px;
}

/* Amenities section in the accordion */
.extras {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.extra-icon {
  margin-right: 10px;
  margin-bottom: 10px;

.image-icon {
  width: 1.5rem;
  height: 1.5rem;
}
}
</style>