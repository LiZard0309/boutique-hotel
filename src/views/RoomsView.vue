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
        { title: "Zimmer 1", price: "100", image: bedroomImage, beds: 2, icon: "" },
        { title: "Zimmer 2", price: "120", image: bedroomImage, beds: 3, icon: "" },
        { title: "Zimmer 3", price: "110", image: bedroomImage, beds: 1, icon: "" },
        { title: "Zimmer 4", price: "90", image: bedroomImage, beds: 2, icon: "" },
        { title: "Zimmer 5", price: "105", image: bedroomImage, beds: 4, icon: "" },
      ],
    };
  },
};
</script>

<template>
  <div>
    <div v-for="(room, index) in rooms" :key="index">
      <RoomCard
          :title="room.title"
          :price="room.price"
          :image="room.image"
          :beds="room.beds"
          :icon="room.icon"
      />
    </div>
  </div>
</template>

<style scoped>

</style>