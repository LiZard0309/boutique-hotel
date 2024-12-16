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
    isUpdating: {type: Boolean, default: false},
  },
}
</script>

<template>
  <div :class="['booking-history-card', { upcoming: isUpcoming, past: !isUpcoming }]">
    <div class="booking-details">
      <h3>Buchung: {{ booking.id }}</h3>
      <p>Check-in: {{ booking.startDate }}</p>
      <p>Check-out: {{ booking.endDate }}</p>
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
.booking-history-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.booking-history-card.upcoming {
  background-color: #e6f7ff;
}
.booking-history-card.past {
  background-color: #f5f5f5;
}
</style>