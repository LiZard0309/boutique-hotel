<script>
import BookingHistoryCard from "@/components/booking/BookingHistoryCard.vue";
import {useUserStore} from "@/stores/user";
import {usePaginationStore} from "../stores/usePaginationStore";
import BookingsPagination from "../components/booking/BookingsPagination.vue";

export default {
  name: "BookingHistoryView",
  components: {BookingHistoryCard, BookingsPagination},

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
    currentPage() {
      return usePaginationStore().currentPage
    },
    upcomingBookings() {
      const now = new Date();
      return this.bookings.filter(booking => new Date(booking.booking.endDate) >= now);
    },
    pastBookings() {
      const now = new Date();
      return this.bookings.filter(booking => new Date(booking.booking.endDate) < now);
    },
    paginatedBookings() {
      const start = (this.currentPage - 1) * this.perPage;
      const sortedBookings = [...this.upcomingBookings, ...this.pastBookings];
      return sortedBookings.slice(start, start + this.perPage);
    }
  },

  methods: {
    isUpcoming(booking) {
      const now = new Date();
      return new Date(booking.endDate) >= now;
    },
    isPast(booking) {
      const now = new Date();
      return new Date(booking.endDate) < now;
    },
  }
}
</script>

<template>
  <h1>Buchungshistorie</h1>

  <div class="booking-history-container">

    <div v-if="isLoading">Lade Buchungen...</div>
    <div v-for="booking in paginatedBookings" :key="booking.booking.id">
      <BookingHistoryCard
          :booking="booking.booking"
          :room="booking.room"
          :isUpcoming="new Date(booking.booking.endDate) >= new Date()"
      />
    </div>

    <bookings-pagination :rows="bookings.length"></bookings-pagination>
  </div>
</template>

<style scoped>
.booking-history-container {
  padding: 0.5rem;
}

.bright {
  background-color: #f9f9f9;
  color: #333;
}

.muted {
  background-color: #e0e0e0;
  color: #666;
}
</style>