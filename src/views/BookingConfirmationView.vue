<script setup>
import { ref } from "vue"
import ConfirmationNotification from "@/components/booking/ConfirmationNotification.vue";
import BookingDataOverview from "@/components/booking/BookingDataOverview.vue";
import RoomCard from "@/components/roomCard/RoomCard.vue";
import {useRoomsStore} from "@/stores/rooms";
import Directions from "@/components/staticHotelInfo/Directions.vue";
import PrintConfirmationButtons from "@/components/booking/PrintConfirmationButtons.vue";

const header = ref("Ihre Buchung war erfolgreich!");
const message = ref("Vielen Dank, hier ist Ihre Buchungsbestätigung");

const ROOM_IMAGES = useRoomsStore().roomImages
const roomStore = useRoomsStore().bookingData


</script>

<template>
  <h1>Buchungsbestätigung</h1>
  <div>
    <div class="confirmation-content">
      <ConfirmationNotification :header="header" :message="message" :is-successful=true />
      <BookingDataOverview></BookingDataOverview>
    </div>
    <RoomCard
        :extras="roomStore.room.extras"
        :beds="roomStore.room.beds"
        :image="ROOM_IMAGES[roomStore.roomID]"
        :price-per-night="roomStore.room.pricePerNight"
        :rooms-name="roomStore.room.roomsName"
        :room-id="roomStore.roomID"
        :buttons=false>
    </RoomCard>
    <Directions></Directions>
    <PrintConfirmationButtons></PrintConfirmationButtons>
  </div>

</template>

<style scoped>

.confirmation-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}



</style>