<script>
import {BCard} from "bootstrap-vue-3";
//import BookingDataOverview from "@/BookingDataOverview.vue";
import RoomCard from "@/components/roomCard/RoomCard.vue"
import {getRoomImage} from "../roomCard/roomImages";

export default {
  name: "BookingHistoryCard",
  methods: {getRoomImage},
  components: {
    BCard,
    //BookingDataOverview,
    RoomCard,
  },
  props: {
    booking: {type: Object, required: true},
    room: {type: Object, required: true},
    isUpcoming: {type: Boolean, required: true},
  },
}
</script>

<template>
  <div :class="['booking-history-card', { upcoming: isUpcoming, past: !isUpcoming }]">
    <div class="booking-details">
      <h2>Buchungsnummer: {{ booking.id }}</h2>
      <p v-if="!isUpcoming" class="past-booking-indication">Diese Buchung liegt in der Vergangenheit!</p>
      <div class="booking-date">
        <p>Check-in: {{ booking.startDate }}</p>
        <p>Check-out: {{ booking.endDate }}</p>
      </div>
    </div>
    <RoomCard
        :roomId="room.id"
        :roomsName="room.roomsName"
        :pricePerNight="room.pricePerNight"
        :image="getRoomImage(room.id)"
        :beds="room.beds"
        :extras="room.extras"
    />
  </div>
</template>

<style scoped>
p {
  font-size: medium;
  padding: 0;
  margin: 0;
}

.booking-details h2 {
  font-size: 1.25rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .booking-details h3 {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .booking-details h3 {
    font-size: 0.875rem;
  }
}

.booking-history-card {
  position: relative;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.booking-history-card.upcoming {
  background-color: #D7EAE3;
}

.booking-history-card.past {
  background-color: #EBEBEB;
  color: #000000;
  overflow: hidden;
}

.booking-history-card.past::before {
  content: ''; /* Necessary for the pseudo-element to render */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 1;
}

.booking-details {
  position: relative;
  z-index: 2;
}

.booking-history-card.past * {
  z-index: auto;
}

.booking-history-card.past h2 {
  color: #696969;
}

.booking-date {
  margin-top: 16px;
  margin-bottom: 16px;
}

.past-booking-indication {
  color: #e80000;
  font-weight: bold;
}
</style>