<script>
import {BCard, BButton, BCollapse, BModal} from "bootstrap-vue-3";
import RoomActions from "./RoomActions.vue";
import RoomDetails from "./RoomDetails.vue";
import RoomAvailabilityInfo from "./RoomAvailabilityInfo.vue";
import AlertNotification from "../modals/AlertNotification.vue";
import alertMessages from "../modals/alertMessages";
import DateRangePicker from "@/components/roomCard/DateRangePicker.vue";
import {useRoomsStore} from "@/stores/rooms";


export default {
  name: "RoomCard",
  components: {
    RoomDetails,
    RoomActions,
    RoomAvailabilityInfo,
    AlertNotification,
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
    buttons: {type: Boolean, required: true}
  },
  methods: {
    displayDatePickerModal() {
      this.showModal = true;
    },

    async reserveRoom() {
      //check again if room is still available at requested dates and to reset date range in store - right before booking
      await this.submitDates();
      const response = this.roomsStore.apiData;
      this.roomsStore.setSelectedRoomID(this.roomId)

      //if room is still available - booking modal opens to start process
      if (response === true) {
        this.$emit("openModal");
      } else {
        //if room is not available anymore an error alert is shown
        this.alertMessage = alertMessages.error;
        this.showAlert = true;
      }
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
    <b-card
        :title="roomsName"
        :img-src="image"
        img-alt="Image"
        img-top="true"
        tag="article"
        style="max-width: 60rem;"
        class="mb-4 shadow-sm"

    >
      <div class="button-section">
        <b-card-text>
          <span class="priceStyle"> Preis {{ pricePerNight }} €/Nacht </span>
        </b-card-text>
        <RoomActions v-if="buttons"
                     :availabilityChecked="availabilityChecked"
                     :isAvailable="isAvailable"
                     @display-date-picker-modal="displayDatePickerModal"
                     @reserve-room="reserveRoom"
        />
        <div class="d-flex align-items-center gap-2" v-else>
          <i-LaCheckCircle width="35" height="35" color="green"/>
          <p class="mb-0">Frühstück ist inbegriffen</p>
        </div>
      </div>

      <b-collapse :visible="showDetails">
        <div class="extras">
          <div v-for="(extra, index) in extras" :key="index" class="extra-icon">
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

    <AlertNotification
        :showAlert="showAlert"
        :message="alertMessage"
        @update:showAlert="showAlert = $event"
    />

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
}
</style>