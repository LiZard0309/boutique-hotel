<script>
import IconBedKingOutline from "@/components/icons/IconBedKingOutline.vue";
import {BCard, BButton, BCollapse, BModal} from "bootstrap-vue-3";
import RoomActions from "./roomCard/RoomActions.vue";
import RoomDetails from "./roomCard/RoomDetails.vue";
import RoomAvailabilityInfo from "./roomCard/RoomAvailabilityInfo.vue";
import DateRangePicker from "@/components/DateRangePicker.vue";
import {useRoomsStore} from "@/stores/rooms";

export default {
  name: "RoomCard",
  components: {
    RoomDetails,
    RoomActions,
    RoomAvailabilityInfo,
    IconBedKingOutline,
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
    //selectedDates: {type: String, required: false, default: null},
  },
  methods: {
    displayDatePickerModal() {
      this.showModal = true;
    },
    async reserveRoom() {
      await this.submitDates();
      const response = this.roomsStore.apiData;
      console.log("current Date in roomsStore:", this.roomsStore.dateRange);
      console.log("current Date in this.selectedDates:", this.selectedDates);
      if (response === true) {
        console.log("Zimmer wird reserviert:", this.roomId, this.selectedDateRange)
      }
    },
    handleDateSelection(dates) {
      this.selectedDates = dates;
    },
    async startDateCheck() {
      this.selectedDateRange = `${this.selectedDates.start} - ${this.selectedDates.end}`;

      /*this.roomsStore.setDateRange(this.selectedDates.start, this.selectedDates.end);
      await this.roomsStore.fetchRoomAvailability(this.roomId);
      const response = this.roomsStore.apiData
      console.log("current apiData:", this.roomsStore.apiData);*/

      await this.submitDates();
      const response = this.roomsStore.apiData;
      console.log("response after refactor:", response);

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
    }

  },
  data() {
    return {
      showDetails: false, // Controls the accordion visibility
      availabilityChecked: false,
      isAvailable: false,
      selectedDateRange: "",
      showModal: false,
    };
  },
  computed: {
    roomsStore() {
      return useRoomsStore();
    }
  },
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
          <!-- Preis und Aktions-Button -->
          <div class="button-section">
            <div>
              <span class="priceStyle">{{ pricePerNight }}€</span> /pro Nacht
            </div>
            <RoomActions
                :availabilityChecked="availabilityChecked"
                :isAvailable="isAvailable"
                @display-date-picker-modal="displayDatePickerModal"
                @reserve-room="reserveRoom"
            />
          </div>

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