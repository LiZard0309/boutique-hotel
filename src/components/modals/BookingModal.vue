<template>
  <b-modal v-model="internalVisible" title="Zimmer buchen" @hide="closeModal" hide-footer>
    <div v-if="currentStep === 'login'">
      <LoginForm @login="handleLogin" />
    </div>
    <div v-if="currentStep === 'booking'">
      <BookingForm @submit="handleBookingSubmit" />
    </div>
    <div v-if="currentStep === 'review'">
      <ReviewBooking :bookingData="bookingData" @confirm="confirmBooking" @close="closeModal"/>
    </div>
    <div class="text-right mt-4">
      <b-button variant="secondary" @click="closeModal">Abbrechen</b-button>
    </div>
  </b-modal>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import BookingForm from "@/components/BookingForm.vue";
import ReviewBooking from "@/components/ReviewBooking.vue";

export default {
  name: "BookingModal",
  components: {
    LoginForm,
    BookingForm,
    ReviewBooking,
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentStep: "login",
      bookingData: {},
      internalVisible: this.isVisible,
    };
  },
  watch: {
    isVisible(newVal) {
      this.internalVisible = newVal;
    },
    internalVisible(newVal) {
      this.$emit("update:isVisible", newVal);
    },
  },
  methods: {
    closeModal() {
      this.$emit("update:isVisible", false);
    },
    handleLogin(loginData) {
      console.log("Login erfolgreich:", loginData);
      this.currentStep = "booking";
    },
    handleBookingSubmit(data) {
      this.bookingData = data;
      this.currentStep = "review";
    },
    confirmBooking() {
      console.log("Buchung bestätigt:", this.bookingData);
      this.$emit("confirm");
      this.closeModal();
    },
  },
};
</script>
