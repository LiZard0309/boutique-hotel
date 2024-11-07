<script>
import IconBedKingOutline from "@/components/icons/IconBedKingOutline.vue";
import IconImage from "@/components/icons/IconImage.vue";
import {BCard, BButton, BCollapse, BModal} from "bootstrap-vue-3";
import DateRangePicker from "@/components/DateRangePicker.vue";
import {useRoomsStore} from "@/stores/rooms";

//TODO: UI Case Unterschiede zwischen "Verfügbarkeit noch nicht gecheckt", "gecheckt und verfügbar" und "gecheckt aber nicht verfügbar" ausarbeiten.
//--> Ein Element, das entweder nicht angezeigt wird, oder ein ja/nein Symbol ist.

export default {
  name: "RoomCard",
  components: {IconBedKingOutline, IconImage, BCard, BButton, BCollapse, BModal, DateRangePicker},

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
    //TODO? Braucht es hier dann noch eine zusätzliche Property für das Verfügbarkeitssymbol??
  },
  data() {
    return {
      showDetails: false, // Controls the "extras-"accordion visibility
      showModal: false,
      selectedDates: null,
      isAvailable: null,
    };
  },
  computed: {
    roomsStore() {
      return useRoomsStore();
    },
    roomAvailability() {
      return this.roomsStore.apiData;
    }
  },
//Ich glaub den watcher braucht es jetzt doch nicht TODO: wahrscheinlich rauslöschen.
  watch: {
    roomAvailability(newAvailability) {
      if (typeof newAvailability === "boolean") {
        console.log("Room availability:", newAvailability ? "Available" : "Not available");
      }
    }
  },
  methods: {
    handleDateSelection(dates) {
      this.selectedDates = dates; // Store selected dates if needed
    },
    async submitDates() {
      console.log("Selected Dates:", this.selectedDates);

      this.roomsStore.setDateRange(this.selectedDates.start, this.selectedDates.end);
      const response = await this.roomsStore.fetchRoomAvailability();
      console.log("current apiData:", this.roomsStore.apiData);


      this.showModal = false; // Close the modal after submission
    },
    //TODO: wahrscheinlich hier: Methode, die sobald ein Call abgeschickt wird, das Verfügbarkeitssymbol auf Sichtbar stellt. Und je nach Antwort nimmt das Symbol die eine oder andere Form an.
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
            class="mb-4"
        >
          <b-card-text>
            Preis {{ pricePerNight }} €/Nacht
          </b-card-text>

          <b-button variant="primary" @click="showModal = true">Verfügbarkeit prüfen</b-button>
          <br/>

          <div class="room-info">
            <div class="left-content">
              <icon-bed-king-outline/>
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
                <icon-image class="image-icon"/>
              </div>
            </div>
          </b-collapse>

        </b-card>

        <b-modal v-model="showModal" title="Wählen Sie Ihre Reisedaten" @ok="submitDates">
          <DateRangePicker @date-selected="handleDateSelection"/>
        </b-modal>

      </div>
    </div>

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