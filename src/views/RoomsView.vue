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
          @openModal="openBookingModal(room.roomName)"
      />
    </div>

    <!-- BookingModal Komponente -->
    <BookingModal
        :room-name="modalRoomName"
        :isVisible="isBookingModalVisible"
        @update:isVisible="isBookingModalVisible = $event"
        @close="isBookingModalVisible = false"
    />
  </div>
</template>

<script>
import bedroomImage from "@/assets/bedroom.jpg";
import RoomCard from "@/components/RoomCard.vue";
import BookingModal from "@/components/modals/BookingModal.vue";

export default {
  name: "RoomsView",
  components: {
    RoomCard,
    BookingModal,
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
      modalRoomName: '',
      isBookingModalVisible: false,
    };
  },
  methods: {
    openBookingModal(roomName) {
      this.isBookingModalVisible = true;
      this.modalRoomName = roomName;
    },
  },
};
</script>
