<script>
import bedroomImage from "@/assets/bedroom.jpg";
import RoomCard from "@/components/RoomCard.vue";

//Icons
//<i-MaterialSymbolsLightBedOutline color="red" width="128" height="128" />

export default {
  name: "RoomsView",
  components: {RoomCard},
  data() {
    return {
      // Mock data to simulate what will later be fetched from a database
      rooms: [
        {
          id: 1,
          roomName: "Komfort Doppelzimmer",
          pricePerNight: 100,
          image: bedroomImage,
          beds: 2,
          extras: [
            { bathroom: 1 },
            { minibar: 1 },
            { television: 1 },
            { aircondition: 1 },
            { wifi: 1 },
            { breakfast: 0 },
            { "handicapped accessible": 0 },
          ],
        },
        {
          id: 2,
          roomName: "Luxus Suite",
          pricePerNight: 200,
          image: bedroomImage,
          beds: 3,
          extras: [
            { bathroom: 1 },
            { minibar: 1 },
            { television: 1 },
            { livingroom: 1 },
            { aircondition: 1 },
            { wifi: 1 },
            { breakfast: 1 },
            { "handicapped accessible": 1 },
          ],
        },
        {
          id: 3,
          roomName: "Einzelzimmer Economy",
          pricePerNight: 80,
          image: bedroomImage,
          beds: 1,
          extras: [
            { bathroom: 1 },
            { minibar: 0 },
            { television: 1 },
            { aircondition: 0 },
            { wifi: 1 },
            { breakfast: 0 },
            { "handicapped accessible": 0 },
          ],
        },
        {
          id: 4,
          roomName: "Familienzimmer",
          pricePerNight: 150,
          image: bedroomImage,
          beds: 4,
          extras: [
            { bathroom: 1 },
            { minibar: 1 },
            { television: 1 },
            { livingroom: 1 },
            { aircondition: 0 },
            { wifi: 1 },
            { breakfast: 1 },
            { "handicapped accessible": 0 },
          ],
        },
        {
          id: 5,
          roomName: "Junior Suite",
          pricePerNight: 180,
          image: bedroomImage,
          beds: 2,
          extras: [
            { bathroom: 1 },
            { minibar: 1 },
            { television: 1 },
            { livingroom: 0 },
            { aircondition: 1 },
            { wifi: 1 },
            { breakfast: 1 },
            { "handicapped accessible": 1 },
          ],
        },
        {
          id: 6,
          roomName: "Budget Doppelzimmer",
          pricePerNight: 90,
          image: bedroomImage,
          beds: 2,
          extras: [
            { bathroom: 1 },
            { minibar: 0 },
            { television: 0 },
            { aircondition: 0 },
            { wifi: 1 },
            { breakfast: 1 },
            { "handicapped accessible": 0 },
          ],
        },
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
          :roomId="room.id"
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