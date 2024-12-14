<script>
import BookingHistoryCard from "@/components/bookingHistory/BookingHistoryCard.vue";

export default {
  name: "BookingHistoryView",
  components: {BookingHistoryCard}
}
</script>

<template>
  <h1>Buchungshistorie</h1>
  <h2>Bevorstehende Buchungen</h2>
  <div class="booking-history-container">
    <div v-if="isLoading">Lade Buchungen...</div>
    <div v-else>
      <div v-for="(booking) in bookings" :key="booking.id">

      </div>
    </div>
  </div>
  <div class="booking-history-container">
  </div>

  <h2>Vergangene Buchungen</h2>
  <div class="booking-history-container">
    <div v-if="isLoading">Lade Buchungen...</div>
    <div v-else>
      <div v-for="(booking) in bookings" :key="booking.id">

      </div>
    </div>
  </div>
  <div class="booking-history-container">
  </div>
</template>

<style scoped>

</style>