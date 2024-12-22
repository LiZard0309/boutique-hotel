<script>
import BookingHistoryCard from "@/components/booking/BookingHistoryCard.vue";
import {useUserStore} from "@/stores/user";
import {usePaginationStore} from "@/stores/usePaginationStore";
import BookingsPagination from "@/components/booking/BookingsHistoryPagination.vue";

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

  watch: {
    "userStore.user"(newVal) {
      if (!newVal) {
        // User has logged out
        this.userStore.bookings = []; // Clear bookings locally
        this.$router.push("/");
      }
    },
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
  },
  async mounted() {
    try {
      this.isLoading = true;
      await this.userStore.fetchBookingHistory();
    } catch (error) {
      console.error("Error fetching booking history: ", error);
    } finally {
      this.isLoading = false;
    }
  }
}
</script>

<template>
  <h1>Buchungshistorie</h1>

  <div class="booking-history-container">

    <div v-if="isLoading">Lade Buchungen...</div>
    <div class="list-container">
      <div v-for="booking in paginatedBookings" :key="booking.booking.id">
        <BookingHistoryCard
            :booking="booking.booking"
            :room="booking.room"
            :isUpcoming="isUpcoming(booking.booking)"
        />
      </div>
    </div>
    <bookings-pagination :rows="bookings.length"></bookings-pagination>
  </div>
</template>

<style scoped>
.booking-history-container {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.list-container {
  margin: 0 auto;
  width: 100%;
}

@media (min-width: 768px) {
  /* Tablet and larger screens */
  /*.booking-history-container {
    width: 100%;
  }*/
  .list-container {
    margin: 0 auto;
    width: 80%;
  }
}
</style>