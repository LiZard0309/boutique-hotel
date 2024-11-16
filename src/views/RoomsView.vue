<script>
import bedroomImage from "@/assets/bedroom.jpg";
import RoomCard from "@/components/RoomCard.vue";
import BookingModal from "@/components/modals/BookingModal.vue";
import { useRoomsStore } from "@/stores/rooms";

const ROOM_IMAGES = {
  1: '/src/assets/images/default_double_bedroom.jpg',
  2: '/src/assets/images/default_double_bedroom.jpg',
  3: '/src/assets/images/default_single_bedroom.jpg',
  4: '/src/assets/images/default_single_bedroom.jpg',
  5: '/src/assets/images/junior_suite.jpg',
  6: '/src/assets/images/royal_double_bedroom.jpg',
  7: '/src/assets/images/family_suite.jpg',
  8: '/src/assets/images/room_with_a_view.jpg',
  9: '/src/assets/images/room_with_a_view.jpg',
  10: '/src/assets/images/honeymoon_suite.jpg',
};

export default {
  name: "RoomsView",
  components: { RoomCard, BookingModal },
  data() {
    return {
      dates: {},
      modalRoomNumber: 0,
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
    getRoomImage() {
      return (roomId) => ROOM_IMAGES[roomId] || bedroomImage; // Bild aus Mapping, sonst Fallback
    },
  },
  methods: {
    openBookingModal(roomNumber) {
      this.isBookingModalVisible = true;
      this.modalRoomNumber = roomNumber;
    },
    setDates(dates) {
      this.dates = dates;
    },
    changePage(page) {
      this.currentPage = page;
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
  <div class="rooms-view-container">
    <div v-if="isLoading">Loading rooms...</div>
    <div v-else>
      <div v-for="(room, index) in paginatedRooms" :key="index">
        <RoomCard
            :room-id="room.id"
            :roomsName="room.roomsName || 'Unknown Room Name'"
            :pricePerNight="room.pricePerNight || null"
            :image="getRoomImage(room.id)"
            :beds="room.beds || null"
            :extras="room.extras || []"
            @datesSelected="setDates($event)"
            @openModal="openBookingModal(room.id)"
        />
      </div>

      <b-pagination
          v-model="currentPage"
          :total-rows="rooms.length"
          :per-page="perPage"
          aria-controls="room-cards"
          @change="changePage"
          align="center"
          class="mt-3"
      ></b-pagination>
    </div>

    <!-- BookingModal Komponente -->
    <BookingModal
        :dates="dates"
        :room-number="modalRoomNumber"
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
