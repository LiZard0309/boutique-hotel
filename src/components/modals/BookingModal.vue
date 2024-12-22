<template>
  <b-modal v-model="internalVisible" title="Zimmer buchen" @hide="closeModal" hide-footer>
    <div v-if="currentStep === 'booking' && useUserStore().user">
      <BookingFormLoggedIn @approve="handleBookingSubmit" @cancel="closeModal"/>
    </div>
    <div v-if="currentStep === 'booking' && !useUserStore().user">
      <BookingFormNotLoggedIn @approve="handleBookingSubmit" @cancel="closeModal"/>
    </div>
    <div v-if="currentStep === 'review'">
      <ReviewBooking
          @confirm="confirmBooking"
          @edit="editBooking"
          @close="closeModal"
      />
    </div>
  </b-modal>
</template>

<script>
import ReviewBooking from "@/components/ReviewBooking.vue";
import {useRoomsStore} from "@/stores/rooms";
import {useUserStore} from "../../stores/user";
import BookingFormLoggedIn from "../forms/BookingFormLoggedIn.vue";
import BookingFormNotLoggedIn from "../forms/BookingFormNotLoggedIn.vue";

export default {
  name: "BookingModal",
  components: {
    BookingFormNotLoggedIn,
    BookingFormLoggedIn,
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
      internalVisible: this.isVisible,
      currentStep: "booking",
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
    useUserStore,
    roomNumber() {
      return useRoomsStore().bookingData.roomID
    },
    closeModal() {
      this.$emit("update:isVisible", false);
    },
    handleBookingSubmit() {
      this.currentStep = "review";
    },
    editBooking() {
      this.currentStep = "booking";
    },
    async confirmBooking() {
      const bookingPayload = {
        firstname: useRoomsStore().bookingData.firstname,
        lastname: useRoomsStore().bookingData.lastname,
        email: useRoomsStore().bookingData.email,
        birthdate: useRoomsStore().bookingData.birthdate,
      };

      const response = await useRoomsStore().postBookingData(this.roomNumber(), bookingPayload);
      if (response) {
        this.$router.push({ path: '/bookingConfirmation' });
        //alert(`Buchung erfolgreich! Ihre Buchungs-ID ist ${useRoomsStore().bookingData.bookingId}`);
        this.closeModal();
      } else {
        if (window.confirm("Die Buchung ist leider fehlgeschlagen. Möglicherweise wurde das Zimmer in der Zwischenzeit bereits gebucht. Klicken Sie auf Ok, um zurück zur Zimmerübersicht zu kommen.")) {
          window.location.href = '/rooms';
        }
      }
    },
  },
};
</script>
