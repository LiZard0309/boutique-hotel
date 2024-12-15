<script>
import bedroomImage from "@/assets/Images/default_double_bedroom.jpg";
import RoomCard from "@/components/roomCard/RoomCard.vue";
import BookingModal from "@/components/modals/BookingModal.vue";
import {useRoomsStore} from "@/stores/rooms";
import RoomPagination from "../components/RoomPagination.vue";
import {usePaginationStore} from "../stores/usePaginationStore";

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
  components: {RoomPagination, RoomCard, BookingModal},
  data() {
    return {
      modalRoomNumber: 0,
      isBookingModalVisible: false,
      perPage: usePaginationStore().perPage,
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
    currentPage() {
      return usePaginationStore().currentPage
    }
  },

  methods: {
    openBookingModal(roomNumber) {
      this.isBookingModalVisible = true;
      this.modalRoomNumber = roomNumber;
    },
    changePage(page) {
      console.log(page)
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

      <div v-for="(room) in paginatedRooms" :key="room.id">
        <RoomCard
            :room-id="room.id"
            :roomsName="room.roomsName || 'Unknown Room Name'"
            :pricePerNight="room.pricePerNight || null"
            :image="getRoomImage(room.id)"
            :beds="room.beds || null"
            :extras="room.extras || []"
            @openModal="openBookingModal(room.id)"
        />
      </div>
      <room-pagination :rows="rooms.length"></room-pagination>

    </div>

    <!-- BookingModal Komponente -->
    <BookingModal
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
