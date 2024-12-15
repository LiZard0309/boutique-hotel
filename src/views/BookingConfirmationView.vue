<script setup>
import { ref } from "vue"
import ConfirmationNotification from "@/components/booking/ConfirmationNotification.vue";
import BookingDataOverview from "@/components/booking/BookingDataOverview.vue";
import RoomCard from "@/components/roomCard/RoomCard.vue";
import {useRoomsStore} from "@/stores/rooms";

const header = ref("Ihre Buchung war erfolgreich!");
const message = ref("Vielen Dank, hier ist Ihre Buchungsbestätigung");

const ROOM_IMAGES = useRoomsStore().roomImages
const roomStore = useRoomsStore().bookingData


</script>

<template>
  <div>
    <div class="confirmation-content">
      <ConfirmationNotification :header="header" :message="message" :is-successful=true />
    </div>
    <BookingDataOverview></BookingDataOverview>
    <div class="roomCard">
      <RoomCard
          :extras="roomStore.room.extras"
          :beds="roomStore.room.beds"
          :image="ROOM_IMAGES[roomStore.roomID]"
          :price-per-night="roomStore.room.pricePerNight"
          :rooms-name="roomStore.room.roomsName"
          :room-id="roomStore.roomID"
          :buttons=false>
      </RoomCard>
    </div>
  </div>

</template>

<style scoped>

.confirmation-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.roomCard {

}

</style>