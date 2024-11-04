<template>
  <div class="rooms-view-container">
    <!-- Zimmerliste -->
    <div v-for="(room, index) in rooms" :key="index">
      <RoomCard
          :roomName="room.roomName"
          :pricePerNight="room.pricePerNight"
          :image="room.image"
          :beds="room.beds"
          :extras="room.extras"
      />
    </div>

    <!-- Button zum Öffnen des Buchungsformulars -->
    <b-button variant="primary" class="mt-4" @click="openBookingModal">Zimmer buchen</b-button>
    <booking-modal v-if="isBookingModalVisible"></booking-modal>
  </div>
</template>

<script>
import bedroomImage from "@/assets/bedroom.jpg";
import RoomCard from "@/components/RoomCard.vue";
import LoginForm from "@/components/LoginForm.vue";
import BookingForm from "@/components/BookingForm.vue";
import ReviewBooking from "@/components/ReviewBooking.vue";
import BookingModal from "@/components/modals/BookingModal.vue";

export default {
  name: "RoomsView",
  components: {
    BookingModal,
    RoomCard,
    LoginForm,
    BookingForm,
    ReviewBooking,
  },
  data() {
    return {
      rooms: [
        { roomName: "Zimmer 1", pricePerNight: 100, image: bedroomImage, beds: 2, extras: Array(8).fill("image") },
        { roomName: "Zimmer 2", pricePerNight: 120, image: bedroomImage, beds: 3, extras: Array(5).fill("image") },
        { roomName: "Zimmer 3", pricePerNight: 110, image: bedroomImage, beds: 1, extras: Array(3).fill("image") },
        { roomName: "Zimmer 4", pricePerNight: 90, image: bedroomImage, beds: 2, extras: Array(7).fill("image") },
        { roomName: "Zimmer 5", pricePerNight: 105, image: bedroomImage, beds: 4, extras: Array(6).fill("image") },
      ],
      isBookingModalVisible: false,
      bookingData: {}, // Speichert die Buchungsdaten zur Überprüfung
    };
  },
  methods: {
    openBookingModal() {
      this.isBookingModalVisible = true;
    },
  },
};
</script>

<style scoped>
.rooms-view-container {
  padding: 0.5rem;
}
</style>