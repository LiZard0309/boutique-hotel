<script>
import LoginForm from "@/components/LoginForm.vue";
import BookingForm from "@/components/BookingForm.vue";
import ReviewBooking from "@/components/ReviewBooking.vue";
export default {
  name: "BookingModal",
  components: {BookingForm, LoginForm, ReviewBooking},
  data() {
    return {
      nextPage:false,
      bookingData: {},
    };
  },
  methods: {
    closeModal() {
    },
    confirmBooking() {
    },
  }
}
</script>

<template>
    <b-modal  title="Buchungsdaten überprüfen" @ok="confirmBooking" ok-title="Buchung bestätigen" hide-footer>
      <LoginForm @login="confirmBooking" />
      <BookingForm @close="closeModal" @login="confirmBooking" />
      <ReviewBooking v-if="nextPage" :booking-data="bookingData" @close="closeModal" @confirm="confirmBooking" />
    </b-modal>
</template>

<style scoped>

</style>