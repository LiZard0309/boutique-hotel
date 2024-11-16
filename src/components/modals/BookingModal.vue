<template>
  <b-modal v-model="internalVisible" title="Zimmer buchen" @hide="closeModal" hide-footer>
    <div v-if="currentStep === 'booking'">
      <BookingForm @approve="handleBookingSubmit" @cancel="closeModal"/>
    </div>
    <div v-if="currentStep === 'review'">
      <ReviewBooking
          :bookingNumber="roomNumber"
          :bookingData="bookingData"
          @confirm="confirmBooking"
          @edit="editBooking"
          @close="closeModal"
      />
    </div>
  </b-modal>
</template>

<script>
import apiClient from "@/api/axios"; // API-Client für Anfragen
import BookingForm from "@/components/BookingForm.vue"; // Buchungsformular-Komponente
import ReviewBooking from "@/components/ReviewBooking.vue"; // Überprüfungs-Komponente

export default {
  name: "BookingModal",
  components: {
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
      currentStep: "booking", // Start direkt mit "booking"
      bookingData: {}, // Speichert die Buchungsdaten
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
    handleBookingSubmit(data) {
      this.bookingData = data; // Speichert die Buchungsdaten
      this.currentStep = "review"; // Wechselt zu ReviewBooking
    },
    editBooking() {
      this.currentStep = "booking"; // Zurück zum Buchungsformular
    },
    confirmBooking() {
      const bookingPayload = {
        firstname: this.bookingData.firstname,
        lastname: this.bookingData.lastname,
        email: this.bookingData.email,
        birthdate: this.bookingData.birthdate,
      };

      apiClient
          .post(
              `/room/${this.roomNumber}/from/2024-12-17/to/2024-12-20`,
              bookingPayload,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`, // Token wird aus dem lokalen Speicher abgerufen
                },
              }
          )
          .then((response) => {
            console.log(response);
            alert(`Buchung erfolgreich! Ihre Buchungs-ID ist ${response.data.id}`);
            this.closeModal();
          })
          .catch((error) => {
            console.error("Fehler bei der Buchung:", error);
            if (window.confirm("Die Buchung ist leider fehlgeschlagen. Möglicherweise wurde das Zimmer in der Zwischenzeit bereits gebucht. Klicken Sie auf Ok, um zurück zur Zimmerübersicht zu kommen."))
            {
              window.location.href='/rooms';
            };

          });
    },
  },
};
</script>
