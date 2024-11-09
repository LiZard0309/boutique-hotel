<template>
  <b-modal v-model="internalVisible" title="Zimmer buchen" @hide="closeModal" hide-footer>
    <div v-if="currentStep === 'login'">
      <LoginForm @login="handleLogin"/>
    </div>
    <div v-if="currentStep === 'booking'">
      <BookingForm @approve="handleBookingSubmit"/>
    </div>
    <div v-if="currentStep === 'review'">
      <ReviewBooking :room-name="roomName"
                     :bookingData="bookingData"
                     @confirm="confirmBooking"
                     @close="closeModal"/>
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
    roomName: {
      type: String,
      required: true,
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      internalVisible: this.isVisible,
      currentStep: "login",
      bookingData: {},
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
      this.currentStep = "booking";
    },
    handleBookingSubmit(data) {
      this.bookingData = data; // Store booking data for ReviewBooking
      this.currentStep = "review"; // Switch to ReviewBooking
    },
    confirmBooking() {
      // TODO send axios with bookingData and roomName

      this.$emit("confirm");
      this.closeModal();
    },
  },
};
</script>
