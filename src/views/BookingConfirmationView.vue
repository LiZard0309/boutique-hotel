<script setup>
import { ref } from "vue"
import ConfirmationNotification from "@/components/booking/ConfirmationNotification.vue";
import BookingDataOverview from "@/components/booking/BookingDataOverview.vue";

const header = ref("Ihre Buchung war erfolgreich!");
const message = ref("Vielen Dank, hier ist Ihre Buchungsbestätigung");

</script>

<template>
  <div>
    <div class="confirmation-content">
      <ConfirmationNotification :header="header" :message="message" :is-successful=true />
    </div>
    <BookingDataOverview></BookingDataOverview>
  </div>

</template>

<style scoped>

.confirmation-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>