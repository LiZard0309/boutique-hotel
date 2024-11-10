<template>
  <b-modal v-model="internalVisible" title="Zimmer buchen" @hide="closeModal" hide-footer>
    <div v-if="currentStep === 'login'">
      <LoginForm @login="handleLogin" @cancel="closeModal"/>
    </div>
    <div v-if="currentStep === 'booking'">
      <BookingForm @approve="handleBookingSubmit" @cancel="closeModal"/>
    </div>
    <div v-if="currentStep === 'review'">
      <ReviewBooking :bookingData="bookingData"
                     @confirm="confirmBooking"
                     @edit="editBooking"
                     @close="closeModal"/>
    </div>
  </b-modal>
</template>

<script>
import apiClient from "@/api/axios";
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
    roomNumber: {
      type: Number,
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
      this.$emit("update:isVisible", false); // Schließt das Modal
    },
    handleLogin() {
      this.currentStep = "booking"; // Wechselt zur Buchungsansicht
    },
    handleBookingSubmit(data) {
      this.bookingData = data; // Speichert die Buchungsdaten
      this.currentStep = "review"; // Wechsel zu ReviewBooking
    },
    editBooking() {
      this.currentStep = "booking"; // Schaltet zurück zum Buchungsformular
    },
    confirmBooking() {
      const bookingPayload = {
        firstname: this.bookingData.firstname,
        lastname: this.bookingData.lastname,
        email: this.bookingData.email,
        birthdate: this.bookingData.birthdate,
      };

      apiClient
          .post(`/room/${this.roomNumber}/from/2025-01-17/to/2025-01-20`, bookingPayload,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
              })
          .then((response) => {
            console.log("Buchung erfolgreich:", response.data);
            alert(`Buchung erfolgreich! Ihre Buchungs-ID ist ${response.data.id}`);
            this.closeModal();
          })
          .catch((error) => {
            console.error("Fehler bei der Buchung:", error);
            alert("Fehler bei der Buchung.");
          });
    }
  },
};
</script>
