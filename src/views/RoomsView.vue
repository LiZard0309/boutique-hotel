<script>
import bedroomImage from "@/assets/Images/default_double_bedroom.jpg";
import RoomCard from "@/components/roomCard/RoomCard.vue";
import BookingModal from "@/components/modals/BookingModal.vue";
import {useRoomsStore} from "@/stores/rooms";
import {getRoomImage} from "@/components/roomCard/roomImages";

export default {
  name: "RoomsView",
  components: {RoomCard, BookingModal},
  data() {
    return {
      isBookingModalVisible: false,
      perPage: 5,
      currentPage: 1,
      isLoading: true,
    };
  },

  computed: {
    rooms() {
      return this.roomsStore.rooms;
    },
    paginatedRooms() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.rooms.slice(start, start + this.perPage);
    },
    roomsStore() {
      return useRoomsStore();
    },
    /*getRoomImage() {
      return (roomId) => ROOM_IMAGES[roomId] || bedroomImage; // Bild aus Mapping, sonst Fallback
    },*/
  },

  methods: {
    getRoomImage,
    openBookingModal(roomNumber) {
      this.isBookingModalVisible = true;
      this.modalRoomNumber = roomNumber;
    },
  },
  async mounted() {
    try {
      this.isLoading = true;
      await this.roomsStore.fetchRoomInfo();
    } catch (error) {
      console.error("Error fetching room info:", error);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<template>
  <div class="rooms-view-container col-12 col-lg-6 mx-auto">
    <div v-if="isLoading">Loading rooms...</div>
    <div v-else>
      <div v-for="(room) in paginatedRooms" :key="room.id">
        <RoomCard
            :room-id="room.id"
            :roomsName="room.roomsName || 'Unknown Room Name'"
            :pricePerNight="room.pricePerNight || null"
            :image="getRoomImage(room.id)"
            :beds="room.beds || null"
            :extras="room.extras || []"
            :buttons=true
            @openModal="openBookingModal(room.id)"
        />
      </div>

      <b-pagination
          v-model="currentPage"
          :total-rows="rooms.length"
          :per-page="perPage"
          align="center"
          class="mt-3"
      ></b-pagination>
    </div>

    <!-- BookingModal Komponente -->
    <BookingModal
        :isVisible="isBookingModalVisible"
        @update:isVisible="isBookingModalVisible = $event"
        @close="isBookingModalVisible = false"
    />
  </div>
</template>

<style scoped>
.rooms-view-container {
  padding: 0.5rem;
}
</style>
