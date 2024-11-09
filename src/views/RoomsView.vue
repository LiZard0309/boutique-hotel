<script>
import bedroomImage from "@/assets/bedroom.jpg";
import RoomCard from "@/components/RoomCard.vue";

export default {
  name: "RoomsView",
  components: {RoomCard},
  data() {
    return {
      // Mock data to simulate what will later be fetched from a database
      rooms: [
        { roomId: 1, roomName: "Zimmer 1", pricePerNight: 100, image: bedroomImage, beds: 2, extras: Array(8).fill("image") },
        { roomId: 2, roomName: "Zimmer 2", pricePerNight: 120, image: bedroomImage, beds: 3, extras: Array(5).fill("image") },
        { roomId: 3, roomName: "Zimmer 3", pricePerNight: 110, image: bedroomImage, beds: 1, extras: Array(3).fill("image") },
        { roomId: 4, roomName: "Zimmer 4", pricePerNight: 90, image: bedroomImage, beds: 2, extras: Array(7).fill("image") },
        { roomId: 5, roomName: "Zimmer 5", pricePerNight: 105, image: bedroomImage, beds: 4, extras: Array(6).fill("image") },
      ],
    };
  },
};
</script>

<template>
  <div class="rooms-view-container">
    <div v-for="(room, index) in rooms" :key="index">
      <RoomCard
          :room-id="room.roomId"
          :roomName="room.roomName"
          :pricePerNight="room.pricePerNight"
          :image="room.image"
          :beds="room.beds"
          :extras="room.extras"
      />
    </div>
  </div>
</template>

<style scoped>
.rooms-view-container{
  padding: 0.5rem;
}

</style>