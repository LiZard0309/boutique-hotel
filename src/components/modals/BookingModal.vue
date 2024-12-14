<template>
  <b-modal v-model="internalVisible" title="Zimmer buchen" @hide="closeModal" hide-footer>
    <div v-if="currentStep === 'booking'">
      <BookingForm @approve="handleBookingSubmit" @cancel="closeModal"/>
    </div>
    <div v-if="currentStep === 'review'">
      <ReviewBooking
          :bookingNumber="roomID"
          @confirm="confirmBooking"
          @edit="editBooking"
          @close="closeModal"
      />
    </div>
  </b-modal>
</template>

<script>
import BookingForm from "@/components/forms/BookingForm.vue"; // Buchungsformular-Komponente
import ReviewBooking from "@/components/ReviewBooking.vue";
import {useRoomsStore} from "@/stores/rooms";

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
  computed: {
    roomID() {
      return useRoomsStore().roomID
    }
  },
  methods: {
    closeModal() {
      this.$emit("update:isVisible", false); // Schließt das Modal
    },
    handleBookingSubmit() {
      this.currentStep = "review"; // Wechselt zu ReviewBooking
    },
    editBooking() {
      this.currentStep = "booking"; // Zurück zum Buchungsformular
    },
    async confirmBooking() {
      const bookingPayload = {
        firstname: useRoomsStore().bookingData.firstname,
        lastname: useRoomsStore().bookingData.lastname,
        email: useRoomsStore().bookingData.email,
        birthdate: useRoomsStore().bookingData.birthdate,
      };

      const response = await useRoomsStore().postBookingData(this.roomNumber, bookingPayload);
      if (response) {
        alert(`Buchung erfolgreich! Ihre Buchungs-ID ist ${useRoomsStore().bookingData.bookingId}`);
        this.closeModal();
      } else {
        if (window.confirm("Die Buchung ist leider fehlgeschlagen. Möglicherweise wurde das Zimmer in der Zwischenzeit bereits gebucht. Klicken Sie auf Ok, um zurück zur Zimmerübersicht zu kommen.")) {
          window.location.href = '/rooms';
        };
      }
    },
  },
};
</script>
