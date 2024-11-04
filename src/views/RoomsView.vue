<script>
import bedroomImage from "@/assets/bedroom.jpg";
import RoomCard from "@/components/RoomCard.vue";
import LoginForm from "@/components/LoginForm.vue";
import BookingForm from "@/components/BookingForm.vue";
import ReviewBooking from "@/components/ReviewBooking.vue";

export default {
  name: "RoomsView",
  components: {
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
      isReviewModalVisible: false,
      bookingData: {}, // Speichert die Buchungsdaten zur Überprüfung
    };
  },
  methods: {
    openBookingModal() {
      this.isBookingModalVisible = true;
    },
    handleLogin(loginData) {
      console.log("Login-Daten:", loginData);
      // Implementiere hier die Login-Logik
    },
    handleBookingSubmit(bookingData) {
      // Speichert die Buchungsdaten und öffnet das Review-Modal
      this.bookingData = bookingData;
      this.isBookingModalVisible = false;
      this.isReviewModalVisible = true;
    },
    confirmBooking() {
      console.log("Buchung bestätigt:", this.bookingData);
      // Hier könnte die Buchungslogik implementiert werden
      this.isReviewModalVisible = false;
      alert("Buchung erfolgreich abgeschlossen!");
    },
  },
};
</script>

<template>
  <div class="rooms-view-container">
    <!-- Liste der Zimmer -->
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

    <!-- Modal für Login und Buchungsformular -->
    <b-modal v-model="isBookingModalVisible" title="Zimmer buchen" hide-footer>
      <!-- Login Form -->
      <div class="login-section mb-3">
        <h5>User-Login</h5>
        <LoginForm @login="handleLogin" />
        <p class="mt-3">Noch kein registrierter User? <a href="#">Hier registrieren!</a></p>
      </div>

      <hr />

      <!-- Booking Form -->
      <div class="booking-section mt-3">
        <h5>Zimmer buchen</h5>
        <BookingForm @submit="handleBookingSubmit" />
      </div>

      <!-- Abbrechen Button für das gesamte Modal -->
      <div class="text-right mt-4">
        <b-button variant="secondary" @click="isBookingModalVisible = false">Abbrechen</b-button>
      </div>
    </b-modal>

    <!-- Modal für die Buchungsüberprüfung -->
    <ReviewBooking
        :isModalVisible="isReviewModalVisible"
        :bookingData="bookingData"
        @confirm="confirmBooking"
        @close="isReviewModalVisible = false"
    />
  </div>
</template>

<style scoped>
.rooms-view-container {
  padding: 0.5rem;
}

.login-section, .booking-section {
  padding: 10px 0;
}
</style>
