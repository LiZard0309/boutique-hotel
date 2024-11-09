<script>
import IconBedKingOutline from "@/components/icons/IconBedKingOutline.vue";
import { BCard } from "bootstrap-vue-3";
import RoomActions from "./roomCard/RoomActions.vue";
import RoomDetails from "./roomCard/RoomDetails.vue";
import RoomAvailabilityInfo from "./roomCard/RoomAvailabilityInfo.vue";


export default {
  name: "RoomCard",
  components: {IconBedKingOutline, BCard, RoomDetails, RoomActions, RoomAvailabilityInfo},
  props: {
    roomId: {
      type: Number,
      required: true,
    },
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
  methods: {
    displayDatePickerModal() {
      //this.selectedDateRange = selectedDateRange;
      //this.$emit("check-availability", this.rommId);
      this.availabilityChecked = true;
      //this.isAvailable = Math.random() > 0.5;
      console.log("Button wurde geklickt, Modal zur Datumsauswahl wird geöffnet. RoomID:", this.roomId);
    },
    reserveRoom () {
      console.log("Zimmer wird reserviert:", this.roomId, this.selectedDateRange);
    },
  },
  data() {
    return {
      showDetails: false, // Controls the accordion visibility
      availabilityChecked: false,
      isAvailable: null,
      selectedDateRange: "19.4.25 - 23.4.25"
    };
  },
};
</script>

<template>
  <div>
    <div class="row">
      <div class="col-md-6 mx-auto">
        <b-card
            :title="roomName"
            :img-src="image"
            img-alt="Image"
            img-top="true"
            tag="article"
            style="max-width: 50rem;"
            class="mb-4 shadow-sm"
        >

          <!-- Preis und Aktions-Button -->
          <div class="button-section">
            <div>
              <span class="priceStyle">{{ pricePerNight }}€</span> /pro Nacht
            </div>
            <RoomActions
                :availabilityChecked="availabilityChecked"
                :isAvailable="isAvailable"
                @open-availability-modal="displayDatePickerModal"
                @reserve-room="reserveRoom"
            />
          </div>

          <!-- Verfügbarkeit und Datum -->
          <RoomAvailabilityInfo
              :availabilityChecked="availabilityChecked"
              :isAvailable="isAvailable"
              :selectedDateRange="selectedDateRange"
              @open-availability-modal="displayDatePickerModal"
          />

          <!-- Zimmerdetails und Extras -->
          <RoomDetails
              :_showDetails="showDetails"
              :beds="beds"
              :extras="extras"
          />
        </b-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.priceStyle {
  font-size: 1.2rem;
  font-weight: bold;
}

.button-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-content p {
  font-size: 1.2rem;
  margin-left: 10px;
  margin-bottom: 0;
  font-weight: bold;
}
</style>