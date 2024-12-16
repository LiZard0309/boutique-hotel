<script setup>
import { ref } from "vue"
import ConfirmationNotification from "@/components/booking/ConfirmationNotification.vue";
import BookingDataOverview from "@/components/booking/BookingDataOverview.vue";
import RoomCard from "@/components/roomCard/RoomCard.vue";
import {useRoomsStore} from "@/stores/rooms";
import Directions from "@/components/staticHotelInfo/Directions.vue";
import PrintConfirmationButtons from "@/components/booking/PrintConfirmationButtons.vue";
import Contact from "@/components/staticHotelInfo/Contact.vue";

const header = ref("Ihre Buchung war erfolgreich!");
const message = ref("Vielen Dank, hier ist Ihre Buchungsbestätigung");

const ROOM_IMAGES = useRoomsStore().roomImages
const roomStore = useRoomsStore().bookingData


</script>
<template>
  <div class="booking-confirmation-page">
    <!-- Header Section -->
    <section class="header-section">
      <h1>Buchungsbestätigung</h1>
      <ConfirmationNotification :header="header" :message="message" :is-successful="true" />
    </section>

    <!-- Confirmation Content Section -->
    <section class="confirmation-content">
      <!-- Booking Data Overview -->
      <div class="overview-section">
        <BookingDataOverview />
      </div>

      <!-- Room Card -->
      <div class="room-card-section">
        <RoomCard
            :extras="roomStore.room.extras"
            :beds="roomStore.room.beds"
            :image="ROOM_IMAGES[roomStore.roomID]"
            :price-per-night="roomStore.room.pricePerNight"
            :rooms-name="roomStore.room.roomsName"
            :room-id="roomStore.roomID"
            :buttons="false"
        />
      </div>
    </section>

    <!-- Additional Info -->
    <section class="additional-info">
      <Directions />
      <Contact />
      <PrintConfirmationButtons />
    </section>
  </div>
</template>

<style scoped>

.booking-confirmation-page {
  font-family: Arial, sans-serif;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.5;
}


.header-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header-section h1 {
  font-size: 2rem;
  color: #2c3e50;
}

.header-section .confirmation-notification {
  max-width: 600px;
  margin: 0 auto;
}


.confirmation-content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  margin-bottom: 40px;
}

.overview-section {
  flex: 1 1 25%;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}


.room-card-section {
  flex: 1 1 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}


.additional-info {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}


@media (max-width: 768px) {
  .confirmation-content {
    flex-direction: column;
    gap: 20px;
  }

  .overview-section, .room-card-section {
    flex: 1 1 100%;
  }
}
</style>