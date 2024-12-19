<script>
import bedroomImage from "@/assets/Images/default_double_bedroom.jpg";
import RoomCard from "@/components/roomCard/RoomCard.vue";
import BookingModal from "@/components/modals/BookingModal.vue";
import {useRoomsStore} from "@/stores/rooms";
import {getRoomImage} from "@/components/roomCard/roomImages";
import RoomPagination from "../components/RoomPagination.vue";
import {usePaginationStore} from "../stores/usePaginationStore";


export default {
  name: "RoomsView",
  components: {RoomPagination, RoomCard, BookingModal},
  data() {
    return {
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
    /*getRoomImage() {
      return (roomId) => ROOM_IMAGES[roomId] || bedroomImage; // Bild aus Mapping, sonst Fallback
    },*/
    currentPage() {
      return usePaginationStore().currentPage
    }
  },

  methods: {
    getRoomImage,
    openBookingModal(roomNumber) {
      this.isBookingModalVisible = true;
      this.modalRoomNumber = roomNumber;
    },
    //brauchen wir die Methode noch?
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
      <room-pagination :rows="rooms.length"></room-pagination>

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
