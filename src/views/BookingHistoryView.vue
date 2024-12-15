<script>
import BookingHistoryCard from "@/components/booking/BookingHistoryCard.vue";
import {useUserStore} from "@/stores/user";
import {usePaginationStore} from "../stores/usePaginationStore";
import BookingsPagination from "../components/booking/BookingsPagination.vue";
import RoomPagination from "../components/RoomPagination.vue";

export default {
  name: "BookingHistoryView",
  components: {RoomPagination, BookingHistoryCard, BookingsPagination},

  data() {
    return {
      perPage: usePaginationStore().perPage,
      isLoading: true,
    };
  },

  computed: {
    userStore() {
      return useUserStore();
    },
    bookings() {
      return this.userStore.bookings;
    },
    upcomingBookings() {
      const now = new Date();
      return this.bookings.filter(booking => new Date(booking.endDate) >= now);
    },
    pastBookings() {
      const now = new Date();
      return this.bookings.filter(booking => new Date(booking.endDate) < now);
    },
    currentPage() {
      return usePaginationStore().currentPage
    },
    paginatedBookings() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.bookings.slice(start, start + this.perPage);
    }
  },

  methods: {

  }
}
</script>

<template>
  <h1>Buchungshistorie</h1>

  <div class="booking-history-container">
    <div v-if="isLoading">Lade Buchungen...</div>
    <div v-else>
      <div v-for="(booking) in upcomingBookings" :key="booking.id">
        <BookingHistoryCard
            v-for="booking in upcomingBookings"
            :key="booking.id"
            :data="booking"
            class="bright"
        />
      </div>

      <div v-for="(booking) in pastBookings" :key="booking.id">
        <BookingHistoryCard
            v-for="booking in pastBookings"
            :key="booking.id"
            :data="booking"
            class="muted"
        />
      </div>
    </div>



    <room-pagination :rows="bookings.length"></room-pagination>
  </div>
</template>

<style scoped>
.booking-history-container {
  padding: 0.5rem;
}
</style>