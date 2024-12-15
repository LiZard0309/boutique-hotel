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
    paginatedBookings() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.bookings.slice(start, start + this.perPage);
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
    <div v-else>
      <div v-for="booking in paginatedBookings" :key="booking.id">
        <BookingHistoryCard
            :data="booking"
            :class="{ bright: isUpcoming(booking), muted: isPast(booking) }"
        />
      </div>
    </div>



    <bookings-pagination :rows="bookings.length"></bookings-pagination>
  </div>
</template>

<style scoped>
.booking-history-container {
  padding: 0.5rem;
}
</style>