<script setup>
import { ref } from "vue"
import ConfirmationNotification from "@/components/booking/ConfirmationNotification.vue";

const header = ref("Ihre Buchung war erfolgreich!");
const message = ref("Vielen Dank, hier ist Ihre Buchungsbestätigung");

</script>

<template>
<h1> Booking Confirmation View</h1>
  <p>Hier kommen alle Komponenten für die Bestätigung</p>
  <ConfirmationNotification :header="header" :message="message" :is-successful=true />
</template>

<style scoped>

</style>