<script>
import bedroomImage from "@/assets/bedroom.jpg";
import RoomCard from "@/components/RoomCard.vue";
import {computed} from "vue";

export default {
  name: "RoomsView",
  components: {RoomCard},
  data() {
    return {
      // Mock data to simulate what will later be fetched from a database
      rooms: [
        {id: 1, roomName: "Zimmer 1", pricePerNight: 100, image: bedroomImage, beds: 2, extras: Array(8).fill("image")},
        {id: 2, roomName: "Zimmer 2", pricePerNight: 120, image: bedroomImage, beds: 3, extras: Array(5).fill("image")},
        {id: 3, roomName: "Zimmer 3", pricePerNight: 110, image: bedroomImage, beds: 1, extras: Array(3).fill("image")},
        {id: 4, roomName: "Zimmer 4", pricePerNight: 90, image: bedroomImage, beds: 2, extras: Array(7).fill("image")},
        {id: 5, roomName: "Zimmer 5", pricePerNight: 105, image: bedroomImage, beds: 4, extras: Array(6).fill("image")},
        {id: 6, roomName: "Zimmer 6", pricePerNight: 105, image: bedroomImage, beds: 4, extras: Array(6).fill("image")},
        {id: 7, roomName: "Zimmer 7", pricePerNight: 105, image: bedroomImage, beds: 4, extras: Array(6).fill("image")},
        {id: 8, roomName: "Zimmer 8", pricePerNight: 105, image: bedroomImage, beds: 4, extras: Array(6).fill("image")},
        {id: 9, roomName: "Zimmer 9", pricePerNight: 105, image: bedroomImage, beds: 4, extras: Array(6).fill("image")},
        {id: 10, roomName: "Zimmer 10", pricePerNight: 105, image: bedroomImage, beds: 4, extras: Array(6).fill("image")},
        {id: 11, roomName: "Zimmer 11", pricePerNight: 105, image: bedroomImage, beds: 4, extras: Array(6).fill("image")},
        {id: 12, roomName: "Zimmer 12", pricePerNight: 105, image: bedroomImage, beds: 4, extras: Array(6).fill("image")},
      ],
      isModalOpen: false,
      selectedRoomId: null,
      perPage: 5,
      currentPage: 1,
    };
  },
  computed: {
    paginatedRooms() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.rooms.slice(start, end);
    },
  },
  methods: {
    openModal(roomId) {
      this.selectedRoomId = roomId;
      this.isModalOpen = true;
    },
    changePage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<template>
  <div class="rooms-view-container">
    <div v-for="(room, index) in paginatedRooms" :key="index">
      <RoomCard
          :id="room.id"
          :roomName="room.roomName"
          :pricePerNight="room.pricePerNight"
          :image="room.image"
          :beds="room.beds"
          :extras="room.extras"
          @check-availability="openModal"
      />
    </div>

    <!-- Pagination Controls -->
    <b-pagination
        v-model="currentPage"
        :total-rows="rooms.length"
        :per-page="perPage"
        aria-controls="room-cards"
        @change="changePage"
        align="center"
        class="mt-3"
    ></b-pagination>

    <!-- Placeholder for Modal Component -->
    <!-- ModalKomponente v-if="isModalOpen" :room-id="selectedRoomId" @close="isModalOpen = false" /-->
  </div>
</template>

<style scoped>
.rooms-view-container {
  padding: 0.5rem;
}

</style>