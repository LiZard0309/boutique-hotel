<script>
import {BCard, BButton, BCollapse, BModal} from "bootstrap-vue-3";
import RoomActions from "./roomCard/RoomActions.vue";
import RoomDetails from "./roomCard/RoomDetails.vue";
import RoomAvailabilityInfo from "./roomCard/RoomAvailabilityInfo.vue";
import AlertBooking from "./modals/AlertBooking.vue";
import alertMessages from "./modals/alertMessages";
import DateRangePicker from "@/components/DateRangePicker.vue";
import {useRoomsStore} from "@/stores/rooms";


export default {
  name: "RoomCard",
  components: {
    RoomDetails,
    RoomActions,
    RoomAvailabilityInfo,
    AlertBooking,
    BCard,
    BButton,
    BCollapse,
    BModal,
    DateRangePicker
  },
  props: {
    roomId: {type: Number, required: true,},
    roomsName: {type: String, required: true,},
    pricePerNight: {type: Number, required: true,},
    image: {type: String, required: true,},
    beds: {type: Number, required: true,},
    extras: {type: Array, required: true,},
  },
  methods: {
    displayDatePickerModal() {
      this.showModal = true;
    },

    async reserveRoom() {
      await this.submitDates();
      const response = this.roomsStore.apiData;

      if (response === true) {
        this.$emit("openModal");
      } else {
        this.alertMessage = alertMessages.error;
        this.showAlert = true;
      }
    },

    handleCloseAlert() {
      this.showAlert = false;
    },

    handleDateSelection(dates) {
      this.selectedDates = dates;
    },

    async startDateCheck() {
      this.selectedDateRange = `${this.selectedDates.start} - ${this.selectedDates.end}`;

      await this.submitDates();
      const response = this.roomsStore.apiData;

      if (response === true) {
        this.isAvailable = true;
      } else {
        this.isAvailable = false;
      }
      this.availabilityChecked = true;
      this.showModal = false; // Close the modal after submission
    },

    async submitDates() {
      this.roomsStore.setDateRange(this.selectedDates.start, this.selectedDates.end);
      await this.roomsStore.fetchRoomAvailability(this.roomId);
    },
  },

  data() {
    return {
      showDetails: false, // Controls the accordion visibility
      availabilityChecked: false,
      isAvailable: false,
      selectedDateRange: "",
      showModal: false,
      showAlert: false,
      alertMessage: "error",
      alertType: "info",
    };
  },
  computed: {
    roomsStore() {
      return useRoomsStore();
    }
  }
};
</script>

<template>
  <div>
    <div class="row">
      <div class="col-md-6 mx-auto">
        <b-card
            :title="roomsName"
            :img-src="image"
            img-alt="Image"
            img-top="true"
            tag="article"
            style="max-width: 50rem;"
            class="mb-4 shadow-sm"
        >
          <div class="button-section">
            <b-card-text>
              <span class="priceStyle"> Preis {{ pricePerNight }} €/Nacht </span>
            </b-card-text>
            <RoomActions
                :availabilityChecked="availabilityChecked"
                :isAvailable="isAvailable"
                @display-date-picker-modal="displayDatePickerModal"
                @reserve-room="reserveRoom"
            />
          </div>

          <b-collapse :visible="showDetails">
            <div class="extras">
              <div v-for="(extra, index) in extras" :key="index" class="extra-icon">
                <IconImage class="image-icon"/>
              </div>
            </div>
          </b-collapse>

          <!-- Verfügbarkeit und Datum -->
          <RoomAvailabilityInfo
              :availabilityChecked="availabilityChecked"
              :isAvailable="isAvailable"
              :showModal="showModal"
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

        <b-modal v-model="showModal" title="Wählen Sie Ihre Reisedaten" @ok="startDateCheck">
          <DateRangePicker @date-selected="handleDateSelection"/>
        </b-modal>

        <AlertBooking
            :showAlert="showAlert"
            :message="alertMessage"
            @update:showAlert="showAlert = $event"
        />

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
  margin-top: 8px;
}

.left-content p {
  font-size: 1.2rem;
  margin-left: 10px;
  margin-bottom: 0;
  font-weight: bold;
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