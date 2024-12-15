<script>
import {usePaginationStore} from "../stores/usePaginationStore";
import {useRoomsStore} from "../stores/rooms";

export default {
  name: "RoomPagination",
  methods: {useRoomsStore},
  props: {
    rows: Number
  },
  data: () => {
    return {
      currentPage: 1
    }
  },
  computed: {
    perPage() {
      return usePaginationStore().perPage
    },
  },
  watch: {
    currentPage(latest) {
      console.log("changing to: "+latest)
      usePaginationStore().setCurrentPage(latest);
    }
  }
}
</script>

<template>
  <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="room-cards"
      align="center"
      class="mt-3"
  ></b-pagination>
</template>

<style scoped>

</style>