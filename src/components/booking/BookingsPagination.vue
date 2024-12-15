<script>
import {usePaginationStore} from "../../stores/usePaginationStore";
import {useUserStore} from "../../stores/user";

export default {
  name: "BookingsPagination",
  methods: {useUserStore},
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
      aria-controls="bookings-cards"
      align="center"
      class="mt-3"
  ></b-pagination>

</template>

<style scoped>

</style>